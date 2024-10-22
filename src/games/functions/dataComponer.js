

export const simpleData = (gamesArray)  => {

    //Simplificamos el archivo
    const simpleDataConvert = gamesArray.map((game) => {
        return {
            results: game.results.map(genero => genero.name).join(', '),
        }
    })

    return (
        { simpleDataConvert }
      )
}
