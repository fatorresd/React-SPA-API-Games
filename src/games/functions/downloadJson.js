// Objetivo: Función para descargar los juegos en formato JSON
export const downloadJson = (gamesArray) => {
  console.log("Exportando juegos...");
  const json = JSON.stringify(gamesArray, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
      
  // Crear un enlace para descargar el archivo
  const link = document.createElement("a");
  link.href = url;
  link.download = "games.json"; // Nombre del archivo
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Eliminar el enlace después de la descarga
  
  console.log("Juegos exportados correctamente.");
};
