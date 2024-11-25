<template>
  <div>
    <label for="dimensions" class="form-label">Dimensiones</label>
    <select id="dimensions" class="form-select" v-model="selected" @change="handleChange">
      <option disabled value="">Selecciona una opción</option>
      <option value="pequeñas">Pequeñas (30x20x10 cm)</option>
      <option value="medianas">Medianas (50x40x30 cm)</option>
      <option value="grandes">Grandes (100x80x50 cm)</option>
      <option value="otros">Otros</option>
    </select>

    <!-- Inputs para dimensiones personalizadas -->
    <div v-if="isCustom" class="mt-3">
      <div class="mb-3">
        <label for="length" class="form-label">Longitud (cm)</label>
        <input
          type="number"
          id="length"
          class="form-control"
          v-model="customDimensions.length"
          min="1"
          required
        />
      </div>
      <div class="mb-3">
        <label for="width" class="form-label">Ancho (cm)</label>
        <input
          type="number"
          id="width"
          class="form-control"
          v-model="customDimensions.width"
          min="1"
          required
        />
      </div>
      <div class="mb-3">
        <label for="height" class="form-label">Altura (cm)</label>
        <input
          type="number"
          id="height"
          class="form-control"
          v-model="customDimensions.height"
          min="1"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String, // Vinculación bidireccional del dropdown
    customDimensions: Object, // Dimensiones personalizadas
  },
  emits: ['update:modelValue', 'update-custom-dimensions'],
  data() {
    return {
      selected: this.modelValue || '',
      isCustom: false,
      customDimensions: {
        ...this.customDimensions,
      },
    }
  },
  methods: {
    handleChange() {
      this.isCustom = this.selected === 'otros'
      this.$emit('update:modelValue', this.selected)
      if (!this.isCustom) {
        this.$emit('update-custom-dimensions', {
          length: '',
          width: '',
          height: '',
        })
      }
    },
  },
  watch: {
    customDimensions: {
      deep: true,
      handler(newValue) {
        if (this.isCustom) {
          this.$emit('update-custom-dimensions', newValue)
        }
      },
    },
  },
}
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>
