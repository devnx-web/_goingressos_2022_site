<template>
    <div>

    </div>
</template>

<script>
export default {
  name: "Index",
  mounted() {
    console.log(process.env.slug)
      this.$router.push('broks-garuva')
  },
}
</script>
