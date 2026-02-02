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
          Javiera Vio | Productora de Artes Escénicas
        </a>

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
              <a class="nav-link" href="/index.html">Inicio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/obras.html">Obras</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/experiencia.html">Experiencia</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/asesorias.html">Asesorías</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/contacto.html">Contacto</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  `;
}
function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="container py-4">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <p class="mb-0">
            © ${new Date().getFullYear()} Javiera Vio · Productora de Artes Escénicas
          </p>
        </div>

        <div class="col-md-6 text-center text-md-end">
          <a href="https://instagram.com/" target="_blank" class="footer-social me-3">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com/" target="_blank" class="footer-social me-3">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" class="footer-social">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}
