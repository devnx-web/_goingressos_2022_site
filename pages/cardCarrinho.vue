<template>
  <div class="card-ingressos mt-2">
    <div class="bg-topo px-3 d-flex justify-content-between align-items-center">
      <div>
        <h3>EVENTO EXEMPLO 1 EDIÇÃO</h3>
        <p class="small">11/12/2022 - 12h</p>
      </div>
      <div>tempo restatne: 3213</div>
    </div>
    <div class="p-3">
      <div>
        <p>Preencha as informações abaixo para finalizar a compra!</p>
      </div>
      <div
        class="align-items-center mt-3"
        v-for="(ing, index) in ingressos"
        :key="index"
      >
        <b-row>
          <b-col md="12">
            <div>{{ ing.nomeLote }} {{ ing.nomeIng }}</div>
          </b-col>
          <b-col class="pr-0" md="3">
            <b-input
              placeholder="Nome Completo"
              v-model="ingressos[index].nome"
            ></b-input>
          </b-col>
          <b-col class="pl-0 pr-0 border-left" md="3">
            <b-input placeholder="CPF" v-model="ingressos[index].cpf" />
          </b-col>
          <b-col class="pr-0 pl-0 border-right border-left" md="3">
            <b-input type="text" placeholder="Whatsapp" />
          </b-col>
          <b-col class="pl-0" md="2">
            <b-input type="date" placeholder="Data de nascimento" />
          </b-col>
          <b-col class="pl-0" md="1">
            <img
              height="30"
              @click="removeIngresso(index)"
              src="../assets/icones/minus.svg"
              alt=""
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardCarrinho",
  props: {
    ingressos: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      //   ingressosP: [],
    };
  },
  methods: {
    Confere() {
      console.log(this.ingressos);
    },
    removeIngresso(index) {
      this.$emit("removeIngresso", index);
    },
  },
};
</script>
