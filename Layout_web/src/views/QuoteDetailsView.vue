<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Detalles del Envío</h2>
    <QuoteForm @submit="submitDetails" />
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
  },
}
</script>
