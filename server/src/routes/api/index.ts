import { Router } from "express";
const router = Router();

import pokemonRoutes from './pokemonRoutes.js';

router.use('/pokemon', pokemonRoutes);