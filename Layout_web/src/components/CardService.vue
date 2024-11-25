<!-- CardService.vue -->
<template>
  <div class="col-md-4 mb-4">
    <div class="card shadow">
      <img :src="image" class="card-img-top" :alt="title" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <RouterLink :to="quoteLink" class="btn btn-primary">Cotiza Ahora</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardService',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quoteLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card img {
  height: 200px;
  object-fit: cover;
}
</style>
