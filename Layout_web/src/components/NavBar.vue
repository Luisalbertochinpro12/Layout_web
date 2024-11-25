<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Logo -->
    <RouterLink to="/" class="navbar-brand">
      <img src="" alt="Logo" height="40" />
    </RouterLink>

    <!-- Barra de navegación -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Elementos de la barra de navegación -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <!-- Barra de búsqueda -->
      <div class="input-group">
        <input
          type="text"
          class="form-control form-control-sm search-input"
          placeholder="Buscar..."
        />
        <button class="btn btn-outline-light" type="button">
          <i class="bi bi-search"></i>
        </button>
      </div>

      <!-- Botones -->
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <RouterLink to="/contact" class="btn btn-outline-light mx-2">Contáctanos</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/formbasic" class="btn btn-outline-light mx-1">Envio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/profile" class="btn btn-outline-light mx-2">Perfil</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.search-input {
  height: 30px;
  font-size: 14px;
  width: 200px; /* Ajusta el ancho según lo que necesites */
}

.input-group .btn {
  height: 30px;
  font-size: 14px;
  padding: 0 10px;
  border-radius: 0; /* Opcional, para evitar bordes redondeados */
}
</style>
