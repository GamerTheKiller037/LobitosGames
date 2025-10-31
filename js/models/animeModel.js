// js/models/animeModel.js

class AnimeModel {
  constructor() {
    this.animes = [];
    this.loadAnimes();
  }

  async loadAnimes() {
    try {
      const response = await fetch("data/animes.json");
      this.animes = await response.json();
    } catch (error) {
      console.error("Error loading animes:", error);
      this.animes = this.getFallbackData();
    }
  }

  getFallbackData() {
    return [
      {
        id: 1,
        title: "Attack on Titan",
        year: "2013",
        episodes: "87 episodios",
        genre: "Acción, Drama",
        rating: "9.0",
        synopsis:
          "La humanidad se encuentra al borde de la extinción debido a unos gigantes humanoides llamados titanes. Eren Yeager se une al Cuerpo de Exploración para luchar contra estos monstruos.",
        image:
          "https://via.placeholder.com/280x200/E50914/FFFFFF?text=Attack+on+Titan",
      },
      {
        id: 2,
        title: "One Piece",
        year: "1999",
        episodes: "1000+ episodios",
        genre: "Aventura, Acción",
        rating: "8.8",
        synopsis:
          "Monkey D. Luffy explora el Grand Line con su tripulación de piratas en busca del tesoro más grande del mundo conocido como One Piece.",
        image:
          "https://via.placeholder.com/280x200/E50914/FFFFFF?text=One+Piece",
      },
      {
        id: 3,
        title: "Demon Slayer",
        year: "2019",
        episodes: "44 episodios",
        genre: "Acción, Fantasía",
        rating: "8.7",
        synopsis:
          "Tanjiro Kamado busca una cura para su hermana convertida en demonio y busca venganza contra el demonio que mató al resto de su familia.",
        image:
          "https://via.placeholder.com/280x200/E50914/FFFFFF?text=Demon+Slayer",
      },
      {
        id: 4,
        title: "Death Note",
        year: "2006",
        episodes: "37 episodios",
        genre: "Drama, Thriller",
        rating: "9.0",
        synopsis:
          "Light Yagami encuentra un cuaderno sobrenatural que le permite matar a cualquier persona escribiendo su nombre. Decide usarlo para crear un mundo sin crimen.",
        image:
          "https://via.placeholder.com/280x200/E50914/FFFFFF?text=Death+Note",
      },
    ];
  }

  getAllAnimes() {
    return this.animes;
  }

  getAnimeById(id) {
    return this.animes.find((anime) => anime.id === parseInt(id));
  }

  getAnimesByGenre(genre) {
    if (!genre) return this.animes;
    return this.animes.filter((anime) =>
      anime.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  searchAnimes(searchTerm) {
    if (!searchTerm) return this.animes;
    const term = searchTerm.toLowerCase();
    return this.animes.filter(
      (anime) =>
        anime.title.toLowerCase().includes(term) ||
        anime.genre.toLowerCase().includes(term)
    );
  }
}

const animeModel = new AnimeModel();
