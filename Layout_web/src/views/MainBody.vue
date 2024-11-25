<template>
  <div>
    <!-- Banner Principal -->
    <header class="bg-dark text-white text-center py-5">
      <div class="container">
        <h1>Bienvenido a Nuestro Servicio de Paquetería</h1>
        <p>Encuentra la mejor cotización de envíos con los principales socios de paquetería.</p>
        <RouterLink to="/formbasic" class="btn btn-light btn-lg">Obten tu cotización</RouterLink>
      </div>
    </header>

    <section class="container my-5">
      <h2 class="text-center mb-4">Nuestros Servicios</h2>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img
              src="https://th.bing.com/th/id/OIP.zwxzI-L9sfveZGd6eK0icAHaFj?rs=1&pid=ImgDetMain"
              class="card-img-top"
              alt="DHL"
            />
            <div class="card-body">
              <h5 class="card-title">Envíos con DHL</h5>
              <p class="card-text">
                La mejor opción para envíos internacionales rápidos y seguros.
              </p>
              <RouterLink to="/formbasic" class="btn btn-primary">Cotiza Ahora</RouterLink>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img
              src="https://th.bing.com/th/id/OIP.j4IdZiU0059oX5oCKDRH4AHaHa?rs=1&pid=ImgDetMain"
              class="card-img-top"
              alt="Estafeta"
            />
            <div class="card-body">
              <h5 class="card-title">Envíos con Estafeta</h5>
              <p class="card-text">Servicio nacional confiable para paquetes pequeños y grandes.</p>
              <RouterLink to="/formbasic" class="btn btn-primary">Cotiza Ahora</RouterLink>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <img
              src="https://d2sz1kgdtrlf1n.cloudfront.net/task_images/q8IC1594992040917-LogoMandadosOFICIALMONTADOTRANSPARENTE.png"
              class="card-img-top"
              alt="FedEx"
            />
            <div class="card-body">
              <h5 class="card-title">Envíos con Mandaditos</h5>
              <p class="card-text">Soluciones de envío flexibles para negocios y particulares.</p>
              <RouterLink to="/formbasic" class="btn btn-primary">Cotiza Ahora</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">¿Por qué elegirnos?</h2>
        <div class="row text-center">
          <div class="col-md-4">
            <i class="bi bi-truck font-size-2x"></i>
            <h4>Rápido y Eficiente</h4>
            <p>Compara diferentes servicios y elige el que mejor se ajuste a tus necesidades.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-shield-lock font-size-2x"></i>
            <h4>Seguridad</h4>
            <p>Trabajamos solo con los socios más confiables y seguros en el mercado.</p>
          </div>
          <div class="col-md-4">
            <i class="bi bi-coin font-size-2x"></i>
            <h4>Mejores Precios</h4>
            <p>Obtén las mejores tarifas comparando con múltiples proveedores.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style scoped>
.card img {
  height: 200px;
  object-fit: cover;
}

.font-size-2x {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .card img {
    height: 150px;
  }
}
</style>
