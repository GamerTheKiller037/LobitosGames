//js/app.js

// Main Application - Entry Point
class AnimeStreamApp {
  constructor() {
    this.version = "1.0.0";
    this.isInitialized = false;
  }

  // Initialize the application
  async init() {
    try {
      console.log(`🎬 AnimeStream App v${this.version} - Initializing...`);

      // Wait for DOM to be ready
      if (document.readyState === "loading") {
        await new Promise((resolve) => {
          document.addEventListener("DOMContentLoaded", resolve);
        });
      }

      // Initialize core components
      this.initializeComponents();

      // Setup global event listeners
      this.setupGlobalEvents();

      // Initialize view manager (this will handle the rest)
      viewManager.init();

      // Mark as initialized
      this.isInitialized = true;

      console.log("✅ AnimeStream App initialized successfully");

      // Performance monitoring
      this.logPerformanceMetrics();
    } catch (error) {
      console.error("❌ Error initializing AnimeStream App:", error);
      this.handleInitializationError(error);
    }
  }

  // Initialize core components
  initializeComponents() {
    // Validate required elements exist
    this.validateRequiredElements();

    // Initialize Lucide icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
      console.log("🔧 Lucide icons initialized");
    } else {
      console.warn("⚠️ Lucide library not found");
    }
  }

  // Validate that required DOM elements exist
  validateRequiredElements() {
    const requiredElements = [
      "#home",
      "#animes",
      "#games",
      "#detailsModal",
      ".header",
      "#searchSection",
    ];

    const missing = requiredElements.filter(
      (selector) => !document.querySelector(selector)
    );

    if (missing.length > 0) {
      throw new Error(`Missing required elements: ${missing.join(", ")}`);
    }
  }

  // Setup global event listeners
  setupGlobalEvents() {
    // Global error handling
    window.addEventListener("error", (event) => {
      console.error("Global error:", event.error);
      this.logError(event.error);
    });

    // Unhandled promise rejection
    window.addEventListener("unhandledrejection", (event) => {
      console.error("Unhandled promise rejection:", event.reason);
      this.logError(event.reason);
    });

    // Page visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        this.onPageVisible();
      } else {
        this.onPageHidden();
      }
    });

    // Before page unload
    window.addEventListener("beforeunload", () => {
      this.cleanup();
    });

    // Resize handler (debounced)
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.handleResize();
      }, 250);
    });
  }

  // Handle page becoming visible
  onPageVisible() {
    console.log("📱 Page became visible");
    // Re-initialize icons if needed
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  // Handle page becoming hidden
  onPageHidden() {
    console.log("🔒 Page became hidden");
  }

  // Handle window resize
  handleResize() {
    console.log(
      "📐 Window resized to:",
      window.innerWidth + "x" + window.innerHeight
    );
    // Could trigger responsive adjustments here
  }

  // Handle initialization errors
  handleInitializationError(error) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "initialization-error";
    errorContainer.innerHTML = `
            <div class="error-content">
                <h2>Error de Inicialización</h2>
                <p>Ha ocurrido un error al cargar la aplicación.</p>
                <button onclick="location.reload()" class="retry-button">
                    Reintentar
                </button>
            </div>
        `;

    document.body.appendChild(errorContainer);
  }

  // Log performance metrics
  logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

      console.log("📊 Performance Metrics:");
      console.log(`   - Page Load Time: ${loadTime}ms`);
      console.log(`   - DOM Ready Time: ${domReady}ms`);
    }
  }

  // Log errors (could be sent to analytics service)
  logError(error) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    console.log("📝 Error logged:", errorData);
    // In production, you would send this to your error tracking service
  }

  // Cleanup on page unload
  cleanup() {
    console.log("🧹 Cleaning up resources...");
    // Clear any timeouts, intervals, or event listeners if needed
  }

  // Get app status
  getStatus() {
    return {
      version: this.version,
      initialized: this.isInitialized,
      currentSection: viewManager.getCurrentSection(),
      timestamp: new Date().toISOString(),
    };
  }

  // Enable debug mode
  enableDebug() {
    console.log("🐛 Debug mode enabled");

    // Add debug info to window
    window.animeStreamDebug = {
      app: this,
      viewManager: viewManager,
      animeController: animeController,
      gameController: gameController,
      animeModel: animeModel,
      gameModel: gameModel,
    };

    // Add debug styles
    document.body.classList.add("debug-mode");

    // Show debug info
    this.showDebugInfo();
  }

  // Show debug information
  showDebugInfo() {
    const debugPanel = document.createElement("div");
    debugPanel.id = "debug-panel";
    debugPanel.innerHTML = `
            <div class="debug-header">
                <h3>🐛 Debug Panel</h3>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="debug-content">
                <p><strong>Version:</strong> ${this.version}</p>
                <p><strong>Current Section:</strong> ${viewManager.getCurrentSection()}</p>
                <p><strong>Total Animes:</strong> ${
                  animeModel.getAllAnimes().length
                }</p>
                <p><strong>Total Games:</strong> ${
                  gameModel.getAllGames().length
                }</p>
                <button onclick="console.log(animeStreamDebug)">Log Debug Objects</button>
            </div>
        `;

    document.body.appendChild(debugPanel);
  }
}

// Create app instance
const app = new AnimeStreamApp();

// Global functions for HTML onclick handlers
function showSection(sectionName) {
  viewManager.showSection(sectionName);
}

function closeModal() {
  viewManager.closeModal();
}

// Initialize app when script loads
app.init().catch((error) => {
  console.error("Failed to initialize app:", error);
});

// Expose app globally for debugging
window.animeStreamApp = app;

// Add some global utility functions
window.animeStreamUtils = {
  // Search function accessible globally
  search: (term) => {
    const currentSection = viewManager.getCurrentSection();
    if (currentSection === "animes") {
      animeController.searchAnimes(term);
    } else if (currentSection === "games") {
      gameController.searchGames(term);
    }
  },

  // Get app statistics
  getStats: () => {
    return {
      animes: animeController.getAnimeStats(),
      games: gameController.getGameStats(),
      app: app.getStatus(),
    };
  },

  // Reset all filters
  resetAllFilters: () => {
    animeController.resetFilters();
    gameController.resetFilters();
    viewManager.resetSearch();
  },

  // Enable debug mode
  debug: () => {
    app.enableDebug();
  },
};

console.log(
  "🎬 AnimeStream utilities loaded. Use window.animeStreamUtils for debugging."
);
