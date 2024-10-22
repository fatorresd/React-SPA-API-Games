import { usePublishersExport } from "../hooks/usePublishersExport";
    
export const getGamesByPublisher = (publisher) => {
    const { games } = usePublishersExport(); // Llama al hook para obtener los juegos
    
    // Validar si existe Publisher
    const foundPublisher = games.find(game => game.name === publisher);

    if (foundPublisher) { // Si se encuentra el publisher
        return {
            validPublisher: foundPublisher.games // Retorna los juegos del publisher encontrado
        };
    }
    // Si no se encuentra el publisher, retorna un array vacío
    return {
        validPublisher: []
    };
};
