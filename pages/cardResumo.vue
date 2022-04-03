<template>
  <div>
    <div>
      <h2>RESUMO</h2>
      <p class="small ml-1">({{ totalIng }} Ingresso)</p>
    </div>

    <div class="card-resumo mt-2">
      <div class="p-3" v-for="(ing, index) in ingressos" :key="index">
        <p>{{ ing.nomeIng }}</p>
        <p class="small">{{ ing.nomeLote }} - {{ ing.nome }}</p>
      </div>
      <div class="bg-total p-3 d-flex justify-content-between">
        <p>Total:</p>
        <p>
          <b>{{ vt }}</b>
        </p>
      </div>
    </div>

    <div>
      <b-button v-b-modal.finaliza variant="success" class="mt-3" block
        >Finalizar Compra</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "cardResumo",
  props: {
    totalIng: {
      type: Number,
      required: true,
    },
    vt: {
      type: Number,
      required: true,
    },
    ingressos: {
      type: Array,
      required: true,
    },
  },
};
</script>