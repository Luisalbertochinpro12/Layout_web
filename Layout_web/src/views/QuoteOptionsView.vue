<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Opciones de Envío</h2>
    <div class="row">
      <ShippingOptionCard
        v-for="(option, index) in shippingOptions"
        :key="index"
        :service="option.service"
        :price="option.price"
        :deliveryTime="option.deliveryTime"
        @select="selectOption(option)"
      />
    </div>

    <div class="mt-4 text-center">
      <button class="btn btn-secondary" @click="goBack">Regresar</button>
    </div>
  </div>
</template>

<script>
import ShippingOptionCard from '../components/ShippingOptionCard.vue'

export default {
  name: 'QuoteOptionsView',
  components: { ShippingOptionCard },
  data() {
    return {
      shippingOptions: [
        { service: 'DHL', price: '$150', deliveryTime: '1-2 días hábiles' },
        { service: 'Estafeta', price: '$120', deliveryTime: '3-5 días hábiles' },
        { service: 'Mandaditos', price: 'Gratis', deliveryTime: '1-2 días hábiles' },
      ],
    }
  },
  methods: {
    selectOption(option) {
      this.$router.push({ name: 'QuoteDetails', query: { service: option.service } })
    },
    goBack() {
      this.$router.go(-1)
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
