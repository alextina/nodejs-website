import express from "express";
// import ejs from 'ejs'; // se puede obviar porque trabaja directamente con express
import { dirname, join } from 'path';
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log(join(__dirname,'views')); // ubicación de las vistas de forma dinámica
app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs');
// app.get('/', (req, res) => res.send('hello world'));
app.use(indexRoutes)
// agregando el css
app.use(express.static(join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});