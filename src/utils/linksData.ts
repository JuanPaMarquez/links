const linksData = [
  {
    id: 1,
    text: 'Base de datos Libro Click en TursoTech',
    icon: 'https://app.turso.tech//favicon.ico',
    url: 'https://app.turso.tech/juanpamarquez/databases/libro-click',
    categoria: 'Herramienta de Desarrollo'
  },
  {
    id: 2,
    text: 'Documentacion Manz Dev',
    icon: 'https://manz.dev/favicon.ico',
    url: 'https://manz.dev/',
    categoria: 'Recurso de aprendizaje'
  }
]

export default linksData.sort((a, b) => a.text.localeCompare(b.text))