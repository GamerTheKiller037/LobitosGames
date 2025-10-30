//js/models/animeModel.js

// Anime Model - Data Layer
class AnimeModel {
  constructor() {
    this.animes = [
      {
        id: 1,
        title: "Attack on Titan",
        year: "2013",
        episodes: "87 episodios",
        genre: "Acción • Drama",
        rating: "9.0",
        synopsis:
          "La humanidad se encuentra al borde de la extinción debido a unos gigantes humanoides llamados titanes. Eren Yeager se une al Cuerpo de Exploración para luchar contra estos monstruos y descubrir los secretos que se ocultan en el sótano de su casa.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 2,
        title: "One Piece",
        year: "1999",
        episodes: "1000+ episodios",
        genre: "Aventura • Acción",
        rating: "8.8",
        synopsis:
          'Monkey D. Luffy explora el Grand Line con su diversa tripulación de piratas, los Piratas del Sombrero de Paja, en busca del tesoro más grande del mundo conocido como "One Piece" para convertirse en el próximo Rey de los Piratas.',
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 3,
        title: "Demon Slayer",
        year: "2019",
        episodes: "44 episodios",
        genre: "Acción • Fantasía",
        rating: "8.7",
        synopsis:
          "Tanjiro Kamado busca una cura para su hermana convertida en demonio y busca venganza contra el demonio que mató al resto de su familia. Se une al Demon Slayer Corps para completar su misión.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 4,
        title: "Death Note",
        year: "2006",
        episodes: "37 episodios",
        genre: "Drama • Thriller",
        rating: "9.0",
        synopsis:
          'Light Yagami, un estudiante de secundaria, encuentra un cuaderno sobrenatural llamado "Death Note" que le permite matar a cualquier persona escribiendo su nombre. Decide usarlo para crear un mundo sin crimen.',
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 5,
        title: "Naruto",
        year: "2002",
        episodes: "720 episodios",
        genre: "Acción • Aventura",
        rating: "8.4",
        synopsis:
          "Naruto Uzumaki, un joven ninja hiperactivo, busca reconocimiento de sus compañeros y sueña con convertirse en Hokage, el líder de su aldea.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 6,
        title: "Dragon Ball Z",
        year: "1989",
        episodes: "291 episodios",
        genre: "Acción • Aventura",
        rating: "8.7",
        synopsis:
          "Goku y sus amigos defienden la Tierra de poderosos enemigos extraterrestres y amenazas cósmicas en batallas épicas.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 7,
        title: "My Hero Academia",
        year: "2016",
        episodes: "138 episodios",
        genre: "Acción • Superhéroes",
        rating: "8.5",
        synopsis:
          "En un mundo donde casi todos tienen superpoderes, Izuku Midoriya lucha por convertirse en héroe a pesar de nacer sin poderes.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 8,
        title: "Fullmetal Alchemist Brotherhood",
        year: "2009",
        episodes: "64 episodios",
        genre: "Aventura • Drama",
        rating: "9.1",
        synopsis:
          "Los hermanos Edward y Alphonse Elric buscan la Piedra Filosofal para restaurar sus cuerpos después de un intento fallido de alquimia.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 9,
        title: "Hunter x Hunter",
        year: "2011",
        episodes: "148 episodios",
        genre: "Aventura • Acción",
        rating: "9.0",
        synopsis:
          "Gon Freecss busca a su padre Ging, un legendario Hunter, mientras se convierte en Hunter y hace amigos en el camino.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 10,
        title: "One Punch Man",
        year: "2015",
        episodes: "24 episodios",
        genre: "Acción • Comedia",
        rating: "8.8",
        synopsis:
          "Saitama es un superhéroe que puede derrotar a cualquier enemigo con un solo golpe, pero lucha contra el aburrimiento de ser invencible.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 11,
        title: "Jujutsu Kaisen",
        year: "2020",
        episodes: "24 episodios",
        genre: "Acción • Sobrenatural",
        rating: "8.6",
        synopsis:
          "Yuji Itadori se une a una sociedad secreta de hechiceros para matar a una poderosa Maldición llamada Ryomen Sukuna.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 12,
        title: "Tokyo Ghoul",
        year: "2014",
        episodes: "48 episodios",
        genre: "Acción • Horror",
        rating: "7.8",
        synopsis:
          "Ken Kaneki se convierte en medio-ghoul después de un encuentro mortal y debe adaptarse a su nueva vida.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 13,
        title: "Mob Psycho 100",
        year: "2016",
        episodes: "37 episodios",
        genre: "Comedia • Sobrenatural",
        rating: "8.9",
        synopsis:
          "Un estudiante de secundaria con poderes psíquicos intenta vivir una vida normal mientras controla sus habilidades.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide0",
      },
      {
        id: 14,
        title: "Spirited Away",
        year: "2001",
        episodes: "Película",
        genre: "Aventura • Familia",
        rating: "9.3",
        synopsis:
          "Una niña debe trabajar en una casa de baños para espíritus para salvar a sus padres transformados en cerdos.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 15,
        title: "Cowboy Bebop",
        year: "1998",
        episodes: "26 episodios",
        genre: "Acción • Drama",
        rating: "8.8",
        synopsis:
          "Un grupo de cazarrecompensas viaja por la galaxia en su nave espacial Bebop, persiguiendo criminales.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 16,
        title: "Violet Evergarden",
        year: "2018",
        episodes: "13 episodios",
        genre: "Drama • Romance",
        rating: "8.5",
        synopsis:
          "Una ex-soldado trabaja como escritora de cartas automáticas, aprendiendo sobre las emociones humanas.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 17,
        title: "Akira",
        year: "1988",
        episodes: "Película",
        genre: "Acción • Ciencia Ficción",
        rating: "8.0",
        synopsis:
          "En un Tokyo post-apocalíptico, un joven motociclista debe detener a su amigo que ha adquirido poderes telequinéticos.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 18,
        title: "Princess Mononoke",
        year: "1997",
        episodes: "Película",
        genre: "Aventura • Drama",
        rating: "8.4",
        synopsis:
          "Un joven príncipe se ve envuelto en una lucha entre los dioses del bosque y los humanos que consumen sus recursos.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 19,
        title: "Your Name",
        year: "2016",
        episodes: "Película",
        genre: "Romance • Drama",
        rating: "8.2",
        synopsis:
          "Dos adolescentes descubren que están misteriosamente conectados y pueden intercambiar cuerpos.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 20,
        title: "Chainsaw Man",
        year: "2022",
        episodes: "12 episodios",
        genre: "Acción • Horror",
        rating: "8.3",
        synopsis:
          "Denji hace un trato con el diablo motosierra Pochita para convertirse en Chainsaw Man y cazar demonios.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 21,
        title: "Bleach",
        year: "2004",
        episodes: "366 episodios",
        genre: "Acción • Sobrenatural",
        rating: "8.1",
        synopsis:
          "Ichigo Kurosaki obtiene poderes de Shinigami y debe proteger a los humanos de los espíritus malignos llamados Hollows.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 22,
        title: "Code Geass",
        year: "2006",
        episodes: "50 episodios",
        genre: "Drama • Mecha",
        rating: "8.9",
        synopsis:
          "Lelouch vi Britannia obtiene el poder de Geass y lidera una rebelión contra el Imperio Británico.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 23,
        title: "Neon Genesis Evangelion",
        year: "1995",
        episodes: "26 episodios",
        genre: "Mecha • Psicológico",
        rating: "8.5",
        synopsis:
          "Jóvenes pilotos controlan mechas gigantes para defender la Tierra de misteriosos seres llamados Ángeles.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 24,
        title: "JoJo's Bizarre Adventure",
        year: "2012",
        episodes: "190 episodios",
        genre: "Aventura • Acción",
        rating: "8.7",
        synopsis:
          "La saga multigeneracional de la familia Joestar y sus batallas contra fuerzas sobrenaturales.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
    ];
  }

  // Get all animes
  getAllAnimes() {
    return this.animes;
  }

  // Get anime by ID
  getAnimeById(id) {
    return this.animes.find((anime) => anime.id === parseInt(id));
  }

  // Filter animes by genre
  getAnimesByGenre(genre) {
    if (genre === "all") {
      return this.animes;
    }
    return this.animes.filter((anime) =>
      anime.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // Search animes by title or genre
  searchAnimes(searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") {
      return this.animes;
    }

    const term = searchTerm.toLowerCase();
    return this.animes.filter(
      (anime) =>
        anime.title.toLowerCase().includes(term) ||
        anime.genre.toLowerCase().includes(term)
    );
  }

  // Get popular animes (first 4)
  getPopularAnimes() {
    return this.animes.slice(0, 4);
  }

  // Get animes by rating
  getAnimesByRating(minRating = 0) {
    return this.animes.filter((anime) => parseFloat(anime.rating) >= minRating);
  }
}

// Create and export instance
const animeModel = new AnimeModel();
