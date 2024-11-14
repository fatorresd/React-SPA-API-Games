export const getGamesById = (games, id) => {
    // checkea si games es un array, si no lo es retorna null
    if (!games || !Array.isArray(games)) return null;
    
    // Itera sobre cada publisher en games
    for (const publisher of games) {
        // Si el publisher no tiene juegos, salta a la siguiente iteración
      if (!publisher?.games) continue;
        // Busca el juego por id en el array de juegos del publisher
      const game = publisher.games.find(game => game.id === Number(id));
        // Si el juego existe, lo retorna
      if (game) return game;
    }
    return null;
  }
