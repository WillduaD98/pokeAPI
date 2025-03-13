import type {Request, Response } from 'express';
import {URL} from '../server.js';

export  const getPokemon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        // console.log(id);
        if (!id) {
            return  res.status(400).json({error: `Falta el ID del pokemon`})
        }
        console.log(`Buscando Pokemon con ID: ${id}`);

        //Hacemos petición a una API externa:
        console.log("URL POKEAPI" + URL);
        console.log(`Type de URL `, typeof URL)
        const response = await fetch(`${URL}/pokemon/${id}`);

        if (!response.ok) {
            return res.status(404).json({error :`Pokemón no encontrado`});
        };

        const pokemon = await response.json();
        return res.status(200).json({Response: pokemon})

    } catch (error) {
        console.error(`Error happened in getPokemon`, error)
        return res.status(500).json({error: `Ocurrio un error en el servidor`})
    }
};

export const pokemonEvolution = async (req: Request ,res: Response) => {
    try {
        const {id} = req.params;
        console.log(id)

        const response = await fetch (`${URL}/evolution-chain/${id}`);
        if (!response.ok) {
            return res.status(404).json({Error: `Pokemon Not found.`})
        }
        const evolution = await response.json();
        return res.status(200).json({RESPUESTISIMA: evolution.chain.evolves_to[0].species.name});
    } catch (error) {
        console.error(`You got server Error ${error} `)
        return res.status(500).json({Error: 'Error en el servidor.'})
    }
}