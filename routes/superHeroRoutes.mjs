import { Router } from 'express'
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, agregarSuperheroeController, agregarSuperheroeFormController, actualizarSuperheroePorIdController, eliminarSuperheroePorIdController, eliminarSuperheroePorNombreSuperheroeController } from '../controllers/superheroesController.mjs'
import { agregarValidationRules } from '../middlewares/validationRules.mjs'
import { handleValidationErros } from '../middlewares/errorMiddleware.mjs'

const router = Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/heroe/mayores-30', obtenerSuperheroesMayoresDe30Controller)
router.get('/heroes/heroe/:id', obtenerSuperheroePorIdController)
router.get('/heroes/heroe/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController)

/* Endpoint para formulario Agregar Superhéroe */
router.get('/heroes/agregar', agregarSuperheroeFormController)
// router.post('/heroes/agregar', agregarValidationRules(), handleValidationErros, agregarSuperheroeController) // Agregar un superhéroe
router.post('/heroes/agregar', agregarSuperheroeController) // Agregar un superhéroe

router.put('/heroes/:id', agregarValidationRules(), handleValidationErros,actualizarSuperheroePorIdController) // Actualizar un superhéroe por Id

router.delete('/heroes/:id', eliminarSuperheroePorIdController)
router.delete('/heroes/nombreSuperheroe/:nombreSuperHeroe', eliminarSuperheroePorNombreSuperheroeController)


export default router
