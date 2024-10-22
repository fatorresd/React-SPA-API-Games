

export const simpleData = (gamesArray)  => {

        //Simplificamos el archivo
        const simpleDataConvert = gamesArray.map((game) => {
            return {
                name: game.name,
                genres: game.genres.map(genero => genero.name).join(', '),
                released: game.released,
                background_image: game.background_image
            }
        })
    
        return (
            { simpleDataConvert }
          )
}
