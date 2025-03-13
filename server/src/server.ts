import * as dotenv from 'dotenv';
import express from 'express';
import allRoutes from './routes/index.js';
import cors from 'cors';
//Añadir los valores que inicializamos en mi .env.example con el dotenv
dotenv.config();

export const URL = process.env.API_BASE_URL || "https://pokeapi.co/api/v2";
const PORT = Number(process.env.PORT) || 3001;
console.log(`Esta es la url desde el server: `, URL)
console.log(PORT)


//Inicializamos express
const app = express();
app.use(cors())
//service static files in the entire client's dist folder
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.use(allRoutes);
//Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

export default {PORT};
