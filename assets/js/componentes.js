document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
});

function renderHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">
        </a>
        Javiera Vio | Productora Escénica

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#primary-navigation"
          aria-controls="primary-navigation"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="primary-navigation">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/obras.html">Obras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/experiencia.html">Experiencia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/asesorias.html>Asesorías</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
    const footer = document.querySelector("footer");
    if (!footer) return;

    footer.innerHTML = `
    <div class="container text-center">
      <small class="text-muted">
        © Productora de Artes Escénicas
      </small>
    </div>
  `;
}
