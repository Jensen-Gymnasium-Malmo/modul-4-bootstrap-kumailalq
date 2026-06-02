 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil
 document.addEventListener("DOMContentLoaded", function () {

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">

        <a class="navbar-brand" href="index.html">My Favorites</a>

        <button class="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav ms-auto">

            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"
                 href="#"
                 role="button"
                 data-bs-toggle="dropdown">
                Movies
              </a>

              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="movies.html">All Movies</a></li>
                <li><a class="dropdown-item" href="#">2000s</a></li>
                <li><a class="dropdown-item" href="#">1900s</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="series.html">Series</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="music.html">Music</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  `;

  footer.innerHTML = `
    <div class="bg-dark text-white text-center py-3 mt-5">
      <p class="mb-0">© 2026 My Favorites</p>
    </div>
  `;
});