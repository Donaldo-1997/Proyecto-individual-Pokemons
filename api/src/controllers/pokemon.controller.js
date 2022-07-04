const axios = require('axios')
const { Type } = require('../db')

let fastLoadPokemons = []

module.exports = {
    getAllsApi: async () => {
        if(!fastLoadPokemons.length) {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
            const pokePromises = []
            // requests a "p.url" para obtener la info necesaria
            data.results.forEach( p => pokePromises.push(axios.get(p.url)) )

            const result = (await Promise.all(pokePromises)).map(p => p.data)
            // console.log('pokePromises',pokePromises)
            const pokemons = result.map(p => ({
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

            fastLoadPokemons = [...pokemons]
            return pokemons     
        }

        return fastLoadPokemons;


        // const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
        // const pokePromises = []
        // // requests a "p.url" para obtener la info necesaria
        // data.results.forEach( p => pokePromises.push(axios.get(p.url)) )

        // const result = (await Promise.all(pokePromises)).map(p => p.data)
        // // console.log('pokePromises',pokePromises)
        // const pokemons = result.map(p => ({
        //     id: p.id,
        //     name: p.name,
        //     image: p.sprites.other.dream_world.front_default,
        //     height: p.height,
        //     weight: p.weight,
        //     types: p.types.map(t => ({ name: t.type.name })),
        //     hp: p.stats[0].base_stat,
        //     attack: p.stats[1].base_stat,
        //     defense: p.stats[2].base_stat,
        //     speed: p.stats[5].base_stat,
        // }))

        // // console.log(pokemons)
        // return pokemons
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
            return error
        }
    },

    getByNameApi: async (name) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.other.dream_world.front_default,
                height: data.height,
                weight: data.weight,
                types: data.types.map(t => ({ name: t.type.name })),
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
            }

            return pokemon

        } catch (error) {
            return error
        }
    },

    getByIdApi: async (id) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const pokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.other.dream_world.front_default,
                height: data.height,
                weight: data.weight,
                types: data.types.map(t => ({ name: t.type.name })),
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
            }

            return pokemon

        } catch (error) {
            return error
        }
    }
}