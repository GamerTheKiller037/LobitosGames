//js/views/viewManager.js

// View Manager - Presentation Layer
class ViewManager {
  constructor() {
    this.currentSection = "home";
    this.searchTimeout = null;
  }

  // Initialize the view manager
  init() {
    this.setupNavigation();
    this.setupSearch();
    this.setupModal();
    this.setupHeaderScroll();
    this.loadHomeContent();
    this.setupAccessibility();
  }

  // Setup navigation functionality
  setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const section = button.getAttribute("data-section");
        this.showSection(section);
      });
    });
  }

  // Show specific section
  showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => section.classList.remove("active"));

    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add("active");
      this.currentSection = sectionName;
    }

    // Update navigation buttons
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((btn) => btn.classList.remove("active"));

    const activeButton = document.querySelector(
      `[data-section="${sectionName}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }

    // Show/hide search section
    this.toggleSearchSection(sectionName);

    // Initialize section-specific content
    this.initializeSection(sectionName);

    // Reset search
    this.resetSearch();
  }

  // Toggle search section visibility
  toggleSearchSection(sectionName) {
    const searchSection = document.getElementById("searchSection");
    if (searchSection) {
      if (sectionName === "home") {
        searchSection.style.display = "none";
      } else {
        searchSection.style.display = "block";
      }
    }
  }

  // Initialize section-specific content
  initializeSection(sectionName) {
    switch (sectionName) {
      case "home":
        this.loadHomeContent();
        break;
      case "animes":
        animeController.init();
        break;
      case "games":
        gameController.init();
        break;
    }
  }

  // Load home section content
  loadHomeContent() {
    // Load popular animes
    const animeRowItems = document.querySelector(
      "#home .row:first-child .row-items"
    );
    if (animeRowItems) {
      animeRowItems.innerHTML = animeController.renderPopularAnimes();
    }

    // Load featured games
    const gameRowItems = document.querySelector(
      "#home .row:last-child .row-items"
    );
    if (gameRowItems) {
      gameRowItems.innerHTML = gameController.renderFeaturedGames();
    }

    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Setup search functionality
  setupSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.querySelector(".search-btn");

    if (searchInput) {
      // Debounced search
      searchInput.addEventListener("input", (e) => {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.handleSearch(e.target.value);
        }, 300);
      });

      // Search on Enter
      searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          clearTimeout(this.searchTimeout);
          this.handleSearch(e.target.value);
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput ? searchInput.value : "";
        this.handleSearch(searchTerm);
      });
    }
  }

  // Handle search functionality
  handleSearch(searchTerm) {
    if (this.currentSection === "animes") {
      animeController.searchAnimes(searchTerm);
    } else if (this.currentSection === "games") {
      gameController.searchGames(searchTerm);
    }
  }

  // Reset search
  resetSearch() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.value = "";
    }
  }

  // Setup modal functionality
  setupModal() {
    const modal = document.getElementById("detailsModal");

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        this.closeModal();
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "block") {
        this.closeModal();
      }
    });

    // Close button
    const closeButton = document.querySelector(".modal-close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.closeModal();
      });
    }
  }

  // Close modal
  closeModal() {
    const modal = document.getElementById("detailsModal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  // Setup header scroll effect
  setupHeaderScroll() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Setup accessibility features
  setupAccessibility() {
    // Add ARIA labels to buttons without them
    const buttons = document.querySelectorAll("button:not([aria-label])");
    buttons.forEach((button) => {
      const text = button.textContent || button.innerHTML;
      if (text && !button.getAttribute("aria-label")) {
        button.setAttribute("aria-label", text.replace(/<[^>]*>/g, "").trim());
      }
    });

    // Add keyboard navigation for cards
    const catalogItems = document.querySelectorAll(".catalog-item, .item-card");
    catalogItems.forEach((item) => {
      if (!item.getAttribute("tabindex")) {
        item.setAttribute("tabindex", "0");
      }

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  // Show loading state
  showLoading(container) {
    if (container) {
      container.innerHTML = `
                <div class="loading-state">
                    <div class="loading"></div>
                    <p>Cargando contenido...</p>
                </div>
            `;
    }
  }

  // Show error state
  showError(container, message = "Error al cargar el contenido") {
    if (container) {
      container.innerHTML = `
                <div class="error-state">
                    <i data-lucide="alert-circle" class="error-icon"></i>
                    <p>${message}</p>
                    <button class="retry-btn" onclick="location.reload()">
                        <i data-lucide="refresh-cw"></i> Reintentar
                    </button>
                </div>
            `;

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    }
  }

  // Update page title based on current section
  updatePageTitle(section) {
    const titles = {
      home: "AnimeStream - Catálogo de Animes y Videojuegos",
      animes: "Animes - AnimeStream",
      games: "Videojuegos - AnimeStream",
    };

    document.title = titles[section] || titles.home;
  }

  // Get current section
  getCurrentSection() {
    return this.currentSection;
  }

  // Smooth scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Show notification (for future use)
  showNotification(message, type = "info", duration = 3000) {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <i data-lucide="${
              type === "success"
                ? "check-circle"
                : type === "error"
                ? "x-circle"
                : "info"
            }"></i>
            <span>${message}</span>
        `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, duration);

    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }
}

// Create and export instance
const viewManager = new ViewManager();
