const express = require('express');
const app = express();
const format = require('date-fns/format');
const cors = require('cors');
const { default: axios } = require('axios');
const corsOptions = {
  origin: true
}
app.use(cors(corsOptions))
// Configurar os cabeçalhos CORS

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Substitua pela origem do seu aplicativo cliente
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos HTTP permitidos
//   res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type'); // Cabeçalhos personalizados permitidos
//   res.setHeader('Access-Control-Allow-Credentials', 'true'); // Permitir enviar cookies e credenciais
//   next();
// });
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Middleware para verificar o token de autenticação
const authenticateToken = (req, res, next) => {
  // Verifique o token de autenticação aqui
  const token = req.headers.authorization;
  if (token) {
    req.accessToken = token
    // Token válido, continue para a próxima rota
    next();
  } else {
    // Token inválido, retorne um erro de autenticação
    res.status(401).json({ error: 'Unauthorized' });
  }
};



// Defina as rotas da sua API
app.get('/auth/me', (req, res) => {
  const userData = {
    id: 1,
    role: 'admin',
    password: 'admin',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'admin@materio.com',
    lang_key: "string",
    avatar_uri: "string",
    scope: "string",
  };
  res.json({
    userData,
    accessToken: req.accessToken,
    account: 1
  });
});

app.get('/dashboard', (req, res) => {
  const date = new Date();
  const vehiclesData = [
    { id: 1, make: 'Toyota', model: 'Corolla' },
    { id: 2, make: 'Honda', model: 'Civic' },
  ];
  const dashboardData = { data: vehiclesData };
  res.json(dashboardData);
});

app.get('/accounts', (req, res) => {
  const accountsData = [
    {
      "scopes": "ADMIN",
      "name": "SESRJ",
      "id": "fd9bbc0f-6758-4fef-813e-a408c3e065da"
    },
    {
      "scopes": "ADMIN",
      "name": "Viva Rio HO",
      "id": "ec837049-b5c4-4651-bfad-538441799922"
    }
  ];
  res.json({ accounts: accountsData });
});

app.post('/accounts/use', (req, res) => {
  const userData = {
    id: 1,
    role: 'admin',
    password: 'admin',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'admin@materio.com',
    lang_key: "string",
    avatar_uri: "string",
    scope: "string",
  };
  res.json({
    userData,
    accessToken: req.accessToken,
    account: 1
  });
});

app.post('/auth/jwt/login/', (req, res) => {
  const { username, password } = req.body;
  // Lógica de autenticação
  // Verifique o username e password e retorne o token de autenticação
  const token = 'TOKEN_DE_AUTENTICACAO';
  res.json({
    "userData": {
      "id": "8545b7de-030a-43bd-84ea-5c1213e5405c",
      "role": "admin",
      "fullName": "Moises Felix",
      "username": "Moises",
      "email": "moises.vanilla.js@gmail.com",
      "lang_key": "pt-br",
      "avatar_uri": "",
      "scope": ""
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMGQiLCJpYXQiOjE2OTEwODM5NzExNzEsImlkIjoiODU0NWI3ZGUtMDMwYS00M2JkLTg0ZWEtNWMxMjEzZTU0MDVjIiwiZW1haWwiOiJtb2lzZXMudmFuaWxsYS5qc0BnbWFpbC5jb20iLCJzY29wZSI6IlJPTEVfVVNFUiIsInJkIjoiN2U2YjFkZjVjZmNjNTgzZDdlZDhhZjJiYWJmYzM4MWUifQ.5nJNeI4FAGEeZ11vJZsTEY8sCd--RgjuYT-hWNFJfRU"
  });
});

app.get('/users', (req, res) => {
  const usersData = {
    "users": [
      {
        "id": 1,
        "role": "Admin",
        "fullName": "João Silva",
        "email": "joao@example.com",
        "status": "Active",
        "avatar": "https://www.istockphoto.com/br/vetor/legal-homem-africano-corte-de-cabelo-afro-gm971997908-264660577",
        "company": "Empresa ABC",
        "country": "Brasil",
        "contact": "+55 123456789",
        "first_name": "João",
        "last_name": "Silva",
        "username": "joaosilva",
        "currentPlan": "Premium",
        "avatarColor": "Blue"
      },
      {
        "id": 2,
        "role": "User",
        "fullName": "Maria Santos",
        "email": "maria@example.com",
        "status": "Active",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpzMCoa7wLsHmOsCERxwa5P_4AUsRUVd4fGUZj6TB46A&s",
        "company": "Empresa XYZ",
        "country": "Brasil",
        "contact": "+55 987654321",
        "first_name": "Maria",
        "last_name": "Santos",
        "username": "mariasantos",
        "currentPlan": "Basic",
        "avatarColor": "Red"
      }
    ],
    "invites": [
      {
        "id": 14,
        "role": "User",
        "email": "convite1@example.com",
        "status": "Pending"
      },
      {
        "id": 24,
        "role": "User",
        "email": "convite2@example.com",
        "status": "Pending"
      }
    ]
  }

  res.json(usersData);
});

app.get('/users/:id', (req, res) => {
  // //console.log({
  //   req
  // })
  const { id } = req.params;
  const user = {
    "id": 1,
    "role": "Admin",
    "fullName": "João Silva",
    "email": "joao@example.com",
    "status": "Active",
    "avatar": "https://www.istockphoto.com/br/vetor/legal-homem-africano-corte-de-cabelo-afro-gm971997908-264660577",
    "company": "Empresa ABC",
    "country": "Brasil",
    "contact": "+55 123456789",
    "first_name": "João",
    "last_name": "Silva",
    "username": "joaosilva",
    "currentPlan": "Premium",
    "avatarColor": "Blue"
  };
  res.json(user);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  // Lógica para criar um novo usuário
  const newUser = { id: 3, name, email };
  res.json(newUser);
});

app.post('/users/invite', (req, res) => {
  const { email } = req.body;
  // Lógica para convidar um usuário
  const invite = { id: 'invite-id', email, status: 'pending' };
  res.json(invite);
});

app.post('/users/invite/accept', (req, res) => {
  const { id } = req.body;
  // Lógica para aceitar um convite de usuário
  const acceptedInvite = { id, status: 'accepted' };
  res.json(acceptedInvite);
});

app.post('/users/invite/resend', (req, res) => {
  const { id } = req.body;
  // Lógica para reenviar um convite de usuário
  const inviteResent = { id, status: 'resent' };
  res.json(inviteResent);
});

app.get('/users/invite/:inviteId', (req, res) => {
  const { inviteId } = req.params;
  // Lógica para obter informações sobre o convite de usuário
  const userInvite = { id: inviteId, email: 'user@example.com', status: 'pending' };
  res.json({ invite: userInvite });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para remover um usuário
  const success = true;
  res.json(success);
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  // Lógica para obter informações sobre uma tarefa
  const task = {
    id: "string",
    type: "string",
    status: "string",
    itinerary_id: "string",
    discriminator: "string",
    notes: "string",
    address: {
      postal_code: "string",
      line1: "string",
      line2: "string",
      latitude: "string",
      longitude: "string",
      district: "string",
      city: "string",
      state: "string",
      country: "string",
      number: "string",
    },
    person: {
      name: "string",
      id: "string",
      photo_url: "string",
      phone: "string",
      email: "string",
    },
    invoices: []
  }
  res.json({ task });
});

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  // Lógica para registrar um novo usuário
  const registeredUser = { id: 4, name, email };
  res.json(registeredUser);
});

app.post('/register/complete', (req, res) => {
  const { otp } = req.body;
  // Lógica para completar o registro do usuário com o código OTP
  const completeResponse = { success: true };
  res.json(completeResponse);
});

app.post('/register/reset-password-link', (req, res) => {
  const { email } = req.body;
  // Lógica para enviar um link de redefinição de senha para o email
  const resetLinkSent = { success: true };
  res.json(resetLinkSent);
});

app.post('/register/reset-password', (req, res) => {
  const { password, id } = req.body;
  // Lógica para redefinir a senha do usuário
  const passwordReset = { success: true };
  res.json(passwordReset);
});

app.post('/upload', (req, res) => {
  // Lógica para lidar com o upload de arquivos
  // Dados fictícios para fins de exemplo
  const files = req.files;
  const fileUrls = files.map(file => `https://example.com/uploads/${file.filename}`);
  res.json({ urls: fileUrls });
});
const fakeData = [
  { id: 1, name: 'John', avatar: '/images/avatars/5.png' },
  { id: 2, name: 'Jane', avatar: '/images/avatars/5.png' },
  { id: 3, name: 'Alice', avatar: '/images/avatars/5.png' },
];

// Rota que retorna a lista de dados falsos
app.get('/api/drivers', (req, res) => {
  res.json(fakeData);
});


app.get('/api/orders', (req, res) => {
  const fakeOrders = generateFakeOrders(); // Chame a função que gera as orders fakes
  res.json(fakeOrders); // Retorna as orders fakes como JSON
});

async function getOrdersItemsByOrderId(orderId, token) {
  try {
    const url = `https://api.siglog.com.br/orders/${orderId}`
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const orderItems = response.data.data
    return orderItems
  } catch (error) {
    //console.log(error)
  }
}

async function getOfficeHours(date, accounts, token) {
  try {
    let accountsM
    if (typeof accounts === 'string') {
      accountsM = [accounts]
    } else {
      accountsM = accounts
    }
    const prepareAccountsQueryString = accountsM.join('&accounts=')

    const url = `https://api.siglog.com.br/officehours/?date=${date}&accounts=${prepareAccountsQueryString}`
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const orderItems = response.data.data
    return orderItems
  } catch (error) {
    //console.log(error)
  }
}
async function getOrders(date, accounts, token) {
  try {
    let accountsM
    if (typeof accounts === 'string') {
      accountsM = [accounts]
    } else {
      accountsM = accounts
    }
    const prepareAccountsQueryString = accountsM.join('&accounts=')

    const url = `https://api.siglog.com.br/orders/?date=${date}&accounts=${prepareAccountsQueryString}`
    const response = await axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const orderItems = response.data.data
    return orderItems
  } catch (error) {
    //console.log(error)
  }
}

app.get('/orders2/:orderId', async (req, res) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMGQiLCJpYXQiOjE2OTIzMDUxMDI3MjQsImlkIjoiODU0NWI3ZGUtMDMwYS00M2JkLTg0ZWEtNWMxMjEzZTU0MDVjIiwiZW1haWwiOiJtb2lzZXMudmFuaWxsYS5qc0BnbWFpbC5jb20iLCJzY29wZSI6IkFETUlOIiwicmQiOiI4NGYzYTNjNmQzNDQ5OTIzNmQ2ODIwODFlYjBiYTc0YiIsImFjY291bnRfaWQiOiJmZDliYmMwZi02NzU4LTRmZWYtODEzZS1hNDA4YzNlMDY1ZGEifQ.INMM8NB4XVq1mt2nLccDw10lplmESVMJn3Jzmz8Q8Lc"
    const { orderId } = req.params
    const items = await getOrdersItemsByOrderId(orderId, token);
    //console.log('request')
    res.json(items);
  } catch (error) {
    res.status(500).send(error)
  }
});

app.get('/officehours/', async (req, res) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMGQiLCJpYXQiOjE2OTIzMDUxMDI3MjQsImlkIjoiODU0NWI3ZGUtMDMwYS00M2JkLTg0ZWEtNWMxMjEzZTU0MDVjIiwiZW1haWwiOiJtb2lzZXMudmFuaWxsYS5qc0BnbWFpbC5jb20iLCJzY29wZSI6IkFETUlOIiwicmQiOiI4NGYzYTNjNmQzNDQ5OTIzNmQ2ODIwODFlYjBiYTc0YiIsImFjY291bnRfaWQiOiJmZDliYmMwZi02NzU4LTRmZWYtODEzZS1hNDA4YzNlMDY1ZGEifQ.INMM8NB4XVq1mt2nLccDw10lplmESVMJn3Jzmz8Q8Lc"
    const { date, accounts } = req.query
    //console.log({ accounts })
    const items = await getOfficeHours(date, accounts, token);
    //console.log('request', items)
    res.json(items);
  } catch (error) {
    res.status(500).send(error)
  }
});
const accountsAvailable = [
  {
    scopes: 'ADMIN',
    name: 'SESRJ',
    id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da'
  },
  {
    scopes: 'ADMIN',
    name: 'Viva Rio HO',
    id: 'ec837049-b5c4-4651-bfad-538441799922'
  },
  {
    scopes: 'ADMIN',
    name: 'SMSJG',
    id: 'a4b2de70-06cd-439c-9fb5-1971bd0d1e84'
  },
  {
    scopes: 'ADMIN',
    name: 'OS CEP 28',
    id: '35bf0171-0e75-46e3-9b10-3b1c976c45e4'
  },
  {
    scopes: 'ADMIN',
    name: 'PVAX',
    id: '47ec3714-0f54-49af-a7a1-4d38b0000dc1'
  },
  {
    scopes: 'ADMIN',
    name: 'SESRJ',
    id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da'
  },
  {
    scopes: 'ADMIN',
    name: 'FMS Niterói',
    id: '3b5be590-ed53-4e46-bbf1-f964fff47493'
  },
  {
    scopes: 'ADMIN',
    name: 'FSERJ',
    id: '6701d952-70f7-4288-9407-9a10be4e7428'
  },
  {
    scopes: 'ADMIN',
    name: 'SEMUS',
    id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc'
  }
]
app.get('/orders3/', async (req, res) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMGQiLCJpYXQiOjE2OTIzMDUxMDI3MjQsImlkIjoiODU0NWI3ZGUtMDMwYS00M2JkLTg0ZWEtNWMxMjEzZTU0MDVjIiwiZW1haWwiOiJtb2lzZXMudmFuaWxsYS5qc0BnbWFpbC5jb20iLCJzY29wZSI6IkFETUlOIiwicmQiOiI4NGYzYTNjNmQzNDQ5OTIzNmQ2ODIwODFlYjBiYTc0YiIsImFjY291bnRfaWQiOiJmZDliYmMwZi02NzU4LTRmZWYtODEzZS1hNDA4YzNlMDY1ZGEifQ.INMM8NB4XVq1mt2nLccDw10lplmESVMJn3Jzmz8Q8Lc"
    const { date, accounts } = req.query
    const items = await getOrders(date, accounts, token);
    console.log("___________________________________________________________________________________________________")
    console.log("Data:", date)
    console.log("Projeto:", accountsAvailable.filter(account => accounts.includes(account.id)))
    console.log("Todas:", items.length)
    console.log("Emergencial:", items.filter(({ delivery_type }) => delivery_type?.toLocaleLowerCase().includes('emergencial')).length)
    console.log("Entrega:", items.filter(({ delivery_type }) => (delivery_type?.toLocaleLowerCase().includes('entrega'))).length)
    console.log("Emergencial e Entrega:", items.filter(({ delivery_type }) => (delivery_type?.toLocaleLowerCase().includes('emergencial') || delivery_type?.toLocaleLowerCase().includes('entrega'))).length)
    console.log("Grade:", items.filter(({ delivery_type }) => (delivery_type?.toLocaleLowerCase().includes('grade'))).length)
    console.log("Retirada:", items.filter(({ delivery_type }) => (delivery_type?.toLocaleLowerCase().includes('retirada'))).length)
    console.log("Outros:", items.filter(({ delivery_type }) => (!delivery_type?.toLocaleLowerCase().includes('emergencial') || !delivery_type.toLocaleLowerCase().includes('entrega'))).length)
    console.log("___________________________________________________________________________________________________")
    res.json(items);
  } catch (error) {
    console.log({
      error
    })
    res.status(500).send(error)
  }
});

