import { Router } from "express";
import pokemonRoutes from './pokemonRoutes.js';
import evolutionRoute from './evolutionRoute.js'

const router = Router();
router.use('/pokemon', pokemonRoutes);
router.use('/evolution-chain', evolutionRoute)

export default router;