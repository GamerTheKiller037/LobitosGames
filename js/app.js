// js/app.js

class App {
  constructor() {
    this.version = "1.0.0";
  }

  async init() {
    try {
      if (document.readyState === "loading") {
        await new Promise((resolve) => {
          document.addEventListener("DOMContentLoaded", resolve);
        });
      }

      viewManager.init();
      this.setupScrollEffect();

      console.log(`LobitosGames v${this.version} initialized`);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  }

  setupScrollEffect() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

const app = new App();
app.init();
