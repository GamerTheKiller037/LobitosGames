// js/controllers/animeController.js

class AnimeController {
  constructor() {
    this.model = animeModel;
    this.currentFilter = "";
  }

  async init() {
    await this.model.loadAnimes();
    this.renderAnimeGrid();
    this.setupFilters();
  }

  renderAnimeGrid(animes = null) {
    const grid = document.getElementById("animeGrid");
    if (!grid) return;

    const animesToShow = animes || this.model.getAllAnimes();

    if (animesToShow.length === 0) {
      grid.innerHTML = '<p class="error-message">No se encontraron animes.</p>';
      return;
    }

    grid.innerHTML = animesToShow
      .map(
        (anime) => `
            <div class="catalog-item" onclick="animeController.showDetails(${anime.id})">
                <img src="${anime.image}" alt="${anime.title}" class="item-poster">
                <div class="item-info">
                    <h3>${anime.title}</h3>
                    <div class="item-meta">
                        <span class="rating">⭐ ${anime.rating}</span>
                        <span class="year">${anime.year}</span>
                    </div>
                    <p class="genre">${anime.genre}</p>
                    <button class="play-btn">Ver detalles</button>
                </div>
            </div>
        `
      )
      .join("");
  }

  setupFilters() {
    const genreFilter = document.getElementById("animeGenre");
    if (genreFilter) {
      genreFilter.addEventListener("change", (e) => {
        this.filterByGenre(e.target.value);
      });
    }
  }

  filterByGenre(genre) {
    this.currentFilter = genre;
    const filtered = this.model.getAnimesByGenre(genre);
    this.renderAnimeGrid(filtered);
  }

  search(searchTerm) {
    let results = this.model.searchAnimes(searchTerm);
    if (this.currentFilter) {
      results = results.filter((anime) =>
        anime.genre.toLowerCase().includes(this.currentFilter.toLowerCase())
      );
    }
    this.renderAnimeGrid(results);
  }

  showDetails(id) {
    const anime = this.model.getAnimeById(id);
    if (!anime) return;

    const modal = document.getElementById("detailsModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
            <div class="modal-hero">
                <h2 id="modalTitle">${anime.title}</h2>
                <div class="modal-meta">
                    <span class="modal-rating">⭐ ${anime.rating}</span>
                    <span class="modal-year">${anime.year}</span>
                    <span class="modal-genre">${anime.genre}</span>
                </div>
            </div>
            <div class="modal-details">
                <p><strong>Episodios:</strong> ${anime.episodes}</p>
                <p><strong>Sinopsis:</strong></p>
                <p>${anime.synopsis}</p>
            </div>
        `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  getFeaturedAnimes() {
    return this.model.getAllAnimes().slice(0, 4);
  }
}

const animeController = new AnimeController();
