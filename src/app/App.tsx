import categorias from "../utils/categorias"
// import linksData from "../utils/linksData"
import { useLinks } from "../hooks/useLinks"
import { useState } from "react"

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas las categorias");
  const [ busqueda, setBusqueda ] = useState('')
  const links = useLinks({ busqueda, categoriaSeleccionada })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setBusqueda(valor)
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoriaSeleccionada(e.target.value)
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Links de Ayuda</h1>
      <p>By Juan Pablo Marquez</p>

      <input 
        onChange={handleSearch}
        type="text" 
        placeholder="Titulo del link..." 
        className="border rounded-md dark:border-gray-300 border-gray-900 p-2 max-w-72 w-full mt-9"
      />
      <select onChange={handleFilter} className="border rounded-md dark:border-gray-300 border-gray-900 dark:bg-gray-900 bg-gray-300 p-2 max-w-72 w-full mt-2">
        {categorias.map((categoria) => (
          <option key={categoria}>{categoria}</option>
        ))}
      </select>

      <div className="mt-4 mx-10 max-w-200 w-full">
        {links.length === 0 && <p className="text-center">No hay links que coincidan con tu busqueda</p>}
        {links.map((link) => (
          <div key={link.id} className="dark:bg-gray-900 bg-gray-300 border border-gray-900 p-2 mt-1 rounded-md flex justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <img src={link.icon} className="size-6" alt="icon del sitio" />
              <a href={link.url} target="_blank" rel="noreferrer" className="font-bold text-lg">{link.text}</a>
            </div>
            <p className="flex items-center">{link.categoria}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
