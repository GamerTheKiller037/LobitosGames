//js/models/gameModel.js

// Game Model - Data Layer
class GameModel {
  constructor() {
    this.games = [
      {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        year: "2015",
        platform: "PC, PlayStation, Xbox, Nintendo Switch",
        genre: "RPG • Aventura",
        rating: "9.3",
        synopsis:
          "Geralt de Rivia busca a su hija adoptiva Ciri mientras navega por un mundo de fantasía lleno de monstruos, intrigas políticas y decisiones morales complejas. Un RPG de mundo abierto aclamado por la crítica.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 2,
        title: "Ghost of Tsushima",
        year: "2020",
        platform: "PlayStation 4, PlayStation 5",
        genre: "Acción • Aventura",
        rating: "8.7",
        synopsis:
          'Jin Sakai debe abandonar las tradiciones samurái y forjar un nuevo camino como "El Fantasma" para defender la isla de Tsushima de la invasión mongol. Un juego de acción en mundo abierto ambientado en el Japón feudal.',
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 3,
        title: "FIFA 24",
        year: "2023",
        platform: "PC, PlayStation, Xbox, Nintendo Switch",
        genre: "Deportes",
        rating: "7.8",
        synopsis:
          "La última entrega de la famosa serie de simulación de fútbol de EA Sports, con equipos actualizados, nuevos modos de juego y mecánicas mejoradas para ofrecer la experiencia de fútbol más realista.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 4,
        title: "Elden Ring",
        year: "2022",
        platform: "PC, PlayStation, Xbox",
        genre: "RPG • Acción",
        rating: "9.1",
        synopsis:
          "Aventúrate en las Tierras Intermedias, un mundo de fantasía oscura creado por Hidetaka Miyazaki y George R.R. Martin. Un souls-like de mundo abierto que desafía a los jugadores con combate exigente y exploración épica.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 5,
        title: "Red Dead Redemption 2",
        year: "2018",
        platform: "PC, PlayStation, Xbox",
        genre: "Acción • Aventura",
        rating: "9.7",
        synopsis:
          "Arthur Morgan y la banda de Dutch van der Linde luchan por sobrevivir en el salvaje oeste americano mientras son perseguidos por cazarrecompensas.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 6,
        title: "God of War",
        year: "2018",
        platform: "PlayStation 4, PlayStation 5, PC",
        genre: "Acción • Aventura",
        rating: "9.4",
        synopsis:
          "Kratos vive ahora como un hombre en el reino de los dioses y monstruos nórdicos. Es en este mundo duro e implacable donde debe luchar para sobrevivir y enseñar a su hijo a hacer lo mismo.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 7,
        title: "Cyberpunk 2077",
        year: "2020",
        platform: "PC, PlayStation, Xbox",
        genre: "RPG • Acción",
        rating: "7.2",
        synopsis:
          "Un RPG de acción y aventura de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, la glamour y la modificación corporal.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 8,
        title: "The Legend of Zelda: Breath of the Wild",
        year: "2017",
        platform: "Nintendo Switch, Wii U",
        genre: "Aventura • Acción",
        rating: "9.7",
        synopsis:
          "Link despierta de un sueño de 100 años en un Hyrule devastado y debe recuperar sus recuerdos perdidos y derrotar a Calamity Ganon.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 9,
        title: "Grand Theft Auto V",
        year: "2013",
        platform: "PC, PlayStation, Xbox",
        genre: "Acción • Aventura",
        rating: "9.5",
        synopsis:
          "Tres criminales únicos planean y ejecutan una serie de atracos audaces en la ciudad ficticia de Los Santos.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 10,
        title: "Minecraft",
        year: "2011",
        platform: "Multiplataforma",
        genre: "Sandbox • Aventura",
        rating: "9.0",
        synopsis:
          "Un juego de construcción en el que los jugadores pueden crear y destruir diferentes tipos de bloques en un entorno tridimensional.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 11,
        title: "Call of Duty: Modern Warfare II",
        year: "2022",
        platform: "PC, PlayStation, Xbox",
        genre: "Acción • Shooter",
        rating: "8.1",
        synopsis:
          "La Task Force 141 regresa con una campaña global que lleva a los jugadores desde las calles de Amsterdam hasta la traicionera selva.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 12,
        title: "Horizon Zero Dawn",
        year: "2017",
        platform: "PlayStation 4, PC",
        genre: "Acción • RPG",
        rating: "8.9",
        synopsis:
          "Aloy, una joven cazadora, explora un mundo post-apocalíptico dominado por máquinas robóticas para descubrir su pasado.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 13,
        title: "Spider-Man: Miles Morales",
        year: "2020",
        platform: "PlayStation 4, PlayStation 5, PC",
        genre: "Acción • Aventura",
        rating: "8.5",
        synopsis:
          "Miles Morales descubre poderes explosivos que lo diferencian de su mentor Peter Parker. Domina su poder único de bio-electricidad venom blast.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 14,
        title: "Fortnite",
        year: "2017",
        platform: "Multiplataforma",
        genre: "Battle Royale • Shooter",
        rating: "7.8",
        synopsis:
          "100 jugadores luchan hasta que solo queda uno en pie en este juego de batalla real gratuito con mecánicas de construcción únicas.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 15,
        title: "The Last of Us Part II",
        year: "2020",
        platform: "PlayStation 4, PlayStation 5",
        genre: "Acción • Aventura",
        rating: "9.2",
        synopsis:
          "Cinco años después de su peligroso viaje a través de los Estados Unidos post-pandémicos, Ellie y Joel se han establecido en Jackson, Wyoming.",
        image:
          "https://s1.significados.com/foto/paisaje-og.jpg?class=ogImageWide",
      },
      {
        id: 16,
        title: "Assassin's Creed Valhalla",
        year: "2020",
        platform: "PC, PlayStation, Xbox",
        genre: "Acción • Aventura",
        rating: "8.2",
        synopsis:
          "Eivor, un feroz guerrero vikingo, debe liderar su clan desde las gélidas tierras de Noruega hasta un nuevo hogar en Inglaterra.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=AC+Valhalla",
      },
      {
        id: 17,
        title: "Among Us",
        year: "2018",
        platform: "Multiplataforma",
        genre: "Social • Party",
        rating: "7.3",
        synopsis:
          "Los compañeros de tripulación trabajan juntos para completar tareas, pero cuidado con los impostores que sabotean y eliminan a la tripulación.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Among+Us",
      },
      {
        id: 18,
        title: "Valorant",
        year: "2020",
        platform: "PC",
        genre: "Shooter • Tactical",
        rating: "8.3",
        synopsis:
          "Un shooter táctico 5v5 con personajes únicos donde la precisión, las habilidades y la estrategia de equipo son clave para la victoria.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Valorant",
      },
      {
        id: 19,
        title: "Fall Guys",
        year: "2020",
        platform: "Multiplataforma",
        genre: "Party • Plataformas",
        rating: "7.5",
        synopsis:
          "Un juego de batalla real multitudinario con hasta 60 jugadores compitiendo en rondas de caos escalado hasta que quede un ganador.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Fall+Guys",
      },
      {
        id: 20,
        title: "Genshin Impact",
        year: "2020",
        platform: "Multiplataforma",
        genre: "RPG • Aventura",
        rating: "8.4",
        synopsis:
          "Un juego de rol de mundo abierto donde los jugadores controlan un Viajero que busca a su hermano perdido en el mundo de Teyvat.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Genshin+Impact",
      },
      {
        id: 21,
        title: "Rocket League",
        year: "2015",
        platform: "Multiplataforma",
        genre: "Deportes • Racing",
        rating: "8.6",
        synopsis:
          "Fútbol con coches propulsados por cohetes. Domina la competencia en el campo de juego híbrido de arcade-simulación de Rocket League.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Rocket+League",
      },
      {
        id: 22,
        title: "Super Mario Odyssey",
        year: "2017",
        platform: "Nintendo Switch",
        genre: "Plataformas • Aventura",
        rating: "9.7",
        synopsis:
          "Mario se embarca en una aventura masiva y globetrotter para rescatar a la princesa Peach de las garras de Bowser.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Mario+Odyssey",
      },
      {
        id: 23,
        title: "Overwatch 2",
        year: "2022",
        platform: "Multiplataforma",
        genre: "Shooter • Hero",
        rating: "7.9",
        synopsis:
          "Un shooter de héroes en equipo donde cada partido es la máxima experiencia 6v6. Colabora con tu equipo para asegurar la victoria.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Overwatch+2",
      },
      {
        id: 24,
        title: "Apex Legends",
        year: "2019",
        platform: "Multiplataforma",
        genre: "Battle Royale • Shooter",
        rating: "8.1",
        synopsis:
          "Un shooter gratuito donde las escuadras legendarias luchan por la fama y la fortuna en los confines de la Frontera.",
        image:
          "https://via.placeholder.com/280x200/8B0000/FFFFFF?text=Apex+Legends",
      },
    ];
  }

  // Get all games
  getAllGames() {
    return this.games;
  }

  // Get game by ID
  getGameById(id) {
    return this.games.find((game) => game.id === parseInt(id));
  }

  // Filter games by genre
  getGamesByGenre(genre) {
    if (genre === "all") {
      return this.games;
    }
    return this.games.filter((game) =>
      game.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }

  // Search games by title or genre
  searchGames(searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") {
      return this.games;
    }

    const term = searchTerm.toLowerCase();
    return this.games.filter(
      (game) =>
        game.title.toLowerCase().includes(term) ||
        game.genre.toLowerCase().includes(term)
    );
  }

  // Get featured games (first 4)
  getFeaturedGames() {
    return this.games.slice(0, 4);
  }

  // Get games by rating
  getGamesByRating(minRating = 0) {
    return this.games.filter((game) => parseFloat(game.rating) >= minRating);
  }

  // Get games by platform
  getGamesByPlatform(platform) {
    return this.games.filter((game) =>
      game.platform.toLowerCase().includes(platform.toLowerCase())
    );
  }
}

// Create and export instance
const gameModel = new GameModel();
