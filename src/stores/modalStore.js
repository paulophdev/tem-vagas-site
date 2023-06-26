import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    visible: false,
    vagaSelecionada: {
      categoriaVaga: '',
      tipoVaga: '',
      titulo: '',
      descricaoVaga: '',
      empresa: '',
      dataPublicacao: '',
      qtdVagas: 0,
      remuneracao: '',
      endereco: {
        logradouro: '',
        estado: '',
        numero: '',
        bairro: '',
        municipio: '',
        complemento: ''
      },
      atividade: {
        descricao: '',
        requisitos: [],
        desejavel: [],
        beneficios: [],
        horario: []
      },
      contatos: {
        whatsApp: '',
        facebook: '',
        twitter: '',
        linkedin: ''
      }
    }
  }),

  actions: {
    isVisible() {
      this.visible = !this.visible
    },
    isVagaSelecionada(data) {
      this.vagaSelecionada = {...data}
    }
  },
});
