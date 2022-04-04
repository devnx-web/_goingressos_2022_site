<template>
  <div class="card-ingressos mt-2">
    <div class="bg-topo px-3 d-md-flex justify-content-between align-items-center">
      <div>
        <h3>EVENTO EXEMPLO 1 EDIÇÃO</h3>
        <p class="small">11/12/2022 - 12h</p>
      </div>
      <div hidden>tempo restatne: 3213</div>
    </div>
    <div class="p-md-3">
      <div class="px-2 pt-3">
        <p>Preencha as informações abaixo para finalizar a compra!</p>
      </div>
    <div class="mt-3" v-for="(ing, index) in ingressos" :key="index">
      <hr class="mt-0 mb-0 mb-md-2">
      <div class="p-2 pb-3">
   <b-row>
     <b-col>
       <div>
         <div class="cursor-pointer d-md-none estilo-remove">
           <img @click="removeIngresso(index)" height="30" src="../assets/icones/minus.svg" alt="">
         </div>
         <p class="mt-1 mt-md-0 info-ing">{{ ing.nomeLote }} - {{ ing.nomeIng }}</p>
         <div class="d-md-flex align-items-center mt-2" >
           <div class="estilo-input mt-2">
             <b-row>
               <b-col class="pr-md-0  mt-md-0 mt-2" cols="12" md="4">
                 <div class="info-input ml-md-3">Nome completo</div>
                 <b-input
                   @input="validaCampo('nome', index)"
                   class="border-wi"
                   placeholder="Nome Completo"
                   v-model="ingressos[index].nome"
                 ></b-input>
               </b-col>
               <b-col class="pl-md-0 pr-md-0 border-left mt-md-0 mt-2" cols="12" md="2">
                 <div class="info-input">CPF</div>
                 <the-mask @input="validaCampo('cpf', index)" placeholder="CPF" class="border-wi form-control"  v-model="ingressos[index].cpf"  :mask="['###.###.###-##']" />
               </b-col>
               <b-col class="pr-md-0 pl-md-0  mt-md-0 mt-2 border-right border-left" cols="12" md="3">
                 <div class="info-input">WhatsApp</div>
                 <the-mask class="form-control border-wi" placeholder="Ex: (99) 99999-9999" :mask="['(##) ####-####', '(##) #####-####']" />
               </b-col>
               <b-col class="pl-md-0  mt-md-0 mt-2" cols="12" md="3">
                 <div class="info-input">Nascimento</div>
                 <b-input class="border-wi" type="date" placeholder="Data de nascimento" />
               </b-col>
             </b-row>
           </div>
           <div class="ml-3 cursor-pointer d-none d-md-flex">
             <img @click="removeIngresso(index)" height="30" src="../assets/icones/minus.svg" alt="">
           </div>
         </div>
         <b-row>
           <b-col md="4" class="pl-0"> <p class="small text-danger ml-md-4"  v-if="verifica.nome">Nome muito curto</p></b-col>
           <b-col md="2" class="pl-0"> <p class="small text-danger ml-md-n1"  v-if="verifica.cpf" >CPF inválido!</p></b-col>
           <b-col md="3" class="pl-0"> <p class="small text-danger ml-md-n1"  v-if="verifica.whatsapp" >WhatsApp inválido!</p></b-col>
           <b-col md="3" class="pl-0"> <p class="small text-danger ml-md-n2"  v-if="verifica.nascimento" >Apenas maior de idade!</p></b-col>
         </b-row>
       </div>
     </b-col>
   </b-row>
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
      verifica: {
        cpf: false,
        nome: false,
        whatsapp: false,
        nascimento: false
      }
      //   ingressosP: [],
    };
  },
  methods: {
    validaCampo(campo, index) {
      if (campo === 'nome')
      {
        if (this.ingressos[index].nome.length < 5)
        {
          this.verifica.nome = true
          return;
        }
        this.verifica.nome = false
      }
      if (campo === 'cpf')
      {
        if (this.ingressos[index].cpf.length === 11)
        {
          if (!this.validarCPF(this.ingressos[index].cpf))
          {
            this.$toast.error('Digite um cpf válido!')
            this.verifica.cpf = true
            return
          }
          this.verifica.cpf = false
        }
      }
    },

    validarCPF(inputCPF) {
      var soma = 0;
      var i;
      var resto;

      if (inputCPF === "00000000000") return false;
      for (i = 1; i <= 9; i++)
        soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(inputCPF.substring(9, 10))) return false;

      soma = 0;
      for (i = 1; i <= 10; i++)
        soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) resto = 0;
      if (resto !== parseInt(inputCPF.substring(10, 11))) return false;
      return true;
    },

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



.info-input
{
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
}

@media (max-width: 600px) {
  .info-ing
  {
    background-color: #020024;
    color: white;
    padding: 10px;
  }
}

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

.estilo-remove
{
  border-radius: 50px;
  position: absolute;
  background-color: white;
  right: 0;
  top: -20px;
}

@media (min-width: 600px) {
  .border-wi
  {
    background-color: transparent !important;
    border: none !important;
  }

  .info-input
  {
    position: absolute;
    font-family: 'Poppins', sans-serif;
    top: -10px;
    background-color: white;
    padding-left: 5px;
    padding-right: 5px;
    left: 10px;
    font-size: 12px;
  }

  .estilo-input {
    width: 100%;
    border-radius: 10px !important;
    border: solid 2px #ececec;
  }
  input {
    height: 45px !important;
    font-size: 13px !important;
    font-family: "Poppins", sans-serif;
    border-radius: 0;
    box-shadow: none !important;

  }

}


</style>
