// Función para obtener el ícono de un publisher dado su nombre
export const getIconsByPublishers = (publisherName, games) => {
    // Buscar el publisher que coincida con el nombre dado
    const foundPublisher = games.find(publisher => publisher.slug === publisherName);

    if (foundPublisher) { // Si se encuentra el publisher
        const publisherSlug = foundPublisher.slug; // Obtiene el slug del publisher
        const publisherIcon = `src/assets/IconsImage/${publisherSlug}.jpg`; // Construye la URL del ícono

        return {
            validPublisher: foundPublisher,
            publisherIcon, // Devuelve el ícono del publisher
            games: foundPublisher.games // Devuelve los juegos del publisher encontrado
        };
    }
    
    // Si no se encuentra el publisher, retorna un objeto vacío
    return {
        validPublisher: null,
        publisherIcon: null,
        games: []
    };
};
