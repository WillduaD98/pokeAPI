import Router from 'express';
import { pokemonEvolution } from '../../controllers/pokemon-controller.js';
const router = Router();

router.get('/:id/', pokemonEvolution);

export default router