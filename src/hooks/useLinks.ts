import { useState, useEffect } from 'react'
import linksData from "../utils/linksData";

export function useLinks ({ busqueda, categoriaSeleccionada }: { busqueda: string, categoriaSeleccionada: string }) {
  const [links, setLinks] = useState(linksData)

  useEffect(() => {
    let linksFiltrados = linksData

    if (categoriaSeleccionada !== "Todas las categorias") {
      linksFiltrados = linksFiltrados.filter((link) => link.categoria === categoriaSeleccionada);
    }

    if (busqueda !== "") {
      linksFiltrados = linksFiltrados.filter((link) => link.text.toLowerCase().includes(busqueda.toLowerCase()));
    }
    setLinks(linksFiltrados);    
  }, [busqueda, categoriaSeleccionada]);
  return links
}