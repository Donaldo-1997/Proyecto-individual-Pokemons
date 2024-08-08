const axios = require('axios')
const { Type, Pokemon } = require('../db')
const { Op } = require('sequelize')

const transformInformation = (arrayData) => {
    return arrayData.map(p => ({
        id: p.id,
        name: p.name,
        image: p.sprites.other.dream_world.front_default,
        height: p.height,
        weight: p.weight,
        types: p.types.map(t => ({ name: t.type.name })),
        hp: p.stats[0].base_stat,
        attack: p.stats[1].base_stat,
        defense: p.stats[2].base_stat,
        speed: p.stats[5].base_stat,
    }))
}

async function savePokemonsToDb(pokemons) {
    try {
        pokemons.forEach(async (pokemon) => {
            console.log(pokemon)
            const { name, hp, attack, defense, speed, height, weight } = pokemon
            const image = pokemon.image.length ? pokemon.image : undefined
            const types = pokemon.types.map(type => type.name)
     
            const [ newPokemon, created ] = await Pokemon.findOrCreate({ 
                where: { name },
                defaults: { image, hp, attack, defense, speed, height, weight } 
            })
    
            if(created) {
                const typesDB = types ? await Type.findAll({
                    where: { name: { [Op.or]: types } }
                }) : []
        
                typesDB.forEach( async ({ dataValues }) => await newPokemon.addType(dataValues.id))
            }
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAlls: async () => {
        const pokemonsDB = await Pokemon.findAll({ include: Type })

        if(pokemonsDB.length === 0) {
            try {
                const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
                const pokePromises = []
                // requests a "p.url" para obtener la info necesaria
                data.results.forEach( p => pokePromises.push(axios.get(p.url)) )
                
                const result = (await Promise.all(pokePromises)).map(p => p.data)
                // console.log('pokePromises',pokePromises)
                const pokemons = transformInformation(result)
                
                savePokemonsToDb(pokemons)

                return pokemons     
                
            } catch (error) {
                console.log(error)
                throw error
            }
        }

        return pokemonsDB
    },
    getTypes: async () => {

        try {
            let types = await Type.findAll()
    
            if(types && types.length === 0) {
                const { data } = await axios.get('https://pokeapi.co/api/v2/type')
                const result = data.results.map(( type ) => ({ name: type.name }))
                types = await Type.bulkCreate(result)
            }

            return types
            
        } catch (error) {
            throw error
        }
    },

    getByName: async (name) => {
        try {
            let pokemons = await Pokemon.findAll({ 
                where: { 
                    name: { [Op.iLike]: `${name}%` }
                }, 
                include: Type 
            })
        
            if(pokemons === null) {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                pokemons = transformInformation(data)
            }

            pokemons.forEach(e => e.types = e.types.map(t => t.name))

            return pokemons

        } catch (error) {
            throw error
        }
    },
    
    getByType: async (type) => {
        try {
            let pokemon = await Pokemon.findOne({ 
                include: [
                    {
                        model: Type,
                        where: {
                            name: type
                        }
                    }
                ] 
            })

            return pokemon

        } catch (error) {
            throw error
        }
    },

    getById: async (id) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemon = transformInformation(data)

            return pokemon

        } catch (error) {
            throw error
        }
    }
}