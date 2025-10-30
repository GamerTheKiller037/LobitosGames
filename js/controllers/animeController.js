//js/controllers/animeController.js

// Anime Controller - Business Logic Layer
class AnimeController {
  constructor() {
    this.model = animeModel;
    this.currentFilter = "all";
  }

  // Initialize anime section
  init() {
    this.renderAnimeGrid();
    this.setupAnimeFilters();
  }

  // Render anime grid
  renderAnimeGrid(animes = null) {
    const animeGrid = document.getElementById("animeGrid");
    if (!animeGrid) return;

    const animesToShow = animes || this.model.getAllAnimes();

    animeGrid.innerHTML = animesToShow
      .map(
        (anime) => `
            <div class="catalog-item" data-id="${anime.id}">
                <img src="${anime.image}" alt="${anime.title}" class="item-poster">
                <div class="item-info">
                    <h3>${anime.title}</h3>
                    <div class="item-meta">
                        <span class="rating">⭐ ${anime.rating}</span>
                        <span class="year">${anime.year}</span>
                    </div>
                    <p class="genre">${anime.genre}</p>
                    <button class="play-btn" onclick="animeController.showAnimeDetails(${anime.id})">
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

  // Setup anime filters
  setupAnimeFilters() {
    const animeGenreFilter = document.getElementById("animeGenre");
    if (animeGenreFilter) {
      animeGenreFilter.addEventListener("change", (e) => {
        this.filterAnimes(e.target.value);
      });
    }
  }

  // Filter animes by genre
  filterAnimes(genre) {
    this.currentFilter = genre;
    let filteredAnimes;

    if (genre === "all") {
      filteredAnimes = this.model.getAllAnimes();
    } else {
      filteredAnimes = this.model.getAnimesByGenre(genre);
    }

    this.renderAnimeGrid(filteredAnimes);
    this.animateItems();
  }

  // Search animes
  searchAnimes(searchTerm) {
    let results;

    if (!searchTerm || searchTerm.trim() === "") {
      // If no search term, apply current filter
      results =
        this.currentFilter === "all"
          ? this.model.getAllAnimes()
          : this.model.getAnimesByGenre(this.currentFilter);
    } else {
      // Search and then apply current filter if needed
      results = this.model.searchAnimes(searchTerm);
      if (this.currentFilter !== "all") {
        results = results.filter((anime) =>
          anime.genre.toLowerCase().includes(this.currentFilter.toLowerCase())
        );
      }
    }

    this.renderAnimeGrid(results);
    this.animateItems();
  }

  // Show anime details in modal
  showAnimeDetails(id) {
    const anime = this.model.getAnimeById(id);
    if (!anime) return;

    const modal = document.getElementById("detailsModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    const contentHtml = `
            <div class="modal-hero">
                <h2>${anime.title}</h2>
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

    modalBody.innerHTML = contentHtml;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Get popular animes for home page
  getPopularAnimes() {
    return this.model.getPopularAnimes();
  }

  // Render popular animes in home section
  renderPopularAnimes() {
    const popularAnimes = this.getPopularAnimes();
    return popularAnimes
      .map(
        (anime) => `
            <div class="item-card" onclick="animeController.showAnimeDetails(${anime.id})">
                <img src="${anime.image}" alt="${anime.title}" class="item-image">
                <div class="item-overlay">
                    <h3>${anime.title}</h3>
                    <p>${anime.genre}</p>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Animate items when they appear
  animateItems() {
    const items = document.querySelectorAll("#animeGrid .catalog-item");
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

  // Get anime statistics (for future use)
  getAnimeStats() {
    const allAnimes = this.model.getAllAnimes();
    return {
      total: allAnimes.length,
      averageRating: (
        allAnimes.reduce((sum, anime) => sum + parseFloat(anime.rating), 0) /
        allAnimes.length
      ).toFixed(1),
      genres: [...new Set(allAnimes.map((anime) => anime.genre))].length,
      highRated: allAnimes.filter((anime) => parseFloat(anime.rating) >= 9.0)
        .length,
    };
  }

  // Reset filters
  resetFilters() {
    this.currentFilter = "all";
    const animeGenreFilter = document.getElementById("animeGenre");
    if (animeGenreFilter) {
      animeGenreFilter.value = "all";
    }
    this.renderAnimeGrid();
  }
}

// Create and export instance
const animeController = new AnimeController();
