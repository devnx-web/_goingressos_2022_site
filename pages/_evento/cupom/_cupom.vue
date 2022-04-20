<template>
  <div></div>
</template>

<script>
export default {
  name: "CupomDesconto",
  data() {
    return {
      cupom: "",
    };
  },
  beforeMount() {
    this.carregaCupom();
  },
  methods: {
    carregaCupom() {
      localStorage.setItem("cupomUser", this.$route.params.cupom);
      this.$router.push(`/${this.$route.params.evento}`);
    },
  },
};
</script>

<style>
.txt-tutorial {
  font-size: 14px;
  font-weight: 400;
}

.bloc-bg {
  text-align: center;
  border-radius: 100px;
  color: white;
  height: 40px;
  width: 40px;
  background-color: black;
  font-family: "Poppins", sans-serif;
}

.card-info {
  border-radius: 5px;
  border: solid 1px #d9d9d9;
  padding: 10px;
  font-family: "Poppins", sans-serif;
}

.text-total {
  font-size: 13px;
  margin-top: 5px;
}

.text-value-total {
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
}
.card-ingresso-venda {
  border: solid 1px #dcdcdc;
  border-radius: 5px;
}

.estilo-banner {
  object-fit: cover;
  height: 350px;
  width: 990px;
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-position: 50%;
  background-size: cover;
  box-shadow: 0 4px 18px 5px rgb(0 0 0 / 29%);
  overflow: hidden;
}

.bg-banner {
  background-size: cover;
  height: 270px;
  -o-object-fit: cover;
  object-fit: cover;
  filter: blur(8px);
  background-position: 50%;
  -webkit-filter: blur(8px);
  transform: scale(1.2);
}
</style>
