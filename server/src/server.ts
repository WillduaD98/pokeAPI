import * as dotenv from 'dotenv';
import express from 'express';

//Añadir los valores que inicializamos en mi .env.example con el dotenv
dotenv.config();
const URL = process.env.API_BASE_URL;
const PORT = Number(process.env.PORT) | 3001;
console.log(URL)
console.log(PORT)


//Inicializamos express
const app = express();

//service static files in the entire client's dist folder
app.use(express.static('dist'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

//Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

export default PORT;
