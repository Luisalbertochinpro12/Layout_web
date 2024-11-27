<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Detalles del Envío</h2>
    <QuoteForm @submit="submitDetails" />

    <div class="mt-4 text-center">
      <button class="btn btn-secondary" @click="goBack">Regresar</button>
    </div>
  </div>
</template>

<script>
import QuoteForm from '../components/QuoteForm.vue'

export default {
  name: 'QuoteDetailsView',
  components: { QuoteForm },
  methods: {
    submitDetails(details) {
      console.log(details)
      this.$router.push({ name: 'QuoteConfirmation' })
    },
    goBack() {
      this.$router.push({ name: 'QuoteOptions' })
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
}

button {
  margin-top: 1.5rem;
}
</style>
