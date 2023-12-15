const orders = [
    {
      id: '7cf9b17d-cc83-446b-ba36-2bde89efd27b',
      number: '7769',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533691',
          number: '7539',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MATAPACA - DR. ABELARADO RAMIREZ',
        id: '2643'
      },
      address: {
        latitude: -22.8819593531,
        longitude: -43.0313775378
      }
    },
    {
      id: 'a3d9c982-eb9f-4734-a339-16b05cd958db',
      number: '7764',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533692',
          number: '7538',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CAFUBÁ 1 - ERNESTO CHE GUEVARA 1',
        id: '2610'
      },
      address: {
        latitude: -22.936281,
        longitude: -43.084655
      }
    },
    {
      id: 'c5cb835f-9e57-41e7-b965-6cb6b2c8dc60',
      number: '207231',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533693',
          number: '200921',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: '0e780035-c94e-4277-af44-517caa7a9d16',
      number: '207202',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533694',
          number: '200923',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: '4dd88060-2737-4500-b9ca-737cef2ba105',
      number: '207005',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533695',
          number: '200922',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - PETROPOLIS',
        id: '564'
      },
      address: {
        latitude: -22.507387,
        longitude: -43.192485
      }
    },
    {
      id: '694e31e0-78ba-4a7f-a524-82617954f140',
      number: '207161',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533696',
          number: '200925',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: '24af4107-bee2-4e3d-84b7-0e1169d6bc42',
      number: '207195',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533697',
          number: '200924',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SAO JOAO DA BARRA',
        id: '570'
      },
      address: {
        latitude: -21.632406,
        longitude: -41.044346
      }
    },
    {
      id: '21e6662c-2b57-44be-be2d-45893c562ad0',
      number: '207021',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533698',
          number: '200927',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - PARATY',
        id: '565'
      },
      address: {
        latitude: -23.218667,
        longitude: -44.72825
      }
    },
    {
      id: 'ad044a1f-e172-48db-8688-7c2532f1b543',
      number: '206957',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533699',
          number: '200926',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - TERESOPOLIS',
        id: '549'
      },
      address: {
        latitude: -22.4169,
        longitude: -42.956682
      }
    },
    {
      id: '6ee5735d-b80b-406b-8714-599f6eabd0fd',
      number: '206481',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533700',
          number: '200930',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ARMACAO DE BUZIOS',
        id: '489'
      },
      address: {
        latitude: -22.867185,
        longitude: -41.985345
      }
    },
    {
      id: 'a1ecc318-20d9-4bb9-8ddb-4849d589c887',
      number: '206747',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533701',
          number: '200929',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: '92f2275f-aaac-497f-ab83-c154ee310848',
      number: '206894',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533702',
          number: '200928',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - CASIMIRO DE ABREU',
        id: '511'
      },
      address: {
        latitude: -22.479579,
        longitude: -42.200151
      }
    },
    {
      id: '65cccdc8-ee15-40c7-b5cd-70a6d4fef1f8',
      number: '206872',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533703',
          number: '200931',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - CASIMIRO DE ABREU',
        id: '511'
      },
      address: {
        latitude: -22.479579,
        longitude: -42.200151
      }
    },
    {
      id: 'ec95ac53-056c-4651-80f2-e4409adb507f',
      number: '206918',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533704',
          number: '200933',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: '618971f7-ced7-4626-8082-11be8e8b152a',
      number: '207107',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533705',
          number: '200934',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SAO GONÇALO',
        id: '571'
      },
      address: {
        latitude: -22.813126,
        longitude: -43.070703
      }
    },
    {
      id: 'b3920159-03e8-4bf4-8a12-978fc4849e47',
      number: '207001',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533706',
          number: '200932',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - VASSOURAS',
        id: '534'
      },
      address: {
        latitude: -22.4116404988,
        longitude: -43.6647880153
      }
    },
    {
      id: '662d18a1-1742-4782-9f5b-18d1c2263843',
      number: '206982',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533707',
          number: '200935',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - IGUABA GRANDE',
        id: '519'
      },
      address: {
        latitude: -22.8422925305,
        longitude: -42.2259640046
      }
    },
    {
      id: '9afee141-2ecf-4f6f-aee3-f76b426613e3',
      number: '206956',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533708',
          number: '200936',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: 'a19ba683-2a95-4811-bb3f-b82748e040c5',
      number: '206990',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533709',
          number: '200939',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: 'e7f9fc50-c77a-41a9-b816-bd0d81f7e0d4',
      number: '207102',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533710',
          number: '200937',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SAO GONÇALO',
        id: '571'
      },
      address: {
        latitude: -22.813126,
        longitude: -43.070703
      }
    },
    {
      id: 'e8d9b4c5-9af1-4d90-b864-59d027f3dc85',
      number: '206968',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533711',
          number: '200938',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ARMACAO DE BUZIOS',
        id: '489'
      },
      address: {
        latitude: -22.867185,
        longitude: -41.985345
      }
    },
    {
      id: '42f1bb9b-a083-4ebc-b169-ddfd5e0b6a99',
      number: '207124',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533712',
          number: '200941',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '4401ba46-2ff2-4575-8b84-a4d4d1a86d87',
      number: '206960',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533713',
          number: '200942',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '343d2c4d-9371-4161-a7bd-d4b79e88a5fb',
      number: '206054',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533714',
          number: '200943',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CENTRO DE SAUDE VASCO BARCELOS',
        id: '2526'
      },
      address: {
        latitude: -2276119,
        longitude: -4344986
      }
    },
    {
      id: 'f97acedb-566d-4114-aed6-27ef263bc57e',
      number: '207125',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533715',
          number: '200940',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '1602293c-f82c-4ab9-b75f-e216a56952ae',
      number: '7842',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533716',
          number: '7541',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'ALL LAB',
        id: '2432'
      },
      address: {
        latitude: -22.882838,
        longitude: -43.125007
      }
    },
    {
      id: 'a4596fc0-aade-41a0-add7-a9af6c8138d8',
      number: '7099',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533717',
          number: '6903',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: 'bd6d6ef5-c46a-4d88-8d4e-244cf2f3439c',
      number: '7192',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533718',
          number: '6893',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CAPS III – DR. JAYR NOGUEIRA',
        id: '2635'
      },
      address: {
        latitude: 22.7628444122,
        longitude: 43.4482080023
      }
    },
    {
      id: 'd3b3cce9-690e-43a8-890c-08b4923b394e',
      number: '7112',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533719',
          number: '6897',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA RIO D’OURO',
        id: '2591'
      },
      address: {
        latitude: -22.6547358637,
        longitude: -43.5333525182
      }
    },
    {
      id: 'd2005263-844a-47ec-9a01-734df92f40dd',
      number: '7098',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533720',
          number: '6902',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: '4dd86abc-34c4-45c8-a966-72ff6e56ad73',
      number: '7193',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533721',
          number: '6894',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CAPS III – DR. JAYR NOGUEIRA',
        id: '2635'
      },
      address: {
        latitude: 22.7628444122,
        longitude: 43.4482080023
      }
    },
    {
      id: 'f692e790-e323-4b7f-9038-05357b9f7146',
      number: '7111',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533722',
          number: '6896',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA RIO D’OURO',
        id: '2591'
      },
      address: {
        latitude: -22.6547358637,
        longitude: -43.5333525182
      }
    },
    {
      id: '43d83600-4e3d-4bb0-9f4a-87ae83ce6cd8',
      number: '7097',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533723',
          number: '6901',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: 'c1f3d5ce-170f-4cbb-98a3-2b084122de64',
      number: '7107',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533724',
          number: '6898',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA JACERUBA',
        id: '2589'
      },
      address: {
        latitude: -22.6017555094,
        longitude: -43.5670221853
      }
    },
    {
      id: '0595e1cb-3749-4bc1-b855-855839c295cf',
      number: '7110',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533725',
          number: '6895',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA RIO D’OURO',
        id: '2591'
      },
      address: {
        latitude: -22.6547358637,
        longitude: -43.5333525182
      }
    },
    {
      id: '713de0e3-4afe-4576-9f82-9a87ca543ae3',
      number: '7109',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533726',
          number: '6900',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA JACERUBA',
        id: '2589'
      },
      address: {
        latitude: -22.6017555094,
        longitude: -43.5670221853
      }
    },
    {
      id: '09f9aa89-1574-4831-a0d5-5a7b74e1b60e',
      number: '7100',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533727',
          number: '6904',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: 'c078d78a-e2b7-44a8-81c5-ec53b95ad557',
      number: '7105',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533728',
          number: '6909',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA ADRIANOPOLIS ',
        id: '2588'
      },
      address: {
        latitude: -22.6556606651,
        longitude: -43.4910330875
      }
    },
    {
      id: 'cd7f8612-a6e9-474e-9d9c-788d2b720f43',
      number: '7101',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533729',
          number: '6905',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: '6c32ee12-43ec-4585-8c60-b1f819efda56',
      number: '7108',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533730',
          number: '6899',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA JACERUBA',
        id: '2589'
      },
      address: {
        latitude: -22.6017555094,
        longitude: -43.5670221853
      }
    },
    {
      id: '454773b7-77c5-43bf-81da-0b368dcdca88',
      number: '7103',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533731',
          number: '6907',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: '70e11a9d-f055-41c9-b456-d6c08f7845ec',
      number: '7104',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533732',
          number: '6908',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA ADRIANOPOLIS ',
        id: '2588'
      },
      address: {
        latitude: -22.6556606651,
        longitude: -43.4910330875
      }
    },
    {
      id: '0b5d94a3-1e49-4e25-8e55-1ac60251bc4d',
      number: '7102',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533733',
          number: '6906',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF  MANOEL MOREIRA DE OLIVEIRA (TINGUA)',
        id: '2590'
      },
      address: {
        latitude: -22.5945751798,
        longitude: -43.4179116433
      }
    },
    {
      id: '822f61ad-62ce-4da4-8508-8e1270ea412c',
      number: '7106',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533734',
          number: '6910',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CLINICA DA FAMILIA ADRIANOPOLIS ',
        id: '2588'
      },
      address: {
        latitude: -22.6556606651,
        longitude: -43.4910330875
      }
    },
    {
      id: 'da2b71f7-c716-4cb6-849e-7b52a02624fc',
      number: '7096',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533735',
          number: '6911',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'MATERNIDADE MUNICIPAL MARIANA BULHOES',
        id: '2557'
      },
      address: {
        latitude: -22.7388762711,
        longitude: -43.4562199354
      }
    },
    {
      id: '87689daa-23f9-4a52-9cac-5f43b974a4bd',
      number: '207066',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533736',
          number: '200944',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - CASIMIRO DE ABREU',
        id: '511'
      },
      address: {
        latitude: -22.479579,
        longitude: -42.200151
      }
    },
    {
      id: '7b465fe4-0346-439d-a756-b6ad2baa0386',
      number: '207203',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533737',
          number: '200947',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: 'a8b95723-5b06-496e-bd44-f6cd7d3a046e',
      number: '207160',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533738',
          number: '200945',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - RIO BONITO',
        id: '584'
      },
      address: {
        latitude: -22.714854,
        longitude: -42.637027
      }
    },
    {
      id: 'd361507a-fb32-4761-93f1-907959d76f13',
      number: '207182',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533739',
          number: '200946',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - PARATY',
        id: '565'
      },
      address: {
        latitude: -23.218667,
        longitude: -44.72825
      }
    },
    {
      id: 'cf40abb1-6d67-402e-8d74-1ccb9195e57f',
      number: '207283',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533740',
          number: '200950',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '88bd0531-2870-4e40-aef4-1b1c215218ff',
      number: '207287',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533741',
          number: '200948',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - VARRE-SAI',
        id: '537'
      },
      address: {
        latitude: -20.927822,
        longitude: -41.867314
      }
    },
    {
      id: '5536fbab-049a-40b3-beb4-a6cc46bdd703',
      number: '207285',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533742',
          number: '200949',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - PORCIUNCULA',
        id: '594'
      },
      address: {
        latitude: -20.930193,
        longitude: -41.955432
      }
    },
    {
      id: 'b576938c-83dc-4141-ac3a-8cceb2d59e3b',
      number: '207275',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533743',
          number: '200953',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - MESQUITA',
        id: '535'
      },
      address: {
        latitude: -22.79041,
        longitude: -43.436354
      }
    },
    {
      id: 'bdbcebf1-35d1-4faf-8bf8-27a817978d40',
      number: '207280',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533744',
          number: '200951',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NITEROI',
        id: '498'
      },
      address: {
        latitude: -22.905756,
        longitude: -43.097143
      }
    },
    {
      id: '6e13eb3f-3e48-4cf6-9902-b970856e48fc',
      number: '207277',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533745',
          number: '200952',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: '39ca37c3-8b18-4273-bc25-9ae1aeaf7b7f',
      number: '207272',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533746',
          number: '200955',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - JAPERI',
        id: '525'
      },
      address: {
        latitude: -22.700029,
        longitude: -43.623622
      }
    },
    {
      id: '584a7fd9-722f-4aaf-8530-2c859753fb17',
      number: '207267',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533747',
          number: '200957',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BARRA DO PIRAI',
        id: '495'
      },
      address: {
        latitude: -22.465271,
        longitude: -43.828428
      }
    },
    {
      id: '86b85919-016a-4980-a106-0a8be712b761',
      number: '207273',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533748',
          number: '200954',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ITATIAIA',
        id: '524'
      },
      address: {
        latitude: -22.4968,
        longitude: -44.563047
      }
    },
    {
      id: '41597e06-6993-41de-8ce7-d7bf0ef1bdf2',
      number: '207269',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533749',
          number: '200956',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BOM JESUS DE ITABAPOANA',
        id: '502'
      },
      address: {
        latitude: -21.138854,
        longitude: -41.67683
      }
    },
    {
      id: '40cb06bb-5e81-4ebf-8d78-943c33df8e97',
      number: '206748',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533750',
          number: '200959',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: '523a5c56-d2d1-4982-9bf2-1518fa1adaca',
      number: '207103',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533751',
          number: '200961',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '4adededa-edac-4e7e-96a9-4f79fe909b69',
      number: '207132',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533752',
          number: '200960',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BELFORD ROXO',
        id: '500'
      },
      address: {
        latitude: -22.745602,
        longitude: -43.391195
      }
    },
    {
      id: 'ef0b3d6a-e922-4eee-9154-6bd78c92c57b',
      number: '206761',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533753',
          number: '200958',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ARMACAO DE BUZIOS',
        id: '489'
      },
      address: {
        latitude: -22.867185,
        longitude: -41.985345
      }
    },
    {
      id: '3d102c4f-e4e6-4eac-98ef-38d46bf6d0b9',
      number: '207074',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533754',
          number: '200962',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - IGUABA GRANDE',
        id: '519'
      },
      address: {
        latitude: -22.8422925305,
        longitude: -42.2259640046
      }
    },
    {
      id: '08516020-3fea-4068-b79b-cd2a3840867c',
      number: '7188',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533755',
          number: '6912',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CAPS III – DR. JAYR NOGUEIRA',
        id: '2635'
      },
      address: {
        latitude: 22.7628444122,
        longitude: 43.4482080023
      }
    },
    {
      id: 'c9d8ca45-e460-4ecc-aba6-427a6807216f',
      number: '46614',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533756',
          number: '45356',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MARIA JOSÉ PAPERA DE AZEVEDO AP 5.2',
        id: '2772'
      },
      address: {
        latitude: -22.8775324496,
        longitude: -43.5339815687
      }
    },
    {
      id: 'd9ebef6a-72e6-4ec0-9f77-6d6e64a759aa',
      number: '46567',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533757',
          number: '45363',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '928872e6-91b6-402f-9c9d-7047b0784d40',
      number: '46616',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533758',
          number: '45355',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MARIA JOSÉ PAPERA DE AZEVEDO AP 5.2',
        id: '2772'
      },
      address: {
        latitude: -22.8775324496,
        longitude: -43.5339815687
      }
    },
    {
      id: '0113003d-fc5d-478b-a7f0-66f870ed39fe',
      number: '46565',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533759',
          number: '45365',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '56535d4b-1ca0-4123-8965-b80ee7011160',
      number: '46770',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533760',
          number: '45359',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: '32a35670-b671-4862-a9ae-979c353406ff',
      number: '46566',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533761',
          number: '45364',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '50ec14ff-56f1-4db6-84c8-6b33bf6a3a3a',
      number: '46619',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533762',
          number: '45362',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: '00bcbb1a-4a97-4896-b3b5-52cae39816e7',
      number: '46810',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533763',
          number: '45367',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: 'd9fbfa36-7f00-48d7-ac70-de6fab71c55f',
      number: '46620',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533764',
          number: '45361',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: 'b58a4284-f379-47fb-9a8a-22e7453b751d',
      number: '46771',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533765',
          number: '45357',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MARIA JOSÉ PAPERA DE AZEVEDO AP 5.2',
        id: '2772'
      },
      address: {
        latitude: -22.8775324496,
        longitude: -43.5339815687
      }
    },
    {
      id: 'db869b6e-9781-445b-92c8-63429a1d0c2e',
      number: '9272',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533861',
          number: '9064',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: 'dc47bad4-848d-4ea1-993d-3b38e3ccef3d',
      number: '9333',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533867',
          number: '9082',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'de2a9fc0-d31e-4c9c-aeb3-2979be2ab0d2',
      number: '9308',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533871',
          number: '9073',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '6a9e19d4-a3f6-420c-beb6-e37751f074e2',
      number: '9348',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533872',
          number: '9074',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '1880cef0-ac2b-4ceb-b5da-ada05bf281d5',
      number: '9161',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533875',
          number: '9063',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '4dd560a1-fa48-4d12-b6b7-d9b9a693498a',
      number: '9282',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533879',
          number: '9071',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '2f32f3c3-7d48-4b49-80cc-83152c0b4587',
      number: '9287',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533886',
          number: '9079',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: '9172df1b-33bc-49cf-a8b0-6e039001f1ae',
      number: '9286',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533862',
          number: '9072',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: 'a24b7c1f-dff1-424d-a6fb-3d52eb29aa49',
      number: '9282',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533864',
          number: '9071',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '069ef4e1-e1b1-4b1f-af7c-aecbc7105189',
      number: '9301',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533866',
          number: '9081',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'eef9e1d7-cb43-431f-a950-09f0e21e2ef9',
      number: '9159',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533874',
          number: '9069',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '4961d5db-e7f0-4b4e-a1e7-525bd20ebfae',
      number: '9296',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533878',
          number: '9066',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '2931d228-9bc8-4f2b-971b-015d0d56b008',
      number: '9330',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533883',
          number: '9077',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: 'afd1a67f-cd5d-4905-a6b7-537eea918216',
      number: '9308',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533885',
          number: '9073',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '31afd5c6-350d-4f02-92b9-28313e9a8491',
      number: '9347',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533889',
          number: '9083',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: '29fbeb9d-042b-49cf-b737-54ed95d100c0',
      number: '9298',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533892',
          number: '9075',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: 'fcabb946-86af-44b3-b871-77c3eb5bd7ec',
      number: '9298',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533863',
          number: '9075',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: '33ef2ddd-7552-4229-9178-97d1bb3fc6f7',
      number: '9287',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533870',
          number: '9079',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'ee863b6e-76b9-4fe4-810e-ae5d1fbcb496',
      number: '9272',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533873',
          number: '9064',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '579f8103-87ed-4c18-99c8-74d16839fbfa',
      number: '9293',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533877',
          number: '9065',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '495f26dc-290a-4e3b-b3d7-7fd021eb2dfa',
      number: '9313',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533887',
          number: '9076',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: '0c162749-4385-4bb1-a2ed-4c0f27e27e63',
      number: '9350',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533890',
          number: '9078',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: '5a75fca5-48ec-4d3b-bf3a-782363bd37bb',
      number: '9347',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533865',
          number: '9083',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'a467f535-6db9-4e2b-ba58-7f9550fd134f',
      number: '9309',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533869',
          number: '9080',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'b02463d1-9018-495d-a3b8-293493ff0c15',
      number: '9274',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533882',
          number: '9070',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: 'e4f141e6-1829-46f3-8db3-3a86e42f174c',
      number: '9309',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533893',
          number: '9080',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: '6aacb8a3-7e78-4df9-bf23-4cafffd2da83',
      number: '9330',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533868',
          number: '9077',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: '8b9e7fed-2d4e-4d58-9055-0332deb7f100',
      number: '9351',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533876',
          number: '9068',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '2489847d-d4a8-4b36-b3e8-f60da286f035',
      number: '9329',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533880',
          number: '9067',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '12cd426d-bcb7-4f78-8e81-b272048468d5',
      number: '9286',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533881',
          number: '9072',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: 'f511fafc-8ae2-435c-838e-ddfecb1bb27c',
      number: '9348',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533884',
          number: '9074',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '3a110087-0d3b-4c77-8c7b-620b0b8abf96',
      number: '9301',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533888',
          number: '9081',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: '0f7a1341-b909-4ae1-832a-84d328dbd61f',
      number: '9333',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533891',
          number: '9082',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA ITABORAI',
        id: '627'
      },
      address: {
        latitude: -22.769277,
        longitude: -42.922503
      }
    },
    {
      id: 'c567aed3-0334-4310-9ed7-a07d02d52271',
      number: '207129',
      delivery_type: 'EMERGENCIAL - ENTREGA',
      delivery_group: 'OTHER',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533894',
          number: '200989',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA - TRES RIOS',
        id: '672'
      },
      address: {
        latitude: -22.115194,
        longitude: -43.192619
      }
    },
    {
      id: '1bbe4b7c-9fc5-47ce-a527-7a3f3e59680c',
      number: '207128',
      delivery_type: 'EMERGENCIAL - ENTREGA',
      delivery_group: 'OTHER',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533895',
          number: '200988',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA - TRES RIOS',
        id: '672'
      },
      address: {
        latitude: -22.115194,
        longitude: -43.192619
      }
    },
    {
      id: '444bd8c3-c3c3-4c30-ae60-abe4a6ef22aa',
      number: '9290',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533896',
          number: '9086',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: 'd6aa31b4-90d2-4945-ba1c-1589f07fbf97',
      number: '9167',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533897',
          number: '9084',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '1452e1f8-2698-4fb6-8b45-bbc68f66bcca',
      number: '9307',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533898',
          number: '9088',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '1a2ede5e-a0af-4fe8-9ea6-f8e594295c4e',
      number: '9168',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533899',
          number: '9085',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '245efcf2-9689-4123-8d20-1b7c5fbbcca8',
      number: '9289',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533900',
          number: '9087',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: 'bb85940d-ba9f-4750-83ad-555852f91a90',
      number: '9331',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533901',
          number: '9089',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '86c3e46f-61dd-439e-b9ec-c4c32b1c1ad5',
      number: '9349',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533902',
          number: '9090',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '15cdc874-7c79-4962-93f5-22a7587f4895',
      number: '9167',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533903',
          number: '9084',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: 'e00eaec8-fce4-4636-985b-f67bb54b977f',
      number: '9168',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533904',
          number: '9085',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '79ad1fe5-dbe1-4f8d-a4c7-1897307ae3ee',
      number: '9289',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533905',
          number: '9087',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '259aad7a-f0c3-49a1-8b46-e7d5f8bce1e5',
      number: '9331',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533906',
          number: '9089',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '3df55f74-8687-498c-90dd-3b4c0ad8251c',
      number: '9290',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533907',
          number: '9086',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: 'f90f3237-9f56-47cd-a0b8-ff049719800b',
      number: '9349',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533908',
          number: '9090',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '1619291c-821e-4e75-8722-a6441d258575',
      number: '9307',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '97a506ce-fd98-4666-b630-3118aee49732',
        name: 'Treinamento S.A.'
      },
      invoices: [
        {
          id: '9533909',
          number: '9088',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA CAMPOS',
        id: '615'
      },
      address: {
        latitude: -21.737324,
        longitude: -41.327091
      }
    },
    {
      id: '00d5c8dd-a410-4f9e-ae5e-d933c861ba8d',
      number: '207335',
      delivery_type: 'GRADE - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533910',
          number: '200992',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'RIOFARMES - CENTRO',
        id: '596'
      },
      address: {
        latitude: -22.909216,
        longitude: -43.199581
      }
    },
    {
      id: 'cc9d7bca-c962-4a5d-886e-dac214b08a3f',
      number: '207232',
      delivery_type: 'GRADE - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533911',
          number: '200995',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'RIOFARMES - CENTRO',
        id: '596'
      },
      address: {
        latitude: -22.909216,
        longitude: -43.199581
      }
    },
    {
      id: '270e0db0-07a8-4fb9-a0bf-baeaed739aa1',
      number: '207255',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533912',
          number: '200990',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BARRA DO PIRAI',
        id: '495'
      },
      address: {
        latitude: -22.465271,
        longitude: -43.828428
      }
    },
    {
      id: '1a9d492e-875c-48d8-8164-2e6111be52be',
      number: '207245',
      delivery_type: 'GRADE - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533913',
          number: '200993',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'RIOFARMES - CENTRO',
        id: '596'
      },
      address: {
        latitude: -22.909216,
        longitude: -43.199581
      }
    },
    {
      id: '005fa5ca-7d39-4596-9ea6-adfda61e2e70',
      number: '207342',
      delivery_type: 'GRADE - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533914',
          number: '200996',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'RIOFARMES - CENTRO',
        id: '596'
      },
      address: {
        latitude: -22.909216,
        longitude: -43.199581
      }
    },
    {
      id: 'd9c75a22-1707-4d62-b8cc-351887515186',
      number: '207252',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533915',
          number: '200998',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: 'a2b603fe-cfd6-4f60-83c0-76c4adf0a6c9',
      number: '207253',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533916',
          number: '200997',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - JAPERI',
        id: '525'
      },
      address: {
        latitude: -22.700029,
        longitude: -43.623622
      }
    },
    {
      id: 'f4683b4b-d858-4dbc-a8f7-c24ad432598e',
      number: '206819',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533917',
          number: '200994',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: 'd8d8f587-e9a9-439b-a7b4-e0b6622cea3a',
      number: '207356',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533918',
          number: '200991',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NOVA IGUAÇU',
        id: '545'
      },
      address: {
        latitude: -22.688684,
        longitude: -43.441842
      }
    },
    {
      id: '4e4e0cbc-4904-4e61-80dc-b01c56b1629c',
      number: '46639',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533919',
          number: '45406',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS GARFIELD DE ALMEIDA AP 5.2',
        id: '2817'
      },
      address: {
        latitude: -22.9229166698,
        longitude: -43.5180222119
      }
    },
    {
      id: 'c286d53d-8acf-4500-af6d-2f0c64097f95',
      number: '46637',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533920',
          number: '45404',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS GARFIELD DE ALMEIDA AP 5.2',
        id: '2817'
      },
      address: {
        latitude: -22.9229166698,
        longitude: -43.5180222119
      }
    },
    {
      id: 'b8986d63-bffb-4214-8e42-97e59f022639',
      number: '46636',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533921',
          number: '45413',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF EVERTON DE SOUZA SANTOS AP 5.2',
        id: '2776'
      },
      address: {
        latitude: -22.8989718353,
        longitude: -43.5344157086
      }
    },
    {
      id: 'edadd5d2-3a1e-44d9-aec7-3a7915df802a',
      number: '46850',
      delivery_type: 'RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533922',
          number: '45403',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS NEWTON ALVES CARDOZO - AP. 3.1',
        id: '2739'
      },
      address: {
        latitude: -22.8083992971,
        longitude: -43.1892284756
      }
    },
    {
      id: '2082a6ca-80cd-4e03-bcf8-8f6f5e4f090a',
      number: '46640',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533923',
          number: '45407',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS GARFIELD DE ALMEIDA AP 5.2',
        id: '2817'
      },
      address: {
        latitude: -22.9229166698,
        longitude: -43.5180222119
      }
    },
    {
      id: 'bf1c6aa5-b601-4d36-9690-72c87073c76a',
      number: '46628',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533924',
          number: '45410',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. MARIO VITOR DE ASSIS PACHECO AP 5.2',
        id: '2869'
      },
      address: {
        latitude: -22.9104867771,
        longitude: -43.5841436875
      }
    },
    {
      id: '6bad24af-a92a-40a9-8ed9-61446d367d79',
      number: '46631',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533925',
          number: '45409',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. MARIO VITOR DE ASSIS PACHECO AP 5.2',
        id: '2869'
      },
      address: {
        latitude: -22.9104867771,
        longitude: -43.5841436875
      }
    },
    {
      id: '5e1ecaf4-3cf7-459c-94bf-d700de6b88e8',
      number: '46638',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533926',
          number: '45405',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS GARFIELD DE ALMEIDA AP 5.2',
        id: '2817'
      },
      address: {
        latitude: -22.9229166698,
        longitude: -43.5180222119
      }
    },
    {
      id: '401b4f21-dcef-4625-b368-0a8f62f6a8b4',
      number: '46622',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533927',
          number: '45411',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: '0a2884e9-2ecd-4876-97e3-dec65c5079f2',
      number: '46568',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533928',
          number: '45416',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '7b0d368f-3f0f-45b8-8c3f-845aed13494f',
      number: '46629',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533929',
          number: '45408',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. MARIO VITOR DE ASSIS PACHECO AP 5.2',
        id: '2869'
      },
      address: {
        latitude: -22.9104867771,
        longitude: -43.5841436875
      }
    },
    {
      id: '5f3c05c7-ba58-406d-a31c-f86285358fd7',
      number: '46617',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533930',
          number: '45412',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: '706af8ec-2150-4c3d-b6b9-5fb61afab795',
      number: '46689',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533931',
          number: '45415',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: 'cd5b3f01-28c5-4ce6-a678-786d3b1935f4',
      number: '46521',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533932',
          number: '45417',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: '48efac1d-d295-4c2f-92fe-15d9e9b137ae',
      number: '46515',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533933',
          number: '45414',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '4e7094fa-c54e-4976-8c5f-bb33f42283ef',
      number: '46558',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533659',
          number: '45346',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. MARIO VITOR DE ASSIS PACHECO AP 5.2',
        id: '2869'
      },
      address: {
        latitude: -22.9104867771,
        longitude: -43.5841436875
      }
    },
    {
      id: '18ebf3fc-2f7c-4bf5-8a04-9fa30530b7be',
      number: '46547',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533660',
          number: '45343',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: '1e96434f-19f9-425c-93ba-b75af1d09d9d',
      number: '46531',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533661',
          number: '45348',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: '47a6200d-9615-438b-a7d9-292bd8573862',
      number: '46543',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533662',
          number: '45342',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: '1934ac65-21ba-4147-8c9f-d714ea45dc5e',
      number: '46550',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533663',
          number: '45347',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS GARFIELD DE ALMEIDA AP 5.2',
        id: '2817'
      },
      address: {
        latitude: -22.9229166698,
        longitude: -43.5180222119
      }
    },
    {
      id: 'c08df650-05da-4b5e-97b1-e6c12aa5c369',
      number: '46544',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533664',
          number: '45344',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '52e33863-febe-4d44-b1c3-3f7f8dcb6450',
      number: '46557',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533665',
          number: '45350',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '3199b4d3-978b-4a06-b8f6-9bfffe7556d5',
      number: '46615',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533666',
          number: '45345',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MARIA JOSÉ PAPERA DE AZEVEDO AP 5.2',
        id: '2772'
      },
      address: {
        latitude: -22.8775324496,
        longitude: -43.5339815687
      }
    },
    {
      id: '45613bca-142d-4623-b016-fa093537bde9',
      number: '46532',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533667',
          number: '45349',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: 'fcdc5c04-f957-4f69-8c82-29371a9d18ed',
      number: '46548',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533668',
          number: '45351',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '9ee34455-ec04-47fb-a78d-232df57c2a97',
      number: '46540',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533669',
          number: '45353',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '8a844783-039f-4f1d-8f5c-9f3c328af58c',
      number: '46482',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533670',
          number: '45352',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF ANA GONZAGA AP 5.2',
        id: '2804'
      },
      address: {
        latitude: -22.9087339473,
        longitude: -43.5932268017
      }
    },
    {
      id: '02b33ada-f2d8-4b22-bef9-3b1cbb3b8014',
      number: '46533',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533671',
          number: '45354',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF EVERTON DE SOUZA SANTOS AP 5.2',
        id: '2776'
      },
      address: {
        latitude: -22.8989718353,
        longitude: -43.5344157086
      }
    },
    {
      id: 'ddd638b9-dfb5-4a31-a802-2571349a9035',
      number: '7203',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533672',
          number: '6892',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'HOSPITAL GERAL DE NOVA IGUAÇU (HGNI)',
        id: '2556'
      },
      address: {
        latitude: -22.7310930419,
        longitude: -43.4622443185
      }
    },
    {
      id: '1180e2c8-f9f4-4e0b-ac84-5ce8715fbf47',
      number: '7640',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533673',
          number: '7522',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'POL.REG. DE ITAIPU - ASS.SOCIAL MARIA APARECIDA DA COSTA',
        id: '2669'
      },
      address: {
        latitude: -22.929564,
        longitude: -43.00795
      }
    },
    {
      id: '340b2161-33a9-4c6e-b5cd-3a919c985b2b',
      number: '7658',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533674',
          number: '7525',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'POLICLINICA REGIONAL DA ENGENHOCA - DR.RENATO SILVA',
        id: '2588'
      },
      address: {
        latitude: -22.877507,
        longitude: -43.099327
      }
    },
    {
      id: '069b5c4f-6ff6-4fb7-a96d-c41e0f23f80a',
      number: '7657',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533675',
          number: '7524',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF JACARÉ - ENOC JOAQUIM OLIVEIRA',
        id: '2625'
      },
      address: {
        latitude: -22.93152,
        longitude: -43.051259
      }
    },
    {
      id: 'e72a6073-931d-408a-b900-7ea4ddc0bc3b',
      number: '7638',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533676',
          number: '7521',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF COLONIA DE PESCADORES',
        id: '2618'
      },
      address: {
        latitude: -22.9551324985,
        longitude: -43.0337237246
      }
    },
    {
      id: '8e89531f-d7c7-4467-8edd-8c62232ed2ee',
      number: '7650',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533677',
          number: '7523',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CARAMUJO - ALOÍSIO BRASIL',
        id: '2616'
      },
      address: {
        latitude: -22.884342,
        longitude: -43.062713
      }
    },
    {
      id: 'cefb4dcf-9ca4-450d-9966-d94f134c39b8',
      number: '7664',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533678',
          number: '7526',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'POLICLINICA REGIONAL DA ENGENHOCA - DR.RENATO SILVA',
        id: '2588'
      },
      address: {
        latitude: -22.877507,
        longitude: -43.099327
      }
    },
    {
      id: '01268f73-332d-4300-a97d-b5722dd43dfc',
      number: '7698',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533679',
          number: '7527',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CAFUBÁ 3 - ALBERTO RICARDO HATIN',
        id: '2613'
      },
      address: {
        latitude: -22.942365,
        longitude: -43.055632
      }
    },
    {
      id: '2acdfa92-57ef-4229-b0a9-9ae960c134b1',
      number: '7745',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533680',
          number: '7532',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF JACARÉ - ENOC JOAQUIM OLIVEIRA',
        id: '2625'
      },
      address: {
        latitude: -22.93152,
        longitude: -43.051259
      }
    },
    {
      id: '4c6fc4f0-831f-455c-b128-abbdead86131',
      number: '7699',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533681',
          number: '7528',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF VARZEA DAS MOCAS',
        id: '2654'
      },
      address: {
        latitude: -22,
        longitude: -43
      }
    },
    {
      id: 'ca53ba16-101e-4223-9e6e-0e968cadbf4b',
      number: '7740',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533682',
          number: '7530',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF SAPE',
        id: '2650'
      },
      address: {
        latitude: -22.8949840943,
        longitude: -43.0575240161
      }
    },
    {
      id: '30206b92-0ef9-4f47-9357-d4c7746e8f4f',
      number: '7753',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533683',
          number: '7535',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF JACARÉ - ENOC JOAQUIM OLIVEIRA',
        id: '2625'
      },
      address: {
        latitude: -22.93152,
        longitude: -43.051259
      }
    },
    {
      id: '089f0c85-f4a2-4fa8-b806-99ca51c20d53',
      number: '7746',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533684',
          number: '7533',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF ENGENHO DO MATO - WILLIAN SOLLER 1',
        id: '2620'
      },
      address: {
        latitude: -22.953122,
        longitude: -43.027438
      }
    },
    {
      id: '6412a4fb-abb0-442f-9233-05103e268fea',
      number: '7742',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533685',
          number: '7531',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF VARZEA DAS MOCAS',
        id: '2654'
      },
      address: {
        latitude: -22,
        longitude: -43
      }
    },
    {
      id: 'e9fab7ea-42e5-4d1c-9b10-bca67ff1894b',
      number: '7751',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533686',
          number: '7534',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MARAVISTA - CMTE MANOEL PINEIRO LOZADA',
        id: '2639'
      },
      address: {
        latitude: -22.9368472054,
        longitude: -43.031783381
      }
    },
    {
      id: 'ebc751fb-0afc-40bb-8620-b33144fa03c7',
      number: '7758',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533687',
          number: '7537',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CARAMUJO - ALOÍSIO BRASIL',
        id: '2616'
      },
      address: {
        latitude: -22.884342,
        longitude: -43.062713
      }
    },
    {
      id: 'f3d2ca6d-c425-46e9-a9ec-2baf1055ef90',
      number: '7755',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533688',
          number: '7536',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MORRO DO CEU - FAUSTINO PEREZ',
        id: '2644'
      },
      address: {
        latitude: -22.8914787098,
        longitude: -43.0855574333
      }
    },
    {
      id: 'f69d2a04-ce51-4bd3-8472-57eac42aef28',
      number: '7700',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533689',
          number: '7529',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CARAMUJO - ALOÍSIO BRASIL',
        id: '2616'
      },
      address: {
        latitude: -22.884342,
        longitude: -43.062713
      }
    },
    {
      id: 'faeda68c-bcf2-470a-915c-69f7af2c8763',
      number: '7770',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533690',
          number: '7540',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CAFUBÁ 3 - ALBERTO RICARDO HATIN',
        id: '2613'
      },
      address: {
        latitude: -22.942365,
        longitude: -43.055632
      }
    },
    {
      id: '438c8178-d292-4a8c-bb33-4b268e277e44',
      number: '46613',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533766',
          number: '45358',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MARIA JOSÉ PAPERA DE AZEVEDO AP 5.2',
        id: '2772'
      },
      address: {
        latitude: -22.8775324496,
        longitude: -43.5339815687
      }
    },
    {
      id: 'f601bdc2-38d8-4be9-8854-6152a831e9f3',
      number: '46658',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533769',
          number: '45376',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: '2ef2da1e-f0f1-42ae-bef0-0339d48566f7',
      number: '46569',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533773',
          number: '45369',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF ANA GONZAGA AP 5.2',
        id: '2804'
      },
      address: {
        latitude: -22.9087339473,
        longitude: -43.5932268017
      }
    },
    {
      id: '5c832734-1fe0-4782-a948-9adcbaaa696c',
      number: '46660',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533774',
          number: '45374',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: 'bbeb7a7e-07f7-4ebb-a1a0-bb921789c221',
      number: '207261',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533781',
          number: '200963',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - VARRE-SAI',
        id: '537'
      },
      address: {
        latitude: -20.927822,
        longitude: -41.867314
      }
    },
    {
      id: '54912179-ec85-472c-a446-9889cddac79b',
      number: '7760',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533785',
          number: '7544',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MARAVISTA - CMTE MANOEL PINEIRO LOZADA',
        id: '2639'
      },
      address: {
        latitude: -22.9368472054,
        longitude: -43.031783381
      }
    },
    {
      id: '6dc4efdb-5a35-44de-92ec-ea06cdcd221a',
      number: '46570',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533767',
          number: '45370',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF ANA GONZAGA AP 5.2',
        id: '2804'
      },
      address: {
        latitude: -22.9087339473,
        longitude: -43.5932268017
      }
    },
    {
      id: '80c8db2c-2106-44a4-b064-9250c14ce8e7',
      number: '207260',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533779',
          number: '200965',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SAO JOSE DE UBA',
        id: '569'
      },
      address: {
        latitude: -21.358295,
        longitude: -41.93877
      }
    },
    {
      id: '4b2d0de9-9558-4185-b945-27cb0b4ba5b2',
      number: '207259',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533782',
          number: '200964',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SANTO ANTONIO DE PADUA',
        id: '573'
      },
      address: {
        latitude: -21.545408,
        longitude: -42.175137
      }
    },
    {
      id: '0d4dc1f7-3dcc-4c01-932e-959f421b218c',
      number: '7676',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533783',
          number: '7546',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF VARZEA DAS MOCAS',
        id: '2654'
      },
      address: {
        latitude: -22,
        longitude: -43
      }
    },
    {
      id: '43bba9aa-8314-44ec-a299-2f2c55c4f3f2',
      number: '7754',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533784',
          number: '7542',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MORRO DO CEU - FAUSTINO PEREZ',
        id: '2644'
      },
      address: {
        latitude: -22.8914787098,
        longitude: -43.0855574333
      }
    },
    {
      id: '3e3b59a2-93ea-442f-b10f-5928eae8f086',
      number: '46634',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533768',
          number: '45371',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF EVERTON DE SOUZA SANTOS AP 5.2',
        id: '2776'
      },
      address: {
        latitude: -22.8989718353,
        longitude: -43.5344157086
      }
    },
    {
      id: 'cb62e690-533d-41c9-81e4-dac830051181',
      number: '46733',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533771',
          number: '45377',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '2b17c2a7-eb82-4220-9df8-fd40f046bb4c',
      number: '46655',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533776',
          number: '45373',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: 'a8dca3c4-1d67-453e-b795-ffc19ae9720d',
      number: '46659',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533778',
          number: '45375',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS CARLOS ALBERTO NASCIMENTO AP 5.2',
        id: '2785'
      },
      address: {
        latitude: -22.9183443832,
        longitude: -43.5577332068
      }
    },
    {
      id: 'f179c163-df4c-44f0-ab43-0c2c88b404b9',
      number: '7766',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533786',
          number: '7547',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF MATAPACA - DR. ABELARADO RAMIREZ',
        id: '2643'
      },
      address: {
        latitude: -22.8819593531,
        longitude: -43.0313775378
      }
    },
    {
      id: '19d4b46e-c1a1-4225-b403-cdd63e2d5fea',
      number: '46630',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533770',
          number: '45372',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF EVERTON DE SOUZA SANTOS AP 5.2',
        id: '2776'
      },
      address: {
        latitude: -22.8989718353,
        longitude: -43.5344157086
      }
    },
    {
      id: 'b5df28ec-5f63-4711-b58e-1cc1e8d513f6',
      number: '46621',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533775',
          number: '45360',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF SONIA MARIA FERREIRA MACHADO AP 5.2',
        id: '2774'
      },
      address: {
        latitude: -22.8730366405,
        longitude: -43.5127049508
      }
    },
    {
      id: '341363d9-d123-47c1-9c1c-a780034cb450',
      number: '207257',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533780',
          number: '200966',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: 'c4be4370-1784-4acc-aa04-82000a2405c7',
      number: '46577',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533772',
          number: '45366',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS PROFESSOR MANOEL DE ABREU AP 5.2',
        id: '2771'
      },
      address: {
        latitude: -22.8741427786,
        longitude: -43.5306739917
      }
    },
    {
      id: '6e4bfd15-2bf6-46f6-bd71-bdf6cfc59562',
      number: '46571',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533777',
          number: '45368',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF ANA GONZAGA AP 5.2',
        id: '2804'
      },
      address: {
        latitude: -22.9087339473,
        longitude: -43.5932268017
      }
    },
    {
      id: '7bf707ff-fece-41e1-92d2-81b7b776fb51',
      number: '7763',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533787',
          number: '7545',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CAFUBÁ 2 - ERNESTO CHE GUEVARA 2',
        id: '2612'
      },
      address: {
        latitude: -22.933863,
        longitude: -43.071149
      }
    },
    {
      id: '7cae8fe9-ab84-4dae-8da3-df2f50ac35b8',
      number: '7767',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533788',
          number: '7543',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'POLICLINICA REGIONAL DA ENGENHOCA - DR.RENATO SILVA',
        id: '2588'
      },
      address: {
        latitude: -22.877507,
        longitude: -43.099327
      }
    },
    {
      id: 'e56f03f4-c09c-4feb-ae41-441b53ebd6b2',
      number: '7762',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533848',
          number: '7549',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CAFUBÁ 2 - ERNESTO CHE GUEVARA 2',
        id: '2612'
      },
      address: {
        latitude: -22.933863,
        longitude: -43.071149
      }
    },
    {
      id: '18a871dd-a0fc-42e5-84e8-ea8690dac27f',
      number: '7656',
      delivery_type: 'ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533849',
          number: '7550',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'PMF CARAMUJO - ALOÍSIO BRASIL',
        id: '2616'
      },
      address: {
        latitude: -22.884342,
        longitude: -43.062713
      }
    },
    {
      id: '4b69bd67-11f4-4ac4-9719-41b87969cba9',
      number: '7214',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533850',
          number: '6925',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'MATERNIDADE MUNICIPAL MARIANA BULHOES',
        id: '2557'
      },
      address: {
        latitude: -22.7388762711,
        longitude: -43.4562199354
      }
    },
    {
      id: '1f831fc4-e898-47a6-af8f-0a020f9ada81',
      number: '7223',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533851',
          number: '6926',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CAPS AD VANDERLEI MARTINS',
        id: '2624'
      },
      address: {
        latitude: 22.711850044,
        longitude: 43.5201619601
      }
    },
    {
      id: 'd261e92d-68cb-4bfc-ad1c-e629288590db',
      number: '7219',
      delivery_type: 'RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533789',
          number: '6913',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SEMUS - ATENCAO BASICA',
        id: '2884'
      },
      address: {
        latitude: -2275023643525,
        longitude: -4345132142883
      }
    },
    {
      id: '940fe858-3794-4e03-9011-9f98fc446ff1',
      number: '7839',
      delivery_type: 'EMERGENCIAL',
      delivery_group: 'DELIVERY',
      account: {
        id: '3b5be590-ed53-4e46-bbf1-f964fff47493',
        name: 'FMS Niterói'
      },
      invoices: [
        {
          id: '9533790',
          number: '7548',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'FE SAUDE',
        id: '2555'
      },
      address: {
        latitude: -22.8823465326,
        longitude: -43.1226639735
      }
    },
    {
      id: '7073471d-14b1-4e6a-9def-4210ac812bd7',
      number: '46670',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533791',
          number: '45382',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '50aa132d-7bfd-4f64-8ff4-e7dbe615bb29',
      number: '46749',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533792',
          number: '45379',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '209a3fbf-11bf-4198-810d-108c8e1f52cd',
      number: '46807',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533793',
          number: '45378',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: '9d24710b-300e-440d-a31a-bf03c1e584bd',
      number: '46606',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533794',
          number: '45387',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: '7e89e389-9b54-4527-a7ef-7b5cd26be33f',
      number: '46572',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533795',
          number: '45385',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF ANA GONZAGA AP 5.2',
        id: '2804'
      },
      address: {
        latitude: -22.9087339473,
        longitude: -43.5932268017
      }
    },
    {
      id: 'd06e10d1-821a-4eaf-a139-d326f6397f43',
      number: '46775',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533796',
          number: '45380',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '5d76a5b3-c19c-4a86-84be-6b130d276cd9',
      number: '46671',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533797',
          number: '45381',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '3c382387-0301-4560-934b-8bfef3bb34af',
      number: '46611',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533798',
          number: '45390',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: '8e57dc83-ee6a-4af2-9329-b2cb3ce69a42',
      number: '46675',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533799',
          number: '45389',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: 'f2847ca7-a925-4746-ab03-4b6eb1073ac0',
      number: '46610',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533800',
          number: '45388',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DRA. MYRTES AMORELLI GONZAGA AP 5.2',
        id: '2781'
      },
      address: {
        latitude: -22.9168050548,
        longitude: -43.5276154282
      }
    },
    {
      id: '6b038d9c-a362-4651-a05a-649bd3483c58',
      number: '46580',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533801',
          number: '45386',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '28a07dba-11f2-45a4-a719-d7887e32c5dd',
      number: '46672',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533802',
          number: '45383',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '86975e28-b100-47fa-b040-ede73c4d7a92',
      number: '46588',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533803',
          number: '45393',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-06T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '44186ea5-fe23-46ae-8f1f-952dcee7c687',
      number: '46578',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533804',
          number: '45395',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: 'e55de0dd-ea0a-4095-bf32-c6fd2b329527',
      number: '46739',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533805',
          number: '45392',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '1e090393-23b7-409d-8523-a4db4a587fda',
      number: '46668',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533806',
          number: '45384',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF VALDECIR SALUSTIANO CARDOZO AP 5.2',
        id: '2806'
      },
      address: {
        latitude: -22.9149922349,
        longitude: -43.6099554724
      }
    },
    {
      id: '656d3426-f3d3-4861-bd3f-4400a96a036d',
      number: '46579',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533807',
          number: '45391',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '765a6c63-4a50-4653-9475-c8996c3491ab',
      number: '46514',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533808',
          number: '45398',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '53a0f30f-9ad6-4215-80d3-0e0e71ef7dca',
      number: '46809',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533809',
          number: '45396',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: 'f3b1da65-8acf-4751-bbb0-fd82dd005786',
      number: '46575',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533810',
          number: '45394',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF MEDALHISTA OLIMPICO ARTHUR ZANETTI AP 5.2',
        id: '2782'
      },
      address: {
        latitude: -22.8813169759,
        longitude: -43.554272239
      }
    },
    {
      id: '56ec4b27-516c-46ed-a3fe-830388044ba2',
      number: '46517',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533811',
          number: '45400',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: 'be18ee19-b72e-43a0-84a3-566d0ba4a6f0',
      number: '46519',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533812',
          number: '45402',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: 'c08c2c9a-8886-415f-8580-0bd820866510',
      number: '46516',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533813',
          number: '45401',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CF DAVID CAPISTRANO FILHO AP 5.2',
        id: '2802'
      },
      address: {
        latitude: -22.9111632541,
        longitude: -43.5841442221
      }
    },
    {
      id: 'c07aeca2-47d2-42f7-b3e6-f53f198e4d7a',
      number: '46513',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533814',
          number: '45397',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '37817362-bdd7-4028-8b80-58bdfdb01979',
      number: '46512',
      delivery_type: 'GRADE MENSAL',
      delivery_group: 'DELIVERY',
      account: {
        id: 'ec837049-b5c4-4651-bfad-538441799922',
        name: 'Viva Rio HO'
      },
      invoices: [
        {
          id: '9533815',
          number: '45399',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'CMS DR. ADÃO PEREIRA NUNES AP 5.2',
        id: '2805'
      },
      address: {
        latitude: -22.9238028106,
        longitude: -43.6013076051
      }
    },
    {
      id: '872f1b34-4a6c-4b76-81b2-395aedf7bf01',
      number: '207333',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533816',
          number: '200967',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - RIO DE JANEIRO',
        id: '580'
      },
      address: {
        latitude: -22.939307,
        longitude: -43.374733
      }
    },
    {
      id: 'dae47600-9b18-4186-918f-fce93abd324e',
      number: '207270',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533817',
          number: '200969',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ITATIAIA',
        id: '524'
      },
      address: {
        latitude: -22.4968,
        longitude: -44.563047
      }
    },
    {
      id: '0011def1-ef93-427b-84d8-10133b725a18',
      number: '207254',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533818',
          number: '200968',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NITEROI',
        id: '498'
      },
      address: {
        latitude: -22.905756,
        longitude: -43.097143
      }
    },
    {
      id: 'e2b34716-8e3a-49a1-8ad3-c5aa74661073',
      number: '207278',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533819',
          number: '200975',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NITEROI',
        id: '498'
      },
      address: {
        latitude: -22.905756,
        longitude: -43.097143
      }
    },
    {
      id: 'a3c93ab6-d562-4630-a32b-8400d0d4e9ec',
      number: '207276',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533820',
          number: '200970',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: '905ef34f-63a9-4a01-a3fa-e86c9506b20e',
      number: '207286',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533821',
          number: '200972',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - VARRE-SAI',
        id: '537'
      },
      address: {
        latitude: -20.927822,
        longitude: -41.867314
      }
    },
    {
      id: 'ea792fb8-c06e-4795-bccb-b4b5e81ec5ca',
      number: '207268',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533822',
          number: '200971',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BOM JESUS DE ITABAPOANA',
        id: '502'
      },
      address: {
        latitude: -21.138854,
        longitude: -41.67683
      }
    },
    {
      id: '94b71665-e6ac-4336-bbae-146425088a32',
      number: '207319',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533823',
          number: '200977',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - MIRACEMA',
        id: '539'
      },
      address: {
        latitude: -21.413859,
        longitude: -42.194501
      }
    },
    {
      id: '7511a9ea-de15-4cec-bbe8-fb7b02d8e367',
      number: '207258',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533824',
          number: '200976',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - PORCIUNCULA',
        id: '594'
      },
      address: {
        latitude: -20.930193,
        longitude: -41.955432
      }
    },
    {
      id: '9f9c28d4-89e8-4122-a474-6ff5097dbe05',
      number: '207266',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533825',
          number: '200974',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - BARRA DO PIRAI',
        id: '495'
      },
      address: {
        latitude: -22.465271,
        longitude: -43.828428
      }
    },
    {
      id: 'f58542f1-741c-4854-b4e0-f1062905b88c',
      number: '207271',
      delivery_type: 'VACINA - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533826',
          number: '200973',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - JAPERI',
        id: '525'
      },
      address: {
        latitude: -22.700029,
        longitude: -43.623622
      }
    },
    {
      id: '10a3bc69-96fe-4310-8d7d-e1b4a122dbcc',
      number: '207256',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533827',
          number: '200978',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - MIRACEMA',
        id: '539'
      },
      address: {
        latitude: -21.413859,
        longitude: -42.194501
      }
    },
    {
      id: 'ad65fef2-ded0-4d17-a1f2-eca87dc5382d',
      number: '207326',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533828',
          number: '200979',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - MIRACEMA',
        id: '539'
      },
      address: {
        latitude: -21.413859,
        longitude: -42.194501
      }
    },
    {
      id: '1033a837-f064-4416-8edd-3b73d03db158',
      number: '207320',
      delivery_type: 'VACINA - ENTREGA',
      delivery_group: 'DELIVERY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533829',
          number: '200980',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - MIRACEMA',
        id: '539'
      },
      address: {
        latitude: -21.413859,
        longitude: -42.194501
      }
    },
    {
      id: '9e80f64e-89c9-4994-99a6-3ad0e549fe84',
      number: '207297',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533830',
          number: '200982',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NATIVIDADE',
        id: '541'
      },
      address: {
        latitude: -21.038687,
        longitude: -41.981437
      }
    },
    {
      id: 'ff822880-8133-42b4-a763-168e00d4a09b',
      number: '207288',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533831',
          number: '200981',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-04T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - RIO DAS OSTRAS',
        id: '582'
      },
      address: {
        latitude: -22.526454,
        longitude: -41.932597
      }
    },
    {
      id: 'b736d63b-2f88-4af8-8a02-ae083b29adff',
      number: '207265',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533832',
          number: '200985',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - RESENDE',
        id: '585'
      },
      address: {
        latitude: -22.46946,
        longitude: -44.447588
      }
    },
    {
      id: '5d1ad23c-ab97-488b-ba67-a762c347df1d',
      number: '207296',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533833',
          number: '200983',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - RIO BONITO',
        id: '584'
      },
      address: {
        latitude: -22.714854,
        longitude: -42.637027
      }
    },
    {
      id: '1179cddd-f200-4f83-b7af-7a2d2db60ed8',
      number: '207289',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533834',
          number: '200984',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - SAO JOAO DE MERITI',
        id: '559'
      },
      address: {
        latitude: -22.774324,
        longitude: -43.392208
      }
    },
    {
      id: '6efff231-14a1-4924-9213-14e85888680e',
      number: '207262',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533835',
          number: '200986',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - NITEROI',
        id: '498'
      },
      address: {
        latitude: -22.905756,
        longitude: -43.097143
      }
    },
    {
      id: '983c8052-4440-4414-99fe-8e2b67605259',
      number: '207302',
      delivery_type: 'AGENDAMENTO - RETIRADA',
      delivery_group: 'TAKE_AWAY',
      account: {
        id: 'fd9bbc0f-6758-4fef-813e-a408c3e065da',
        name: 'SESRJ'
      },
      invoices: [
        {
          id: '9533836',
          number: '200987',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'SMS - ITABORAI',
        id: '497'
      },
      address: {
        latitude: -22.7432,
        longitude: -42.85849
      }
    },
    {
      id: 'a14cf649-fbac-4acc-895e-d9c276935975',
      number: '9293',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533852',
          number: '9065',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '3b558a5c-382e-47a0-8716-3cc2dad965c2',
      number: '7191',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533837',
          number: '6916',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - CLINICA DA FAMILIA DOM BOSCO',
        id: '2632'
      },
      address: {
        latitude: -22.8054960728,
        longitude: -43.5841694263
      }
    },
    {
      id: '3a3d1e45-a896-4551-a742-04a8422fa1d1',
      number: '7184',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533838',
          number: '6915',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - CLINICA DA FAMILIA KM 32',
        id: '2920'
      },
      address: {
        latitude: -22.8546645004,
        longitude: -43.6015324568
      }
    },
    {
      id: 'a6d93f7a-f0eb-41e3-a68d-cf3c604f319b',
      number: '7194',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533839',
          number: '6914',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - ESF STA CLARA DO GUANDU',
        id: '2916'
      },
      address: {
        latitude: -22.830135288,
        longitude: -43.6170348781
      }
    },
    {
      id: 'df1fa13f-5cff-4069-a8bd-130c3715da0b',
      number: '7195',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533840',
          number: '6919',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - PARQUE TODOS OS SANTOS',
        id: '2915'
      },
      address: {
        latitude: -22.8078436768,
        longitude: -43.6222456507
      }
    },
    {
      id: '74c404bb-df5a-4629-964e-562984456fe7',
      number: '7186',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533841',
          number: '6920',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - ESF VALVERDE',
        id: '2917'
      },
      address: {
        latitude: -22.7659881904,
        longitude: -43.5284559513
      }
    },
    {
      id: '05b454e9-44a8-4fc5-8cb1-afff8f20089e',
      number: '7189',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533842',
          number: '6921',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - POLICLINICA CABUÇU',
        id: '2921'
      },
      address: {
        latitude: -22.7982348097,
        longitude: -43.5607978416
      }
    },
    {
      id: '74715ace-8a30-4320-9124-20e8ed919d37',
      number: '7185',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533843',
          number: '6917',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - CLINICA DA FAMILIA JARDIM PALMARES',
        id: '2898'
      },
      address: {
        latitude: -22.7579184172,
        longitude: -43.5118713589
      }
    },
    {
      id: '46cd772f-3872-4a68-8def-63a5ce8cd7a0',
      number: '7196',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533844',
          number: '6918',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - USF PALHADA',
        id: '2913'
      },
      address: {
        latitude: -22.7653333967,
        longitude: -43.5212818624
      }
    },
    {
      id: '01be9c13-8b88-443a-91ca-272085eb9b02',
      number: '7215',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533845',
          number: '6924',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - CF JARDIM PARAISO',
        id: '2907'
      },
      address: {
        latitude: -22.8272032258,
        longitude: -43.6051950261
      }
    },
    {
      id: 'ae812b61-23b6-4d53-8447-7b576421aee9',
      number: '7197',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533846',
          number: '6923',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - USF HERONDINO (PARQUE DAS PALMEIRAS)',
        id: '2935'
      },
      address: {
        latitude: -22.751848479,
        longitude: -43.5280153312
      }
    },
    {
      id: 'f2d79dc8-1175-47b6-8789-dbd45805d53d',
      number: '7190',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '1d3f0f7e-a6ee-4cba-87eb-7a29b1fc40cc',
        name: 'SEMUS'
      },
      invoices: [
        {
          id: '9533847',
          number: '6922',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'IMUNO - UBS LAGOINHA',
        id: '2931'
      },
      address: {
        latitude: -22.8168142667,
        longitude: -43.6134138381
      }
    },
    {
      id: '445f8934-33ac-49ec-a203-95113723d6cd',
      number: '9161',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533853',
          number: '9063',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: 'dedb302c-1826-40f6-9118-1670e4a20a3b',
      number: '9329',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533854',
          number: '9067',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '4a3df087-cffb-41c7-860a-aceeb629eead',
      number: '9296',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533855',
          number: '9066',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '28fca200-de73-4391-a4f4-095fd03bbdd7',
      number: '9159',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533856',
          number: '9069',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: '21f74a75-4d0e-4556-a28e-74099b786aea',
      number: '9351',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533857',
          number: '9068',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA RICARDO DE ALBUQUERQUE',
        id: '639'
      },
      address: {
        latitude: -22.843319,
        longitude: -43.397891
      }
    },
    {
      id: '581c328c-b11b-4409-8547-95486317f211',
      number: '9350',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533858',
          number: '9078',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    },
    {
      id: '6ca91509-a06c-45bd-9f75-37887538fd01',
      number: '9274',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533859',
          number: '9070',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA NITEROI',
        id: '642'
      },
      address: {
        latitude: -22.884012,
        longitude: -43.083132
      }
    },
    {
      id: 'c124d181-2463-496c-871f-5a06c7eecbe3',
      number: '9313',
      delivery_type: 'GRADE',
      delivery_group: 'DELIVERY',
      account: {
        id: '6701d952-70f7-4288-9407-9a10be4e7428',
        name: 'FSERJ'
      },
      invoices: [
        {
          id: '9533860',
          number: '9076',
          date: '2023-12-04',
          planned_delivery_date: '2023-12-05T00:00:00.000Z',
          task_id: null,
          invoice_status: 'NEW',
          refused_reason_id: null
        }
      ],
      customer: {
        name: 'UPA MARECHAL HERMES',
        id: '640'
      },
      address: {
        latitude: -22.869006,
        longitude: -43.37639
      }
    }
  ]