// Função para gerar orders fakes
const generateFakeOrders = () => {
  z
  const fakeOrders = [];
  for (let i = 1; i <= 100; i++) {
    fakeOrders.push({
      id: i,
      description: `Order ${i}`,
    });
  }
  return fakeOrders;
};

app.get('/orders/', (req, res) => {
  const orders = [
    {
      "id": "efae8906-6aaa-4a58-a76b-3bb9fdecb0c0",
      "number": "5111",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "8487102f-fedb-4c44-a77c-ba804c1fba40",
      "number": "5022",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PALACIO - JESUS MONTANES 1",
        "trade_name": "PMF PALACIO - JESUS MONTANES 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24210280",
        "street": "TRAVESSA RUA ONZE DE AGOSTO ",
        "number": "",
        "district": "INGÁ",
        "latitude": -22.904275754,
        "longitude": -43.1267367598,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "a420cb72-2246-4c42-8229-d0f7e736590b",
      "number": "5090",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "d64b7b65-254d-445e-8b36-16e47b31365e",
      "number": "5123",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "trade_name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "photo_url": null
      },
      "address": {
        "postcode": "24320150",
        "street": "ESTRADA ALCEBÍADES PINTO",
        "number": "",
        "district": "BADU",
        "latitude": -22.905886,
        "longitude": -43.053623,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "26b80863-4ccc-4968-a323-e809df49a81d",
      "number": "5081",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "96fe29c8-265b-41d7-b13a-93b38adf990d",
      "number": "5134",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "869d4a84-1981-41dd-98b3-eda79ecfe424",
      "number": "5117",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "CAPS CASA DO LARGO",
        "trade_name": "CAPS CASA DO LARGO",
        "photo_url": null
      },
      "address": {
        "postcode": "24360066",
        "street": "AVENIDA PRESIDENTE ROOSEVELT",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.91403,
        "longitude": -43.087391,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "bb628c78-ed2f-4b3c-a837-7181c66564e6",
      "number": "5136",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "5cb301cd-525d-430b-86b9-63e1c7ef89ee",
      "number": "5264",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 1 JOSE MARTI 1",
        "trade_name": "PMF GROTA 1 JOSE MARTI 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24365170",
        "street": "RUA ALBINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.909517,
        "longitude": -43.077516,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "6ac7d72a-f474-41c6-9545-8cdc93b52b69",
      "number": "5124",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PALACIO - JESUS MONTANES 1",
        "trade_name": "PMF PALACIO - JESUS MONTANES 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24210280",
        "street": "TRAVESSA RUA ONZE DE AGOSTO ",
        "number": "",
        "district": "INGÁ",
        "latitude": -22.904275754,
        "longitude": -43.1267367598,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "fbac47fd-0473-41de-8c30-b4b72fe547e5",
      "number": "5159",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "trade_name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "photo_url": null
      },
      "address": {
        "postcode": "24070090",
        "street": "RUA ATAÍDE PARREIRAS",
        "number": "",
        "district": "FÁTIMA",
        "latitude": -22.893849,
        "longitude": -43.109091,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "605a78fa-0154-4858-a5e1-875e18b29cf4",
      "number": "5101",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 2 - JOSE MARTI 2",
        "trade_name": "PMF GROTA 2 - JOSE MARTI 2",
        "photo_url": null
      },
      "address": {
        "postcode": "24365160",
        "street": "RUA ASCENDINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.911529,
        "longitude": -43.080789,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "55fdf287-fe58-412e-a1b3-f06d2e70a8ea",
      "number": "5126",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "ed497acc-235f-49fa-a261-2b19f47c0fde",
      "number": "5125",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF MACEIO - DR JOAO SAMPAIO",
        "trade_name": "PMF MACEIO - DR JOAO SAMPAIO",
        "photo_url": null
      },
      "address": {
        "postcode": "24310050",
        "street": "RUA JOSÉ BENTO VIEIRA FERREIRA",
        "number": "",
        "district": "MACEIÓ",
        "latitude": -22.908528102,
        "longitude": -43.0682007411,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "3dbd3184-2e48-475a-b00b-1a7ee8c27bc0",
      "number": "5276",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "HOSPITAL PSIQUIATRICO DE JURUJUBA - HPJ",
        "trade_name": "HOSPITAL PSIQUIATRICO DE JURUJUBA - HPJ",
        "photo_url": null
      },
      "address": {
        "postcode": "24360025",
        "street": "AVENIDA QUINTINO BOCAIUVA",
        "number": "",
        "district": "CHARITAS",
        "latitude": -22.932398,
        "longitude": -43.098345,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "66eedb43-37fd-46d8-978e-f7005bb48b04",
      "number": "5089",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "50219f49-5487-4af7-9ba2-8a396c2776a8",
      "number": "5122",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PREVENTORIO 2 - CALIXTO GARCIA",
        "trade_name": "PMF PREVENTORIO 2 - CALIXTO GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24370001",
        "street": "AVENIDA QUINTINO BOCAIÚVA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.9348495798,
        "longitude": -43.0997687937,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "15630960-ab0a-421e-9e3a-2f8cfccdbd33",
      "number": "5119",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "d450ca39-7864-4800-bb44-50436f0cc1df",
      "number": "5138",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "a221617b-079b-4c6b-85a7-d8034cc4b259",
      "number": "5131",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "trade_name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24370470",
        "street": "TRAVESSA CARMITA",
        "number": "",
        "district": "CHARITAS",
        "latitude": -22.9339049879,
        "longitude": -43.0979516564,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "f72f61b5-565b-4690-97d9-6516426188e2",
      "number": "5296",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "2cb8ae49-6546-4a44-94a4-e7863f348746",
      "number": "5115",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PALACIO - JESUS MONTANES 1",
        "trade_name": "PMF PALACIO - JESUS MONTANES 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24210280",
        "street": "TRAVESSA RUA ONZE DE AGOSTO ",
        "number": "",
        "district": "INGÁ",
        "latitude": -22.904275754,
        "longitude": -43.1267367598,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "94895e88-2fa0-409e-aa04-141b096ea350",
      "number": "5270",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "AL CEN",
        "trade_name": "AL CEN",
        "photo_url": null
      },
      "address": {
        "postcode": "24040025",
        "street": "RUA CORONEL MIRANDA",
        "number": "",
        "district": "PONTA D'AREIA",
        "latitude": -22.8827788204,
        "longitude": -43.1249816892,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "0d915b80-a901-4456-bbd4-77f502a05e02",
      "number": "5258",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF MACEIO - DR JOAO SAMPAIO",
        "trade_name": "PMF MACEIO - DR JOAO SAMPAIO",
        "photo_url": null
      },
      "address": {
        "postcode": "24310050",
        "street": "RUA JOSÉ BENTO VIEIRA FERREIRA",
        "number": "",
        "district": "MACEIÓ",
        "latitude": -22.908528102,
        "longitude": -43.0682007411,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "1176a046-47b5-4cfb-87d4-0f56e3763376",
      "number": "5203",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "ccca57a6-7641-4b94-b429-45558dbed9f5",
      "number": "5095",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "trade_name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "photo_url": null
      },
      "address": {
        "postcode": "24320150",
        "street": "ESTRADA ALCEBÍADES PINTO",
        "number": "",
        "district": "BADU",
        "latitude": -22.905886,
        "longitude": -43.053623,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "79aa069e-698c-4f30-a099-6564d9fa8079",
      "number": "5130",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "trade_name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24322385",
        "street": "AVENIDA NELSON DE OLIVEIRA E SILVA",
        "number": "",
        "district": "VILA PROGRESSO",
        "latitude": -22.911956,
        "longitude": -43.047427,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "11b455d4-98d6-4c6c-b527-67e46803f6a0",
      "number": "5120",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 2 - JOSE MARTI 2",
        "trade_name": "PMF GROTA 2 - JOSE MARTI 2",
        "photo_url": null
      },
      "address": {
        "postcode": "24365160",
        "street": "RUA ASCENDINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.911529,
        "longitude": -43.080789,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "f55810e1-316a-4d81-a41e-75886b5331f3",
      "number": "5135",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 1 JOSE MARTI 1",
        "trade_name": "PMF GROTA 1 JOSE MARTI 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24365170",
        "street": "RUA ALBINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.909517,
        "longitude": -43.077516,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "01f2a76e-1688-4305-a96d-bea6763703eb",
      "number": "5132",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PREVENTORIO 2 - CALIXTO GARCIA",
        "trade_name": "PMF PREVENTORIO 2 - CALIXTO GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24370001",
        "street": "AVENIDA QUINTINO BOCAIÚVA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.9348495798,
        "longitude": -43.0997687937,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "766cbdbf-52da-44fd-a31f-88bc3c80b17c",
      "number": "5137",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "e1063640-a532-4a6a-a5e6-a85b79351d85",
      "number": "5139",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "trade_name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
        "photo_url": null
      },
      "address": {
        "postcode": "24320150",
        "street": "ESTRADA ALCEBÍADES PINTO",
        "number": "",
        "district": "BADU",
        "latitude": -22.905886,
        "longitude": -43.053623,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "27e4cde1-f437-4a21-8e4a-88ea7781f849",
      "number": "5127",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "092e4baf-18d9-475e-9376-5fafd9c12af3",
      "number": "5114",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "trade_name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24370470",
        "street": "TRAVESSA CARMITA",
        "number": "",
        "district": "CHARITAS",
        "latitude": -22.9339049879,
        "longitude": -43.0979516564,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "3cb49912-4741-4434-9675-fed4609c2cfe",
      "number": "5096",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "trade_name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24360018",
        "street": "ALAMEDA PARIS",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.912545,
        "longitude": -43.102992,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "713f1c53-9d1d-4145-996d-32dd5d147f27",
      "number": "5129",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 2 - JOSE MARTI 2",
        "trade_name": "PMF GROTA 2 - JOSE MARTI 2",
        "photo_url": null
      },
      "address": {
        "postcode": "24365160",
        "street": "RUA ASCENDINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.911529,
        "longitude": -43.080789,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "510bf29d-d9d7-4e00-b681-f43b80e702f1",
      "number": "5133",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF PALACIO - JESUS MONTANES 1",
        "trade_name": "PMF PALACIO - JESUS MONTANES 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24210280",
        "street": "TRAVESSA RUA ONZE DE AGOSTO ",
        "number": "",
        "district": "INGÁ",
        "latitude": -22.904275754,
        "longitude": -43.1267367598,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "695a5e8c-d3c4-45df-b69f-0d7d10692e3b",
      "number": "5300",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "PMF VILA IPIRANGA - WILMA ESPIM",
        "trade_name": "PMF VILA IPIRANGA - WILMA ESPIM",
        "photo_url": null
      },
      "address": {
        "postcode": "24120075",
        "street": "TRAVESSA DONA JÚLIA",
        "number": "",
        "district": "FONSECA",
        "latitude": -22.878201,
        "longitude": -43.091988,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "80c5a546-f036-4690-987c-b7e6c4de84ac",
      "number": "5232",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "927e518d-c63c-44d0-86e0-eda2e8dbfe70",
      "number": "5235",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "trade_name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
        "photo_url": null
      },
      "address": {
        "postcode": "24370195",
        "street": "AVENIDA CARLOS ERMELINDO MARINS",
        "number": "",
        "district": "JURUJUBA",
        "latitude": -22.937975,
        "longitude": -43.130693,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "89817f98-6fb8-4bc4-8570-d10d54a4dcf2",
      "number": "5128",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "CAPS CASA DO LARGO",
        "trade_name": "CAPS CASA DO LARGO",
        "photo_url": null
      },
      "address": {
        "postcode": "24360066",
        "street": "AVENIDA PRESIDENTE ROOSEVELT",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.91403,
        "longitude": -43.087391,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "750bfaf1-d061-43f1-b33e-5b5371e7f9a6",
      "number": "5112",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "trade_name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "photo_url": null
      },
      "address": {
        "postcode": "24070090",
        "street": "RUA ATAÍDE PARREIRAS",
        "number": "",
        "district": "FÁTIMA",
        "latitude": -22.893849,
        "longitude": -43.109091,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "6e3b91a9-a32e-46b4-a624-cc7f8caf7753",
      "number": "5299",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "trade_name": "PMF PREVENTORIO 1 - ABEL SANTAMARIA",
        "photo_url": null
      },
      "address": {
        "postcode": "24370470",
        "street": "TRAVESSA CARMITA",
        "number": "",
        "district": "CHARITAS",
        "latitude": -22.9339049879,
        "longitude": -43.0979516564,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "112fb21a-a3ac-40ab-af07-2659eabca201",
      "number": "5297",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "PMF BOA VISTA",
        "trade_name": "PMF BOA VISTA",
        "photo_url": null
      },
      "address": {
        "postcode": "24060037",
        "street": "RUA INDÍGENA",
        "number": "",
        "district": "SÃO LOURENÇO",
        "latitude": -22.888087,
        "longitude": -43.109738,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "8e2674be-037a-462f-a0a3-5fd5b5389d0b",
      "number": "5072",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "bbd28643-3c4a-4a83-8773-7bd7cd4b390c",
      "number": "5118",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF MACEIO - DR JOAO SAMPAIO",
        "trade_name": "PMF MACEIO - DR JOAO SAMPAIO",
        "photo_url": null
      },
      "address": {
        "postcode": "24310050",
        "street": "RUA JOSÉ BENTO VIEIRA FERREIRA",
        "number": "",
        "district": "MACEIÓ",
        "latitude": -22.908528102,
        "longitude": -43.0682007411,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "e6bb4f43-e44e-42c2-bff0-2997dfe52fe6",
      "number": "5182",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "trade_name": "POL. REGI. DO LARGO DA BATALHA - DR FRANCISCO DA CRUZ NUNES",
        "photo_url": null
      },
      "address": {
        "postcode": "24310400",
        "street": "RUA REVERENDO ARMANDO FERREIRA",
        "number": "",
        "district": "LARGO DA BATALHA",
        "latitude": -22.907909,
        "longitude": -43.067183,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "43322d55-4c0d-4046-b050-87c5bdfe7bd1",
      "number": "5237",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "trade_name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24322385",
        "street": "AVENIDA NELSON DE OLIVEIRA E SILVA",
        "number": "",
        "district": "VILA PROGRESSO",
        "latitude": -22.911956,
        "longitude": -43.047427,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "29b044ce-6367-4b45-95fd-16ed34d29933",
      "number": "5277",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "PMF ATALAIA - SALVADOR ALENDE",
        "trade_name": "PMF ATALAIA - SALVADOR ALENDE",
        "photo_url": null
      },
      "address": {
        "postcode": "24315010",
        "street": "ESTRADA PADRE JOSÉ EUGER",
        "number": "",
        "district": "ATALAIA",
        "latitude": -22.899669,
        "longitude": -43.079813,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "aff96917-f7b0-4b99-ae0a-6a3cd14ea471",
      "number": "5257",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "trade_name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24322385",
        "street": "AVENIDA NELSON DE OLIVEIRA E SILVA",
        "number": "",
        "district": "VILA PROGRESSO",
        "latitude": -22.911956,
        "longitude": -43.047427,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "979b5481-e49b-4c29-9eb6-b272d374dc3b",
      "number": "5094",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 1 JOSE MARTI 1",
        "trade_name": "PMF GROTA 1 JOSE MARTI 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24365170",
        "street": "RUA ALBINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.909517,
        "longitude": -43.077516,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "eaab2cdc-a97d-4888-8762-73c804e198b1",
      "number": "5121",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF GROTA 1 JOSE MARTI 1",
        "trade_name": "PMF GROTA 1 JOSE MARTI 1",
        "photo_url": null
      },
      "address": {
        "postcode": "24365170",
        "street": "RUA ALBINO PEREIRA",
        "number": "",
        "district": "SÃO FRANCISCO",
        "latitude": -22.909517,
        "longitude": -43.077516,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "7334f436-7612-452a-8427-93fc9cf75e5d",
      "number": "5338",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "trade_name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
        "photo_url": null
      },
      "address": {
        "postcode": "24070090",
        "street": "RUA ATAÍDE PARREIRAS",
        "number": "",
        "district": "FÁTIMA",
        "latitude": -22.893849,
        "longitude": -43.109091,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "c128df44-21e6-4a62-8ff0-2997c94a5c02",
      "number": "5302",
      "delivery_type": "EMERGENCIAL",
      "customer": {
        "federal_id": "",
        "name": "PMF BOA VISTA",
        "trade_name": "PMF BOA VISTA",
        "photo_url": null
      },
      "address": {
        "postcode": "24060037",
        "street": "RUA INDÍGENA",
        "number": "",
        "district": "SÃO LOURENÇO",
        "latitude": -22.888087,
        "longitude": -43.109738,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    },
    {
      "id": "4b98b995-ead8-4a44-883f-4b5ec3026be0",
      "number": "5238",
      "delivery_type": "ENTREGA",
      "customer": {
        "federal_id": "",
        "name": "PMF MACEIO - DR JOAO SAMPAIO",
        "trade_name": "PMF MACEIO - DR JOAO SAMPAIO",
        "photo_url": null
      },
      "address": {
        "postcode": "24310050",
        "street": "RUA JOSÉ BENTO VIEIRA FERREIRA",
        "number": "",
        "district": "MACEIÓ",
        "latitude": -22.908528102,
        "longitude": -43.0682007411,
        "city": "NITEROI",
        "state": "RJ",
        "details": ",",
        "country": "undefined"
      },
      "company": {
        "name": "FMS Niterói",
        "public_id": "3b5be590-ed53-4e46-bbf1-f964fff47493"
      }
    }
  ]
    .filter(order => order.delivery_type.toLocaleLowerCase().includes('entrega'))
  // const account_id = req.query.accounts
  // const order = orders.filter(order => {
  //   if (order.company.public_id === account_id) {
  //     return true
  //   } else {

  //   }
  // });
  if (orders) {
    res.json(orders);
  } else {
    res.status(404).send('Pedido não encontrado');
  }
});


app.get('/vehicles', (req, res) => {
  const vehicles = [
    {
      "id": "c59b0dc5-14fa-4c24-9eaa-8f60bc3dd531",
      "name": "KYH9607",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "700.00",
      "extra_time_cost": "70.00",
      "km_cost_trip": "1.52",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "e1024d12-6105-4723-b2f3-73e301ac5fe1",
      "name": "LAO3080",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "385.88",
      "extra_time_cost": "38.58",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "3752d3e1-d306-4298-8fcb-968db0e3dba8",
      "name": "KYU5487",
      "photo_url": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005755/vehicles/z_KYU_5487_x3fz4p.jpg",
      "activated": true,
      "external_id": "28",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088582",
      "driver_name": "Raimundo Freitas "
    },
    {
      "id": "45023c76-9996-4099-b806-50e03f91c038",
      "name": "KWH4483",
      "photo_url": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005704/vehicles/z_KWH_4483_ie83di.jpg",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088582",
      "driver_name": "Christian Nunes "
    },
    {
      "id": "7ffec15a-5621-4115-8e37-572c478d6313",
      "name": "LJF8939",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "a5b3845f-3a4a-4d40-8db6-1e0092a38211",
      "name": "KPH4570",
      "photo_url": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005607/vehicles/z_KPH_4570_zqlmdt.jpg",
      "activated": true,
      "external_id": "18",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "4311962",
      "driver_name": "Wanderson Braga Pereira"
    },
    {
      "id": "515b78f4-4f45-4864-86a1-f0feafaa3460",
      "name": "KZC3862",
      "photo_url": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005784/vehicles/z_KZC_3862_umvzob.jpg",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088773",
      "driver_name": "Thyerre Lázaro "
    },
    {
      "id": "f7fb55af-6dfc-4b41-b0c8-29c50071e16e",
      "name": "LCO2C83",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "606.40",
      "extra_time_cost": "60.64",
      "km_cost_trip": "1.52",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Ricardo Pereira Viana"
    },
    {
      "id": "e163cb17-7fae-4a36-8d10-075f713df5a2",
      "name": "LSH2834",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "480.00",
      "extra_time_cost": "48.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "a5a9388b-e475-4edd-aa79-5e735ca0ef95",
      "name": "LPF2092",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "480.00",
      "extra_time_cost": "48.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "09b86244-8230-47f6-958e-183f2162be5c",
      "name": "KXL2117",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "480.00",
      "extra_time_cost": "48.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "33602a5d-aa52-42bd-bc1c-dfd4f15aa2a2",
      "name": "KYY9J72",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "kleber Fernandes"
    },
    {
      "id": "d97a25b5-8ea0-4eae-aaf2-99b7054f7066",
      "name": "KPX2985",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "3203936",
      "driver_name": "Cosme Gonçalves Menezes"
    },
    {
      "id": "b1a22eca-a274-4490-830f-b0ac6153ba85",
      "name": "RET0000",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "c3bec1e0-2cbe-4065-80b8-460f1d5e0c71",
      "name": "Teste123",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "1415da9a-656e-4bbc-85a6-b4d08846be43",
      "name": "LCA3356",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "606.38",
      "extra_time_cost": "60.64",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "250d4dba-7339-434a-8402-03e0f3a2b0fc",
      "name": "KOL6294",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "200.00",
      "extra_time_cost": "20.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "7473805",
      "driver_name": " "
    },
    {
      "id": "e58a00de-c3a4-4fd6-9734-5841815fb0a1",
      "name": "LTB9B45",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "200.00",
      "extra_time_cost": "20.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "7644082",
      "driver_name": "Breno da Silva Nascimento"
    },
    {
      "id": "f71b42b1-1d0f-4c78-8fa4-e8e30f60dbf2",
      "name": "LAU4276",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "500.00",
      "extra_time_cost": "50.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "65608bb2-e651-416e-a97d-03c9a6ae5eff",
      "name": "KYI2365",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Robson Pifano"
    },
    {
      "id": "987b3b6a-e52d-4594-bb1d-650daf1c8d1d",
      "name": "KXZ3A35",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "560.00",
      "extra_time_cost": "56.00",
      "km_cost_trip": "3.20",
      "time_allowed": "600",
      "km_allowed": "120",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "783dcb5f-d6f1-43a3-a4e0-aa7f89328803",
      "name": "KQQ8515",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "247.00",
      "extra_time_cost": "24.70",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Thiago Faria"
    },
    {
      "id": "77fb1651-a9b1-4e67-8007-29385d8f8ae0",
      "name": "GDC6120",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Hélio Oliveira Silva"
    },
    {
      "id": "f9373478-f901-45f8-9bba-13f35d28ddd0",
      "name": "MQS0G10",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "950.00",
      "extra_time_cost": "95.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "3544248c-9152-48b4-8096-85c308b26c28",
      "name": "KMT6c47",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "a778b593-5cd9-45d1-9182-562495ad4536",
      "name": "KZV4062",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "350.00",
      "extra_time_cost": "35.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "85673885-f991-4359-b323-741684e54536",
      "name": "AZA3132",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088582",
      "driver_name": " "
    },
    {
      "id": "a6a87164-707c-4790-a10f-1717198b7cf7",
      "name": "LSE3887",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "350.00",
      "extra_time_cost": "35.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "0da11af7-a1c4-463c-b385-c7ed6e3c5575",
      "name": "KVT 9I63",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "200.00",
      "extra_time_cost": "20.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "7301037",
      "driver_name": "Rosângela Figueiredo do Nascimento"
    },
    {
      "id": "78d02ccc-0d95-4607-9677-ebb42ae7f99c",
      "name": "KOO9926",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "560.00",
      "extra_time_cost": "56.00",
      "km_cost_trip": "3.20",
      "time_allowed": "600",
      "km_allowed": "120",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "655f1046-f052-4e5c-a2cd-0e70ecfb925c",
      "name": "KVZ4062",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "560.00",
      "extra_time_cost": "56.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "ea3833c1-f01a-4786-9838-80aa221a5688",
      "name": "LQS6254",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "950.00",
      "extra_time_cost": "95.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "b2819745-e03b-45c6-85d3-ee0f1728b3c9",
      "name": "LNH0B96",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "550.00",
      "extra_time_cost": "55.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "553c53c5-8187-4b7b-b78d-0306ea579831",
      "name": "LUG4A17",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "330.75",
      "extra_time_cost": "33.07",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "be97b83f-4a5d-4ca1-b820-56e104e7195e",
      "name": "KYS5B50",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "2300.00",
      "extra_time_cost": "230.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "ec4c1991-4820-421a-b874-4a887b25ad55",
      "name": "MTG5A42",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "2300.00",
      "extra_time_cost": "230.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "600f2057-07a3-4171-8cc9-185d588404e2",
      "name": "LQC3886",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "308.70",
      "extra_time_cost": "30.87",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2264256",
      "driver_name": "Olavo Santos "
    },
    {
      "id": "5510367f-6c0d-434b-8293-e94cc68767a7",
      "name": "KVK3281",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "600.00",
      "extra_time_cost": "60.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "157a9491-9549-4946-aba1-937ade105dd8",
      "name": "KRK2357",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "560.00",
      "extra_time_cost": "56.00",
      "km_cost_trip": "3.20",
      "time_allowed": "600",
      "km_allowed": "120",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "3950b066-c26e-41c9-8ed1-27c601e990bc",
      "name": "KOS3138",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "1736.84",
      "extra_time_cost": "173.68",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "fe4d5878-ace0-494e-950f-52c4297e690f",
      "name": "DTA2132",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "500.00",
      "extra_time_cost": "50.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "3203847",
      "driver_name": "Ricardo Pereira Viana"
    },
    {
      "id": "bfd24a79-0a58-46df-be3d-3751c334f825",
      "name": "LMQ3J17",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "8d8efa0a-c978-489b-9c75-885b9484906b",
      "name": "KNU7193",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "500.00",
      "extra_time_cost": "50.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "7598327",
      "driver_name": "Michel "
    },
    {
      "id": "e756dde0-b479-416f-ad78-61334c106b24",
      "name": "BAZ8I35",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "330.75",
      "extra_time_cost": "33.07",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088582",
      "driver_name": " "
    },
    {
      "id": "308ffbf9-91a6-4370-9829-a870fcdeab79",
      "name": "KWN0H11",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "600.00",
      "extra_time_cost": "60.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "16dc8f41-03cd-4f12-81d9-1ae455114909",
      "name": "EQC4F72",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "330.75",
      "extra_time_cost": "33.07",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "461a24e6-c7f5-4da9-8c2e-007b708db50b",
      "name": "KVT8106",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "1736.84",
      "extra_time_cost": "173.68",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "32d0b4d6-3339-45b6-b7a6-3f351f6b325d",
      "name": "KWO3a28",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "kleber Fernandes"
    },
    {
      "id": "e933fc4a-ed88-4ff5-bfd8-6fa4dfd1a378",
      "name": "KPS1H57",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "950.00",
      "extra_time_cost": "95.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "cb413182-200d-485a-a413-adc08b425036",
      "name": "CUB9I75",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Denilson de Souza "
    },
    {
      "id": "ba1abbb2-a28c-48f5-abc7-7a9a40ab4299",
      "name": "LRK7334",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "385.88",
      "extra_time_cost": "38.58",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Osmar França "
    },
    {
      "id": "d17c041f-025c-46ed-ae50-398974eeb65d",
      "name": "FKA1524",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "3c39c134-58dc-4c68-98ca-c299adba95cc",
      "name": "KQX9956",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "095c0df3-4fd9-4973-9612-358c27ff6b6b",
      "name": "FSV5985",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "330.75",
      "extra_time_cost": "33.07",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088707",
      "driver_name": "Moacir de Araújo "
    },
    {
      "id": "74c4799c-a759-4b4e-a354-12ba42a75777",
      "name": "KYL8I26",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "259.35",
      "extra_time_cost": "25.93",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "8172a784-3de5-40c3-bdcd-066f46ad89e0",
      "name": "RKF4I35",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Michel "
    },
    {
      "id": "1b428301-c0a3-4e62-8b0d-d72827daba3b",
      "name": "KZB6473",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": "2088773",
      "driver_name": "Eduardo Cavalcante "
    },
    {
      "id": "e1e37954-08d0-47f2-87eb-5fd933d24cdb",
      "name": "LLK4j60",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "315.00",
      "extra_time_cost": "31.50",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Anderson Costa"
    },
    {
      "id": "c15fe237-6364-4fcb-a6a2-40523bb97ba5",
      "name": "KOW6859",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "900.00",
      "extra_time_cost": "90.00",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "52c0f8ed-1079-4e63-8aa2-af43a469bea1",
      "name": "KWL7B18",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "2243de4f-6650-4bb1-be52-71929ebffd6e",
      "name": "LUB8H88",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "294.00",
      "extra_time_cost": "29.40",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Paulo Roberto Vieira"
    },
    {
      "id": "f17591d6-bf35-4148-b8a7-65acd9ba2828",
      "name": "RKQ2C74",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "259.35",
      "extra_time_cost": "25.93",
      "km_cost_trip": "1.45",
      "time_allowed": "600",
      "km_allowed": "200",
      "bank_account_id": null,
      "driver_name": "Edilson Silva"
    },
    {
      "id": "9f8b8de4-de64-42de-84ba-f4d0e707687a",
      "name": "LRW7107",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "2264127",
      "driver_name": "Leandro Souza "
    },
    {
      "id": "c7167598-5946-4e19-bca3-87b21ba293f3",
      "name": "RKU2C97",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Rosan Figueiredo"
    },
    {
      "id": "799fbfc2-324f-40ab-98d7-784efc34bfb7",
      "name": "KOL0E37",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "324.14",
      "extra_time_cost": "32.41",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "1e7f79cf-685a-4f43-9897-a371d099e296",
      "name": "RIX4A49",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "abd6ce31-784f-4b52-ad37-cf560ac2827c",
      "name": "DGA9H62",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "385.88",
      "extra_time_cost": "38.58",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "76b85f18-905f-4c36-9696-f57d63590ba7",
      "name": "RJR0C78",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Paulo Barbosa"
    },
    {
      "id": "9aa355e3-14d9-4a53-b5b1-7e87157036ab",
      "name": "KXQ5F68",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "4311962",
      "driver_name": "Wanderson Braga Pereira"
    },
    {
      "id": "eedd73d8-f828-4e37-8843-9330533350d5",
      "name": "LSY3406",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "272.32",
      "extra_time_cost": "27.23",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Arlindo Silva"
    },
    {
      "id": "97892f00-ba20-4efc-8fdc-dba00eda1743",
      "name": "KXH9353",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": "Waldeir Nunes Filho"
    },
    {
      "id": "4da1b06f-58ba-46cb-b117-49b3d65cb8b3",
      "name": "RNS3J92",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Paulo Roberto Vieira"
    },
    {
      "id": "c2278306-b4e7-4cbf-95ea-fdbf98a61fd4",
      "name": "KRT8424",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": "29",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "272.32",
      "extra_time_cost": "27.23",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "2088687",
      "driver_name": "Alessandro Martins "
    },
    {
      "id": "9d69c613-3862-424f-82e8-7923274cd43c",
      "name": "LUO4A11",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "2088687",
      "driver_name": "Ailson Santos "
    },
    {
      "id": "53085bc5-fb84-44f9-a3a7-5dedf8d5e33a",
      "name": "AZE3170",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": "24",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Kleyton Silva"
    },
    {
      "id": "bb1af223-0553-4d56-8638-5c891f6bef91",
      "name": "BKU0C05",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Alessandro Martins "
    },
    {
      "id": "2a0a6a6e-0bc5-4660-8aa1-e306582477d2",
      "name": "LTY8H70",
      "photo_url": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
      "activated": true,
      "external_id": "31",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "2088731",
      "driver_name": "Waldeir Nunes "
    },
    {
      "id": "f94c5064-49ff-43b9-a58b-176c3e1f76f8",
      "name": "FIL8720",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": "0",
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "272.32",
      "extra_time_cost": "27.23",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Jackson da Silva Mendes"
    },
    {
      "id": "5b80250d-2ead-428b-8a82-1d8fa95c25bb",
      "name": "FXK5A97",
      "photo_url": "https://res.cloudinary.com/dvzlcxrvw/image/upload/v1653254636/vehicles/Screenshot_2022-05-22_at_22.22.14.png",
      "activated": true,
      "external_id": null,
      "account_id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
      "account_name": "SESRJ",
      "daily_cost": "347.29",
      "extra_time_cost": "34.72",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": "3873233",
      "driver_name": "Josimar da Costa "
    },
    {
      "id": "f96a4d83-26ef-4765-b0e5-96413d455c80",
      "name": "EBO2J66",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "efdf4450-7fc2-4a29-9b01-1e72999e273e",
      "name": "RKU2C97",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": "Rosan Figueiredo"
    },
    {
      "id": "2ac86ee5-27f6-4b75-9e83-0a2e078f6250",
      "name": "KZI5G43",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "760b6987-2848-436c-b280-a2abc6be6037",
      "name": "KPH4570",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "b2005bec-44d6-43c2-a99c-fe4ee9b908d7",
      "name": "LRW7107",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": "347.29",
      "extra_time_cost": "34.73",
      "km_cost_trip": "2.00",
      "time_allowed": "600",
      "km_allowed": "150",
      "bank_account_id": null,
      "driver_name": "Leandro Souza "
    },
    {
      "id": "81945608-d285-4123-b69e-bd0ec1882532",
      "name": "AZE3170",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "b49f4073-b155-4654-873c-1da2ec5e8f1a",
      "name": "RIX4A49",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
      "account_name": "FMS Niterói",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "c7ebbfdf-f9d9-43ad-acd4-c876e84e16f8",
      "name": "LPW4J26",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": "Vânia Barbosa Almeida"
    },
    {
      "id": "3b752d0e-e29a-4f50-b2fa-8867c594f68a",
      "name": "ALC6I59",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "eb06382a-b92a-41d0-9fd7-ec44e15aa2b1",
      "name": "LCO2083",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "c94a39ef-1310-4445-95bf-dc1d00096686",
      "name": "LRK7334",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "f26516f1-f073-4bec-97c4-33c3b8493fb9",
      "name": "KMV9664",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "ead238ac-f9c6-4fef-a79b-626a9b641881",
      "name": "GPD3G50",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": " "
    },
    {
      "id": "116af901-d327-4a36-b371-dfdbdbb75493",
      "name": "KYY9J72",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": "Dijan Marcio"
    },
    {
      "id": "d197215a-b9e2-4706-8f45-4a986f3bcdb3",
      "name": "KNZ7355",
      "photo_url": null,
      "activated": true,
      "external_id": null,
      "account_id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
      "account_name": "SEMUS",
      "daily_cost": null,
      "extra_time_cost": null,
      "km_cost_trip": null,
      "time_allowed": null,
      "km_allowed": null,
      "bank_account_id": null,
      "driver_name": "Haroldo de Queiroz Balbi"
    }
  ]
  const account_id = req.query.accounts
  //console.log(account_id)
  const vehicle = vehicles.filter(vehicle => {
    if (vehicle.account_id === account_id) {
      return true
    } else {

    }
  });
  //console.log(vehicle)
  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).send('Pedido não encontrado');
  }
});

