const { Router } = require('express');
const { Op } = require('sequelize');
const { getAllsApi, getByNameApi, getByIdApi } = require('../controllers/pokemon.controller');
const { Pokemon, Type } = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', async (req, res) => {
    const { name } = req.query

    try {
        if(name) {
            let pokemon = await Pokemon.findOne({ where: { name }, include: Type })

            if(pokemon === null) pokemon = await getByNameApi(name)

            res.status(200).json(pokemon)

        } else {
            // BUSCANDO TODOS
            const pokemonsDb = await Pokemon.findAll({ include: Type })
            const pokemonsApi = await getAllsApi()

            res.status(200).json([...pokemonsDb, ...pokemonsApi])
        }
    } catch (error) {
        console.log('Get /pokemons', error)
        res.json(error)
    }
    
})

router.get('/pokemons/:id', async (req, res) => {
    const { id } = req.params

    try {
        let pokemon = undefined

        if(isNaN(id)) pokemon = await Pokemon.findOne({ 
            where: { id },
            include: Type 
        })
        else pokemon = await getByIdApi(id)

        if(pokemon) res.status(200).json(pokemon)
        else res.status(404).send('Pokemon not found!')

    } catch (error) {
        console.log('Get /pokemon/:id :', error)
        res.json(error)
    }
})

router.post('/pokemons', async (req, res) => {
    let { name, image, hp, attack, defense, speed, height, weight, types } = req.body

    if(name) {
        try {
            if(image.length === 0) image = undefined

            const [ newPokemon, created ] = await Pokemon.findOrCreate({ 
                where: { name },
                defaults: { image, hp, attack, defense, speed, height, weight } 
            })

            const typesDB = types ? await Type.findAll({
                where: { name: { [Op.or]: types } }
            }) : []

            typesDB.forEach( async ({ dataValues }) => await newPokemon.addType(dataValues.id))


            if(created) res.status(201).send('Pokemon created successfully!')
            else res.send(`Pokemon "${name}" already exists!`)

        } catch (error) {
            console.log('Post', error)
            res.json(error)
        }
    } else {
        res.status(409).send('name field is required')
    }

})

router.get('/types', async (req, res) => {
    try {
        const types = await Type.findAll()
        res.status(200).json(types)

    } catch (error) {
        console.log('Post', error)
        res.json(error)
    }
})

router.put('/pokemons/:id', async (req, res) => {
    const { id } = req.params
    const { name, image, hp, attack, defense, speed, height, weight, types  } = req.body

    try {
       
        const pokemonUpdated = await Pokemon.findOne({ where: { id }, include: Type })

        const oldTypes = pokemonUpdated.types.map(types => types.dataValues.id)
        await pokemonUpdated.removeTypes(oldTypes)
        // const oldTypes = pokemonUpdated.types
        // oldTypes.forEach(async ({ dataValues }) => await pokemonUpdated.removeType(dataValues.id))
        
        const typesDB = await Type.findAll({ where: { name: { [Op.or]: types } } })

        await pokemonUpdated.addTypes(typesDB.map(type => type.dataValues.id))

        pokemonUpdated.set({
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        })

        await pokemonUpdated.save()

        res.status(200).send(`Pokemon "${name}" updated successfully`)
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
})

router.delete('/pokemons/:id', async (req, res) => {
    const { id } = req.params

    try {
        await Pokemon.destroy({ where: { id } })

        res.status(200).send('Pokemon deleted successfully')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
