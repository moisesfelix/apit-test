const accountsAvailable = [
  {
    scopes: "ROLE_ADMIN",
    name: "SESRJ",
    id: "fd9bbc0f-6758-4fef-813e-a408c3e065da",
  },
  {
    scopes: "ROLE_ADMIN",
    name: "Viva Rio HO",
    id: "ec837049-b5c4-4651-bfad-538441799922",
  },
  {
    scopes: "ROLE_ADMIN",
    name: "FMS Niterói",
    id: "3b5be590-ed53-4e46-bbf1-f964fff47493",
  },
  {
    scopes: "ROLE_ADMIN",
    name: "FSERJ",
    id: "6701d952-70f7-4288-9407-9a10be4e7428",
  },
  {
    scopes: "ROLE_ADMIN",
    name: "SEMUS",
    id: "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
  },
];

const startDate = "2023-10-01";
const endDate = "2023-10-31";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMGQiLCJpYXQiOjE2OTk5MDgzNzIxNzQsImlkIjoiODU0NWI3ZGUtMDMwYS00M2JkLTg0ZWEtNWMxMjEzZTU0MDVjIiwiZW1haWwiOiJtb2lzZXMudmFuaWxsYS5qc0BnbWFpbC5jb20iLCJzY29wZSI6IlJPTEVfQURNSU4iLCJyZCI6IjkwOTljMDI4NDVmYzI2NmUxYjNhM2ViMDcwOTZjOWE0IiwiYWNjb3VudF9pZCI6IjFkM2YwZjdlLWE2ZWUtNGNiYS04N2ViLTdhMjliMWZjNDBjYyJ9.EOfoqodSbo6neswb-iiHFqfHJG4U0ija62nOCOrYtiI"; // Substitua pelo seu token de autenticação // Substitua pelo seu token de autenticação
// Objeto para armazenar os itinerários agrupados por account_id
const itinerariesByAccount = {};

// Função para formatar a data no formato YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Função para realizar a requisição e armazenar os itinerários
const fetchItineraries = (account, date) => {
  const formattedDate = formatDate(date);
  const url = `https://staging-api.siglog.com.br/itineraries?date=${formattedDate}&account_id=${account.id}`;

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error fetching data for account ${account.id} on ${formattedDate}: ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      if (!itinerariesByAccount[account.id]) {
        itinerariesByAccount[account.id] = {
          account_id: account.id,
          totalVehicles: new Set(),
          totalDrivers: new Set(),
        };
      }

      data.forEach((itinerary) => {
        itinerariesByAccount[account.id].totalVehicles.add(
          itinerary.vehiclePlate
        );
        itinerariesByAccount[account.id].totalDrivers.add(
          itinerary.driverFirstName
        );
      });

      const itineraryForDate = {
        date: formattedDate,
        itineraries: data,
      };

      if (!itinerariesByAccount[account.id].dates) {
        itinerariesByAccount[account.id].dates = [];
      }

      itinerariesByAccount[account.id].dates.push(itineraryForDate);
    })
    .catch((error) => console.error(error));
};

// Função para gerar um array de datas no intervalo
const getDatesInRange = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dates = [];

  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }

  return dates;
};

// Loop para percorrer cada conta e cada data no intervalo
const fetchPromises = accountsAvailable.map((account) => {
  const datesInRange = getDatesInRange(startDate, endDate);
  return Promise.all(
    datesInRange.map((date) => fetchItineraries(account, date))
  );
});

// Aguarda todas as solicitações serem concluídas
Promise.all(fetchPromises.flat()).then(() => {
  // Exibir relatório para cada conta
  Object.values(itinerariesByAccount).forEach((accountData) => {
    console.log(`Account ID: ${findNameById(accountData.account_id)}`);
    console.log(`Total de veículos: ${accountData.totalVehicles.size}`);
    console.log(`Total de motoristas: ${accountData.totalDrivers.size}`);
    console.log("---");
  });
});

const findNameById = (id) => {
  const account = accountsAvailable.find((account) => account.id === id);
  return account ? account.name : null;
};
