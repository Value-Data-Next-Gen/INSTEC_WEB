/**
 * Genera el brochure corporativo en PDF desde la página /brochure/ del build estático.
 *
 *   npm run build && npm run brochure
 *
 * Sirve out/ en un puerto local, imprime /brochure/ con Chrome sin cabeza (páginas de
 * 1280 × 720 px definidas en src/styles/brochure.css) y deja el PDF en
 * public/brochure/ (para los próximos builds) y en out/brochure/ (para este deploy).
 */
const http = require('http')
const fs = require('fs')
const path = require('path')
// Asíncrono a propósito: con execFileSync el servidor de este mismo proceso no podría
// responderle a Chrome y la impresión se quedaría esperando.
const { execFile } = require('child_process')

const RAIZ = path.resolve(__dirname, '..')
const OUT = path.join(RAIZ, 'out')
const NOMBRE = 'INSTEC-Brochure-Corporativo.pdf'
const PUERTO = 4418
const CHROME =
  process.env.CHROME ||
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
  ].find((p) => fs.existsSync(p))

const TIPOS = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2',
}

if (!fs.existsSync(path.join(OUT, 'brochure', 'index.html'))) {
  console.error('Falta out/brochure/index.html: corre "npm run build" primero.')
  process.exit(1)
}
if (!CHROME) {
  console.error('No encontré Chrome. Define la variable CHROME con su ruta.')
  process.exit(1)
}

const server = http
  .createServer((req, res) => {
    let f = path.join(OUT, decodeURIComponent(req.url.split('?')[0]))
    if (!f.startsWith(OUT)) return res.writeHead(403).end()
    if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html')
    if (!fs.existsSync(f)) return res.writeHead(404).end()
    res.writeHead(200, { 'content-type': TIPOS[path.extname(f)] || 'application/octet-stream' })
    fs.createReadStream(f).pipe(res)
  })
  .listen(PUERTO, '127.0.0.1', () => {
    const destino = path.join(RAIZ, 'public', 'brochure', NOMBRE)
    fs.mkdirSync(path.dirname(destino), { recursive: true })
    const perfil = fs.mkdtempSync(path.join(require('os').tmpdir(), 'instec-pdf-'))
    execFile(
      CHROME,
      [
        '--headless=new', '--disable-gpu', '--no-first-run', '--no-pdf-header-footer',
        `--user-data-dir=${perfil}`, '--virtual-time-budget=10000', '--run-all-compositor-stages-before-draw',
        `--print-to-pdf=${destino}`, `http://127.0.0.1:${PUERTO}/brochure/`,
      ],
      { timeout: 180000 },
      (err) => {
        server.close()
        fs.rmSync(perfil, { recursive: true, force: true })
        if (err || !fs.existsSync(destino)) {
          console.error('No se pudo generar el PDF:', err ? err.message : 'Chrome no escribió el archivo')
          process.exit(1)
        }
        fs.copyFileSync(destino, path.join(OUT, 'brochure', NOMBRE))
        console.log('PDF listo:', destino, `${Math.round(fs.statSync(destino).size / 1024)} KB`)
      }
    )
  })