// Função para calcular a distância entre duas coordenadas geográficas usando a fórmula de Haversine
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371; // raio da Terra em quilômetros
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distancia = R * c;
  return distancia;
}

// Função auxiliar para converter graus em radianos
function toRad(valor) {
  return (valor * Math.PI) / 180;
}

// Função para agrupar pedidos por regiões próximas
function agruparPedidosPorRegiao(pedidos, distanciaMaxima) {
  const grupos = [];

  pedidos.forEach((pedido) => {
    let agrupado = false;

    // Verificar se o pedido pode ser agrupado em algum grupo existente
    grupos.forEach((grupo) => {
      const distancia = calcularDistancia(
        pedido.address.latitude,
        pedido.address.longitude,
        grupo[0].address.latitude,
        grupo[0].address.longitude
      );

      if (distancia <= distanciaMaxima) {
        grupo.push(pedido);
        agrupado = true;
      }
    });

    // Se não foi agrupado em nenhum grupo existente, criar um novo grupo
    if (!agrupado) {
      grupos.push([pedido]);
    }
  });

  return grupos;
}

// Chamar a função e obter os grupos de pedidos por região (com uma distância máxima de 10 km)
const gruposDePedidosPorRegiao = agruparPedidosPorRegiao(orders, 10);

// Exibir os resultados
console.log(gruposDePedidosPorRegiao.length);
// Função para agrupar pedidos por mesmo endereço geoespacial dentro de cada região
function agruparPedidosPorEndereco(gruposDePedidosPorRegiao) {
  const gruposFinais = [];

  gruposDePedidosPorRegiao.forEach((grupoRegiao) => {
    const gruposEndereco = {};

    grupoRegiao.forEach((pedido) => {
      const enderecoKey = `${pedido.address.latitude.toFixed(
        4
      )},${pedido.address.longitude.toFixed(4)}`;

      if (!gruposEndereco[enderecoKey]) {
        gruposEndereco[enderecoKey] = [];
      }

      gruposEndereco[enderecoKey].push(pedido);
    });

    // Converter o objeto em array e adicionar ao grupo final
    const gruposArray = Object.values(gruposEndereco);
    gruposFinais.push(gruposArray);
  });

  return gruposFinais;
}

