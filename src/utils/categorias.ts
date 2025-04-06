const categorias = [
  "Todas las categorias",
  "Hosting",
  "Documentacion",
  "Recursos de aprendizaje",
  "Recursos de diseño",
  "Recursos de desarrollo",
  "Herramientas de Base de datos",
  "Aprender ingles",
  "Herramientas de AI"
] as const

export type Categorias = (typeof categorias)[number];

export default categorias