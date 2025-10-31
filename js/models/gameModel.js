// js/models/gameModel.js

class GameModel {
  constructor() {
    this.games = [];
    this.loadGames();
  }

  async loadGames() {
    try {
      const response = await fetch("data/games.json");
      this.games = await response.json();
    } catch (error) {
      console.error("Error loading games:", error);
      this.games = this.getFallbackData();
    }
  }

  getFallbackData() {
    return [
      {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        year: "2015",
        platform: "PC, PlayStation, Xbox, Nintendo Switch",
        genre: "RPG, Aventura",
        rating: "9.3",
        synopsis:
          "Geralt de Rivia busca a su hija adoptiva Ciri mientras navega por un mundo de fantasía lleno de monstruos, intrigas políticas y decisiones morales complejas.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=The+Witcher+3",
      },
      {
        id: 2,
        title: "Ghost of Tsushima",
        year: "2020",
        platform: "PlayStation 4, PlayStation 5",
        genre: "Acción, Aventura",
        rating: "8.7",
        synopsis:
          "Jin Sakai debe abandonar las tradiciones samurái y forjar un nuevo camino como El Fantasma para defender la isla de Tsushima de la invasión mongol.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Ghost+of+Tsushima",
      },
      {
        id: 3,
        title: "FIFA 24",
        year: "2023",
        platform: "PC, PlayStation, Xbox, Nintendo Switch",
        genre: "Deportes",
        rating: "7.8",
        synopsis:
          "La última entrega de la famosa serie de simulación de fútbol de EA Sports, con equipos actualizados, nuevos modos de juego y mecánicas mejoradas.",
        image: "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=FIFA+24",
      },
      {
        id: 4,
        title: "Elden Ring",
        year: "2022",
        platform: "PC, PlayStation, Xbox",
        genre: "RPG, Acción",
        rating: "9.1",
        synopsis:
          "Aventúrate en las Tierras Intermedias, un mundo de fantasía oscura creado por Hidetaka Miyazaki y George R.R. Martin.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Elden+Ring",
      },
    ];
  }

  getAllGames() {
    return this.games;
  }

  getGameById(id) {
    return this.games.find((game) => game.id === parseInt(id));
  }

  getGamesByGenre(genre) {
    if (!genre) return this.games;
    return this.games.filter((game) =>
      game.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  searchGames(searchTerm) {
    if (!searchTerm) return this.games;
    const term = searchTerm.toLowerCase();
    return this.games.filter(
      (game) =>
        game.title.toLowerCase().includes(term) ||
        game.genre.toLowerCase().includes(term) ||
        game.platform.toLowerCase().includes(term)
    );
  }
}

const gameModel = new GameModel();
