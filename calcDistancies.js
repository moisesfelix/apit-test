const axios = require("axios");

const data = JSON.parse([
		{
			"id": "0fd5f880-8f82-455c-b5d9-b5d9b5e05bb3",
			"number": "45745",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528996",
					"number": "44491",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "40e03cce-505e-45d5-b507-e59f755e4f52",
			"number": "45810",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528998",
					"number": "44494",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "b2b474b6-479a-41f6-87ef-591ef01ff482",
			"number": "45668",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528999",
					"number": "44488",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "5e2c2c05-1459-4c74-ab8e-6e8e456b78ea",
			"number": "205803",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528920",
					"number": "199367",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444515",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CAMPOS DOS GOYTACAZES",
				"id": "506"
			},
			"address": {
				"latitude": -21.754768,
				"longitude": -41.32973
			}
		},
		{
			"id": "22d28906-18f6-41dd-b8ca-a88c86c339d9",
			"number": "45744",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529002",
					"number": "44489",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "3349640b-e06b-413d-8448-72541506bf8a",
			"number": "45347",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529001",
					"number": "44493",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "f4cdbb26-8de3-4139-8ef5-ae08bf9350e9",
			"number": "45735",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529006",
					"number": "44495",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "d2bc657f-6f6e-4e4a-8cb6-16e966693612",
			"number": "45371",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529009",
					"number": "44500",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "1a402a73-77c3-433f-ada4-59bf15b3c9e4",
			"number": "45594",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529010",
					"number": "44502",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "6e9504ab-418b-4c37-9aa7-4d2f1f8bb51c",
			"number": "205788",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528918",
					"number": "199365",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444515",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CAMPOS DOS GOYTACAZES",
				"id": "506"
			},
			"address": {
				"latitude": -21.754768,
				"longitude": -41.32973
			}
		},
		{
			"id": "8bb17c0f-d0dc-4988-9310-4e52aef95d3d",
			"number": "45592",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529014",
					"number": "44503",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "a40b681a-069c-47f0-bc55-1cd07aad86a3",
			"number": "45391",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529003",
					"number": "44490",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "1d52c56d-ba8e-4b76-b07e-3bdc69b2aad7",
			"number": "45419",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529007",
					"number": "44501",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "c03e5d38-ed38-4231-8972-3df73b64846c",
			"number": "45590",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529008",
					"number": "44498",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "f6e13ae9-db55-4ac7-b2d3-212c945124ae",
			"number": "45751",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529011",
					"number": "44497",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "0e432d48-5920-4624-bed7-ce4b70885e6b",
			"number": "45812",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529012",
					"number": "44506",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "346342d2-e9a9-4e20-9861-4fcffff82d6f",
			"number": "45429",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529016",
					"number": "44508",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "7d2dbbe6-a0f2-4cb2-95b4-4c1fa6c35ed8",
			"number": "45611",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529021",
					"number": "44510",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "48c7d73a-3019-4cc9-818d-c03564f7e517",
			"number": "45609",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529022",
					"number": "44512",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "28b04b11-8351-4db2-a893-97c70419bf79",
			"number": "45608",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529013",
					"number": "44509",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "783f6172-2b9c-448e-bba9-c5edd75a75c7",
			"number": "45811",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529018",
					"number": "44504",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "59966b1c-6108-4f2d-9c93-1ac101df2bbc",
			"number": "45605",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529023",
					"number": "44514",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "47d426b6-2012-461d-9d78-6bb275509c19",
			"number": "7286",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528902",
					"number": "7121",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444499",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR. SERGIO AROUCA",
				"id": "2565"
			},
			"address": {
				"latitude": -22.904937,
				"longitude": -43.098293
			}
		},
		{
			"id": "cf6d70df-a1c0-4e7b-a111-20cd659ded00",
			"number": "45380",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529019",
					"number": "44511",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "b31ecc50-c410-4412-9ee1-fa76af4302f7",
			"number": "45606",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529020",
					"number": "44513",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "2f397a04-636c-4352-a58c-54be1a455fb5",
			"number": "45591",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529015",
					"number": "44505",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "1b95eda9-3846-478d-8533-e34da1f22693",
			"number": "7292",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528876",
					"number": "7110",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444500",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL UNIVERSITARIO ANTONIO PEDRO",
				"id": "2930"
			},
			"address": {
				"latitude": -22.895648,
				"longitude": -43.11244
			}
		},
		{
			"id": "7b0e0d62-7a50-4f02-930e-bbcb9607ab15",
			"number": "45610",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529017",
					"number": "44507",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF VALTER FELISBINO DE SOUZA - AP. 3.1",
				"id": "2728"
			},
			"address": {
				"latitude": -22.8544757405,
				"longitude": -43.2646786179
			}
		},
		{
			"id": "a059d6c4-6443-49c1-a998-eba1d8d276c8",
			"number": "205633",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528794",
					"number": "199319",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444520",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MIGUEL PEREIRA",
				"id": "536"
			},
			"address": {
				"latitude": -22.450375,
				"longitude": -43.461106
			}
		},
		{
			"id": "605dbd9c-e0d6-431e-8932-2247687e737f",
			"number": "205800",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528947",
					"number": "199394",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444520",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MIGUEL PEREIRA",
				"id": "536"
			},
			"address": {
				"latitude": -22.450375,
				"longitude": -43.461106
			}
		},
		{
			"id": "fbfcb689-e875-4af5-84ce-89a3ac526ad9",
			"number": "45448",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528997",
					"number": "44487",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "96e7da48-36d3-4a8d-9206-0d13250895fd",
			"number": "45743",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529000",
					"number": "44492",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "4fd6addb-ff4c-4076-833c-0864d7f759ca",
			"number": "45460",
			"delivery_type": "COMPLEMENTO",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529004",
					"number": "44499",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "9c5f5a8e-6332-43a0-9b4d-60289200e6e8",
			"number": "45736",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9529005",
					"number": "44496",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "7bfc995d-5bb2-4eb0-a23b-38d243303e7b",
			"number": "7343",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528894",
					"number": "7115",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444494",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CAFUBÁ 1 - ERNESTO CHE GUEVARA 1",
				"id": "2610"
			},
			"address": {
				"latitude": -22.936281,
				"longitude": -43.084655
			}
		},
		{
			"id": "13ff111b-65e7-4513-95c7-dfd43648a83e",
			"number": "205268",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528808",
					"number": "199333",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444521",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VALENÇA",
				"id": "538"
			},
			"address": {
				"latitude": -22.247151,
				"longitude": -43.699073
			}
		},
		{
			"id": "5343b704-b700-4d33-9eea-702b4c57f69e",
			"number": "205799",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528942",
					"number": "199388",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444521",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VALENÇA",
				"id": "538"
			},
			"address": {
				"latitude": -22.247151,
				"longitude": -43.699073
			}
		},
		{
			"id": "0ebd61aa-7a93-427a-bff5-2bff1f073cf2",
			"number": "7387",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528948",
					"number": "7128",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444491",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CAFUBÁ 2 - ERNESTO CHE GUEVARA 2",
				"id": "2612"
			},
			"address": {
				"latitude": -22.933863,
				"longitude": -43.071149
			}
		},
		{
			"id": "dee5649e-66af-4f6a-a46c-276e480e2bdf",
			"number": "205736",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528944",
					"number": "199393",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444512",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VOLTA REDONDA",
				"id": "532"
			},
			"address": {
				"latitude": -22.504584,
				"longitude": -44.094211
			}
		},
		{
			"id": "d8568c6c-9af0-4a32-a97c-3d44d837d41d",
			"number": "205665",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528761",
					"number": "199303",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CANTAGALO",
				"id": "507"
			},
			"address": {
				"latitude": -21.986835,
				"longitude": -42.373923
			}
		},
		{
			"id": "eb91a768-e897-405f-a452-97ddb3409bf4",
			"number": "6596",
			"delivery_type": "RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528780",
					"number": "6263",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - GERENCIA DE IMUNIZAÇAO - VASCO BARCELOS",
				"id": "2979"
			},
			"address": {
				"latitude": -2276048507861,
				"longitude": -4344997373068
			}
		},
		{
			"id": "f6a930c4-39bf-4283-98d0-f4061cce334a",
			"number": "205142",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528764",
					"number": "199302",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "c45514e7-b81b-44d9-8131-ebfd07750e7f",
			"number": "205341",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528809",
					"number": "199340",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "6eccd602-85c3-4a1e-9eae-83dfdf81ad5f",
			"number": "205634",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528817",
					"number": "199339",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "7f157be0-17b1-4abf-8cd0-62d4bef26792",
			"number": "205793",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528924",
					"number": "199372",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "9995f128-a5b9-4a8b-b7b0-d69f92073df8",
			"number": "205737",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528946",
					"number": "199391",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "91d7a9d3-5c3b-43ca-be6d-baee5fbb6a94",
			"number": "205260",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528812",
					"number": "199334",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444520",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MIGUEL PEREIRA",
				"id": "536"
			},
			"address": {
				"latitude": -22.450375,
				"longitude": -43.461106
			}
		},
		{
			"id": "3a7cc107-8c8c-41bd-a8c7-67fdd26a0ea2",
			"number": "205667",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528762",
					"number": "199305",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FIDELIS",
				"id": "572"
			},
			"address": {
				"latitude": -21.64583,
				"longitude": -41.746783
			}
		},
		{
			"id": "c8694869-21cf-4826-9ebb-6769bcdfa201",
			"number": "205452",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528765",
					"number": "199306",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - NITEROI",
				"id": "498"
			},
			"address": {
				"latitude": -22.905756,
				"longitude": -43.097143
			}
		},
		{
			"id": "026339c5-ea46-4192-85fc-8687bc573a96",
			"number": "205671",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528781",
					"number": "199307",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CARAPEBUS",
				"id": "508"
			},
			"address": {
				"latitude": -22.184178,
				"longitude": -41.65962
			}
		},
		{
			"id": "4297bb8c-7bad-4927-8546-59031e4fd34e",
			"number": "7250",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528767",
					"number": "7086",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444502",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "VIPACAF",
				"id": "2852"
			},
			"address": {
				"latitude": -22.893338,
				"longitude": -43.122052
			}
		},
		{
			"id": "c08ccc54-cd0e-4413-bb41-710887fe159f",
			"number": "7360",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528774",
					"number": "7088",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "FE SAUDE",
				"id": "2555"
			},
			"address": {
				"latitude": -22.8823465326,
				"longitude": -43.1226639735
			}
		},
		{
			"id": "0bcec4fd-0448-428b-8799-b987b4a3f596",
			"number": "205626",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528783",
					"number": "199312",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "a1d66c5d-20bc-486e-be71-40b506d1135f",
			"number": "205695",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528786",
					"number": "199309",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - QUISSAMA",
				"id": "587"
			},
			"address": {
				"latitude": -22.109873,
				"longitude": -41.468671
			}
		},
		{
			"id": "e5277b67-3515-4c03-852b-8690760c6c38",
			"number": "7294",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528773",
					"number": "7089",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444499",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR. SERGIO AROUCA",
				"id": "2565"
			},
			"address": {
				"latitude": -22.904937,
				"longitude": -43.098293
			}
		},
		{
			"id": "4b47fc29-e3f4-4103-ac31-62a53d08e78c",
			"number": "7299",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528770",
					"number": "7094",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444495",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
				"id": "2628"
			},
			"address": {
				"latitude": -22.937975,
				"longitude": -43.130693
			}
		},
		{
			"id": "84916df8-df8d-4ce5-aa86-b670d44c33a5",
			"number": "205369",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528787",
					"number": "199314",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TRAJANO DE MORAES",
				"id": "546"
			},
			"address": {
				"latitude": -22.063385,
				"longitude": -42.0629
			}
		},
		{
			"id": "90a39a43-9cbf-49f6-9eb7-61e207ff0ab3",
			"number": "205365",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528791",
					"number": "199313",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - PINHEIRAL",
				"id": "574"
			},
			"address": {
				"latitude": -22.518924,
				"longitude": -43.995471
			}
		},
		{
			"id": "e06e8ce2-5ae4-42ef-af77-ad04d70c5170",
			"number": "205556",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528795",
					"number": "199323",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - ITAPERUNA",
				"id": "523"
			},
			"address": {
				"latitude": -21.201594,
				"longitude": -41.891872
			}
		},
		{
			"id": "502906b9-8de1-4d0a-a5ec-9b742cfd0d4c",
			"number": "205598",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528800",
					"number": "199326",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "173a63c0-9474-4372-a9d1-db1305ab7354",
			"number": "205656",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528804",
					"number": "199329",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - NITEROI",
				"id": "498"
			},
			"address": {
				"latitude": -22.905756,
				"longitude": -43.097143
			}
		},
		{
			"id": "9d77604a-cc45-4904-9ab4-1692f02b5396",
			"number": "205672",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528793",
					"number": "199325",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444517",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "6ba779d0-7136-4f0f-85c0-3ad62f85679e",
			"number": "205586",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528789",
					"number": "199316",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SILVA JARDIM",
				"id": "554"
			},
			"address": {
				"latitude": -22.651817,
				"longitude": -42.390896
			}
		},
		{
			"id": "40b3c314-1267-44a3-8650-51503ce28057",
			"number": "205073",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528799",
					"number": "199324",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL JARDIM AMALIA",
				"id": "696"
			},
			"address": {
				"latitude": -22.512006,
				"longitude": -44.080567
			}
		},
		{
			"id": "5e8c93c1-8647-496e-a097-3083937f2547",
			"number": "205716",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528802",
					"number": "199327",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - DUQUE DE CAXIAS",
				"id": "516"
			},
			"address": {
				"latitude": -22.761044,
				"longitude": -43.286549
			}
		},
		{
			"id": "9d347ad1-f37b-417d-9dd1-eca5b42388e1",
			"number": "205106",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528807",
					"number": "199337",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL SAO JOSE",
				"id": "736"
			},
			"address": {
				"latitude": -22.425181,
				"longitude": -42.980132
			}
		},
		{
			"id": "cf0440d2-abfd-4600-890d-28a2f63e3c67",
			"number": "204980",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528813",
					"number": "199341",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MACUCO",
				"id": "528"
			},
			"address": {
				"latitude": -21.984505,
				"longitude": -42.253124
			}
		},
		{
			"id": "e909cee9-59fc-4dfe-8870-69fc0773d2dd",
			"number": "205254",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528816",
					"number": "199342",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CARAPEBUS",
				"id": "508"
			},
			"address": {
				"latitude": -22.184178,
				"longitude": -41.65962
			}
		},
		{
			"id": "f8637646-8786-4bfe-b451-0817bcbbd1c5",
			"number": "205080",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528818",
					"number": "199345",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CACHOEIRAS DE MACACU",
				"id": "504"
			},
			"address": {
				"latitude": -22.456601,
				"longitude": -42.650542
			}
		},
		{
			"id": "83b7f4b6-a11c-47a0-9757-195e973811f4",
			"number": "7369",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528872",
					"number": "7101",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444505",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR.CARLOS ANTONIO DA SILVA",
				"id": "2594"
			},
			"address": {
				"latitude": -22.88727,
				"longitude": -43.115009
			}
		},
		{
			"id": "4ed622e4-3c0a-4a97-acfe-48b2a0a96447",
			"number": "7325",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528898",
					"number": "7120",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444505",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR.CARLOS ANTONIO DA SILVA",
				"id": "2594"
			},
			"address": {
				"latitude": -22.88727,
				"longitude": -43.115009
			}
		},
		{
			"id": "cfb606df-2938-441d-8656-43e24233cfa5",
			"number": "7297",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528766",
					"number": "7093",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444490",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CAVALÃO - FRANK PAÍS GARCIA",
				"id": "2617"
			},
			"address": {
				"latitude": -22.912545,
				"longitude": -43.102992
			}
		},
		{
			"id": "156cc946-538d-43ea-8815-664d34d3d0f1",
			"number": "205710",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528759",
					"number": "199300",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - NOVA FRIBURGO",
				"id": "544"
			},
			"address": {
				"latitude": -22.280923,
				"longitude": -42.537012
			}
		},
		{
			"id": "c0f3f72d-53da-47d1-a4bd-fd4a7cc0a18b",
			"number": "205719",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528760",
					"number": "199301",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - ITABORAI",
				"id": "497"
			},
			"address": {
				"latitude": -22.7432,
				"longitude": -42.85849
			}
		},
		{
			"id": "8b06b7c8-9be8-4dd9-a486-7a285724de31",
			"number": "6597",
			"delivery_type": "RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528779",
					"number": "6262",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - GERENCIA DE IMUNIZAÇAO - VASCO BARCELOS",
				"id": "2979"
			},
			"address": {
				"latitude": -2276048507861,
				"longitude": -4344997373068
			}
		},
		{
			"id": "f7f56809-7fbb-43ee-80be-e22431fa0d4a",
			"number": "205339",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528805",
					"number": "199331",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444508",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "34a15977-03cc-445e-9728-f52b6f6121ec",
			"number": "205678",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528782",
					"number": "199308",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444518",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MACAE",
				"id": "527"
			},
			"address": {
				"latitude": -22.370818,
				"longitude": -41.779168
			}
		},
		{
			"id": "0010c2b0-ddb2-4725-aeea-0a616637a20b",
			"number": "205734",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528940",
					"number": "199387",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444514",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - RESENDE",
				"id": "585"
			},
			"address": {
				"latitude": -22.46946,
				"longitude": -44.447588
			}
		},
		{
			"id": "b41f2ed9-b5d0-4869-b605-6bd4a6984e1c",
			"number": "205677",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528763",
					"number": "199304",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - COMENDADOR LEVY GASPARIAN",
				"id": "512"
			},
			"address": {
				"latitude": -22.064017,
				"longitude": -43.21533
			}
		},
		{
			"id": "3a38b148-df36-45e1-92b4-e0e8a2e0acf4",
			"number": "205593",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528784",
					"number": "199311",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "3801176f-4faf-4f33-a0cb-c0972b95403f",
			"number": "205687",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528785",
					"number": "199310",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444522",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VASSOURAS",
				"id": "534"
			},
			"address": {
				"latitude": -22.4116404988,
				"longitude": -43.6647880153
			}
		},
		{
			"id": "58349ecb-73b1-4a35-a5ee-855db4ca4d2a",
			"number": "7305",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528777",
					"number": "7090",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444504",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "DST-AIDS (CAMPUS VALONGUINHO)",
				"id": "2666"
			},
			"address": {
				"latitude": -22.897265,
				"longitude": -43.12483
			}
		},
		{
			"id": "448fb1a8-0b51-4867-9c9b-b19886e3deb9",
			"number": "7296",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528772",
					"number": "7087",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444483",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CANTAGALO HAIDÉE SANTA MARIA 1",
				"id": "2615"
			},
			"address": {
				"latitude": -22.911956,
				"longitude": -43.047427
			}
		},
		{
			"id": "c2c76dfa-2c5e-41e3-a6bf-66540d7cf0f8",
			"number": "7301",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528769",
					"number": "7092",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444498",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF PALACIO - JESUS MONTANES 1",
				"id": "2646"
			},
			"address": {
				"latitude": -22.904275754,
				"longitude": -43.1267367598
			}
		},
		{
			"id": "1fd941aa-3d86-4ece-a211-26059d1cb16a",
			"number": "7304",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528776",
					"number": "7091",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444496",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF PREVENTORIO 2 - CALIXTO GARCIA",
				"id": "2649"
			},
			"address": {
				"latitude": -22.9348495798,
				"longitude": -43.0997687937
			}
		},
		{
			"id": "de6f0f3a-f27c-4200-8c3f-d426d2c445f0",
			"number": "7385",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528778",
					"number": "7097",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "ALL LAB",
				"id": "2432"
			},
			"address": {
				"latitude": -22.882838,
				"longitude": -43.125007
			}
		},
		{
			"id": "2cec9b68-5c61-409c-823a-ab7a5bcdbe2a",
			"number": "205367",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528788",
					"number": "199315",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SUMIDOURO",
				"id": "552"
			},
			"address": {
				"latitude": -22.048101,
				"longitude": -42.674398
			}
		},
		{
			"id": "762f339f-d55e-4718-afbf-487a7625eaf8",
			"number": "205439",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528790",
					"number": "199317",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - NITEROI",
				"id": "498"
			},
			"address": {
				"latitude": -22.905756,
				"longitude": -43.097143
			}
		},
		{
			"id": "5b44c5e3-aa95-4ba2-9d56-eb2bce82d024",
			"number": "205306",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528798",
					"number": "199322",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA DO PIRAI",
				"id": "495"
			},
			"address": {
				"latitude": -22.465271,
				"longitude": -43.828428
			}
		},
		{
			"id": "90118de1-5523-4c5e-88e4-eb1d20ff3216",
			"number": "205594",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528803",
					"number": "199330",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CANTAGALO",
				"id": "507"
			},
			"address": {
				"latitude": -21.986835,
				"longitude": -42.373923
			}
		},
		{
			"id": "5b7194da-df25-41e5-a078-8deb415d7025",
			"number": "9046",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528915",
					"number": "8798",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444519",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HEMORIO",
				"id": "579"
			},
			"address": {
				"latitude": -22.909055,
				"longitude": -43.189452
			}
		},
		{
			"id": "6fc60290-3835-4cd3-be12-d23108a2787e",
			"number": "9044",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528917",
					"number": "8799",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444519",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HEMORIO",
				"id": "579"
			},
			"address": {
				"latitude": -22.909055,
				"longitude": -43.189452
			}
		},
		{
			"id": "4bf5ded2-904b-4a14-b4e7-c524d6301f4d",
			"number": "205636",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528797",
					"number": "199321",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444513",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA MANSA",
				"id": "496"
			},
			"address": {
				"latitude": -22.541734,
				"longitude": -44.172915
			}
		},
		{
			"id": "0c3ca2dd-cd24-426d-9f1f-4974fc095e80",
			"number": "205595",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528801",
					"number": "199328",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - RIO DAS OSTRAS",
				"id": "582"
			},
			"address": {
				"latitude": -22.526454,
				"longitude": -41.932597
			}
		},
		{
			"id": "2d445e05-f81f-4bd8-bf60-98057cf5fe4e",
			"number": "205630",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528792",
					"number": "199318",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444521",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VALENÇA",
				"id": "538"
			},
			"address": {
				"latitude": -22.247151,
				"longitude": -43.699073
			}
		},
		{
			"id": "6a5fb0b5-e2e0-4648-9190-45b835ba1fbc",
			"number": "205275",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528820",
					"number": "199344",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444521",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VALENÇA",
				"id": "538"
			},
			"address": {
				"latitude": -22.247151,
				"longitude": -43.699073
			}
		},
		{
			"id": "cccf4aeb-6a55-4cc2-93e0-10bee4106d93",
			"number": "205416",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528811",
					"number": "199335",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - RIO DE JANEIRO",
				"id": "580"
			},
			"address": {
				"latitude": -22.939307,
				"longitude": -43.374733
			}
		},
		{
			"id": "da97e90f-2153-4eae-9b76-dca45e75f37c",
			"number": "205079",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528815",
					"number": "199338",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA DO PIRAI",
				"id": "495"
			},
			"address": {
				"latitude": -22.465271,
				"longitude": -43.828428
			}
		},
		{
			"id": "a873b4e9-6887-4b79-8d1b-30e85d786da1",
			"number": "205609",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528819",
					"number": "199346",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "7ff74821-fe72-4f4f-9b61-d8b559c166ae",
			"number": "205005",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528814",
					"number": "199343",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - ARMACAO DE BUZIOS",
				"id": "489"
			},
			"address": {
				"latitude": -22.867185,
				"longitude": -41.985345
			}
		},
		{
			"id": "1538a655-1664-423e-baef-b4d8dc529b5c",
			"number": "45747",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528822",
					"number": "44442",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		},
		{
			"id": "320a17f1-5767-4561-8b0b-ab1a645dcea6",
			"number": "45771",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528823",
					"number": "44441",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "815c2737-7cf2-4a4a-88a7-8f181524e4cb",
			"number": "45748",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528824",
					"number": "44444",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "508a208b-28f8-4ad6-b1b0-33c8f0d1fa97",
			"number": "205255",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528825",
					"number": "199347",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CARAPEBUS",
				"id": "508"
			},
			"address": {
				"latitude": -22.184178,
				"longitude": -41.65962
			}
		},
		{
			"id": "23851b11-cf40-4739-986f-881b3ec2a37e",
			"number": "6395",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528826",
					"number": "6265",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "a8bdc336-3c3b-437b-8b01-a463e60e9299",
			"number": "6587",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528828",
					"number": "6264",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL GERAL DE NOVA IGUAÇU (HGNI)",
				"id": "2556"
			},
			"address": {
				"latitude": -22.7310930419,
				"longitude": -43.4622443185
			}
		},
		{
			"id": "35430f9e-c043-4cb1-b9d0-4d553de501dd",
			"number": "6399",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528830",
					"number": "6270",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "1aa9a081-c95b-4f36-9c3a-35a8a2f6b007",
			"number": "6533",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528827",
					"number": "6269",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS AD VANDERLEI MARTINS",
				"id": "2624"
			},
			"address": {
				"latitude": 22.711850044,
				"longitude": 43.5201619601
			}
		},
		{
			"id": "2d4261a9-18fc-4662-a61d-77c97be101f2",
			"number": "6396",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528832",
					"number": "6272",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF HERONDINO (PARQUE DAS PALMEIRAS)",
				"id": "2824"
			},
			"address": {
				"latitude": -2275113016143,
				"longitude": -4352844848465
			}
		},
		{
			"id": "b0b12f3d-bd27-4261-904a-79c4195bcc91",
			"number": "6401",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528840",
					"number": "6279",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA MARFEL",
				"id": "2561"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "fac15e98-2448-4a84-82a9-e680758fd6b9",
			"number": "45759",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528821",
					"number": "44443",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "39c78b23-ead7-4daf-af02-40fd37d5a15b",
			"number": "6433",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528829",
					"number": "6267",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "67e0be7f-3ff0-40d1-a8c0-aa0b64cf1c1c",
			"number": "6422",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528833",
					"number": "6274",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF HERONDINO (PARQUE DAS PALMEIRAS)",
				"id": "2824"
			},
			"address": {
				"latitude": -2275113016143,
				"longitude": -4352844848465
			}
		},
		{
			"id": "4c68d044-2921-4b35-99c2-20e6ba366c81",
			"number": "6421",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528839",
					"number": "6273",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF HERONDINO (PARQUE DAS PALMEIRAS)",
				"id": "2824"
			},
			"address": {
				"latitude": -2275113016143,
				"longitude": -4352844848465
			}
		},
		{
			"id": "83766cff-f256-44a4-9138-6d9dbb579ccd",
			"number": "6364",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528831",
					"number": "6271",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "003ebdd7-65d2-465c-b548-d6439ba8b711",
			"number": "205809",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528925",
					"number": "199378",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444517",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "beddd453-7a53-4631-8ed9-12c0f2b11f1e",
			"number": "6380",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528834",
					"number": "6276",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA MARFEL",
				"id": "2561"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "b1a3cc55-3b5a-4ac6-b5c4-8e8c574289e1",
			"number": "6424",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528836",
					"number": "6275",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF HERONDINO (PARQUE DAS PALMEIRAS)",
				"id": "2824"
			},
			"address": {
				"latitude": -2275113016143,
				"longitude": -4352844848465
			}
		},
		{
			"id": "158e68f8-fdf6-4128-b054-ecbdbaa0563d",
			"number": "6556",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528838",
					"number": "6268",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "6728250c-f89a-4641-b270-284fd35827e7",
			"number": "6392",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528841",
					"number": "6278",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA MARFEL",
				"id": "2561"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "2bfd3f8c-9e34-4d8a-a870-fb2fd76bf3f5",
			"number": "6561",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528842",
					"number": "6282",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL GERAL DE NOVA IGUAÇU (HGNI)",
				"id": "2556"
			},
			"address": {
				"latitude": -22.7310930419,
				"longitude": -43.4622443185
			}
		},
		{
			"id": "85e30617-c2ac-43dd-a39a-a6dd19df1f26",
			"number": "6397",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528844",
					"number": "6280",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "ebb54001-2a19-434c-b074-b4a0597f5ed3",
			"number": "6359",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528845",
					"number": "6284",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "0cfac620-cbcf-48ee-b114-917573eb12e0",
			"number": "6348",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528843",
					"number": "6281",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "85515578-7c5b-4307-b97d-f69619e04b27",
			"number": "6354",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528846",
					"number": "6283",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "1a9d26eb-6c0a-40bf-b86a-653089fa3b58",
			"number": "6563",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528724",
					"number": "6256",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "VIGILÂNCIA EPIDEMIOLÓGICA - VASCO BARCELOS",
				"id": "2803"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "8da606b9-638f-47d7-8393-813c6b651546",
			"number": "6562",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528847",
					"number": "6285",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - CLINICA DA FAMILIA JARDIM VIGA",
				"id": "2895"
			},
			"address": {
				"latitude": -22.734367,
				"longitude": -43.430779
			}
		},
		{
			"id": "99f74e70-8388-41d4-8bfe-2f4c50bc863e",
			"number": "6566",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528850",
					"number": "6289",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - CLINICA DA FAMILIA ODICEIA MORAIS",
				"id": "2906"
			},
			"address": {
				"latitude": -22.7506650506,
				"longitude": -43.4444389318
			}
		},
		{
			"id": "694a8483-c6fe-46d4-9264-b88a38cb3491",
			"number": "6570",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528848",
					"number": "6286",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - CLINICA DA FAMILIA DOLORES DELFINO GOMES (UBS PRATA)",
				"id": "2628"
			},
			"address": {
				"latitude": -22.7577504007,
				"longitude": -43.4214269299
			}
		},
		{
			"id": "b9a5d4ae-a81c-4443-ba6e-ab7116ed8308",
			"number": "6219",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528725",
					"number": "6261",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF NADIA SILVA (GENECIANO)",
				"id": "2583"
			},
			"address": {
				"latitude": -22.6850987121,
				"longitude": -43.4114122047
			}
		},
		{
			"id": "85372c35-fb14-4188-9ff0-5c8351bcef1b",
			"number": "6564",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528852",
					"number": "6290",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - USF EGENHO PEQUENO",
				"id": "2912"
			},
			"address": {
				"latitude": -22.7300562069,
				"longitude": -43.3932963487
			}
		},
		{
			"id": "49db680b-3602-4639-8273-76ba4bc779b6",
			"number": "6568",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528726",
					"number": "6257",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEMUS - ATENCAO BASICA",
				"id": "2884"
			},
			"address": {
				"latitude": -2275023643525,
				"longitude": -4345132142883
			}
		},
		{
			"id": "be71a4bf-12c3-42b0-a8b6-93891d2f1a34",
			"number": "8966",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528733",
					"number": "8794",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA NOVA IGUAÇU 2 (BAIRRO BOTAFOGO)",
				"id": "644"
			},
			"address": {
				"latitude": -22.714601,
				"longitude": -43.460896
			}
		},
		{
			"id": "158240fe-cf78-4e3d-9f20-fa803571fb21",
			"number": "8982",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528730",
					"number": "8792",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA MESQUITA",
				"id": "889"
			},
			"address": {
				"latitude": -22.797213,
				"longitude": -43.422241
			}
		},
		{
			"id": "d3e63bbb-1a85-4412-8928-58ce6811da89",
			"number": "8986",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528732",
					"number": "8793",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA QUEIMADOS",
				"id": "888"
			},
			"address": {
				"latitude": -22.713287,
				"longitude": -43.569015
			}
		},
		{
			"id": "d7f12c9a-fc28-47cd-aa4a-95ec42b90694",
			"number": "6574",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528849",
					"number": "6287",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - POLICLINICA EDI PINTO DA SILVA (UBS SANTA CLARA)",
				"id": "2889"
			},
			"address": {
				"latitude": -22.7634546491,
				"longitude": -43.4221760766
			}
		},
		{
			"id": "da1cc374-b7aa-40dc-a4d6-e389c5bc7e51",
			"number": "8979",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528734",
					"number": "8797",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CEDI BAIXADA",
				"id": "2698"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "9bb60143-cb44-4149-aa75-90e79e039fde",
			"number": "205663",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528853",
					"number": "199349",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA MANSA",
				"id": "496"
			},
			"address": {
				"latitude": -22.541734,
				"longitude": -44.172915
			}
		},
		{
			"id": "9daee27b-6c3b-42dd-b905-5ac6ec4faff6",
			"number": "6552",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528851",
					"number": "6288",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - CLINICA DA FAMILIA JARDIM IGUAÇU",
				"id": "2896"
			},
			"address": {
				"latitude": -22.7438172096,
				"longitude": -43.4657708649
			}
		},
		{
			"id": "e3e1b02c-4d63-4aa1-acbf-417585a9b9e7",
			"number": "6567",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528861",
					"number": "6291",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - USF PADRE MANUEL MONTEIRO (K11)",
				"id": "2914"
			},
			"address": {
				"latitude": -22.7673872705,
				"longitude": -43.4395100354
			}
		},
		{
			"id": "cf072ec0-4f49-4f32-ac7f-d71c0d97f38f",
			"number": "6488",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528728",
					"number": "6260",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA CORUMBA",
				"id": "2594"
			},
			"address": {
				"latitude": -22.6960742224,
				"longitude": -43.4722829954
			}
		},
		{
			"id": "d0568cd3-d362-4a55-9860-38bf589be6c6",
			"number": "6187",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528727",
					"number": "6258",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA DE MIGUEL COUTO",
				"id": "2579"
			},
			"address": {
				"latitude": -22.7065532139,
				"longitude": -43.4243342479
			}
		},
		{
			"id": "3a2e39f2-d98c-4938-af1f-573fd8656335",
			"number": "6325",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528729",
					"number": "6259",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA DR. PEDRO ARUME",
				"id": "2582"
			},
			"address": {
				"latitude": -22.6942486997,
				"longitude": -43.4222085052
			}
		},
		{
			"id": "362d3baf-5a04-4c65-9cc5-17fbdcef681f",
			"number": "8990",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528731",
					"number": "8796",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CPRJ",
				"id": "610"
			},
			"address": {
				"latitude": -22.8951,
				"longitude": -43.191358
			}
		},
		{
			"id": "6b299509-911a-4a0e-8f8c-0144df6e1004",
			"number": "8965",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528735",
					"number": "8795",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA NOVA IGUAÇU 1 (CABUÇU)",
				"id": "605"
			},
			"address": {
				"latitude": -22.761598,
				"longitude": -43.46998
			}
		},
		{
			"id": "4b722e6a-a0b4-4016-a3ca-0db807c956fa",
			"number": "205666",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528854",
					"number": "199351",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CANTAGALO",
				"id": "507"
			},
			"address": {
				"latitude": -21.986835,
				"longitude": -42.373923
			}
		},
		{
			"id": "f941d473-b821-4ffe-9efe-387eb0e12984",
			"number": "205674",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528857",
					"number": "199353",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FIDELIS",
				"id": "572"
			},
			"address": {
				"latitude": -21.64583,
				"longitude": -41.746783
			}
		},
		{
			"id": "e50d998b-b50f-4031-b209-7289cc5f9b36",
			"number": "205664",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528855",
					"number": "199350",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA MANSA",
				"id": "496"
			},
			"address": {
				"latitude": -22.541734,
				"longitude": -44.172915
			}
		},
		{
			"id": "46b218ae-0b57-41bb-b02a-76693c2355bb",
			"number": "205703",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528858",
					"number": "199352",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "779e33cc-41c8-4a50-8f20-a39c98d37236",
			"number": "6569",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528862",
					"number": "6293",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - UBS JARDIM STA EUGENIA",
				"id": "2930"
			},
			"address": {
				"latitude": -22.748538968,
				"longitude": -43.466041573
			}
		},
		{
			"id": "9b973a71-692b-46cf-9c23-7b229973347d",
			"number": "7291",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528736",
					"number": "7084",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": "9444462",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UBS ENGENHOCA",
				"id": "2596"
			},
			"address": {
				"latitude": -22.871138,
				"longitude": -43.099062
			}
		},
		{
			"id": "f78d06e8-ef4b-42c6-b8cd-0e78bff63223",
			"number": "45595",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528737",
					"number": "44437",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "229e85b7-c5cb-42d4-8f18-3bafae422a14",
			"number": "45596",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528739",
					"number": "44435",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "601ed040-96c7-4101-89da-1554583beb84",
			"number": "45645",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528741",
					"number": "44439",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "8b2f7a34-13cc-482a-a3d1-b2bec417bf43",
			"number": "45770",
			"delivery_type": "GRADE QUINZENAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528742",
					"number": "44434",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "da5af850-28b7-4ce6-bcfe-c4b5f24d3c35",
			"number": "205715",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528856",
					"number": "199348",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "eb9d66c1-a578-4c4f-9274-32593d169400",
			"number": "45593",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528738",
					"number": "44436",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "ededbaca-cdb6-4eac-a5e2-74a56365fdee",
			"number": "6576",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528860",
					"number": "6292",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - UBS ALBERTO SOBRAL (MOQUETA)",
				"id": "2927"
			},
			"address": {
				"latitude": -22.749651296,
				"longitude": -43.4478507764
			}
		},
		{
			"id": "657f892d-218a-47d4-89ce-1325a4aace66",
			"number": "205705",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528859",
					"number": "199354",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "f655a6f4-e32a-467a-abda-74e91099dd63",
			"number": "6575",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528863",
					"number": "6294",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "IMUNO - GERENCIA DE IMUNIZAÇAO - VASCO BARCELOS",
				"id": "2979"
			},
			"address": {
				"latitude": -2276048507861,
				"longitude": -4344997373068
			}
		},
		{
			"id": "d0c87650-de1c-4a0a-ba5f-bd5a28f1cabd",
			"number": "45571",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528743",
					"number": "44440",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "d230ca60-c5f8-4a16-ac02-861a746cfbf1",
			"number": "45457",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528740",
					"number": "44433",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF FELIPPE CARDOSO - AP. 3.1",
				"id": "2721"
			},
			"address": {
				"latitude": -22.8427085487,
				"longitude": -43.2790040295
			}
		},
		{
			"id": "24c4123a-8091-45dc-a030-ec6e89192aaa",
			"number": "6572",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528864",
					"number": "6295",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL GERAL DE NOVA IGUAÇU (HGNI)",
				"id": "2556"
			},
			"address": {
				"latitude": -22.7310930419,
				"longitude": -43.4622443185
			}
		},
		{
			"id": "765f12ab-42cc-49d4-a54a-111c0f1b840a",
			"number": "6363",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528866",
					"number": "6297",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "fd3a4933-583f-41a5-8e55-3c37c1e19b28",
			"number": "45646",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528744",
					"number": "44438",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "51b6418f-b50f-4efb-a4fd-ccde16b7818d",
			"number": "6432",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528865",
					"number": "6296",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "ffd3a078-647e-40d4-ae56-31e2c704ea9b",
			"number": "6347",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528867",
					"number": "6298",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "d50b5b36-ae95-4ba9-b1a3-e35da1b9d209",
			"number": "7293",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528877",
					"number": "7107",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444482",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS MONTEIRO LOBATO",
				"id": "2611"
			},
			"address": {
				"latitude": -22.904408,
				"longitude": -43.096097
			}
		},
		{
			"id": "9f5207bc-2df0-46c9-93cb-030cd38ec7d6",
			"number": "7388",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528868",
					"number": "7098",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": "9444478",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL ORENCIO DE FREITAS - HOF",
				"id": "2564"
			},
			"address": {
				"latitude": -22.861968,
				"longitude": -43.094002
			}
		},
		{
			"id": "ecb98d01-fc56-475c-80fc-6ef4cdf95cbb",
			"number": "7284",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528879",
					"number": "7111",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444493",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF MARAVISTA - CMTE MANOEL PINEIRO LOZADA",
				"id": "2639"
			},
			"address": {
				"latitude": -22.9368472054,
				"longitude": -43.031783381
			}
		},
		{
			"id": "f144fee9-bbf7-428d-93e1-b4740db927b9",
			"number": "7307",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528880",
					"number": "7113",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444505",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR.CARLOS ANTONIO DA SILVA",
				"id": "2594"
			},
			"address": {
				"latitude": -22.88727,
				"longitude": -43.115009
			}
		},
		{
			"id": "dad02485-8995-48bb-bcea-b396b6e4821f",
			"number": "7342",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528874",
					"number": "7108",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444480",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CARAMUJO - ALOÍSIO BRASIL",
				"id": "2616"
			},
			"address": {
				"latitude": -22.884342,
				"longitude": -43.062713
			}
		},
		{
			"id": "5beb1ef7-f0a5-4f05-aecd-755e95479926",
			"number": "205603",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528745",
					"number": "199286",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "ce06d3bd-5cef-421d-a137-381b34ba4f73",
			"number": "7279",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528870",
					"number": "7099",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444499",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR. SERGIO AROUCA",
				"id": "2565"
			},
			"address": {
				"latitude": -22.904937,
				"longitude": -43.098293
			}
		},
		{
			"id": "84e99818-2dfd-41a8-8628-4bce08f1e388",
			"number": "7357",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528881",
					"number": "7102",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444495",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
				"id": "2628"
			},
			"address": {
				"latitude": -22.937975,
				"longitude": -43.130693
			}
		},
		{
			"id": "b2a1ee52-7e66-4372-9ddb-1dfc23b3065b",
			"number": "205582",
			"delivery_type": "LIB. SES - ENTREGA",
			"delivery_group": "OTHER",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528746",
					"number": "199287",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444488",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HEMORIO",
				"id": "579"
			},
			"address": {
				"latitude": -22.909055,
				"longitude": -43.189452
			}
		},
		{
			"id": "bf35c6aa-3189-4a7c-817c-4eb8f1bcf172",
			"number": "7306",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528871",
					"number": "7105",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444505",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "POLICLINICA REGIONAL DR.CARLOS ANTONIO DA SILVA",
				"id": "2594"
			},
			"address": {
				"latitude": -22.88727,
				"longitude": -43.115009
			}
		},
		{
			"id": "88a5bb76-42cc-40db-b17b-71a26c9edc14",
			"number": "7238",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528869",
					"number": "7106",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444497",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL PSIQUIATRICO DE JURUJUBA - HPJ",
				"id": "2566"
			},
			"address": {
				"latitude": -22.932398,
				"longitude": -43.098345
			}
		},
		{
			"id": "f66aa5fb-99b2-4143-98d8-cc526c34f0c8",
			"number": "205288",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528754",
					"number": "199295",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444520",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MIGUEL PEREIRA",
				"id": "536"
			},
			"address": {
				"latitude": -22.450375,
				"longitude": -43.461106
			}
		},
		{
			"id": "89471edb-0aca-4bad-a282-177a0b4d4f0e",
			"number": "205305",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528747",
					"number": "199290",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA DO PIRAI",
				"id": "495"
			},
			"address": {
				"latitude": -22.465271,
				"longitude": -43.828428
			}
		},
		{
			"id": "6489b654-0139-4b7d-a29c-194af910f0b2",
			"number": "205299",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528750",
					"number": "199288",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - PINHEIRAL",
				"id": "574"
			},
			"address": {
				"latitude": -22.518924,
				"longitude": -43.995471
			}
		},
		{
			"id": "9732cb5a-ce01-4d5d-b90d-b77d359f581f",
			"number": "204978",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528756",
					"number": "199297",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "d3219b79-dd92-4758-999a-8050234bbf9d",
			"number": "7233",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528875",
					"number": "7103",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "AL CEN",
				"id": "2704"
			},
			"address": {
				"latitude": -22.8827788204,
				"longitude": -43.1249816892
			}
		},
		{
			"id": "cfc111ba-b107-4d36-bace-9f037bbeda7f",
			"number": "204987",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528751",
					"number": "199292",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-14T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CAMBUCI",
				"id": "505"
			},
			"address": {
				"latitude": -21.577569,
				"longitude": -41.915137
			}
		},
		{
			"id": "1553383d-ad68-4646-a54a-8f143b710cb0",
			"number": "205571",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528752",
					"number": "199293",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "2d7d7d27-112a-4828-ab3b-30e9165a03d1",
			"number": "205335",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528757",
					"number": "199298",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CACHOEIRAS DE MACACU",
				"id": "504"
			},
			"address": {
				"latitude": -22.456601,
				"longitude": -42.650542
			}
		},
		{
			"id": "7b28c88f-6d63-49ce-a54f-fd6955b399a1",
			"number": "205217",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528748",
					"number": "199291",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "7bc56d97-746a-448b-b5b4-bc414a408fa2",
			"number": "205423",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528755",
					"number": "199299",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - NITEROI",
				"id": "498"
			},
			"address": {
				"latitude": -22.905756,
				"longitude": -43.097143
			}
		},
		{
			"id": "ee5e3573-e0c1-4bc2-ab73-374fae1ceb93",
			"number": "205194",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528758",
					"number": "199296",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "3a13f5ac-73da-45a5-9428-ceae7dc274ec",
			"number": "205324",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528753",
					"number": "199294",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444522",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VASSOURAS",
				"id": "534"
			},
			"address": {
				"latitude": -22.4116404988,
				"longitude": -43.6647880153
			}
		},
		{
			"id": "b8638dca-6e29-477c-a973-949f26b13681",
			"number": "205300",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528749",
					"number": "199289",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SILVA JARDIM",
				"id": "554"
			},
			"address": {
				"latitude": -22.651817,
				"longitude": -42.390896
			}
		},
		{
			"id": "a97df9b0-22bc-4995-953a-3034a1d45e83",
			"number": "7334",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528873",
					"number": "7104",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444492",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF JACARÉ - ENOC JOAQUIM OLIVEIRA",
				"id": "2625"
			},
			"address": {
				"latitude": -22.93152,
				"longitude": -43.051259
			}
		},
		{
			"id": "5e38c298-b4f4-4d93-9659-c99bb24a9e15",
			"number": "7341",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528882",
					"number": "7109",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444487",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF SAPE",
				"id": "2650"
			},
			"address": {
				"latitude": -22.8949840943,
				"longitude": -43.0575240161
			}
		},
		{
			"id": "01697cae-f3aa-4e9b-a422-212512a367eb",
			"number": "7391",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528885",
					"number": "7114",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
				"id": "2568"
			},
			"address": {
				"latitude": -22.893849,
				"longitude": -43.109091
			}
		},
		{
			"id": "d2c3adb8-9aee-4126-84d6-ae7f747fa9fd",
			"number": "7331",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528878",
					"number": "7100",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444495",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF JURURJUBA - MARIO MUNHOZ MONROE",
				"id": "2628"
			},
			"address": {
				"latitude": -22.937975,
				"longitude": -43.130693
			}
		},
		{
			"id": "ad8eaad1-9a7d-43b9-9699-22d27186907f",
			"number": "205786",
			"delivery_type": "EMERGENCIAL - ENTREGA",
			"delivery_group": "OTHER",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528884",
					"number": "199355",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": "9444479",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA - PETROPOLIS",
				"id": "632"
			},
			"address": {
				"latitude": -22.5159853705,
				"longitude": -43.1838238762
			}
		},
		{
			"id": "113cbf58-c058-404c-8bfd-db9ced476559",
			"number": "8982",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529798",
					"number": "8792",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA MESQUITA",
				"id": "889"
			},
			"address": {
				"latitude": -22.797213,
				"longitude": -43.422241
			}
		},
		{
			"id": "ef586eae-e357-42a2-a370-d3468c04b0ba",
			"number": "205701",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528886",
					"number": "199356",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SUMIDOURO",
				"id": "552"
			},
			"address": {
				"latitude": -22.048101,
				"longitude": -42.674398
			}
		},
		{
			"id": "21912bbe-9469-4a38-9b12-27b8ecadf4bc",
			"number": "205676",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528887",
					"number": "199358",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - COMENDADOR LEVY GASPARIAN",
				"id": "512"
			},
			"address": {
				"latitude": -22.064017,
				"longitude": -43.21533
			}
		},
		{
			"id": "e2fa8359-1a98-43e0-b4d4-43fed23464a2",
			"number": "205704",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528888",
					"number": "199357",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "93d9dac9-6e60-4b70-a26f-a94ecaa87795",
			"number": "205683",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528890",
					"number": "199359",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CENTRO DE ATENDIMENTO MÉDICO ESPECIALIZADO (AME-PP)",
				"id": "2598"
			},
			"address": {
				"latitude": -22.9829249583,
				"longitude": -43.2054871046
			}
		},
		{
			"id": "42e490f2-e1ce-44b4-8c09-970c2f3dbdf6",
			"number": "205714",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528892",
					"number": "199362",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CONCEICAO DE MACABU",
				"id": "513"
			},
			"address": {
				"latitude": -22.089476,
				"longitude": -41.867079
			}
		},
		{
			"id": "535fb48d-3aad-4776-bff7-f98372131750",
			"number": "205702",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528889",
					"number": "199361",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "42d511c2-d029-4847-a4c3-23141e90fbf7",
			"number": "205699",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528891",
					"number": "199360",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SUMIDOURO",
				"id": "552"
			},
			"address": {
				"latitude": -22.048101,
				"longitude": -42.674398
			}
		},
		{
			"id": "af8c7367-8d7b-446c-862c-91a0264b9d2b",
			"number": "205792",
			"delivery_type": "EMERGENCIAL - ENTREGA",
			"delivery_group": "OTHER",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528893",
					"number": "199363",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": "9444479",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA - PETROPOLIS",
				"id": "632"
			},
			"address": {
				"latitude": -22.5159853705,
				"longitude": -43.1838238762
			}
		},
		{
			"id": "39b6e616-67cc-44fe-ae44-323c9dab88e4",
			"number": "7281",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528896",
					"number": "7123",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444491",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CAFUBÁ 2 - ERNESTO CHE GUEVARA 2",
				"id": "2612"
			},
			"address": {
				"latitude": -22.933863,
				"longitude": -43.071149
			}
		},
		{
			"id": "bcb398c5-4553-473b-89c4-6f411d0a5d9d",
			"number": "7254",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528899",
					"number": "7116",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444503",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "LABORATORIO MIGUELOTE VIANA LMV",
				"id": "2635"
			},
			"address": {
				"latitude": -22.904937,
				"longitude": -43.098293
			}
		},
		{
			"id": "9ffc8aa9-7985-42e7-a28b-6c1ac231b2b7",
			"number": "205618",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528905",
					"number": "199364",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-21T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - PATY DOS ALFERES",
				"id": "566"
			},
			"address": {
				"latitude": -22.431269,
				"longitude": -43.422195
			}
		},
		{
			"id": "652daa99-7205-4af3-a612-9bbd72cef484",
			"number": "6544",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528907",
					"number": "6300",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF LINO VILELA ",
				"id": "2618"
			},
			"address": {
				"latitude": 22.7245421776,
				"longitude": 43.4503684433
			}
		},
		{
			"id": "60a9086f-a873-460e-90df-ffbcb31079d7",
			"number": "6352",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528911",
					"number": "6304",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "f7b3997c-6723-464c-8632-d4fde6edf45c",
			"number": "6534",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528909",
					"number": "6302",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS AD VANDERLEI MARTINS",
				"id": "2624"
			},
			"address": {
				"latitude": 22.711850044,
				"longitude": 43.5201619601
			}
		},
		{
			"id": "9dbe33f9-981c-4d0d-9e0e-f386e89e5f22",
			"number": "6346",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528914",
					"number": "6306",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "5a3a268d-6f05-4444-983e-3a70e7b5904a",
			"number": "6532",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528913",
					"number": "6301",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS AD VANDERLEI MARTINS",
				"id": "2624"
			},
			"address": {
				"latitude": 22.711850044,
				"longitude": 43.5201619601
			}
		},
		{
			"id": "cb556ebe-f347-417c-a940-778e99fca005",
			"number": "6384",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528835",
					"number": "6277",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA MARFEL",
				"id": "2561"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "db515574-178f-4226-a214-06e1b8726836",
			"number": "6428",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528837",
					"number": "6266",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "053d5bbd-f3e2-4ba5-844e-27a85df5c1d7",
			"number": "7382",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528895",
					"number": "7119",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444507",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "NUCLEO DE FARMACIA",
				"id": "3078"
			},
			"address": {
				"latitude": -22.8873028714,
				"longitude": -43.1157304077
			}
		},
		{
			"id": "90e474c1-f0e6-41f0-9d0e-cfb5362d8c9b",
			"number": "7345",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528897",
					"number": "7117",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444481",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF MATAPACA - DR. ABELARADO RAMIREZ",
				"id": "2643"
			},
			"address": {
				"latitude": -22.8819593531,
				"longitude": -43.0313775378
			}
		},
		{
			"id": "262d1319-efa3-4b22-84d3-d7003bd9373a",
			"number": "7344",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528903",
					"number": "7118",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444491",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CAFUBÁ 2 - ERNESTO CHE GUEVARA 2",
				"id": "2612"
			},
			"address": {
				"latitude": -22.933863,
				"longitude": -43.071149
			}
		},
		{
			"id": "6848950c-1f9f-4865-af96-85215a4b3b98",
			"number": "7368",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528900",
					"number": "7125",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444501",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CEO - CENTRO DE ESPECIALIDADE ODONTOLOGICA",
				"id": "3071"
			},
			"address": {
				"latitude": -22.88851,
				"longitude": -43.114601
			}
		},
		{
			"id": "4cf85c22-d44a-479a-8a16-916c6439a26b",
			"number": "205631",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528796",
					"number": "199320",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444522",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VASSOURAS",
				"id": "534"
			},
			"address": {
				"latitude": -22.4116404988,
				"longitude": -43.6647880153
			}
		},
		{
			"id": "07bf3124-eeeb-4afb-b19b-dc6cd9643ed1",
			"number": "205311",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528806",
					"number": "199332",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444522",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VASSOURAS",
				"id": "534"
			},
			"address": {
				"latitude": -22.4116404988,
				"longitude": -43.6647880153
			}
		},
		{
			"id": "daf8b46d-1cca-4b01-aff1-3527f9ea9d97",
			"number": "205684",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528810",
					"number": "199336",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444522",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VASSOURAS",
				"id": "534"
			},
			"address": {
				"latitude": -22.4116404988,
				"longitude": -43.6647880153
			}
		},
		{
			"id": "29d57155-ed35-428f-b510-08f9c0678bf2",
			"number": "6350",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528906",
					"number": "6303",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM ROMA",
				"id": "2560"
			},
			"address": {
				"latitude": -22.7446992673,
				"longitude": -43.5248483029
			}
		},
		{
			"id": "c6cb70f6-aa8d-48ac-933b-b00bfcf0e4ea",
			"number": "6430",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528910",
					"number": "6299",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "USF PALHADA ",
				"id": "2613"
			},
			"address": {
				"latitude": 22.7653333967,
				"longitude": 43.5212818624
			}
		},
		{
			"id": "46bfbc9b-5b99-41cf-ac02-5ffb77dc18f8",
			"number": "6398",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528908",
					"number": "6305",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA MARFEL",
				"id": "2561"
			},
			"address": {
				"latitude": 0,
				"longitude": 0
			}
		},
		{
			"id": "bca33785-c827-42e9-bc17-df5d8683da23",
			"number": "6580",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528912",
					"number": "6307",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "20abbf93-25f5-444a-8a91-9439e5163037",
			"number": "8986",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529803",
					"number": "8793",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA QUEIMADOS",
				"id": "888"
			},
			"address": {
				"latitude": -22.713287,
				"longitude": -43.569015
			}
		},
		{
			"id": "e2e2bad3-049c-4c9e-9193-eea57566794b",
			"number": "8965",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529804",
					"number": "8795",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA NOVA IGUAÇU 1 (CABUÇU)",
				"id": "605"
			},
			"address": {
				"latitude": -22.761598,
				"longitude": -43.46998
			}
		},
		{
			"id": "4e61cb90-6c1f-4ccf-85f4-30f615787944",
			"number": "9044",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529801",
					"number": "8799",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HEMORIO",
				"id": "579"
			},
			"address": {
				"latitude": -22.909055,
				"longitude": -43.189452
			}
		},
		{
			"id": "f528d822-f98b-47b6-bd78-ffe794b45faa",
			"number": "9041",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529809",
					"number": "8800",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMULHER",
				"id": "677"
			},
			"address": {
				"latitude": -22.789391,
				"longitude": -43.364456
			}
		},
		{
			"id": "a752b8f9-4f50-496c-8abb-1a037ceb0b65",
			"number": "9041",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528916",
					"number": "8800",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444510",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMULHER",
				"id": "677"
			},
			"address": {
				"latitude": -22.789391,
				"longitude": -43.364456
			}
		},
		{
			"id": "b1df7ee1-8f54-4c5f-ba44-b69e44839e9d",
			"number": "8901",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528952",
					"number": "8802",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444510",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMULHER",
				"id": "677"
			},
			"address": {
				"latitude": -22.789391,
				"longitude": -43.364456
			}
		},
		{
			"id": "dcbbfdc9-6d15-4306-aacf-8310f16f6d77",
			"number": "8966",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529799",
					"number": "8794",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "UPA NOVA IGUAÇU 2 (BAIRRO BOTAFOGO)",
				"id": "644"
			},
			"address": {
				"latitude": -22.714601,
				"longitude": -43.460896
			}
		},
		{
			"id": "500badb9-3b80-4a6c-94dc-c30f37f44508",
			"number": "8979",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529806",
					"number": "8797",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CEDI BAIXADA",
				"id": "2698"
			},
			"address": {
				"latitude": -22.936246122,
				"longitude": -43.2488491099
			}
		},
		{
			"id": "9ee90b94-91e9-43e2-9a89-58068e57681f",
			"number": "9040",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529807",
					"number": "8801",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMAE",
				"id": "700"
			},
			"address": {
				"latitude": -22.785213,
				"longitude": -43.410157
			}
		},
		{
			"id": "c2b7738c-3b34-40e6-8cd4-7ed80a4318c4",
			"number": "8901",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529810",
					"number": "8802",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMULHER",
				"id": "677"
			},
			"address": {
				"latitude": -22.789391,
				"longitude": -43.364456
			}
		},
		{
			"id": "8937f03f-e08e-46d4-aa87-ce6bf42ee1f0",
			"number": "205811",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528933",
					"number": "199379",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - QUISSAMA",
				"id": "587"
			},
			"address": {
				"latitude": -22.109873,
				"longitude": -41.468671
			}
		},
		{
			"id": "94e8205f-9ad5-4b14-8bcb-2704006fbff9",
			"number": "205592",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528934",
					"number": "199382",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TANGUA",
				"id": "551"
			},
			"address": {
				"latitude": -22.7353147404,
				"longitude": -42.7246560919
			}
		},
		{
			"id": "c2a63b15-c4b7-4f8f-9a2b-4bac7dd2b629",
			"number": "205816",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528919",
					"number": "199370",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO JOAO DA BARRA",
				"id": "570"
			},
			"address": {
				"latitude": -21.632406,
				"longitude": -41.044346
			}
		},
		{
			"id": "2fecc462-42ba-48d4-9a0f-77bd0507f4d9",
			"number": "205812",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528922",
					"number": "199368",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FIDELIS",
				"id": "572"
			},
			"address": {
				"latitude": -21.64583,
				"longitude": -41.746783
			}
		},
		{
			"id": "51887f54-776e-43e9-8e9e-84750f266d4e",
			"number": "205597",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528928",
					"number": "199375",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SUMIDOURO",
				"id": "552"
			},
			"address": {
				"latitude": -22.048101,
				"longitude": -42.674398
			}
		},
		{
			"id": "3e8f3332-d112-4b55-9b5c-7aecc2cc34df",
			"number": "205807",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528930",
					"number": "199380",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CARAPEBUS",
				"id": "508"
			},
			"address": {
				"latitude": -22.184178,
				"longitude": -41.65962
			}
		},
		{
			"id": "86cbb8ca-c00a-4348-a984-a20441cc5166",
			"number": "205813",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528921",
					"number": "199369",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FRANCISCO DE ITABAPOANA",
				"id": "567"
			},
			"address": {
				"latitude": -21.473754,
				"longitude": -41.11669
			}
		},
		{
			"id": "8e36f794-dcf1-4462-8610-730b24e56a86",
			"number": "205682",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528923",
					"number": "199366",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FIDELIS",
				"id": "572"
			},
			"address": {
				"latitude": -21.64583,
				"longitude": -41.746783
			}
		},
		{
			"id": "5dee16e0-416a-4e64-b499-14e5de657969",
			"number": "205657",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528929",
					"number": "199376",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - RIO DAS OSTRAS",
				"id": "582"
			},
			"address": {
				"latitude": -22.526454,
				"longitude": -41.932597
			}
		},
		{
			"id": "82fbf259-9750-41dc-a7c1-a2f2201d3515",
			"number": "205690",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528932",
					"number": "199377",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO JOAO DA BARRA",
				"id": "570"
			},
			"address": {
				"latitude": -21.632406,
				"longitude": -41.044346
			}
		},
		{
			"id": "406e6ce7-2ff1-4dd3-82ce-e867b6a4e6ac",
			"number": "205727",
			"delivery_type": "VACINA - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528931",
					"number": "199374",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - ITAPERUNA",
				"id": "523"
			},
			"address": {
				"latitude": -21.201594,
				"longitude": -41.891872
			}
		},
		{
			"id": "2fef5dab-992e-4251-839d-1c942ab67960",
			"number": "205797",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528926",
					"number": "199371",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444521",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - VALENÇA",
				"id": "538"
			},
			"address": {
				"latitude": -22.247151,
				"longitude": -43.699073
			}
		},
		{
			"id": "9a7c96b2-7c30-4494-a38d-18ce67b9dfc4",
			"number": "205668",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528936",
					"number": "199383",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444515",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CAMPOS DOS GOYTACAZES",
				"id": "506"
			},
			"address": {
				"latitude": -21.754768,
				"longitude": -41.32973
			}
		},
		{
			"id": "ef5bb22b-d0b0-47bd-be4f-0263f710f213",
			"number": "205787",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528927",
					"number": "199373",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444511",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CAMPOS DOS GOYTACAZES",
				"id": "506"
			},
			"address": {
				"latitude": -21.754768,
				"longitude": -41.32973
			}
		},
		{
			"id": "f573ce48-77a1-471e-9ead-002d8741fc6e",
			"number": "205686",
			"delivery_type": "VACINA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528935",
					"number": "199381",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO FRANCISCO DE ITABAPOANA",
				"id": "567"
			},
			"address": {
				"latitude": -21.473754,
				"longitude": -41.11669
			}
		},
		{
			"id": "47e89ac3-c1a9-4f76-b2cf-03a7d642b3fb",
			"number": "205549",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528937",
					"number": "199386",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - BARRA DO PIRAI",
				"id": "495"
			},
			"address": {
				"latitude": -22.465271,
				"longitude": -43.828428
			}
		},
		{
			"id": "723924f4-e9c4-40b3-8e29-6adc4dc03729",
			"number": "205361",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528938",
					"number": "199385",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - CACHOEIRAS DE MACACU",
				"id": "504"
			},
			"address": {
				"latitude": -22.456601,
				"longitude": -42.650542
			}
		},
		{
			"id": "bc81b26b-30e2-4cc5-8d94-19f6cd18c17a",
			"number": "205794",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528939",
					"number": "199389",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "d14276bc-3efc-4d7c-8b18-7221b00d5ab5",
			"number": "205277",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528945",
					"number": "199392",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444523",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - SAO GONÇALO",
				"id": "571"
			},
			"address": {
				"latitude": -22.813126,
				"longitude": -43.070703
			}
		},
		{
			"id": "c17a8c99-c7c1-4625-b3c6-e58b62e8e7aa",
			"number": "205368",
			"delivery_type": "AGENDAMENTO - RETIRADA",
			"delivery_group": "TAKE_AWAY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528941",
					"number": "199384",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - TERESOPOLIS",
				"id": "549"
			},
			"address": {
				"latitude": -22.4169,
				"longitude": -42.956682
			}
		},
		{
			"id": "c057d175-f2c1-4f8d-9bfc-3c33d23b0628",
			"number": "7298",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528775",
					"number": "7096",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444486",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF GROTA 2 - JOSE MARTI 2",
				"id": "2622"
			},
			"address": {
				"latitude": -22.911529,
				"longitude": -43.080789
			}
		},
		{
			"id": "8f5ad009-63fc-4889-8515-bd7a410d0f02",
			"number": "7300",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528771",
					"number": "7095",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444485",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF MACEIO - DR JOAO SAMPAIO",
				"id": "2637"
			},
			"address": {
				"latitude": -22.908528102,
				"longitude": -43.0682007411
			}
		},
		{
			"id": "1a8bf4ad-8ec3-47c0-9240-6fd78789cad1",
			"number": "7280",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528883",
					"number": "7112",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444487",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF SAPE",
				"id": "2650"
			},
			"address": {
				"latitude": -22.8949840943,
				"longitude": -43.0575240161
			}
		},
		{
			"id": "225815b1-53b6-4a0e-b954-b7b0e393bd90",
			"number": "7329",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528949",
					"number": "7127",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444506",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HOSPITAL MUNICIPAL CARLOS TORTELLY - HMCT",
				"id": "2568"
			},
			"address": {
				"latitude": -22.893849,
				"longitude": -43.109091
			}
		},
		{
			"id": "de1dc1e9-8f44-47bb-a825-78b7c1b11775",
			"number": "7308",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528901",
					"number": "7124",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444482",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS MONTEIRO LOBATO",
				"id": "2611"
			},
			"address": {
				"latitude": -22.904408,
				"longitude": -43.096097
			}
		},
		{
			"id": "f95c9820-ea2c-4f26-a9aa-614f5775b8f7",
			"number": "205802",
			"delivery_type": "ROTA - ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "fd9bbc0f-6758-4fef-813e-a408c3e065da",
				"name": "SESRJ"
			},
			"invoices": [
				{
					"id": "9528943",
					"number": "199390",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444520",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SMS - MIGUEL PEREIRA",
				"id": "536"
			},
			"address": {
				"latitude": -22.450375,
				"longitude": -43.461106
			}
		},
		{
			"id": "cda977bd-4c8f-4205-b289-3ca2386c1e69",
			"number": "7340",
			"delivery_type": "EMERGENCIAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528904",
					"number": "7122",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444489",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF COLONIA DE PESCADORES",
				"id": "2618"
			},
			"address": {
				"latitude": -22.9551324985,
				"longitude": -43.0337237246
			}
		},
		{
			"id": "cc6a20b4-a226-45c9-a882-0dc1005130f2",
			"number": "6581",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc",
				"name": "SEMUS"
			},
			"invoices": [
				{
					"id": "9528951",
					"number": "6308",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CLINICA DA FAMILIA JARDIM PALMARES",
				"id": "2567"
			},
			"address": {
				"latitude": -22.7579184172,
				"longitude": -43.5118713589
			}
		},
		{
			"id": "741b92ab-7716-4fba-88d8-675e43f0c126",
			"number": "45346",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528954",
					"number": "44445",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "75f0beaf-d777-4337-b807-177a7f1dba73",
			"number": "45603",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528958",
					"number": "44449",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "4bc8f68a-ffc7-4e53-a923-6653536e7945",
			"number": "45602",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528959",
					"number": "44446",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "1ba3954b-4dc6-49a2-b8eb-bd92420342e1",
			"number": "45432",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528963",
					"number": "44448",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "f570e84e-70f5-4885-88df-8e95f6c3883a",
			"number": "45530",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528967",
					"number": "44458",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS III JOÃO FERREIRA FILHO - AP 3.1",
				"id": "2763"
			},
			"address": {
				"latitude": -22.8648222021,
				"longitude": -43.2684726975
			}
		},
		{
			"id": "7676ee9b-85ca-453e-ba9a-21f0a1d11af6",
			"number": "45384",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528956",
					"number": "44447",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "c0a44d9f-d3d5-43e0-83cc-fd9ee9608929",
			"number": "45814",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528962",
					"number": "44454",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "7ccfa4e0-47d4-418b-9d77-27bd33c31b72",
			"number": "45599",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528965",
					"number": "44451",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "9760da24-bb13-43bf-85be-57e5612f8347",
			"number": "45529",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528957",
					"number": "44457",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS III JOÃO FERREIRA FILHO - AP 3.1",
				"id": "2763"
			},
			"address": {
				"latitude": -22.8648222021,
				"longitude": -43.2684726975
			}
		},
		{
			"id": "c94bcdc3-135f-45a7-b03b-acd552ec566a",
			"number": "45531",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528960",
					"number": "44455",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS III JOÃO FERREIRA FILHO - AP 3.1",
				"id": "2763"
			},
			"address": {
				"latitude": -22.8648222021,
				"longitude": -43.2684726975
			}
		},
		{
			"id": "45b709da-7a6f-4add-bb05-a5e440a8eb84",
			"number": "45399",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528969",
					"number": "44462",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "9a886fe9-1858-441d-800b-12c44185b6c0",
			"number": "45443",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528971",
					"number": "44463",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "7c1adabc-bda2-4060-b909-030ecd1dbb68",
			"number": "45568",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528975",
					"number": "44465",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "1c7457e6-94fd-4926-a8eb-bd9b8bedae67",
			"number": "45813",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528978",
					"number": "44469",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "b0e0903d-c4b7-4925-903a-b9c06aed55ee",
			"number": "45755",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528976",
					"number": "44467",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "5c8cbd4c-d42c-41a4-96f0-d94f27bb882d",
			"number": "45724",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528984",
					"number": "44475",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEDE CAP 3.1",
				"id": "2788"
			},
			"address": {
				"latitude": -22.8414449115,
				"longitude": -43.2707109398
			}
		},
		{
			"id": "64f4908a-dbd6-48ce-8cf1-7c33a8eac33e",
			"number": "45642",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528992",
					"number": "44482",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "d593880c-5f49-49c6-867e-c0bf07e7a87b",
			"number": "45643",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528994",
					"number": "44483",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "62362091-d7b9-4c77-bd65-021a1139c56c",
			"number": "45379",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528983",
					"number": "44470",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "5daceb6c-b1bb-4555-aeeb-feb19d8ac8b5",
			"number": "45376",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528988",
					"number": "44479",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "cee5f3ad-284b-4239-8834-78fced1e722b",
			"number": "45816",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528990",
					"number": "44484",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "33871388-3b70-406b-9dba-72e1b3cdac27",
			"number": "9046",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529802",
					"number": "8798",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HEMORIO",
				"id": "579"
			},
			"address": {
				"latitude": -22.909055,
				"longitude": -43.189452
			}
		},
		{
			"id": "ba361e3e-c277-4da0-85f0-bf9569b17dc1",
			"number": "8990",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "97a506ce-fd98-4666-b630-3118aee49732",
				"name": "Treinamento S.A."
			},
			"invoices": [
				{
					"id": "9529805",
					"number": "8796",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-10T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CPRJ",
				"id": "610"
			},
			"address": {
				"latitude": -22.8951,
				"longitude": -43.191358
			}
		},
		{
			"id": "8514a5ed-753c-436c-897f-0e9a4ab7a9ab",
			"number": "7282",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528950",
					"number": "7126",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444492",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF JACARÉ - ENOC JOAQUIM OLIVEIRA",
				"id": "2625"
			},
			"address": {
				"latitude": -22.93152,
				"longitude": -43.051259
			}
		},
		{
			"id": "5201fece-70eb-4619-8a21-18a9f38d6448",
			"number": "45601",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528955",
					"number": "44450",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "4ab0a745-5abb-4b97-a59d-8a2c9c888c0c",
			"number": "45598",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528961",
					"number": "44453",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "fe787104-f36f-41b7-8c2e-12ece5fafeac",
			"number": "45527",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528966",
					"number": "44456",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS III JOÃO FERREIRA FILHO - AP 3.1",
				"id": "2763"
			},
			"address": {
				"latitude": -22.8648222021,
				"longitude": -43.2684726975
			}
		},
		{
			"id": "222533be-1241-42b6-93ad-c96ba7298d5c",
			"number": "45600",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528964",
					"number": "44452",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF ZILDA ARNS - AP. 3.1",
				"id": "2730"
			},
			"address": {
				"latitude": -22.8648514122,
				"longitude": -43.2684087025
			}
		},
		{
			"id": "960ab00c-2102-4f00-b134-d8fe738d011a",
			"number": "45562",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528968",
					"number": "44460",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "f82d1e9a-8b19-4805-abaa-b480d7518ea0",
			"number": "45563",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528970",
					"number": "44464",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "99787bf5-525b-4583-9ae5-0c5c7fc3edee",
			"number": "45570",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528973",
					"number": "44461",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "c0e8884f-726e-4037-b7a9-95a20dca9f55",
			"number": "45815",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528972",
					"number": "44459",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CAPS III JOÃO FERREIRA FILHO - AP 3.1",
				"id": "2763"
			},
			"address": {
				"latitude": -22.8648222021,
				"longitude": -43.2684726975
			}
		},
		{
			"id": "feccfec9-c855-4fda-8143-44f2c9111bc3",
			"number": "45758",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528974",
					"number": "44471",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "e9226997-3f51-4bd0-bbd5-62bec2deb64d",
			"number": "45708",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528980",
					"number": "44473",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEDE CAP 3.1",
				"id": "2788"
			},
			"address": {
				"latitude": -22.8414449115,
				"longitude": -43.2707109398
			}
		},
		{
			"id": "c8ca036a-c57b-432e-abd1-8264c0595a56",
			"number": "45772",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528985",
					"number": "44476",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEDE CAP 3.1",
				"id": "2788"
			},
			"address": {
				"latitude": -22.8414449115,
				"longitude": -43.2707109398
			}
		},
		{
			"id": "b1e50de9-9dac-4687-a586-e0c117b86338",
			"number": "7295",
			"delivery_type": "ENTREGA",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "3b5be590-ed53-4e46-bbf1-f964fff47493",
				"name": "FMS Niterói"
			},
			"invoices": [
				{
					"id": "9528768",
					"number": "7085",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444484",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "PMF CANTAGALO (BADU) - PROF BARROS TERRA",
				"id": "2614"
			},
			"address": {
				"latitude": -22.905886,
				"longitude": -43.053623
			}
		},
		{
			"id": "0cb17b77-75d6-45c4-84ae-c587a5dce7c5",
			"number": "9040",
			"delivery_type": "GRADE",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "6701d952-70f7-4288-9407-9a10be4e7428",
				"name": "FSERJ"
			},
			"invoices": [
				{
					"id": "9528953",
					"number": "8801",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": "9444509",
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "HMAE",
				"id": "700"
			},
			"address": {
				"latitude": -22.785213,
				"longitude": -43.410157
			}
		},
		{
			"id": "7535fbbb-b4c6-48cb-8dfd-487517c56129",
			"number": "45565",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528977",
					"number": "44466",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS SÃO GODOFREDO - AP. 3.1",
				"id": "2741"
			},
			"address": {
				"latitude": -22.8412858848,
				"longitude": -43.2707395025
			}
		},
		{
			"id": "49348acc-e55f-492b-bd8c-75c68fe9fe8b",
			"number": "45723",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528981",
					"number": "44474",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEDE CAP 3.1",
				"id": "2788"
			},
			"address": {
				"latitude": -22.8414449115,
				"longitude": -43.2707109398
			}
		},
		{
			"id": "a2d085f1-7ca8-4332-9e3b-15320f42cd6e",
			"number": "45428",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528979",
					"number": "44472",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "f559adce-966b-4d68-b16c-e658778fcacb",
			"number": "45754",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528982",
					"number": "44477",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "SEDE CAP 3.1",
				"id": "2788"
			},
			"address": {
				"latitude": -22.8414449115,
				"longitude": -43.2707109398
			}
		},
		{
			"id": "0c7b79e7-7d6f-4454-9c1b-02b75838dcb2",
			"number": "45424",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528986",
					"number": "44480",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "54026758-37b8-4760-b367-4b26cd5fc5f5",
			"number": "45612",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528993",
					"number": "44485",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "bdfcecdb-94c7-4a5c-9f71-e8d7426f18a6",
			"number": "45757",
			"delivery_type": "GRADE QUINZENAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528987",
					"number": "44468",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF RODRIGO Y AGUILAR ROIG - AP. 3.1",
				"id": "2727"
			},
			"address": {
				"latitude": -22.8602984792,
				"longitude": -43.2677704007
			}
		},
		{
			"id": "0de99494-3a60-47db-9234-b8090d400786",
			"number": "45641",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528989",
					"number": "44481",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "f7e1002c-713e-4b22-9f52-361fb001d70f",
			"number": "45644",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528991",
					"number": "44478",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CF KLEBEL DE OLIVEIRA ROCHA - AP. 3.1",
				"id": "2725"
			},
			"address": {
				"latitude": -22.8154826654,
				"longitude": -43.3036422467
			}
		},
		{
			"id": "a90ee016-fb1e-4c13-a2c2-86eadaf2a7b9",
			"number": "45746",
			"delivery_type": "GRADE MENSAL",
			"delivery_group": "DELIVERY",
			"account": {
				"id": "ec837049-b5c4-4651-bfad-538441799922",
				"name": "Viva Rio HO"
			},
			"invoices": [
				{
					"id": "9528995",
					"number": "44486",
					"date": "2023-11-10",
					"planned_delivery_date": "2023-11-13T00:00:00.000Z",
					"task_id": null,
					"invoice_status": "NEW",
					"refused_reason_id": null
				}
			],
			"customer": {
				"name": "CMS JOSÉ PARANHOS FONTENELLE - AP. 3.1",
				"id": "2734"
			},
			"address": {
				"latitude": -22.8417506788,
				"longitude": -43.2694365768
			}
		}
	]
)//.data.map(item=> item.address)
console.log(data)


async function calcularDistancias(armazem, destinos) {
  try {
    // Construir a URL da API OSRM
    const url = `http://router.project-osrm.org/table/v1/driving/${
      armazem.longitude
    },${armazem.latitude};${destinos
      .map((destino) => `${destino.longitude},${destino.latitude}`)
      .join(";")}?annotations=distance`;

    // Fazer a requisição usando axios
    const response = await axios.get(url);

    // Extrair as distâncias da resposta
    const distancias = response.data.distances[0].slice(1); // Exclui a distância para o armazém

    return distancias;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao calcular distâncias.");
  }
}

// Exemplo de uso
const armazem = { latitude: -22.8649769, longitude: -43.0991505 };
const destinos = [
  { latitude: -23.56343, longitude: -46.65216 },
 // { latitude: -23.54965, longitude: -46.63629 },
  // Adicione mais destinos conforme necessário
  {
    "latitude": -22.8427085487,
    "longitude": -43.2790040295
}
];

calcularDistancias(armazem, destinos)
  .then((distancias) => console.log(distancias))
  .catch((error) => console.error(error));
