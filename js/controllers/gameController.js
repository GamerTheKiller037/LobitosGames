//js/controllers/gameController.js

// Game Controller - Business Logic Layer
class GameController {
  constructor() {
    this.model = gameModel;
    this.currentFilter = "all";
  }

  // Initialize games section
  init() {
    this.renderGameGrid();
    this.setupGameFilters();
  }

  // Render game grid
  renderGameGrid(games = null) {
    const gameGrid = document.getElementById("gameGrid");
    if (!gameGrid) return;

    const gamesToShow = games || this.model.getAllGames();

    gameGrid.innerHTML = gamesToShow
      .map(
        (game) => `
            <div class="catalog-item" data-id="${game.id}">
                <img src="${game.image}" alt="${game.title}" class="item-poster">
                <div class="item-info">
                    <h3>${game.title}</h3>
                    <div class="item-meta">
                        <span class="rating">⭐ ${game.rating}</span>
                        <span class="year">${game.year}</span>
                    </div>
                    <p class="genre">${game.genre}</p>
                    <button class="play-btn" onclick="gameController.showGameDetails(${game.id})">
                        <i data-lucide="play" class="btn-icon"></i> Ver detalles
                    </button>
                </div>
            </div>
        `
      )
      .join("");

    // Re-initialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Setup game filters
  setupGameFilters() {
    const gameGenreFilter = document.getElementById("gameGenre");
    if (gameGenreFilter) {
      gameGenreFilter.addEventListener("change", (e) => {
        this.filterGames(e.target.value);
      });
    }
  }

  // Filter games by genre
  filterGames(genre) {
    this.currentFilter = genre;
    let filteredGames;

    if (genre === "all") {
      filteredGames = this.model.getAllGames();
    } else {
      filteredGames = this.model.getGamesByGenre(genre);
    }

    this.renderGameGrid(filteredGames);
    this.animateItems();
  }

  // Search games
  searchGames(searchTerm) {
    let results;

    if (!searchTerm || searchTerm.trim() === "") {
      // If no search term, apply current filter
      results =
        this.currentFilter === "all"
          ? this.model.getAllGames()
          : this.model.getGamesByGenre(this.currentFilter);
    } else {
      // Search and then apply current filter if needed
      results = this.model.searchGames(searchTerm);
      if (this.currentFilter !== "all") {
        results = results.filter((game) =>
          game.genre.toLowerCase().includes(this.currentFilter.toLowerCase())
        );
      }
    }

    this.renderGameGrid(results);
    this.animateItems();
  }

  // Show game details in modal
  showGameDetails(id) {
    const game = this.model.getGameById(id);
    if (!game) return;

    const modal = document.getElementById("detailsModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    const contentHtml = `
            <div class="modal-hero">
                <h2>${game.title}</h2>
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

    modalBody.innerHTML = contentHtml;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Get featured games for home page
  getFeaturedGames() {
    return this.model.getFeaturedGames();
  }

  // Render featured games in home section
  renderFeaturedGames() {
    const featuredGames = this.getFeaturedGames();
    return featuredGames
      .map(
        (game) => `
            <div class="item-card" onclick="gameController.showGameDetails(${game.id})">
                <img src="${game.image}" alt="${game.title}" class="item-image">
                <div class="item-overlay">
                    <h3>${game.title}</h3>
                    <p>${game.genre}</p>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Animate items when they appear
  animateItems() {
    const items = document.querySelectorAll("#gameGrid .catalog-item");
    items.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";

      setTimeout(() => {
        item.style.transition = "all 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, index * 100);
    });
  }

  // Get game statistics (for future use)
  getGameStats() {
    const allGames = this.model.getAllGames();
    return {
      total: allGames.length,
      averageRating: (
        allGames.reduce((sum, game) => sum + parseFloat(game.rating), 0) /
        allGames.length
      ).toFixed(1),
      genres: [...new Set(allGames.map((game) => game.genre))].length,
      highRated: allGames.filter((game) => parseFloat(game.rating) >= 9.0)
        .length,
      platforms: [
        ...new Set(allGames.flatMap((game) => game.platform.split(", "))),
      ].length,
    };
  }

  // Reset filters
  resetFilters() {
    this.currentFilter = "all";
    const gameGenreFilter = document.getElementById("gameGenre");
    if (gameGenreFilter) {
      gameGenreFilter.value = "all";
    }
    this.renderGameGrid();
  }

  // Get games by specific criteria
  getGamesByCriteria(criteria) {
    const allGames = this.model.getAllGames();

    switch (criteria) {
      case "newest":
        return allGames
          .sort((a, b) => parseInt(b.year) - parseInt(a.year))
          .slice(0, 8);
      case "topRated":
        return allGames
          .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
          .slice(0, 8);
      case "popular":
        return this.getFeaturedGames();
      default:
        return allGames.slice(0, 8);
    }
  }
}

// Create and export instance
const gameController = new GameController();
