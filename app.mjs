import express from 'express'
import { connectDB } from './config/dbConfig.mjs'
import superHeroRoutes from './routes/superHeroRoutes.mjs'


const app = express()
const PORT = process.env.PORT || 3000

/* Middleware para parsear JSON */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Configuramos EJS como Motor de Vistas */
app.set('view engine', 'ejs')

/* Conexión a MongoDB */
connectDB()

/* Configuración de Rutas */
app.use('/api', superHeroRoutes)

/* Manejo de errores para rutas no encontradas */
app.use((req, res) => {
  res.status(404).send( {mensaje: 'Ruta no encontrada' })
})


app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))