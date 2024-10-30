export const getGamesByName = async (name = '', allGames = []) => {
    name = name.trim().toLowerCase();
    if (name.length === 0) return [];
  
    // Filtra directamente sobre `allGames` sin llamar a ningún hook
    return allGames.filter(game => game.name.toLowerCase().includes(name));
  };
  