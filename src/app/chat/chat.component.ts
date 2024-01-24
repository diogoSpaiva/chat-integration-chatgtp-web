// chat.component.ts
import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [MessageService],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  // messages: any[] = [
  //   {
  //     id: 'msg_1SQvyttx2zqVKujyWbOF22h5',
  //     object: 'thread.message',
  //     created_at: 1706123174,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Notei que você enviou um novo arquivo. Como posso ajudá-lo com este arquivo? Você gostaria que eu analisasse o conteúdo para obter mais informações para o JSON ou há algo específico no qual você precisa de assistência?',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_4em48xw3KcuMMvB8MHvoSxlK',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_a126y1boBC5RgTUGuzjHZ6c0',
  //     object: 'thread.message',
  //     created_at: 1706123170,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: '',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: ['file-H0LQCxp3SyPBhadOQocVxbL7'],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_FxjVe9CjaDtGIOkThJxkVQds',
  //     object: 'thread.message',
  //     created_at: 1706123090,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Entendi, vou corrigir o valor da franquia para R$ 200,00 no JSON. Aqui está o JSON atualizado:\n\n```json\n{\n  "veiculo": {\n    "marca": "Jeep",\n    "modelo": "COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT",\n    "anoFabricacao": 2017,\n    "estadoVeiculo": "NÃO INFORMADA",\n    "Chassi": "988675124HKH27689",\n    "Renavam": "1119977743",\n    "historicoVeiculo": {\n      "acidentesAnteriores": "NÃO",\n      "sinistros": "NÃO"\n    }\n  },\n  "usoVeiculo": {\n    "tipoUso": "pessoal",\n    "quilometragemAnual": "53.522.110.686.488" // Esta informação precisa ser verificada\n  },\n  "localizacao": {\n    "codigoPostal": "71937-720"\n  },\n  "perfilCondutor": {\n    "idade": 35, // Baseado na data de nascimento: 28/10/1987\n    "sexo": "masculino",\n    "estadoCivil": "NÃO INFORMADA", // Estado civil não foi fornecido\n    "historicoConducao": {\n      "multas": "NÃO INFORMADA", // Informação sobre multas não foi fornecida\n      "acidentes": "NÃO INFORMADA" // Informação sobre acidentes não foi fornecida\n    },\n    "tempoHabilitacao": "NÃO INFORMADA", // Tempo de habilitação não foi fornecido\n    "pontuacaoCredito": "NÃO INFORMADA" // Pontuação de crédito não foi fornecida\n  },\n  "coberturasDesejadas": {\n    "colisao": "NÃO INFORMADA", // Informação sobre cobertura de colisão não foi fornecida\n    "terceiros": "NÃO INFORMADA", // Informação sobre cobertura de terceiros não foi fornecida\n    "roubo": "NÃO INFORMADA", // Informação sobre cobertura de roubo não foi fornecida\n    "outras": []\n  },\n  "franquia": {\n    "valor": 200 // Valor da franquia corrigido para R$ 200,00\n  },\n  "dispositivosSeguranca": [\n    "alarme comum" // Dispositivo antifurto do tipo comum foi mencionado\n  ],\n  "estacionamento": "NÃO INFORMADA", // Informação sobre tipo de estacionamento não foi fornecida\n  "historicoSeguros": {\n    "segurosAnteriores": "NÃO INFORMADA", // Informação sobre seguros anteriores não foi fornecida\n    "experienciaSinistros": "NÃO INFORMADA" // Informação sobre experiência com sinistros não foi fornecida\n  }\n}\n```\n\nSe houver mais alguma informação que você possa fornecer para preencher os campos "NÃO INFORMADA" ou para corrigir qualquer outro campo, por favor avise-me.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_ReODXPM2AtUONzVCXg9NmmFO',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_ZUANAHk1Fx5zUGjK3Q6Rqvo9',
  //     object: 'thread.message',
  //     created_at: 1706123086,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'o valor da franquia é R$ 200,00',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_RetB3I28wkh3Cje3iZprusfo',
  //     object: 'thread.message',
  //     created_at: 1706122930,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Muito bem, vou atualizar o valor da franquia no JSON para R$ 100,00. Segue o JSON atualizado com a franquia especificada:\n\n```json\n{\n  "veiculo": {\n    "marca": "Jeep",\n    "modelo": "COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT",\n    "anoFabricacao": 2017,\n    "estadoVeiculo": "NÃO INFORMADA",\n    "Chassi": "988675124HKH27689",\n    "Renavam": "1119977743",\n    "historicoVeiculo": {\n      "acidentesAnteriores": "NÃO",\n      "sinistros": "NÃO"\n    }\n  },\n  "usoVeiculo": {\n    "tipoUso": "pessoal",\n    "quilometragemAnual": "53.522.110.686.488" // Esta informação precisa ser verificada\n  },\n  "localizacao": {\n    "codigoPostal": "71937-720"\n  },\n  "perfilCondutor": {\n    "idade": 35, // Baseado na data de nascimento: 28/10/1987\n    "sexo": "masculino",\n    "estadoCivil": "NÃO INFORMADA", // Estado civil não foi fornecido\n    "historicoConducao": {\n      "multas": "NÃO INFORMADA", // Informação sobre multas não foi fornecida\n      "acidentes": "NÃO INFORMADA" // Informação sobre acidentes não foi fornecida\n    },\n    "tempoHabilitacao": "NÃO INFORMADA", // Tempo de habilitação não foi fornecido\n    "pontuacaoCredito": "NÃO INFORMADA" // Pontuação de crédito não foi fornecida\n  },\n  "coberturasDesejadas": {\n    "colisao": "NÃO INFORMADA", // Informação sobre cobertura de colisão não foi fornecida\n    "terceiros": "NÃO INFORMADA", // Informação sobre cobertura de terceiros não foi fornecida\n    "roubo": "NÃO INFORMADA", // Informação sobre cobertura de roubo não foi fornecida\n    "outras": []\n  },\n  "franquia": {\n    "valor": 100 // Valor da franquia atualizado para R$ 100,00\n  },\n  "dispositivosSeguranca": [\n    "alarme comum" // Dispositivo antifurto do tipo comum foi mencionado\n  ],\n  "estacionamento": "NÃO INFORMADA", // Informação sobre tipo de estacionamento não foi fornecida\n  "historicoSeguros": {\n    "segurosAnteriores": "NÃO INFORMADA", // Informação sobre seguros anteriores não foi fornecida\n    "experienciaSinistros": "NÃO INFORMADA" // Informação sobre experiência com sinistros não foi fornecida\n  }\n}\n```\n\nPor favor, verifique novamente a quilometragem anual e outros detalhes marcados como "NÃO INFORMADA" para que possamos completar o preenchimento do JSON com precisão.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_MXpSPvh2eNbDzyoBwuSDVJSH',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_cEHru2mkOpkky47OhdcP3OFA',
  //     object: 'thread.message',
  //     created_at: 1706122927,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'o valor da franquia é R$ 100,00',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_dan70DQ41M4nHPQ4dZvmwzRe',
  //     object: 'thread.message',
  //     created_at: 1706121763,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Claro, com base nas informações fornecidas até agora, aqui está o modelo de JSON preenchido conforme os dados da apólice. Note que, se houver alguma informação faltante que eu deveria preencher, você precisará me fornece-las, pois não podemos presumir informações.\n\n```json\n{\n  "veiculo": {\n    "marca": "Jeep",\n    "modelo": "COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT",\n    "anoFabricacao": 2017,\n    "estadoVeiculo": "NÃO INFORMADA",\n    "Chassi": "988675124HKH27689",\n    "Renavam": "1119977743",\n    "historicoVeiculo": {\n      "acidentesAnteriores": "NÃO",\n      "sinistros": "NÃO"\n    }\n  },\n  "usoVeiculo": {\n    "tipoUso": "pessoal",\n    "quilometragemAnual": "53.522.110.686.488" // Esta informação pode estar incorreta, por favor confirme\n  },\n  "localizacao": {\n    "codigoPostal": "71937-720"\n  },\n  "perfilCondutor": {\n    "idade": 35, // Calculada com base na data de nascimento fornecida: 28/10/1987\n    "sexo": "masculino",\n    "estadoCivil": "NÃO INFORMADA", // Estado civil não foi fornecido\n    "historicoConducao": {\n      "multas": "NÃO INFORMADA", // Informação sobre multas não foi fornecida\n      "acidentes": "NÃO INFORMADA" // Informação sobre acidentes não foi fornecida\n    },\n    "tempoHabilitacao": "NÃO INFORMADA", // Tempo de habilitação não foi fornecido\n    "pontuacaoCredito": "NÃO INFORMADA" // Pontuação de crédito não foi fornecida\n  },\n  "coberturasDesejadas": {\n    "colisao": "NÃO INFORMADA", // Informação sobre cobertura de colisão não foi fornecida\n    "terceiros": "NÃO INFORMADA", // Informação sobre cobertura de terceiros não foi fornecida\n    "roubo": "NÃO INFORMADA", // Informação sobre cobertura de roubo não foi fornecida\n    "outras": []\n  },\n  "franquia": {\n    "valor": "NÃO INFORMADA" // Valor da franquia não foi fornecido\n  },\n  "dispositivosSeguranca": [\n    "alarme comum" // Dispositivo antifurto do tipo comum foi mencionado\n  ],\n  "estacionamento": "NÃO INFORMADA", // Informação sobre tipo de estacionamento não foi fornecida\n  "historicoSeguros": {\n    "segurosAnteriores": "NÃO INFORMADA", // Informação sobre seguros anteriores não foi fornecida\n    "experienciaSinistros": "NÃO INFORMADA" // Informação sobre experiência com sinistros não foi fornecida\n  }\n}\n```\n\nSe houver informações adicionais que você possa fornecer para preencher os campos marcados como "NÃO INFORMADA", por favor me informe para que eu possa atualizar o JSON adequadamente.\n\n**Observação**: Eu mencionei a quilometragem anual como "53.522.110.686.488", mas essa informação parece estar incorreta ou pode ter sido mal interpretada. Verifique essa informação para que o JSON possa ser corrigido.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_ngc25I48upIp5nIzfhGmcwAB',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_tVqT9ym1pDIZ73Qz4PwotCuZ',
  //     object: 'thread.message',
  //     created_at: 1706121760,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'Me envie o JSON',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_LwO5Ej5FnyUDgbUd5hOCeWwU',
  //     object: 'thread.message',
  //     created_at: 1706121555,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Consegui identificar várias informações importantes da sua apólice de seguro de automóvel. Aqui está um resumo das informações coletadas:\n\n**Segurado:**\n- Nome: CAIO REIGOTA LAMEIRINHAS【20†source】.\n- Endereço: QUADRA 202 LT 10 BL B 10, Apto 201, SUL (AGUAS CLAR), 71937-720, BRASILIA, DF【20†source】.\n\n**Dados da Apólice:**\n- Validade: De 12/12/2022 às 24h até 12/12/2023 às 24h【21†source】.\n- Número da Proposta: 44896F.000 018 265 5【21†source】.\n\n**Veículo:**\n- Modelo: COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT【22†source】.\n- Placa: DF/PAY8928【22†source】.\n- Chassi: 988675124HKH27689【22†source】.\n- Renavam: 1119977743【22†source】.\n\n**Uso do Veículo:**\n- Uso: Particular【23†source】.\n\n**Perfil do Condutor:**\n- CPF: 059471737-00【24†source】.\n- Sexo: Masculino【24†source】.\n- Data de Nascimento: 28/10/1987【24†source】.\n- Possui dispositivo antifurto do tipo comum【24†source】.\n- O veículo possui câmbio automático: Sim【24†source】.\n\nEssas são as informações principais obtidas da apólice. Se precisar de alguma informação adicional ou quiser que eu envie essas informações para solicitar uma cotação, por favor me avise.',
  //           annotations: [
  //             {
  //               type: 'file_citation',
  //               text: '【20†source】',
  //               start_index: 185,
  //               end_index: 196,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS\nQUADRA 202 LT 10 BL B 10\nApto 201  SUL (AGUAS CLAR\n71937-720 BRASILIA DF',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【20†source】',
  //               start_index: 287,
  //               end_index: 298,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS\nQUADRA 202 LT 10 BL B 10\nApto 201  SUL (AGUAS CLAR\n71937-720 BRASILIA DF',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【21†source】',
  //               start_index: 377,
  //               end_index: 388,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'Âs 24h de 12/12/2022 Âs 24h de 12/12/2023\nNumero da Proposta: 44896F.000 018 265 5',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【21†source】',
  //               start_index: 432,
  //               end_index: 443,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'Âs 24h de 12/12/2022 Âs 24h de 12/12/2023\nNumero da Proposta: 44896F.000 018 265 5',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【22†source】',
  //               start_index: 507,
  //               end_index: 518,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT\n17  17  DF/PAY8928 \n988675124HKH27689 \n1119977743 \nN¡O INFORMADA \nBICOMBUST¬VEL \nN¡O \nDISTRITO FEDERAL',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【22†source】',
  //               start_index: 539,
  //               end_index: 550,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT\n17  17  DF/PAY8928 \n988675124HKH27689 \n1119977743 \nN¡O INFORMADA \nBICOMBUST¬VEL \nN¡O \nDISTRITO FEDERAL',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【22†source】',
  //               start_index: 579,
  //               end_index: 590,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT\n17  17  DF/PAY8928 \n988675124HKH27689 \n1119977743 \nN¡O INFORMADA \nBICOMBUST¬VEL \nN¡O \nDISTRITO FEDERAL',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【22†source】',
  //               start_index: 613,
  //               end_index: 624,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'COMPASS LONGITUDE 2.0 16V 4X2 FLEX AUT\n17  17  DF/PAY8928 \n988675124HKH27689 \n1119977743 \nN¡O INFORMADA \nBICOMBUST¬VEL \nN¡O \nDISTRITO FEDERAL',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【23†source】',
  //               start_index: 664,
  //               end_index: 675,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote: 'Uso:Particular\n53.522.110.686.488',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【24†source】',
  //               start_index: 721,
  //               end_index: 732,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS 059471737-00 M  28/10/1987\nData de nascimento do segurado: 28/10/1987\nAntifurto: COMUM.\nChassi remarcado? NÁO.\nCâmbio automático? SIM',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【24†source】',
  //               start_index: 751,
  //               end_index: 762,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS 059471737-00 M  28/10/1987\nData de nascimento do segurado: 28/10/1987\nAntifurto: COMUM.\nChassi remarcado? NÁO.\nCâmbio automático? SIM',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【24†source】',
  //               start_index: 796,
  //               end_index: 807,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS 059471737-00 M  28/10/1987\nData de nascimento do segurado: 28/10/1987\nAntifurto: COMUM.\nChassi remarcado? NÁO.\nCâmbio automático? SIM',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【24†source】',
  //               start_index: 853,
  //               end_index: 864,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS 059471737-00 M  28/10/1987\nData de nascimento do segurado: 28/10/1987\nAntifurto: COMUM.\nChassi remarcado? NÁO.\nCâmbio automático? SIM',
  //               },
  //             },
  //             {
  //               type: 'file_citation',
  //               text: '【24†source】',
  //               start_index: 907,
  //               end_index: 918,
  //               file_citation: {
  //                 file_id: 'file-m9utBjHzc5LgNe9IuLKdFg7O',
  //                 quote:
  //                   'CAIO REIGOTA LAMEIRINHAS 059471737-00 M  28/10/1987\nData de nascimento do segurado: 28/10/1987\nAntifurto: COMUM.\nChassi remarcado? NÁO.\nCâmbio automático? SIM',
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_mhTRhXKg54i3RMpv1uywK06F',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_pTvOgtRTppTpL8MQa7bwfMQB',
  //     object: 'thread.message',
  //     created_at: 1706121534,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'Segue o seguro auto para análise',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: ['file-m9utBjHzc5LgNe9IuLKdFg7O'],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_0rjQi4fnouVx7IxK8hTSielI',
  //     object: 'thread.message',
  //     created_at: 1706121483,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Parece que houve um problema ao tentar abrir o arquivo que você enviou. Pode ser que o arquivo esteja vazio ou corrompido. Você poderia verificar o arquivo e tentar enviá-lo novamente? Certifique-se também de que o arquivo esteja no formato correto para que eu possa ajudá-lo a identificar as informações de sua apólice de seguro de automóvel.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_014MaB49yxPXmDETGe0QRTx5',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_nj05g3K8IjjYK797ZMkRssbO',
  //     object: 'thread.message',
  //     created_at: 1706121475,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'Segue o documento.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [
  //       'file-KmE1QkQw89DdPK4CXv5LrOC6',
  //       'file-jq1cf1geFM4w9uYwmkgfd37N',
  //     ],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_Dww8uVVZeld2pu6jjRZJyZxw',
  //     object: 'thread.message',
  //     created_at: 1706121475,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'Segue o documento.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: ['file-jq1cf1geFM4w9uYwmkgfd37N'],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_TzbRGdtpChyeCbLrDAW3HU3O',
  //     object: 'thread.message',
  //     created_at: 1706121450,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'assistant',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value:
  //             'Claro, ficaria feliz em ajudar a identificar informações na sua apólice de seguro de automóvel. Por favor, envie-me o documento da apólice para que eu possa analisar e extrair as informações necessárias para você.',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: 'asst_UwAfM97Bp2a0b6X1lhohpYhv',
  //     run_id: 'run_FeYJMz06tkzjudKDSnSq7mbr',
  //     metadata: {},
  //   },
  //   {
  //     id: 'msg_uMHyYY5au8LhaV5i54DX7GdY',
  //     object: 'thread.message',
  //     created_at: 1706121442,
  //     thread_id: 'thread_WmjUsHgTOY5fu8G36Rg1A9K0',
  //     role: 'user',
  //     content: [
  //       {
  //         type: 'text',
  //         text: {
  //           value: 'Me ajuda a identificar informações da apólice seguro auto?',
  //           annotations: [],
  //         },
  //       },
  //     ],
  //     file_ids: [],
  //     assistant_id: null,
  //     run_id: null,
  //     metadata: {},
  //   },
  // ];
  file_ids: string[] = [];
  newMessage: string = '';
  selectedFile: File | null = null;
  progress: number | undefined;
  loadResponse: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  runMessages() {
    this.messageService.run().subscribe(() => this.getRunMessages());
  }

  getRunMessages() {
    this.messageService.getRun().subscribe((res: any) => {
      if (res.data.status === 'in_progress') {
        setTimeout(() => {
          this.getRunMessages();
        }, 6 * 1000);
      } else {
        this.getMessages();
      }
    });
  }

  getMessages() {
    this.messageService.getMessages().subscribe((messages: any) => {
      this.messages = messages.data;
      this.loadResponse = false;
    });
  }

  onSubmit() {
    if (this.newMessage.trim() !== '' || this.selectedFile) {
      this.loadResponse = true;
      this.file_ids = [];
      this.selectedFile ? this.uploadFile() : this.sendMessage();
    }
  }

  sendMessage() {
    this.messageService
      .sendMessage(this.newMessage, this.file_ids)
      .subscribe(() => {
        this.newMessage = '';
        this.runMessages();
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     this.messageService.sendFile(this.selectedFile).subscribe({
  //       next: (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progress = Math.round((100 * event.loaded) / event.total);
  //         } else if (event.type === HttpEventType.Response) {
  //           this.progress = 100;
  //           console.log('====================================');
  //           console.log(event.body);
  //           console.log('====================================');
  //           console.log('Arquivo enviado com sucesso:', event.body);
  //           this.file_ids.push(event.body.id);
  //           this.sendMessage();
  //           this.selectedFile = null;
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Erro ao enviar o arquivo:', error);
  //       },
  //     });
  //   }
  // }

  uploadFile() {
    if (this.selectedFile) {
      this.messageService.sendFile(this.selectedFile).subscribe((res: any) => {
        this.selectedFile = null;
        this.file_ids.push(res.id);
        this.sendMessage();
      });
    }
  }

  handleText(text: string): string {
    const textTemp: string[] = /【\d*†source】/.test(text)
      ? text.split('\n\n')
      : [];
    if (textTemp.length > 1) {
      let htmlTemp: string = '';
      textTemp.forEach((element, index) => {
        if (index !== 0 && index !== textTemp.length - 1) {
          console.log(element);

          htmlTemp += element
            .replace(/^\*\*/g, '<p class="title">')
            .replace(/\*\*/g, '</p>')
            .replaceAll('\n', '<p class="item">')
            .replace(/【\d*†source】\./g, '.</p>');
          return;
        }
        htmlTemp += `<p>${element}</p>`;
      });
      return htmlTemp;
    }
    return text;
  }
}
