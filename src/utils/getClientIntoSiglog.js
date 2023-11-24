const axios = require("axios");
const fs = require("fs/promises");

const apiUrl = "https://sesrj.siglog.com.br/api/person";
const outputFile = "output.json";
const authToken =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtb2lzZXMuZmVsaXgiLCJhdXRoIjoiQUNDRVNTX1JFUE9SVFMsQUNDRVNTX1VTRVJTLEVESVRfRklOQU5DSUFMLEVESVRfSVRJTkVSQVJZLEVESVRfT0ZGSUNFSE9VUlMsRURJVF9ST1VURV9SRVZJRVcsUk9MRV9BRE1JTixST0xFX0RSSVZFUixST0xFX1VTRVIiLCJleHAiOjE3MDI1NzQ1NTd9.YoLel-X7KxKXi6afQQaG7RF-ZYh2oFtxzZBIfkZGhgYb8r9JTiyOf0KXwGkNEY9NquxpWzf3R7jrHX9_FhcjnA"; // Substitua pelo seu token de autenticação

async function fetchData(pageNumber) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        cacheBuster: Date.now(),
        page: pageNumber,
        size: 20,
        sort: "id,asc",
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data for page ${pageNumber}: ${error.message}`
    );
    return null;
  }
}

async function fetchAndSaveData() {
  const allData = [];

  for (let page = 1; page <= 100; page++) {
    const data = await fetchData(page);

    if (data && data.content && Array.isArray(data.content)) {
      allData.push(...data.content);
    } else {
      console.log(`Skipping page ${page}. Data or content not available.`);
    }
  }

  try {
    await fs.writeFile(outputFile, JSON.stringify(allData, null, 2));
    console.log(`Data successfully written to ${outputFile}`);
  } catch (error) {
    console.error(`Error writing data to file: ${error.message}`);
  }
}

fetchAndSaveData();