// Chamar a função e obter os grupos finais de pedidos
const gruposFinaisDePedidos = agruparPedidosPorEndereco(
  gruposDePedidosPorRegiao
);

// Exibir os resultados
console.log(gruposFinaisDePedidos.length);
function agruparPedidosPorEndereco2(pedidos) {
    const gruposFinais = [];
  
    pedidos.forEach((pedido) => {
      const gruposEndereco = {};
  
      pedido.forEach((pedido) => {
        const enderecoKey = `${pedido.address.latitude.toFixed(
          4
        )},${pedido.address.longitude.toFixed(4)}`;
  
        if (!gruposEndereco[enderecoKey]) {
          gruposEndereco[enderecoKey] = [];
        }
  
        gruposEndereco[enderecoKey].push(pedido);
      });
  
      // Converter o objeto em array e adicionar ao grupo final
      const gruposArray = Object.values(gruposEndereco);
      gruposFinais.push(gruposArray);
    });
  
    return gruposFinais;
  }
  
  // Chamar a função e obter os grupos finais de pedidos por endereço
  const gruposFinaisDePedidosPorEndereco = agruparPedidosPorEndereco2([orders]);
  
  // Exibir os resultados
  console.log('gruposFinaisDePedidosPorEndereco',gruposFinaisDePedidosPorEndereco.length);
  