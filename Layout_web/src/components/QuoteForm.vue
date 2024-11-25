<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="sender" class="form-label">Remitente</label>
      <input v-model="form.sender" type="text" id="sender" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="recipient" class="form-label">Destinatario</label>
      <input v-model="form.recipient" type="text" id="recipient" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Dirección</label>
      <textarea v-model="form.address" id="address" class="form-control" required></textarea>
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Teléfono</label>
      <input v-model="form.phone" type="tel" id="phone" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-primary">Confirmar</button>
  </form>
</template>

<script>
export default {
  name: 'QuoteForm',
  data() {
    return {
      form: {
        sender: '',
        recipient: '',
        address: '',
        phone: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form)
    },
  },
}
</script>
