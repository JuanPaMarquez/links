const linksData = [
  {
    id: 1,
    text: 'Base de datos TursoTech',
    icon: 'https://app.turso.tech//favicon.ico',
    url: 'https://app.turso.tech/juanpamarquez/databases/',
    categoria: 'Herramientas de Base de datos'
  },
  {
    id: 2,
    text: 'Documentacion Manz Dev',
    icon: 'https://manz.dev/favicon.ico',
    url: 'https://manz.dev/',
    categoria: 'Documentacion'
  },
  {
    id: 3,
    text: 'Public APIs',
    icon: 'https://publicapis.dev/favicon-pa/favicon.ico',
    url: 'https://publicapis.dev/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 4,
    text: 'JavaScript docs español',
    icon: 'https://es.javascript.info/img/favicon/favicon.png',
    url: 'https://es.javascript.info/',
    categoria: 'Documentacion'
  },
  {
    id: 5,
    text: 'React Icons',
    icon: 'https://react-icons.github.io/react-icons/favicon.ico',
    url: 'https://react-icons.github.io/react-icons/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 6,
    text: 'Devicons',
    icon: 'https://devicon.dev/logos/favicon.ico',
    url: 'https://devicon.dev/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 7,
    text: 'SVGL',
    icon: 'https://svgl.app/images/logo.svg',
    url: 'https://svgl.app/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 8,
    text: 'Versel',
    icon: 'https://vercel.com/favicon.ico',
    url: 'https://vercel.com/juanpamarquezs-projects',
    categoria: 'Hosting'
  },
  {
    id: 9,
    text: 'React animation',
    icon: 'https://www.reactbits.dev/favicon.ico',
    url: 'https://www.reactbits.dev/text-animations/split-text',
    categoria: 'Recursos de diseño'
  },
  {
    id: 10,
    text: 'Color Sand Fonts',
    icon: 'https://www.colorsandfonts.com/images/favicons/favicon-32x32.png',
    url: 'https://www.colorsandfonts.com/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 11,
    text: 'Clean Code JavaScript',
    icon: 'https://github.githubassets.com/favicons/favicon-dark.png',
    url: 'https://github.com/devictoribero/clean-code-javascript?tab=readme-ov-file#objects-and-data-structures',
    categoria: 'Documentacion'
  },
  {
    id: 12,
    text: 'Heroicons',
    icon: 'https://heroicons.com/_next/static/media/favicon-32x32.2a23e45f.png',
    url: 'https://heroicons.com/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 13,
    text: 'Omatzuri',
    icon: 'https://omatsuri.app/assets/favicon-48x48.png',
    url: 'https://omatsuri.app/',
    categoria: 'Recursos de diseño'
  },
  {
    id: 14,
    text: 'Robohash',
    icon: 'https://robohash.org/favicon.ico',
    url: 'https://robohash.org/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 15,
    text: 'DevDocs',
    icon: 'https://devdocs.io/favicon.ico',
    url: 'https://devdocs.io/',
    categoria: 'Documentacion'
  },
  {
    id: 16,
    text: 'Roadmap',
    icon: 'https://roadmap.sh/favicon.ico',
    url: 'https://roadmap.sh/',
    categoria: 'Documentacion'
  },
  {
    id: 17,
    text: 'Curso-Ingles',
    icon: 'https://www.curso-ingles.com/favicon.ico',
    url: 'https://www.curso-ingles.com/',
    categoria: 'Aprender ingles'
  },
  {
    id: 18,
    text: 'Squish image to webp',
    icon: 'https://squish.addy.ie/icon.svg',
    url: 'https://squish.addy.ie/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 19,
    text: 'TailwindCSS',
    icon: 'https://tailwindcss.com/favicon.ico',
    url: 'https://tailwindcss.com/docs/installation/using-vite',
    categoria: 'Documentacion'
  },
  {
    id: 20,
    text: 'Cloudflare',
    icon: 'https://dash.cloudflare.com/favicon.ico',
    url: 'https://dash.cloudflare.com/e325a9d5990cc2bfa0180475c72dc2c8/home',
    categoria: 'Hosting'
  },
  {
    id: 21,
    text: 'Render',
    icon: 'https://cdn.sanity.io/images/hvk0tap5/production/c4fd92ad649864b4aa2d4985072b9779bd7e8119-128x128.png?fit=max&auto=format',
    url: 'https://dashboard.render.com/',
    categoria: 'Hosting'
  },
  {
    id: 22,
    text: 'Convertio Image to Icon',
    icon: 'https://convertio.co/favicon.ico',
    url: 'https://convertio.co/es/png-ico/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 23,
    text: 'Caninclude Html',
    icon: 'https://caninclude.glitch.me/favicon.ico',
    url: 'https://caninclude.glitch.me/',
    categoria: 'Documentacion'
  },
  {
    id: 24,
    text: 'D3JS Data Visulisacion',
    icon: 'https://d3js.org/logo.png',
    url: 'https://d3js.org/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 25,
    text: 'Chartjs Data Visulisacion',
    icon: 'https://www.chartjs.org/favicon.ico',
    url: 'https://www.chartjs.org/',
    categoria: 'Recursos de desarrollo'
  },
  {
    id: 26,
    text: 'Motion Dev Animations',
    icon: 'https://framerusercontent.com/images/FEF0Xp0qllCZsG1uilpmdZAzD8.png',
    url: 'https://motion.dev/docs',
    categoria: 'Recursos de diseño'
  },
]
  
export default linksData.sort((a, b) => a.text.localeCompare(b.text))