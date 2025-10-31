// js/controllers/gameController.js

class GameController {
  constructor() {
    this.model = gameModel;
    this.currentFilter = "";
  }

  async init() {
    await this.model.loadGames();
    this.renderGameGrid();
    this.setupFilters();
  }

  renderGameGrid(games = null) {
    const grid = document.getElementById("gameGrid");
    if (!grid) return;

    const gamesToShow = games || this.model.getAllGames();

    if (gamesToShow.length === 0) {
      grid.innerHTML =
        '<p class="error-message">No se encontraron videojuegos.</p>';
      return;
    }

    grid.innerHTML = gamesToShow
      .map(
        (game) => `
            <div class="catalog-item" onclick="gameController.showDetails(${game.id})">
                <img src="${game.image}" alt="${game.title}" class="item-poster">
                <div class="item-info">
                    <h3>${game.title}</h3>
                    <div class="item-meta">
                        <span class="rating">⭐ ${game.rating}</span>
                        <span class="year">${game.year}</span>
                    </div>
                    <p class="genre">${game.genre}</p>
                    <button class="play-btn">Ver detalles</button>
                </div>
            </div>
        `
      )
      .join("");
  }

  setupFilters() {
    const genreFilter = document.getElementById("gameGenre");
    if (genreFilter) {
      genreFilter.addEventListener("change", (e) => {
        this.filterByGenre(e.target.value);
      });
    }
  }

  filterByGenre(genre) {
    this.currentFilter = genre;
    const filtered = this.model.getGamesByGenre(genre);
    this.renderGameGrid(filtered);
  }

  search(searchTerm) {
    let results = this.model.searchGames(searchTerm);
    if (this.currentFilter) {
      results = results.filter((game) =>
        game.genre.toLowerCase().includes(this.currentFilter.toLowerCase())
      );
    }
    this.renderGameGrid(results);
  }

  showDetails(id) {
    const game = this.model.getGameById(id);
    if (!game) return;

    const modal = document.getElementById("detailsModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
            <div class="modal-hero">
                <h2 id="modalTitle">${game.title}</h2>
                <div class="modal-meta">
                    <span class="modal-rating">⭐ ${game.rating}</span>
                    <span class="modal-year">${game.year}</span>
                    <span class="modal-genre">${game.genre}</span>
                </div>
            </div>
            <div class="modal-details">
                <p><strong>Plataformas:</strong> ${game.platform}</p>
                <p><strong>Sinopsis:</strong></p>
                <p>${game.synopsis}</p>
            </div>
        `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  getFeaturedGames() {
    return this.model.getAllGames().slice(0, 4);
  }
}

const gameController = new GameController();
