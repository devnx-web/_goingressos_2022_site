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

    <div class="mt-3" v-for="(ing, index) in ingressos">
      <div>{{ ing.nomeLote }} {{ ing.nomeIng }}</div>
     <div>
       <div class="d-flex align-items-center" >
         <div class="estilo-input">
           <b-row>
             <b-col class="pr-0">
               <b-input
                 placeholder="Nome Completo"
                 v-model="ingressos[index].nome"
               ></b-input>
             </b-col>
             <b-col class="pl-0 pr-0 border-left">
               <b-input placeholder="CPF" v-model="ingressos[index].cpf" />
             </b-col>
             <b-col class="pr-0 pl-0 border-right border-left">
               <the-mask class="input-form form-control" placeholder="Ex: (99) 99999-9999" :mask="['(##) ####-####', '(##) #####-####']" />
             </b-col>
             <b-col class="pl-0">
               <b-input type="date" placeholder="Data de nascimento" />
             </b-col>
           </b-row>
         </div>
         <div class="ml-3">
           <img @click="removeIngresso(index)" height="30" src="../assets/icones/minus.svg" alt="">
         </div>
       </div>
     </div>
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
      if (this.ingressos.length <= 0)
      {
        this.$router.push('/')
        this.$toast.error('Adicione ingressos para comprar!')
      }
    },
  },
};
</script>

<style>
.card-ingressos {
  border-radius: 20px;
  border: solid 1px #e1e1e1;
}

.card-ingressos .bg-topo {
  color: white;
  padding: 15px 2px;
  background: #020024;
  background: linear-gradient(144deg, #005a8c 10%, #0c8abf);
  border-radius: 20px 20px 0 0;
}

.estilo-input {
  width: 100%;
  border-radius: 10px !important;
  overflow: hidden;
  border: solid 1px #ececec;
}

input {
  height: 40px !important;
  border: none !important;
  font-size: 13px !important;
  font-family: "Poppins", sans-serif;
  border-radius: 0;
  box-shadow: none !important;
}
</style>
