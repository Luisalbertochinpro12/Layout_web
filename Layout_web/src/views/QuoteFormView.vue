<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Cotiza tu Envío</h2>
    <form @submit.prevent="submitForm">
      <DimensionSelector
        v-model="dimensions"
        :custom-dimensions="customDimensions"
        @update-custom-dimensions="handleCustomDimensions"
      />

      <div class="mb-3">
        <label for="weight" class="form-label">Peso (kg)</label>
        <input
          type="number"
          id="weight"
          class="form-control"
          v-model="weight"
          min="0.1"
          step="0.1"
          required
        />
      </div>

      <div class="mb-3">
        <label for="origin" class="form-label">Código Postal de Origen</label>
        <input type="text" id="origin" class="form-control" v-model="originZip" required />
      </div>

      <div class="mb-3">
        <label for="destination" class="form-label">Código Postal de Destino</label>
        <input
          type="text"
          id="destination"
          class="form-control"
          v-model="destinationZip"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">Cotizar</button>
    </form>
  </div>
</template>

<script>
import DimensionSelector from '../components/DimensionSelector.vue'

export default {
  components: {
    DimensionSelector,
  },
  data() {
    return {
      dimensions: null,
      customDimensions: { length: '', width: '', height: '' },
      weight: '',
      originZip: '',
      destinationZip: '',
    }
  },
  methods: {
    handleCustomDimensions(customDimensions) {
      this.customDimensions = customDimensions
    },
    submitForm() {
      const formData = {
        dimensions: this.dimensions,
        customDimensions: this.customDimensions,
        weight: this.weight,
        originZip: this.originZip,
        destinationZip: this.destinationZip,
      }

      console.log(formData)

      this.$router.push({
        name: 'QuoteOptions',
        query: formData,
      })
    },
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
}

h2 {
  font-size: 1.8rem;
}

button {
  margin-top: 1.5rem;
}
</style>
