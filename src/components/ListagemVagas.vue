<template>
  <div class="p-5">
    <h4 class="mb-2">Vagas disponíveis</h4>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <VagaTv v-for="(vaga, i) in vagas.registros" :key={i} :vaga={...vaga}></VagaTv>
    </div>
  </div>

  <ModalDetalhes></ModalDetalhes>
</template>

<script setup>
  import ModalDetalhes from "./ModalDetalhes.vue";
  import VagaTv from './VagaTv.vue'
  import { ref } from 'vue';

  const vagas = ref({
    totalRegistros: 100,
    totalPorPagina: 10,
    paginaAtual: 1,
    registros: [
      {
        categoriaVaga: 'Gerente Comercial',
        tipoVaga: 'Emprego',
        titulo: 'Vendedor área comercial',
        descricaoVaga: `Venha fazer parte do time que mais cresce na Bahia;Vaga para vendedor interno na melhor empresa da Bahia;Nova equipe;Acompanhamento 100% do Líder;`,
        empresa: 'Confidencial',
        dataPublicacao: '2023-05-24 10:30:00',
        qtdVagas: 5,
        remuneracao: 'A combinar',
        endereco: {
          logradouro: 'Rua Arco Verde',
          estado: 'BA',
          numero: '742',
          bairro: 'Parque Ipê',
          municipio: 'Feira de Santana - BA',
          complemento: 'Apto. 01'
        },
        atividade: {
          descricao: 'Venda interna, atendimento ao público.',
          requisitos: [
            '18 a 24 anos',
            'Proativo'
          ],
          desejavel: [
            'Pessoa que queira trabalhar no centro da cidade'
          ],
          beneficios: [
            'Viagens',
            'Plano de carreira agressivo',
            'Suporte completo do seu Líder',
            'Vale transporte'
          ],
          horario: [
            '08 as 12 horas 14 as 18 horas'
          ]
        },
        contatos: {
          whatsApp: '5575900000000',
          facebook: 'https://www.facebook.com/profile.php?id=100002457864535',
          twitter: 'https://twitter.com/paulophdev',
          linkedin: 'https://www.linkedin.com/in/paulophdev'
        }
      },
      {
        categoriaVaga: 'Gerente Comercial',
        tipoVaga: 'Emprego',
        titulo: 'Vendedor área comercial',
        descricaoVaga: `Venha fazer parte do time que mais cresce na Bahia;Vaga para vendedor interno na melhor empresa da Bahia;Nova equipe;Acompanhamento 100% do Líder;`,
        empresa: 'Confidencial',
        dataPublicacao: '2023-06-25 18:30:00',
        qtdVagas: 5,
        remuneracao: 'A combinar',
        endereco: {
          logradouro: 'Rua Arco Verde',
          estado: 'BA',
          numero: '742',
          bairro: 'Parque Ipê',
          municipio: 'Feira de Santana - BA',
          complemento: 'Apto. 01'
        },
        atividade: {
          descricao: 'Venda interna, atendimento ao público.',
          requisitos: [
            '18 a 24 anos',
            'Proativo'
          ],
          desejavel: [
            'Pessoa que queira trabalhar no centro da cidade'
          ],
          beneficios: [
            'Viagens',
            'Plano de carreira agressivo',
            'Suporte completo do seu Líder',
            'Vale transporte'
          ],
          horario: [
            '08 as 12 horas 14 as 18 horas'
          ]
        },
        contatos: {
          whatsApp: '5575900000000',
          facebook: 'https://www.facebook.com/profile.php?id=100002457864535',
          twitter: 'https://twitter.com/paulophdev',
          linkedin: 'https://www.linkedin.com/in/paulophdev'
        }
      },
      {
        categoriaVaga: 'Gerente Comercial',
        tipoVaga: 'Emprego',
        titulo: 'Vendedor área comercial',
        descricaoVaga: `Venha fazer parte do time que mais cresce na Bahia;Vaga para vendedor interno na melhor empresa da Bahia;Nova equipe;Acompanhamento 100% do Líder;`,
        empresa: 'Confidencial',
        dataPublicacao: '2023-06-25 18:30:00',
        qtdVagas: 5,
        remuneracao: 'A combinar',
        endereco: {
          logradouro: 'Rua Arco Verde',
          estado: 'BA',
          numero: '742',
          bairro: 'Parque Ipê',
          municipio: 'Feira de Santana - BA',
          complemento: 'Apto. 01'
        },
        atividade: {
          descricao: 'Venda interna, atendimento ao público.',
          requisitos: [
            '18 a 24 anos',
            'Proativo'
          ],
          desejavel: [
            'Pessoa que queira trabalhar no centro da cidade'
          ],
          beneficios: [
            'Viagens',
            'Plano de carreira agressivo',
            'Suporte completo do seu Líder',
            'Vale transporte'
          ],
          horario: [
            '08 as 12 horas 14 as 18 horas'
          ]
        },
        contatos: {
          whatsApp: '5575900000000',
          facebook: 'https://www.facebook.com/profile.php?id=100002457864535',
          twitter: 'https://twitter.com/paulophdev',
          linkedin: 'https://www.linkedin.com/in/paulophdev'
        }
      },
      {
        categoriaVaga: 'Gerente Comercial',
        tipoVaga: 'Emprego',
        titulo: 'Vendedor área comercial',
        descricaoVaga: `Venha fazer parte do time que mais cresce na Bahia;Vaga para vendedor interno na melhor empresa da Bahia;Nova equipe;Acompanhamento 100% do Líder;`,
        empresa: 'Confidencial',
        dataPublicacao: '2023-06-25 18:30:00',
        qtdVagas: 5,
        remuneracao: 'A combinar',
        endereco: {
          logradouro: 'Rua Arco Verde',
          estado: 'BA',
          numero: '742',
          bairro: 'Parque Ipê',
          municipio: 'Feira de Santana - BA',
          complemento: 'Apto. 01'
        },
        atividade: {
          descricao: 'Venda interna, atendimento ao público.',
          requisitos: [
            '18 a 24 anos',
            'Proativo'
          ],
          desejavel: [
            'Pessoa que queira trabalhar no centro da cidade'
          ],
          beneficios: [
            'Viagens',
            'Plano de carreira agressivo',
            'Suporte completo do seu Líder',
            'Vale transporte'
          ],
          horario: [
            '08 as 12 horas 14 as 18 horas'
          ]
        },
        contatos: {
          whatsApp: '5575900000000',
          facebook: 'https://www.facebook.com/profile.php?id=100002457864535',
          twitter: 'https://twitter.com/paulophdev',
          linkedin: 'https://www.linkedin.com/in/paulophdev'
        }
      },
      {
        categoriaVaga: 'Gerente Comercial',
        tipoVaga: 'Emprego',
        titulo: 'Vendedor área comercial',
        descricaoVaga: `Venha fazer parte do time que mais cresce na Bahia;Vaga para vendedor interno na melhor empresa da Bahia;Nova equipe;Acompanhamento 100% do Líder;`,
        empresa: 'Confidencial',
        dataPublicacao: '2023-06-25 18:30:00',
        qtdVagas: 5,
        remuneracao: 'A combinar',
        endereco: {
          logradouro: 'Rua Arco Verde',
          estado: 'BA',
          numero: '742',
          bairro: 'Parque Ipê',
          municipio: 'Feira de Santana - BA',
          complemento: 'Apto. 01'
        },
        atividade: {
          descricao: 'Venda interna, atendimento ao público.',
          requisitos: [
            '18 a 24 anos',
            'Proativo'
          ],
          desejavel: [
            'Pessoa que queira trabalhar no centro da cidade'
          ],
          beneficios: [
            'Viagens',
            'Plano de carreira agressivo',
            'Suporte completo do seu Líder',
            'Vale transporte'
          ],
          horario: [
            '08 as 12 horas 14 as 18 horas'
          ]
        },
        contatos: {
          whatsApp: '5575900000000',
          facebook: 'https://www.facebook.com/profile.php?id=100002457864535',
          twitter: 'https://twitter.com/paulophdev',
          linkedin: 'https://www.linkedin.com/in/paulophdev'
        }
      }
    ]
  })
</script>