// Inicie o servidor
app.listen(3077, () => {
  //console.log('Servidor rodando na porta 3077');
});

test = [
  {
    "id": 1594871979,
    "date": "2023-07-25T17:52:01.556Z",
    "vehiclePlate": "BKU00000",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_0",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 2383046,
        "vehicleId": 84165,
        "vehiclePlate": "BKU00000",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_0",
        "positionTime": null,
        "total": 668693.6423470168,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.556Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          319794,
          900120
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 37412.08817397279,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 913961,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 23,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T14:23:10.635Z",
            "departure": "2023-07-20T14:23:10.635Z",
            "taskStatus": null,
            "taskType": "WAREHOUSE_DEPARTURE",
            "spentTime": 3,
            "ordersNumber": [
              747229,
              563636
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 61020.89740310606,
            "spentHours": 0.4818952067577551
          },
          {
            "id": 7736993,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 816,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T18:47:57.418Z",
            "departure": "2023-07-21T18:47:57.418Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              137140,
              94639
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 36826.745941587105,
            "spentHours": 0.047216673688800004
          },
          {
            "id": 1019892,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 87,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:44:21.852Z",
            "departure": "2023-07-20T14:44:21.852Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              696663,
              498018
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 41001.32573897839,
            "spentHours": 0.6273613707273591
          }
        ],
        "spentHours": 0
      },
      {
        "id": 7267816,
        "vehicleId": 8100863,
        "vehiclePlate": "BKU00000",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_0",
        "positionTime": null,
        "total": 983476.0069594441,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.556Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          217352,
          169898
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 17348.41220142318,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 238016,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 959,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T17:34:02.025Z",
            "departure": "2023-07-21T17:34:02.025Z",
            "taskStatus": null,
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              195552,
              881821
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 16512.15536903463,
            "spentHours": 0.6603760200431359
          },
          {
            "id": 9932280,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 146,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T01:54:13.009Z",
            "departure": "2023-07-21T01:54:13.009Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              725450,
              590210
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 11978.951299692042,
            "spentHours": 0.616868591828748
          },
          {
            "id": 7930194,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 169,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:08:46.871Z",
            "departure": "2023-07-20T14:08:46.871Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              904597,
              529322
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 54538.90560001142,
            "spentHours": 0.6364382192498284
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 6180096857,
    "date": "2023-07-25T17:52:01.556Z",
    "vehiclePlate": "BKU00001",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_1",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6611092,
        "vehicleId": 3167812,
        "vehiclePlate": "BKU00001",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_1",
        "positionTime": null,
        "total": 791908.7341405256,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.556Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          839877,
          69988
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 74850.4807209441,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 5940172,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 69,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T08:15:40.015Z",
            "departure": "2023-07-20T08:15:40.015Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              481159,
              564766
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 75271.40096220937,
            "spentHours": 0.8054901884114387
          },
          {
            "id": 7430000,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 696,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T08:36:38.384Z",
            "departure": "2023-07-20T08:36:38.384Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              312927,
              627683
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 92301.70378969928,
            "spentHours": 0.3840711692290961
          },
          {
            "id": 4472550,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 203,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T15:34:33.350Z",
            "departure": "2023-07-20T15:34:33.350Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              315426,
              417548
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 64008.38351138305,
            "spentHours": 0.614607534059963
          }
        ],
        "spentHours": 0
      },
      {
        "id": 6578081,
        "vehicleId": 925648,
        "vehiclePlate": "BKU00001",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_1",
        "positionTime": null,
        "total": 180251.6508580012,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.556Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          205200,
          936145
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 65214.04104527475,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 4384264,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 48,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T16:11:44.317Z",
            "departure": "2023-07-21T16:11:44.317Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              452698,
              468312
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 83537.51113470925,
            "spentHours": 0.9837746212895404
          },
          {
            "id": 2720536,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 851,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T00:08:12.266Z",
            "departure": "2023-07-20T00:08:12.266Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              236110,
              322587
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 7456.913896649331,
            "spentHours": 0.9518200893599149
          },
          {
            "id": 9906622,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 552,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T12:54:40.823Z",
            "departure": "2023-07-20T12:54:40.823Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              291450,
              285775
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 50529.78687290903,
            "spentHours": 0.06474771797997181
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "offline"
  },
  {
    "id": 6760715251,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00002",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_2",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 7192192,
        "vehicleId": 2556385,
        "vehiclePlate": "BKU00002",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_2",
        "positionTime": null,
        "total": 148377.55564686074,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          266994,
          672941
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 39676.385769379485,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6549686,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 991,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T10:12:52.018Z",
            "departure": "2023-07-20T10:12:52.018Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              993157,
              390117
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 87551.65154845777,
            "spentHours": 0.815253183551278
          },
          {
            "id": 5447282,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 249,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T05:06:16.869Z",
            "departure": "2023-07-21T05:06:16.869Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              563747,
              508293
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 18838.09676352064,
            "spentHours": 0.8032624969949103
          },
          {
            "id": 6932287,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 302,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T00:34:36.659Z",
            "departure": "2023-07-20T00:34:36.659Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              398837,
              992268
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 57759.03899472592,
            "spentHours": 0.31399908744445426
          }
        ],
        "spentHours": 0
      },
      {
        "id": 9266944,
        "vehicleId": 7103096,
        "vehiclePlate": "BKU00002",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_2",
        "positionTime": null,
        "total": 217275.18433631366,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          383908,
          756516
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 59756.46710905904,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 2843526,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 207,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T13:23:02.427Z",
            "departure": "2023-07-21T13:23:02.427Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              110334,
              554309
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 52316.61259256604,
            "spentHours": 0.31992459973891907
          },
          {
            "id": 3360956,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 322,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T01:37:26.731Z",
            "departure": "2023-07-21T01:37:26.731Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              902959,
              229610
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 2930.1719901327906,
            "spentHours": 0.8373043282795634
          },
          {
            "id": 3901396,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 600,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T10:28:57.572Z",
            "departure": "2023-07-21T10:28:57.572Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              342303,
              856259
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 97329.39642131582,
            "spentHours": 0.977967345103183
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FIOCRUZ",
    "status": "online"
  },
  {
    "id": 9330208193,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00003",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_3",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 8178415,
        "vehicleId": 7891329,
        "vehiclePlate": "BKU00003",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_3",
        "positionTime": null,
        "total": 190412.2230169003,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          736751,
          724824
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 91331.2383722817,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1947081,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 722,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T13:02:40.529Z",
            "departure": "2023-07-20T13:02:40.529Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              518280,
              672170
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 58429.30791449059,
            "spentHours": 0.9315634478945014
          },
          {
            "id": 7277836,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 980,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T19:21:38.020Z",
            "departure": "2023-07-20T19:21:38.020Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              156303,
              376337
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 86340.35096155712,
            "spentHours": 0.9466706014401516
          },
          {
            "id": 209100,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 754,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:47:39.090Z",
            "departure": "2023-07-20T14:47:39.090Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              346659,
              523262
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 31908.76947213226,
            "spentHours": 0.4777059783247497
          }
        ],
        "spentHours": 0
      },
      {
        "id": 6108460,
        "vehicleId": 5730425,
        "vehiclePlate": "BKU00003",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_3",
        "positionTime": null,
        "total": 818641.0811321225,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          534033,
          573209
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 28607.1368134742,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7272343,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 658,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T02:00:37.186Z",
            "departure": "2023-07-21T02:00:37.186Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              624449,
              324715
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 66024.73299737033,
            "spentHours": 0.10236422025879266
          },
          {
            "id": 5340255,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 140,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T23:04:33.342Z",
            "departure": "2023-07-20T23:04:33.342Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              506333,
              978422
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 52612.83303797433,
            "spentHours": 0.8208811283674171
          },
          {
            "id": 2009473,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 709,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T16:26:41.826Z",
            "departure": "2023-07-20T16:26:41.826Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              732481,
              361069
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 57212.540680915925,
            "spentHours": 0.7001398853942318
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 784573403,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00004",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_4",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 2199828,
        "vehicleId": 3988043,
        "vehiclePlate": "BKU00004",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_4",
        "positionTime": null,
        "total": 17571.054761240655,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          841264,
          775977
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 71721.26539959453,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 3540128,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 535,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T02:43:35.663Z",
            "departure": "2023-07-20T02:43:35.663Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              129770,
              584119
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 32631.07561587606,
            "spentHours": 0.14609401204636252
          },
          {
            "id": 8246156,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 34,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T04:25:17.299Z",
            "departure": "2023-07-21T04:25:17.299Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              140687,
              789282
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 21078.912443885,
            "spentHours": 0.7711928325145583
          },
          {
            "id": 3969550,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 558,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T16:26:13.572Z",
            "departure": "2023-07-20T16:26:13.572Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              672686,
              822768
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 54390.4056436953,
            "spentHours": 0.8212726574486955
          }
        ],
        "spentHours": 0
      },
      {
        "id": 6818407,
        "vehicleId": 3848492,
        "vehiclePlate": "BKU00004",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_4",
        "positionTime": null,
        "total": 324074.52358732925,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          894021,
          931747
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 93829.08866907265,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 801703,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 423,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T12:50:13.333Z",
            "departure": "2023-07-21T12:50:13.333Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              511686,
              428421
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 26162.54346320326,
            "spentHours": 0.9524153642063002
          },
          {
            "id": 2167476,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 734,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T21:05:32.102Z",
            "departure": "2023-07-21T21:05:32.102Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              839885,
              237997
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 7796.68522289021,
            "spentHours": 0.7409095120998046
          },
          {
            "id": 1658669,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 882,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T08:01:21.035Z",
            "departure": "2023-07-20T08:01:21.035Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              296145,
              79358
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 80607.11078153884,
            "spentHours": 0.6461443653298049
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 3534964047,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00005",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_5",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 851366,
        "vehicleId": 5947639,
        "vehiclePlate": "BKU00005",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_5",
        "positionTime": null,
        "total": 823804.1547324846,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          824862,
          240953
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 5644.030279585954,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1898563,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 771,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T03:33:57.706Z",
            "departure": "2023-07-21T03:33:57.706Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              612863,
              711242
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 49466.026456612824,
            "spentHours": 0.4859141885145126
          },
          {
            "id": 4699954,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 301,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T21:22:46.330Z",
            "departure": "2023-07-21T21:22:46.330Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              471891,
              830969
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 40220.658697753264,
            "spentHours": 0.4678778492207927
          },
          {
            "id": 752043,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 3,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T20:13:13.719Z",
            "departure": "2023-07-21T20:13:13.719Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              627729,
              335319
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 79182.44070105061,
            "spentHours": 0.794554647547695
          }
        ],
        "spentHours": 0
      },
      {
        "id": 3772583,
        "vehicleId": 8406970,
        "vehiclePlate": "BKU00005",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_5",
        "positionTime": null,
        "total": 208053.7096436057,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          87740,
          672517
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 12748.09342059906,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6713927,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 614,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T11:40:31.904Z",
            "departure": "2023-07-21T11:40:31.904Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              417869,
              490995
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 52389.87012985252,
            "spentHours": 0.06822580775711229
          },
          {
            "id": 3848559,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 452,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T02:45:33.400Z",
            "departure": "2023-07-20T02:45:33.400Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              107508,
              977152
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 51830.606861983106,
            "spentHours": 0.8974042113533154
          },
          {
            "id": 8844617,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 671,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T07:54:12.920Z",
            "departure": "2023-07-21T07:54:12.920Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              23740,
              879539
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 88708.09351098996,
            "spentHours": 0.14485718008168313
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 5918855285,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00006",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_6",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 3629148,
        "vehicleId": 9170636,
        "vehiclePlate": "BKU00006",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_6",
        "positionTime": null,
        "total": 118186.94306622678,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          568756,
          943808
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 89886.61731117495,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1191523,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 635,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T04:05:01.237Z",
            "departure": "2023-07-21T04:05:01.237Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              253442,
              101597
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 31703.0254596367,
            "spentHours": 0.4407306170914236
          },
          {
            "id": 3079091,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 887,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T23:53:42.218Z",
            "departure": "2023-07-21T23:53:42.218Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              79504,
              215118
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 39101.95352408134,
            "spentHours": 0.032649417545239645
          },
          {
            "id": 4761466,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 92,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T14:09:54.115Z",
            "departure": "2023-07-21T14:09:54.115Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              260320,
              105986
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 551.7395854620854,
            "spentHours": 0.6210758739696938
          }
        ],
        "spentHours": 0
      },
      {
        "id": 5738409,
        "vehicleId": 8095400,
        "vehiclePlate": "BKU00006",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_6",
        "positionTime": null,
        "total": 611585.3769507483,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          55734,
          234786
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 41294.345294814884,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 819786,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 357,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T23:48:24.330Z",
            "departure": "2023-07-21T23:48:24.330Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              575672,
              436630
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 91326.80216998841,
            "spentHours": 0.5244525350349443
          },
          {
            "id": 3555020,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 409,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T20:04:29.304Z",
            "departure": "2023-07-21T20:04:29.304Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              97613,
              686128
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 14706.673993494413,
            "spentHours": 0.0241286604918991
          },
          {
            "id": 1545450,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 445,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T18:52:35.683Z",
            "departure": "2023-07-21T18:52:35.683Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              743892,
              687338
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 34728.83045705497,
            "spentHours": 0.2582441663712465
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 4590395136,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00007",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_7",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6214283,
        "vehicleId": 3430064,
        "vehiclePlate": "BKU00007",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_7",
        "positionTime": null,
        "total": 805506.9457403559,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          31908,
          824087
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 35265.477515999155,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6708512,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 951,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T21:09:58.922Z",
            "departure": "2023-07-20T21:09:58.922Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              657331,
              163104
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 58711.84069521036,
            "spentHours": 0.9944642483362269
          },
          {
            "id": 2037417,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 635,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T13:19:16.252Z",
            "departure": "2023-07-20T13:19:16.252Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              530585,
              75664
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 29972.04882011073,
            "spentHours": 0.018716265126818676
          },
          {
            "id": 3783210,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 820,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T04:05:43.310Z",
            "departure": "2023-07-20T04:05:43.310Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              444182,
              608054
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 21950.447417991458,
            "spentHours": 0.7939435665269339
          }
        ],
        "spentHours": 0
      },
      {
        "id": 2836526,
        "vehicleId": 7772400,
        "vehiclePlate": "BKU00007",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_7",
        "positionTime": null,
        "total": 358891.0793173816,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          821962,
          780730
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 71659.18155642916,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1541373,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 547,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T20:06:38.186Z",
            "departure": "2023-07-20T20:06:38.186Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              494057,
              680625
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 11751.875276145562,
            "spentHours": 0.9999659193197947
          },
          {
            "id": 9972652,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 170,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T21:46:58.989Z",
            "departure": "2023-07-20T21:46:58.989Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              595921,
              628973
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 13394.66261757345,
            "spentHours": 0.9052636802716012
          },
          {
            "id": 8305780,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 202,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T23:52:02.842Z",
            "departure": "2023-07-20T23:52:02.842Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              942886,
              35741
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 96474.60870824633,
            "spentHours": 0.6751082495908944
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 1059734871,
    "date": "2023-07-25T17:52:01.557Z",
    "vehiclePlate": "BKU00008",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_8",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 5347663,
        "vehicleId": 6495120,
        "vehiclePlate": "BKU00008",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_8",
        "positionTime": null,
        "total": 338654.80114734446,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          931932,
          87102
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 25811.888270110427,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7295885,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 884,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T15:41:44.346Z",
            "departure": "2023-07-20T15:41:44.346Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              902520,
              467465
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 21736.419972430143,
            "spentHours": 0.562987061754445
          },
          {
            "id": 1505812,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 703,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T20:01:09.063Z",
            "departure": "2023-07-20T20:01:09.063Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              446709,
              427892
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 6401.655329402067,
            "spentHours": 0.9594261611073831
          },
          {
            "id": 2550037,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 601,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T10:40:39.977Z",
            "departure": "2023-07-20T10:40:39.977Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              526116,
              684382
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 56299.001636785564,
            "spentHours": 0.4095263700937082
          }
        ],
        "spentHours": 0
      },
      {
        "id": 2522858,
        "vehicleId": 6831678,
        "vehiclePlate": "BKU00008",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_8",
        "positionTime": null,
        "total": 549706.5501149207,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.557Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          754157,
          835433
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 32916.64991842185,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 2897061,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 334,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T20:04:51.643Z",
            "departure": "2023-07-20T20:04:51.643Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              876242,
              445307
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 37196.86762401595,
            "spentHours": 0.8293562053213279
          },
          {
            "id": 3539091,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 736,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T13:00:11.612Z",
            "departure": "2023-07-20T13:00:11.612Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              182939,
              365780
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 92971.83127083466,
            "spentHours": 0.8207931404645938
          },
          {
            "id": 4001050,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 669,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T11:10:23.430Z",
            "departure": "2023-07-21T11:10:23.430Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              270890,
              882024
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 16808.00015525894,
            "spentHours": 0.08643239778212908
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 5645507570,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00009",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_9",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 513197,
        "vehicleId": 1184449,
        "vehiclePlate": "BKU00009",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_9",
        "positionTime": null,
        "total": 498936.4527196005,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          984095,
          148125
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 54476.321761176536,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9320608,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 832,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T14:11:41.206Z",
            "departure": "2023-07-21T14:11:41.206Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              439244,
              136141
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 42359.34374905062,
            "spentHours": 0.6599489292630856
          },
          {
            "id": 1267791,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 826,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T16:07:08.425Z",
            "departure": "2023-07-20T16:07:08.425Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              849207,
              727073
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 87811.66473725163,
            "spentHours": 0.9930780538876942
          },
          {
            "id": 9004210,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 499,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T22:22:26.460Z",
            "departure": "2023-07-20T22:22:26.460Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              477886,
              189261
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 38766.16563855577,
            "spentHours": 0.32482915478888663
          }
        ],
        "spentHours": 0
      },
      {
        "id": 1843437,
        "vehicleId": 9533784,
        "vehiclePlate": "BKU00009",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_9",
        "positionTime": null,
        "total": 629980.944364386,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          593895,
          937316
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 66023.30567263537,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 2787625,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 901,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T23:11:23.699Z",
            "departure": "2023-07-21T23:11:23.699Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              951794,
              777720
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 72507.02072233705,
            "spentHours": 0.14399865432854742
          },
          {
            "id": 24756,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 236,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T01:34:10.631Z",
            "departure": "2023-07-20T01:34:10.631Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              786968,
              886856
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 19138.36185902773,
            "spentHours": 0.7764314331501481
          },
          {
            "id": 8786797,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 30,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T17:25:17.485Z",
            "departure": "2023-07-21T17:25:17.485Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              358783,
              397526
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 42369.921650431206,
            "spentHours": 0.7108168450706507
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "online"
  },
  {
    "id": 8893875188,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00010",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_10",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6638027,
        "vehicleId": 7148178,
        "vehiclePlate": "BKU00010",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_10",
        "positionTime": null,
        "total": 96314.57599411064,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          399150,
          972938
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 7581.597565237197,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 550988,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 688,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T19:42:44.310Z",
            "departure": "2023-07-21T19:42:44.310Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              224657,
              341489
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 40866.40451840666,
            "spentHours": 0.5384128065523253
          },
          {
            "id": 2814129,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 162,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T13:43:29.625Z",
            "departure": "2023-07-21T13:43:29.625Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              459984,
              380674
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 92013.22670868135,
            "spentHours": 0.5654326327051853
          },
          {
            "id": 1525827,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 195,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T17:37:56.902Z",
            "departure": "2023-07-20T17:37:56.902Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              514648,
              591135
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 7405.605350330879,
            "spentHours": 0.9686144691064187
          }
        ],
        "spentHours": 0
      },
      {
        "id": 7221814,
        "vehicleId": 572301,
        "vehiclePlate": "BKU00010",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_10",
        "positionTime": null,
        "total": 937879.034737718,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          801329,
          750150
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 34196.53505323481,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 2080152,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 267,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T02:15:48.533Z",
            "departure": "2023-07-20T02:15:48.533Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              205112,
              597781
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 41527.63310892813,
            "spentHours": 0.601541281613204
          },
          {
            "id": 3379148,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 300,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T20:51:11.108Z",
            "departure": "2023-07-20T20:51:11.108Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              23111,
              363837
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 14526.772410465204,
            "spentHours": 0.5644263562149561
          },
          {
            "id": 4691939,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 304,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T14:09:42.816Z",
            "departure": "2023-07-21T14:09:42.816Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              582192,
              633960
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 31885.074549415738,
            "spentHours": 0.1520148282099072
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "online"
  },
  {
    "id": 1050605311,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00011",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_11",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 5852268,
        "vehicleId": 9050378,
        "vehiclePlate": "BKU00011",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_11",
        "positionTime": null,
        "total": 237712.9097884192,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          566623,
          709964
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 20408.414036082268,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6234873,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 163,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T15:38:03.279Z",
            "departure": "2023-07-20T15:38:03.279Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              393513,
              544150
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 29635.252248820954,
            "spentHours": 0.26386623880918325
          },
          {
            "id": 7079810,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 986,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T10:51:49.830Z",
            "departure": "2023-07-20T10:51:49.830Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              344677,
              419870
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 42411.00831482525,
            "spentHours": 0.18657158819977004
          },
          {
            "id": 4203945,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 429,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T09:57:08.934Z",
            "departure": "2023-07-20T09:57:08.934Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              548462,
              694733
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 29795.05424169653,
            "spentHours": 0.37893555975140325
          }
        ],
        "spentHours": 0
      },
      {
        "id": 5308302,
        "vehicleId": 3965313,
        "vehiclePlate": "BKU00011",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_11",
        "positionTime": null,
        "total": 97159.7348436557,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          902846,
          580796
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 96009.7381358532,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1298349,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 816,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T12:29:35.141Z",
            "departure": "2023-07-20T12:29:35.141Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              337298,
              323867
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 70326.74773071756,
            "spentHours": 0.09140867216241189
          },
          {
            "id": 1085512,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 145,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T00:49:15.177Z",
            "departure": "2023-07-21T00:49:15.177Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              516168,
              952493
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 37473.90133597581,
            "spentHours": 0.8011445685231591
          },
          {
            "id": 8496925,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 155,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T02:11:48.612Z",
            "departure": "2023-07-20T02:11:48.612Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              214282,
              564666
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 30431.390508020973,
            "spentHours": 0.604986967541359
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "online"
  },
  {
    "id": 275813347,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00012",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_12",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 3230258,
        "vehicleId": 4308532,
        "vehiclePlate": "BKU00012",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_12",
        "positionTime": null,
        "total": 673467.2580680375,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          806976,
          683338
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 98366.66293851395,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1011600,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 198,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T10:37:41.554Z",
            "departure": "2023-07-20T10:37:41.554Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              3329,
              350123
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 29203.737557576194,
            "spentHours": 0.2503344582175957
          },
          {
            "id": 7770716,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 503,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T15:30:54.363Z",
            "departure": "2023-07-20T15:30:54.363Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              866561,
              975449
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 12622.777169441846,
            "spentHours": 0.647729026980747
          },
          {
            "id": 894940,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 163,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T23:10:17.700Z",
            "departure": "2023-07-21T23:10:17.700Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              544805,
              86152
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 65758.07426811948,
            "spentHours": 0.9001753438925126
          }
        ],
        "spentHours": 0
      },
      {
        "id": 569646,
        "vehicleId": 4107814,
        "vehiclePlate": "BKU00012",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_12",
        "positionTime": null,
        "total": 394658.6838380328,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          369038,
          720778
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 31374.656576907233,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 3052881,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 832,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T19:51:08.907Z",
            "departure": "2023-07-20T19:51:08.907Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              135,
              393999
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 60514.97880237229,
            "spentHours": 0.7743454619456038
          },
          {
            "id": 3602621,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 436,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T08:13:38.221Z",
            "departure": "2023-07-21T08:13:38.221Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              932966,
              920563
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 86062.75230948486,
            "spentHours": 0.910467469406079
          },
          {
            "id": 5859490,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 255,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T07:54:13.539Z",
            "departure": "2023-07-20T07:54:13.539Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              804233,
              946132
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 42224.993704984445,
            "spentHours": 0.5001403926075607
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 5030690188,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00013",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_13",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 4551254,
        "vehicleId": 739649,
        "vehiclePlate": "BKU00013",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_13",
        "positionTime": null,
        "total": 339045.22819907457,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          749236,
          962262
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 49916.85392458693,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9078473,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 185,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T20:54:45.535Z",
            "departure": "2023-07-20T20:54:45.535Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              905131,
              800911
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 64162.54732937736,
            "spentHours": 0.034281364963433036
          },
          {
            "id": 228661,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 748,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T20:12:31.306Z",
            "departure": "2023-07-20T20:12:31.306Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              295914,
              255834
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 87092.25415291397,
            "spentHours": 0.1813881748513715
          },
          {
            "id": 6333670,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 597,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T20:18:38.939Z",
            "departure": "2023-07-21T20:18:38.939Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              244493,
              778716
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 1259.5813130479082,
            "spentHours": 0.1978530768119371
          }
        ],
        "spentHours": 0
      },
      {
        "id": 4886656,
        "vehicleId": 2173150,
        "vehiclePlate": "BKU00013",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_13",
        "positionTime": null,
        "total": 716952.8202679487,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          210519,
          297997
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 39607.03636928231,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 8039545,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 655,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T16:55:54.580Z",
            "departure": "2023-07-20T16:55:54.580Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              608355,
              414561
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 13227.883457817601,
            "spentHours": 0.980598162966358
          },
          {
            "id": 3469825,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 801,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T10:06:27.352Z",
            "departure": "2023-07-20T10:06:27.352Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              486025,
              797853
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 89361.48803616852,
            "spentHours": 0.019180409068421334
          },
          {
            "id": 4619269,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 501,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T08:53:32.653Z",
            "departure": "2023-07-20T08:53:32.653Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              935804,
              663119
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 67713.46633883691,
            "spentHours": 0.6049424154932483
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "online"
  },
  {
    "id": 2169654959,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00014",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_14",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 9243212,
        "vehicleId": 331402,
        "vehiclePlate": "BKU00014",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_14",
        "positionTime": null,
        "total": 304828.42356929154,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          706994,
          132529
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 29183.61489349608,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 8539579,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 405,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T02:18:17.214Z",
            "departure": "2023-07-21T02:18:17.214Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              8418,
              415220
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 6642.488711851469,
            "spentHours": 0.7599140763539645
          },
          {
            "id": 1067127,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 858,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T14:18:22.486Z",
            "departure": "2023-07-21T14:18:22.486Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              628352,
              370181
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 75603.48706232027,
            "spentHours": 0.879247600111172
          },
          {
            "id": 2298313,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 478,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T23:45:22.761Z",
            "departure": "2023-07-20T23:45:22.761Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              803929,
              380819
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 24711.26860092829,
            "spentHours": 0.9516181840608318
          }
        ],
        "spentHours": 0
      },
      {
        "id": 4638343,
        "vehicleId": 5629473,
        "vehiclePlate": "BKU00014",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_14",
        "positionTime": null,
        "total": 708783.6553944664,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          694592,
          575530
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 11776.81061502387,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 3721924,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 534,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T17:07:41.559Z",
            "departure": "2023-07-21T17:07:41.559Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              117088,
              175197
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 48470.18268455834,
            "spentHours": 0.09219589399056649
          },
          {
            "id": 593593,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 238,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T02:03:43.189Z",
            "departure": "2023-07-21T02:03:43.189Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              379700,
              970072
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 73519.66024993248,
            "spentHours": 0.6392638528875518
          },
          {
            "id": 7222617,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 362,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T03:30:25.885Z",
            "departure": "2023-07-21T03:30:25.885Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              250453,
              95736
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 16690.46067301161,
            "spentHours": 0.9346224997889356
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "offline"
  },
  {
    "id": 6594215937,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00015",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_15",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 7819756,
        "vehicleId": 9161213,
        "vehiclePlate": "BKU00015",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_15",
        "positionTime": null,
        "total": 29950.268783117906,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          125239,
          194383
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 22363.002377076114,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 4830565,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 541,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T11:30:59.885Z",
            "departure": "2023-07-20T11:30:59.885Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              927380,
              309943
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 82951.0177516047,
            "spentHours": 0.9259784485299576
          },
          {
            "id": 3620733,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 81,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T18:27:38.001Z",
            "departure": "2023-07-20T18:27:38.001Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              13006,
              924062
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 45942.105901159615,
            "spentHours": 0.9218477086672456
          },
          {
            "id": 2912008,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 575,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T03:04:58.355Z",
            "departure": "2023-07-21T03:04:58.355Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              247549,
              989672
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 98959.10421806769,
            "spentHours": 0.02364612034110869
          }
        ],
        "spentHours": 0
      },
      {
        "id": 8766950,
        "vehicleId": 2197842,
        "vehiclePlate": "BKU00015",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_15",
        "positionTime": null,
        "total": 960130.8168144979,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          827019,
          368611
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 96744.24548023766,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 2416032,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 353,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T19:08:34.168Z",
            "departure": "2023-07-20T19:08:34.168Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              828379,
              483283
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 64817.2823589437,
            "spentHours": 0.9108984600381052
          },
          {
            "id": 6137163,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 643,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T05:31:19.308Z",
            "departure": "2023-07-21T05:31:19.308Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              782859,
              576663
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 27915.12983350184,
            "spentHours": 0.6152834884932192
          },
          {
            "id": 2056947,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 999,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T05:56:29.827Z",
            "departure": "2023-07-20T05:56:29.827Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              736047,
              752019
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 36057.64107393492,
            "spentHours": 0.430931185900131
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "offline"
  },
  {
    "id": 9458555171,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00016",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_16",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 7589785,
        "vehicleId": 5056687,
        "vehiclePlate": "BKU00016",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_16",
        "positionTime": null,
        "total": 410192.1908240098,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          45629,
          313406
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 60795.88694691998,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 8060441,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 403,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T22:21:21.423Z",
            "departure": "2023-07-20T22:21:21.423Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              732255,
              393183
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 85763.68711570397,
            "spentHours": 0.6559629587904927
          },
          {
            "id": 3624963,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 385,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T10:14:37.917Z",
            "departure": "2023-07-21T10:14:37.917Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              987443,
              100124
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 93265.01502048496,
            "spentHours": 0.925725239831102
          },
          {
            "id": 6898727,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 446,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T21:50:18.731Z",
            "departure": "2023-07-20T21:50:18.731Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              333567,
              586504
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 68733.28681007946,
            "spentHours": 0.1339987255694448
          }
        ],
        "spentHours": 0
      },
      {
        "id": 2247531,
        "vehicleId": 5230458,
        "vehiclePlate": "BKU00016",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_16",
        "positionTime": null,
        "total": 539171.1168420892,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          952733,
          657781
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 62369.935073325265,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9942893,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 256,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T02:19:00.870Z",
            "departure": "2023-07-20T02:19:00.870Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              841901,
              276242
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 26390.190053953687,
            "spentHours": 0.7600655640426668
          },
          {
            "id": 688416,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 412,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T08:20:12.461Z",
            "departure": "2023-07-21T08:20:12.461Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              80884,
              390992
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 55782.83296268813,
            "spentHours": 0.9968055862197018
          },
          {
            "id": 2895090,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 334,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T06:42:08.541Z",
            "departure": "2023-07-21T06:42:08.541Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              389371,
              168051
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 92623.23917721272,
            "spentHours": 0.7365243897501019
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 8664001419,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00017",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_17",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 3141921,
        "vehicleId": 1997301,
        "vehiclePlate": "BKU00017",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_17",
        "positionTime": null,
        "total": 473688.960413414,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          965048,
          332451
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 9222.540688438841,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7917409,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 730,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T18:49:11.154Z",
            "departure": "2023-07-20T18:49:11.154Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              387113,
              39792
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 28673.16736632637,
            "spentHours": 0.1655976331709612
          },
          {
            "id": 8165477,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 759,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T10:33:28.648Z",
            "departure": "2023-07-20T10:33:28.648Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              318948,
              279875
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 15535.813335365845,
            "spentHours": 0.9398459401217885
          },
          {
            "id": 8097379,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 435,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T06:12:32.044Z",
            "departure": "2023-07-21T06:12:32.044Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              431271,
              292415
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 33713.72586106045,
            "spentHours": 0.48258087490992096
          }
        ],
        "spentHours": 0
      },
      {
        "id": 1261552,
        "vehicleId": 2674523,
        "vehiclePlate": "BKU00017",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_17",
        "positionTime": null,
        "total": 29954.80383008764,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          681009,
          363320
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 45756.9698077114,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1108340,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 916,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T01:40:32.876Z",
            "departure": "2023-07-21T01:40:32.876Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              126557,
              370328
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 17503.95264261182,
            "spentHours": 0.4548759787217316
          },
          {
            "id": 5503309,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 7,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:53:41.871Z",
            "departure": "2023-07-20T14:53:41.871Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              693759,
              680920
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 72560.64887746015,
            "spentHours": 0.41838274853006263
          },
          {
            "id": 9420212,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 911,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T01:58:59.780Z",
            "departure": "2023-07-20T01:58:59.780Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              822040,
              346613
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 74956.94487323287,
            "spentHours": 0.08074767057878418
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "CGA",
    "status": "offline"
  },
  {
    "id": 4053877511,
    "date": "2023-07-25T17:52:01.558Z",
    "vehiclePlate": "BKU00018",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_18",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 2048902,
        "vehicleId": 1000405,
        "vehiclePlate": "BKU00018",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_18",
        "positionTime": null,
        "total": 737967.3079023723,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          43651,
          744595
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 23599.541289787452,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7515600,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 717,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T01:51:04.896Z",
            "departure": "2023-07-21T01:51:04.896Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              664401,
              461909
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 85727.32621886862,
            "spentHours": 0.5146055442002062
          },
          {
            "id": 6446683,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 528,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T02:13:00.339Z",
            "departure": "2023-07-21T02:13:00.339Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              619432,
              671947
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 39405.36715597085,
            "spentHours": 0.7188503529982395
          },
          {
            "id": 433583,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 734,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T02:56:24.230Z",
            "departure": "2023-07-21T02:56:24.230Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              587840,
              824429
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 48107.35141256488,
            "spentHours": 0.6955174165527971
          }
        ],
        "spentHours": 0
      },
      {
        "id": 230382,
        "vehicleId": 7721323,
        "vehiclePlate": "BKU00018",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_18",
        "positionTime": null,
        "total": 676208.119655142,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.558Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          815440,
          337196
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 48204.14197586857,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6345927,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 254,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T16:20:56.166Z",
            "departure": "2023-07-21T16:20:56.166Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              789457,
              547740
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 20901.503304970982,
            "spentHours": 0.9019428805963319
          },
          {
            "id": 1116835,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 40,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T21:39:56.424Z",
            "departure": "2023-07-20T21:39:56.424Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              959929,
              931391
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 46413.12709931762,
            "spentHours": 0.2607706366763849
          },
          {
            "id": 3737098,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 298,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T23:36:22.392Z",
            "departure": "2023-07-20T23:36:22.392Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              242735,
              746751
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 59424.50285811169,
            "spentHours": 0.9663767286903042
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 7698447787,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00019",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_19",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 2315101,
        "vehicleId": 7454951,
        "vehiclePlate": "BKU00019",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_19",
        "positionTime": null,
        "total": 977491.1942541169,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          636644,
          574832
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 42719.993682103974,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 5651791,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 772,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T00:05:52.421Z",
            "departure": "2023-07-21T00:05:52.421Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              194996,
              142440
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 75722.04722066385,
            "spentHours": 0.05896796013658534
          },
          {
            "id": 251121,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 462,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T06:46:38.499Z",
            "departure": "2023-07-20T06:46:38.499Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              616394,
              106266
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 10723.161845296647,
            "spentHours": 0.1178711262183727
          },
          {
            "id": 7191247,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 492,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T00:44:11.167Z",
            "departure": "2023-07-21T00:44:11.167Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              644238,
              216275
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 91938.2083116138,
            "spentHours": 0.837654057208755
          }
        ],
        "spentHours": 0
      },
      {
        "id": 1710259,
        "vehicleId": 6603919,
        "vehiclePlate": "BKU00019",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_19",
        "positionTime": null,
        "total": 192471.77646684044,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          516129,
          771075
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 50000.04199966253,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9591916,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 622,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T21:31:49.166Z",
            "departure": "2023-07-20T21:31:49.166Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              670023,
              490523
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 25286.121728753886,
            "spentHours": 0.7499246952328762
          },
          {
            "id": 6446366,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 562,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T08:27:56.517Z",
            "departure": "2023-07-21T08:27:56.517Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              249847,
              305590
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 60820.300092390076,
            "spentHours": 0.6513309056296255
          },
          {
            "id": 1507016,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 186,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T08:45:39.611Z",
            "departure": "2023-07-20T08:45:39.611Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              934758,
              815969
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 94712.75689059819,
            "spentHours": 0.5663652937934673
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FIOCRUZ",
    "status": "offline"
  },
  {
    "id": 820489328,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00020",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_20",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6016462,
        "vehicleId": 714163,
        "vehiclePlate": "BKU00020",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_20",
        "positionTime": null,
        "total": 790488.8231822265,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          866386,
          744464
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 78801.24267540924,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9983257,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 772,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T10:55:18.672Z",
            "departure": "2023-07-21T10:55:18.672Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              815665,
              422441
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 10800.737510076597,
            "spentHours": 0.6493668627232636
          },
          {
            "id": 2912746,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 28,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T13:13:38.984Z",
            "departure": "2023-07-20T13:13:38.984Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              648192,
              780083
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 54745.07722688373,
            "spentHours": 0.7564093547437689
          },
          {
            "id": 725050,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 945,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T19:10:13.526Z",
            "departure": "2023-07-20T19:10:13.526Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              9017,
              21984
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 7433.632813246893,
            "spentHours": 0.1737361448097754
          }
        ],
        "spentHours": 0
      },
      {
        "id": 3234363,
        "vehicleId": 7355870,
        "vehiclePlate": "BKU00020",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_20",
        "positionTime": null,
        "total": 746972.7669642527,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          511270,
          52247
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 68646.1107908336,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 49728,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 12,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T14:38:36.946Z",
            "departure": "2023-07-20T14:38:36.946Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              172919,
              254066
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 65199.815686897164,
            "spentHours": 0.650988967231463
          },
          {
            "id": 1277373,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 216,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T11:08:15.145Z",
            "departure": "2023-07-21T11:08:15.145Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              656806,
              14729
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 38145.12801318526,
            "spentHours": 0.6101128556327826
          },
          {
            "id": 2517406,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 168,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T04:47:36.727Z",
            "departure": "2023-07-21T04:47:36.727Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              329637,
              726446
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 72854.0383452108,
            "spentHours": 0.17913680348099859
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 2417823172,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00021",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_21",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 3207381,
        "vehicleId": 1896090,
        "vehiclePlate": "BKU00021",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_21",
        "positionTime": null,
        "total": 278301.7748608916,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          635130,
          328029
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 93422.129464435,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7519937,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 334,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T08:10:18.747Z",
            "departure": "2023-07-20T08:10:18.747Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              42026,
              564764
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 3771.3068214345167,
            "spentHours": 0.38134427431742535
          },
          {
            "id": 2906397,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 447,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T11:37:34.105Z",
            "departure": "2023-07-21T11:37:34.105Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              655420,
              564192
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 29213.588766581845,
            "spentHours": 0.47740996263464974
          },
          {
            "id": 3510064,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 769,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T17:16:00.423Z",
            "departure": "2023-07-21T17:16:00.423Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              523242,
              35369
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 27059.078505396283,
            "spentHours": 0.17186313609012394
          }
        ],
        "spentHours": 0
      },
      {
        "id": 9061779,
        "vehicleId": 5811871,
        "vehiclePlate": "BKU00021",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_21",
        "positionTime": null,
        "total": 423624.65006338357,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          883544,
          506815
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 44149.20092932475,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9949748,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 868,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T10:37:15.460Z",
            "departure": "2023-07-20T10:37:15.460Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              471589,
              575883
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 60402.94255469674,
            "spentHours": 0.824166952259495
          },
          {
            "id": 7807109,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 109,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T03:24:53.427Z",
            "departure": "2023-07-20T03:24:53.427Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              963948,
              372566
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 25420.61292207225,
            "spentHours": 0.16870083159919602
          },
          {
            "id": 290735,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 185,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T05:30:49.807Z",
            "departure": "2023-07-20T05:30:49.807Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              346689,
              845165
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 60617.75105061242,
            "spentHours": 0.24682709388493995
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "VIVA",
    "status": "online"
  },
  {
    "id": 4286207606,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00022",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_22",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6005526,
        "vehicleId": 4257968,
        "vehiclePlate": "BKU00022",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_22",
        "positionTime": null,
        "total": 243322.46113817592,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          112888,
          825350
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 45754.49377948011,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 4791850,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 640,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T11:39:22.096Z",
            "departure": "2023-07-20T11:39:22.096Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              75063,
              35168
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 89806.08957739033,
            "spentHours": 0.2574844101498994
          },
          {
            "id": 2191735,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 280,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T03:57:57.778Z",
            "departure": "2023-07-20T03:57:57.778Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              29738,
              696942
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 10322.36462458751,
            "spentHours": 0.8077103365083316
          },
          {
            "id": 3309386,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 218,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T11:48:34.521Z",
            "departure": "2023-07-21T11:48:34.521Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              463842,
              926622
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 46409.931102196046,
            "spentHours": 0.21923514327942972
          }
        ],
        "spentHours": 0
      },
      {
        "id": 3460384,
        "vehicleId": 8008713,
        "vehiclePlate": "BKU00022",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_22",
        "positionTime": null,
        "total": 654961.4685675658,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          57763,
          779133
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 59315.31484567469,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 4155340,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 344,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T22:49:19.763Z",
            "departure": "2023-07-20T22:49:19.763Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              307540,
              61156
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 48936.18182715751,
            "spentHours": 0.21608392226596407
          },
          {
            "id": 2906111,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 763,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T17:51:59.194Z",
            "departure": "2023-07-20T17:51:59.194Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              793751,
              548961
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 69916.15719616746,
            "spentHours": 0.03371242263183061
          },
          {
            "id": 9981928,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 876,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T04:38:37.954Z",
            "departure": "2023-07-20T04:38:37.954Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              463898,
              412103
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 10866.708504724953,
            "spentHours": 0.6001676717021454
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "offline"
  },
  {
    "id": 8268077577,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00023",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_23",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 2585602,
        "vehicleId": 8842527,
        "vehiclePlate": "BKU00023",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_23",
        "positionTime": null,
        "total": 141941.73327300418,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          186335,
          574715
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 69393.3726754333,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7093713,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 381,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T12:40:10.575Z",
            "departure": "2023-07-20T12:40:10.575Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              345604,
              127980
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 62632.90729935287,
            "spentHours": 0.04102607520377766
          },
          {
            "id": 6227613,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 258,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T12:43:17.970Z",
            "departure": "2023-07-21T12:43:17.970Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              109884,
              59339
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 56331.623342740844,
            "spentHours": 0.831869562381798
          },
          {
            "id": 9310014,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 927,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T07:45:25.717Z",
            "departure": "2023-07-21T07:45:25.717Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              440613,
              285710
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 31773.930971854126,
            "spentHours": 0.0015755940120498746
          }
        ],
        "spentHours": 0
      },
      {
        "id": 1372424,
        "vehicleId": 3979430,
        "vehiclePlate": "BKU00023",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_23",
        "positionTime": null,
        "total": 438111.55923127563,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          391008,
          113700
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 20353.775325505376,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 4199322,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 643,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T09:22:42.552Z",
            "departure": "2023-07-20T09:22:42.552Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              988935,
              220478
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 88322.22511932006,
            "spentHours": 0.4235722983772505
          },
          {
            "id": 5769629,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 820,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T14:54:04.859Z",
            "departure": "2023-07-21T14:54:04.859Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              861654,
              962847
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 84327.33743503875,
            "spentHours": 0.4856794441014629
          },
          {
            "id": 1116915,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 238,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T06:53:16.199Z",
            "departure": "2023-07-21T06:53:16.199Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              448124,
              205158
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 53655.58686961605,
            "spentHours": 0.46963532080651227
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "offline"
  },
  {
    "id": 1890456982,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00024",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_24",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 7692089,
        "vehicleId": 6941406,
        "vehiclePlate": "BKU00024",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_24",
        "positionTime": null,
        "total": 771247.7689181858,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          98827,
          467906
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 33882.0366750767,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 191679,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 206,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T12:28:19.784Z",
            "departure": "2023-07-20T12:28:19.784Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              408526,
              571578
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 45624.48535875683,
            "spentHours": 0.5085486321116801
          },
          {
            "id": 7198987,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 951,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T21:47:38.709Z",
            "departure": "2023-07-21T21:47:38.709Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              620917,
              590510
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 36106.8275042971,
            "spentHours": 0.7521571233732676
          },
          {
            "id": 2594226,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 172,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:18:32.887Z",
            "departure": "2023-07-20T14:18:32.887Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              76917,
              252164
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 34549.4725455541,
            "spentHours": 0.5182497715888423
          }
        ],
        "spentHours": 0
      },
      {
        "id": 7662118,
        "vehicleId": 3734747,
        "vehiclePlate": "BKU00024",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_24",
        "positionTime": null,
        "total": 175117.73413147934,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          914557,
          398272
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 31545.763914315183,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 7826279,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 831,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T11:29:46.404Z",
            "departure": "2023-07-20T11:29:46.404Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              73480,
              321762
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 66707.3289575683,
            "spentHours": 0.1319471542416668
          },
          {
            "id": 3175121,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 261,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T00:05:00.476Z",
            "departure": "2023-07-21T00:05:00.476Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              496031,
              53554
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 97166.97768933367,
            "spentHours": 0.3085185672244255
          },
          {
            "id": 5618711,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 524,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T04:36:06.413Z",
            "departure": "2023-07-21T04:36:06.413Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              812177,
              460162
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 85529.49317531071,
            "spentHours": 0.44958936725041343
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FIOCRUZ",
    "status": "offline"
  },
  {
    "id": 9619927303,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00025",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_25",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 6870387,
        "vehicleId": 2604560,
        "vehiclePlate": "BKU00025",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_25",
        "positionTime": null,
        "total": 135798.32248565648,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          303731,
          69265
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 73595.78160226965,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 1361525,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 164,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T05:32:37.315Z",
            "departure": "2023-07-21T05:32:37.315Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              758115,
              729512
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 93833.15308536215,
            "spentHours": 0.43117084040619513
          },
          {
            "id": 9007659,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 174,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T01:50:31.172Z",
            "departure": "2023-07-21T01:50:31.172Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              561223,
              12825
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 76434.79632458177,
            "spentHours": 0.9676789257977918
          },
          {
            "id": 5697965,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 208,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T18:32:06.332Z",
            "departure": "2023-07-21T18:32:06.332Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              161191,
              517948
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 75170.97745863133,
            "spentHours": 0.7682120572542384
          }
        ],
        "spentHours": 0
      },
      {
        "id": 3196282,
        "vehicleId": 1139226,
        "vehiclePlate": "BKU00025",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_25",
        "positionTime": null,
        "total": 961231.9158239373,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          833063,
          488004
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 86000.69751760815,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 6744959,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 331,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T14:22:39.763Z",
            "departure": "2023-07-21T14:22:39.763Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              918626,
              337999
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 32206.672495735056,
            "spentHours": 0.6793923573960459
          },
          {
            "id": 5858931,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 41,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T03:04:39.252Z",
            "departure": "2023-07-21T03:04:39.252Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              591025,
              307363
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 52399.69063381902,
            "spentHours": 0.002713408348726354
          },
          {
            "id": 6052141,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 922,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T05:00:19.774Z",
            "departure": "2023-07-20T05:00:19.774Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              490869,
              336235
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 73315.35745517112,
            "spentHours": 0.1692650850854287
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "VIVA",
    "status": "offline"
  },
  {
    "id": 3996958131,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00026",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_26",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 8430650,
        "vehicleId": 9130963,
        "vehiclePlate": "BKU00026",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_26",
        "positionTime": null,
        "total": 994670.8559796489,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          694155,
          135029
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 79431.76385650596,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 5871627,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 267,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T04:14:16.817Z",
            "departure": "2023-07-20T04:14:16.817Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              667712,
              959944
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 34783.63177146282,
            "spentHours": 0.08693675207428697
          },
          {
            "id": 6233946,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 8,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T18:10:10.445Z",
            "departure": "2023-07-20T18:10:10.445Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              298068,
              997558
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 65916.1040855583,
            "spentHours": 0.09811269746117035
          },
          {
            "id": 6903853,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 823,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T16:35:18.527Z",
            "departure": "2023-07-20T16:35:18.527Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              56541,
              942289
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 8261.331138891936,
            "spentHours": 0.8379536025621892
          }
        ],
        "spentHours": 0
      },
      {
        "id": 9735788,
        "vehicleId": 4022943,
        "vehiclePlate": "BKU00026",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_26",
        "positionTime": null,
        "total": 681773.620264811,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          748013,
          896725
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 54455.32531640345,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 9792389,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 798,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T02:28:09.829Z",
            "departure": "2023-07-21T02:28:09.829Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              834797,
              708782
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 35860.79969839104,
            "spentHours": 0.4128404723254151
          },
          {
            "id": 5542610,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 472,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T02:10:35.712Z",
            "departure": "2023-07-20T02:10:35.712Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 3,
            "ordersNumber": [
              605682,
              973485
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 21451.70450526448,
            "spentHours": 0.8233521961116941
          },
          {
            "id": 4746127,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 441,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T16:41:48.891Z",
            "departure": "2023-07-20T16:41:48.891Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              756843,
              427192
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 85926.27154906876,
            "spentHours": 0.3427976050134358
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "MEDKA",
    "status": "online"
  },
  {
    "id": 2904546751,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00027",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_27",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 9426030,
        "vehicleId": 8035420,
        "vehiclePlate": "BKU00027",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_27",
        "positionTime": null,
        "total": 915686.8729287672,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          692413,
          238782
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 22351.167043941976,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 314793,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 52,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T14:09:26.559Z",
            "departure": "2023-07-20T14:09:26.559Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              793721,
              32215
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 71873.27059518333,
            "spentHours": 0.6327607108571576
          },
          {
            "id": 6246078,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 488,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T03:30:48.190Z",
            "departure": "2023-07-20T03:30:48.190Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              202826,
              823300
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 40458.4050724113,
            "spentHours": 0.7581926214865875
          },
          {
            "id": 8249902,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 413,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T15:52:32.453Z",
            "departure": "2023-07-21T15:52:32.453Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              719427,
              115531
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 72358.80691119363,
            "spentHours": 0.09469589019762137
          }
        ],
        "spentHours": 0
      },
      {
        "id": 4738074,
        "vehicleId": 1633305,
        "vehiclePlate": "BKU00027",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_27",
        "positionTime": null,
        "total": 693813.1280184614,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          940070,
          907675
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 76529.05618840373,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 650442,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 994,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T04:01:13.790Z",
            "departure": "2023-07-20T04:01:13.790Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 7,
            "ordersNumber": [
              455770,
              693197
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 29388.632953650464,
            "spentHours": 0.08757491160241426
          },
          {
            "id": 3052837,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 618,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T11:56:23.692Z",
            "departure": "2023-07-20T11:56:23.692Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              932499,
              663100
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 69117.6995824468,
            "spentHours": 0.5900393579947438
          },
          {
            "id": 3939593,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 534,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T09:29:22.307Z",
            "departure": "2023-07-20T09:29:22.307Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              895947,
              763217
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 92470.06689690438,
            "spentHours": 0.22645066956906867
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FIOCRUZ",
    "status": "online"
  },
  {
    "id": 9335405236,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00028",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_28",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 4719778,
        "vehicleId": 767163,
        "vehiclePlate": "BKU00028",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_28",
        "positionTime": null,
        "total": 965771.041623268,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          900596,
          669992
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 82398.60908074265,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 3816243,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 643,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T18:33:53.151Z",
            "departure": "2023-07-21T18:33:53.151Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              779247,
              860514
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 43716.361520368286,
            "spentHours": 0.5890388747786144
          },
          {
            "id": 2950730,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 826,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T03:47:57.234Z",
            "departure": "2023-07-20T03:47:57.234Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              961192,
              634781
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 67425.78363970222,
            "spentHours": 0.8964441188120624
          },
          {
            "id": 4251470,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 308,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T05:35:17.033Z",
            "departure": "2023-07-20T05:35:17.033Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 1,
            "ordersNumber": [
              368818,
              293064
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 23638.3669301224,
            "spentHours": 0.5035365069893545
          }
        ],
        "spentHours": 0
      },
      {
        "id": 2643159,
        "vehicleId": 6270095,
        "vehiclePlate": "BKU00028",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_28",
        "positionTime": null,
        "total": 920224.5572788741,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          961258,
          117313
        ],
        "serviceNumber": [
          "192033"
        ],
        "startOdometer": 3281.557076356889,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 5538779,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 785,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T12:48:08.705Z",
            "departure": "2023-07-21T12:48:08.705Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              89057,
              511763
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 40563.93665835763,
            "spentHours": 0.0789934821732845
          },
          {
            "id": 8704001,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 124,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T20:29:59.634Z",
            "departure": "2023-07-21T20:29:59.634Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 0,
            "ordersNumber": [
              384662,
              848115
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 77689.57507866646,
            "spentHours": 0.5928623051742483
          },
          {
            "id": 2025094,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 245,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T13:05:39.215Z",
            "departure": "2023-07-20T13:05:39.215Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 2,
            "ordersNumber": [
              420149,
              367897
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 45608.31987724692,
            "spentHours": 0.13911202544126366
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "FSERJ",
    "status": "online"
  },
  {
    "id": 8118338753,
    "date": "2023-07-25T17:52:01.559Z",
    "vehiclePlate": "BKU00029",
    "vehiclePhotoUrl": "http://res.cloudinary.com/dvzlcxrvw/image/upload/v1572005739/vehicles/z_KXH_9353_pos2ie.jpg",
    "driverFirstName": "Driver_29",
    "vehicleTypeName": "Van Baú Refrigerado",
    "itineraries": [
      {
        "id": 9168516,
        "vehicleId": 9355505,
        "vehiclePlate": "BKU00029",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_29",
        "positionTime": null,
        "total": 503156.92723267456,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          435349,
          35402
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 82725.08069417132,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 8547405,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 218,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-20T03:23:39.254Z",
            "departure": "2023-07-20T03:23:39.254Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 6,
            "ordersNumber": [
              720762,
              170259
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 25697.721967179765,
            "spentHours": 0.6031559797379058
          },
          {
            "id": 8529429,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 99,
            "personName": "RIOFARMES - CENTRO",
            "arrivalTime": "2023-07-21T09:25:18.758Z",
            "departure": "2023-07-21T09:25:18.758Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              624509,
              791509
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 37497.85299369728,
            "spentHours": 0.885452673345501
          },
          {
            "id": 9200852,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 663,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T22:41:58.921Z",
            "departure": "2023-07-21T22:41:58.921Z",
            "taskStatus": "NOT_STARTED",
            "taskType": "DELIVER",
            "spentTime": 4,
            "ordersNumber": [
              246048,
              186986
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 91065.47922476394,
            "spentHours": 0.7972364088526813
          }
        ],
        "spentHours": 0
      },
      {
        "id": 3408640,
        "vehicleId": 7969434,
        "vehiclePlate": "BKU00029",
        "vehiclePhotoUrl": "",
        "driverFirstName": "Driver_29",
        "positionTime": null,
        "total": 27417.245577483263,
        "vehicleTypeName": "Van Baú Refrigerado",
        "startTime": "2023-07-25T17:52:01.559Z",
        "endTime": null,
        "spentTime": null,
        "number": null,
        "ordersNumber": [
          3026,
          84362
        ],
        "serviceNumber": [
          "192024"
        ],
        "startOdometer": 76967.42650663313,
        "endOdometer": null,
        "driverAssistant": 0,
        "tasks": [
          {
            "id": 8992141,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 10,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T03:50:20.872Z",
            "departure": "2023-07-20T03:50:20.872Z",
            "taskStatus": "COMPLETED",
            "taskType": "DELIVER",
            "spentTime": 8,
            "ordersNumber": [
              963555,
              961148
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 41631.18632353126,
            "spentHours": 0.39706214679688956
          },
          {
            "id": 8466683,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 683,
            "personName": "CGA",
            "arrivalTime": "2023-07-21T00:08:55.419Z",
            "departure": "2023-07-21T00:08:55.419Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 9,
            "ordersNumber": [
              149105,
              799509
            ],
            "serviceNumber": [
              "192033"
            ],
            "odometer": 26620.319156743146,
            "spentHours": 0.011164040837024825
          },
          {
            "id": 8156103,
            "pickupPersonName": null,
            "pickupPersonId": null,
            "personExternalId": 185,
            "personName": "CGA",
            "arrivalTime": "2023-07-20T15:16:45.843Z",
            "departure": "2023-07-20T15:16:45.843Z",
            "taskStatus": "IN_PROGRESS",
            "taskType": "DELIVER",
            "spentTime": 5,
            "ordersNumber": [
              846940,
              302946
            ],
            "serviceNumber": [
              "192024"
            ],
            "odometer": 38337.05137168546,
            "spentHours": 0.9648162829089211
          }
        ],
        "spentHours": 0
      }
    ],
    "projectName": "VIVA",
    "status": "online"
  }
]