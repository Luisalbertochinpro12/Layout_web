<template>
  <div class="col-md-4 mb-4">
    <div class="card shadow">
      <div class="card-body text-center">
        <h5 class="card-title">{{ service }}</h5>
        <p class="card-text">Tarifa: {{ price }}</p>
        <p class="card-text">Tiempo de entrega: {{ deliveryTime }}</p>
        <button class="btn btn-primary" @click="$emit('select', { service, price, deliveryTime })">
          Seleccionar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShippingOptionCard',
  props: {
    service: String,
    price: String,
    deliveryTime: String,
  },
}
</script>
