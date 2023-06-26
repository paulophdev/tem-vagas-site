<template>
    <div class="px-5 pt-5 border-r-2 border-blue-500 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0px_4px_12px_rgba(59,130,246,0.2)]">
        <h1 class="text-gray-800">{{ vaga.categoriaVaga }}</h1>
        <div class="my-2">
            <div class="flex items-center gap-1 text-xs mb-1 text-gray-800"><BuildingOfficeIcon class="w-4"/> {{ vaga.empresa }}</div>
            <div class="flex items-center gap-1 text-xs mb-1 text-gray-800"><UserIcon class="w-4"/> {{ vaga.tipoVaga }}</div>
            <div class="flex items-center gap-1 text-xs text-gray-800"><MapPinIcon class="w-4"/> {{ vaga.endereco.logradouro }} - {{ vaga.endereco.estado }}</div>
        </div>
        <div class="flex justify-between items-center py-3 border-t">
            <span class="text-[10px] text-gray-500">{{ formatDistance(new Date(vaga.dataPublicacao), new Date(), { addSuffix: true, locale: ptBR }) }}</span>
            <button class="flex items-center gap-1 bg-blue-500 px-5 py-1 rounded text-xs text-white drop-shadow-lg" style="text-shadow: 2px 2px 2px #00000030" @click="populardados(vaga)"><PlusIcon class="w-4" /> Detalhes</button>
        </div>
    </div>
</template>

<script setup>
    import { BuildingOfficeIcon, UserIcon, MapPinIcon, PlusIcon } from '@heroicons/vue/24/solid'
    import { formatDistance } from 'date-fns'
    import { ptBR } from 'date-fns/locale';
    import { useModalStore } from "@/stores/modalStore";

    const store = useModalStore();

    const populardados = (vaga) => {
        store.isVagaSelecionada(vaga)
        store.isVisible()
    }

    defineProps({
        vaga: {
            type: Object,
            required: true
        }
    })
</script>