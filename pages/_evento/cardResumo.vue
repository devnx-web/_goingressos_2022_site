<template>
  <div>
    <div class="d-flex">
      <h2>RESUMO</h2>
      <p class="small ml-1 mt-md-1 mt-2">({{ totalIng }} Ingresso)</p>
    </div>

    <div class="card-resumo mt-2">

      <div class="p-3">
        <div v-for="(ing, index) in ingressos" :key="index">
          <p>{{ ing.nomeIng }}</p>
          <p class="small">{{ ing.nomeLote }} - {{ ing.nome }}</p>
          <hr class="d-none d-md-block">
        </div>
      </div>
      <div class="bg-total p-3 d-flex justify-content-between">
        <p>Total:</p>
        <p>
          <b>{{ vt | currency}}</b>
        </p>
      </div>
      <hr>
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


<style>

.bg-total {
  color: white;
  border-radius: 0 0 20px 20px;
  background-color: black;
}

.card-resumo {
  border-radius: 20px;
  background: rgb(245, 245, 245);
}
</style>
