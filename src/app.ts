import express,{ Application, Request, Response, NextFunction } from 'express'
import rutas_ejemplo from './routes/rutas_ejemplo'

//1.Programación funcional

const app:Application =express()

//1.1 Emplementar las rutas 

app.use('/', rutas_ejemplo) 

//2. Respuesta cuando el recurso no existe

app.use((req:Request, res:Response, next:NextFunction)=>{

    res.status(404).json({message:'Upss!! Lo que pidió no existe!!!'})

})


//3. Respuesta cuando existe un error de servidor




export default app