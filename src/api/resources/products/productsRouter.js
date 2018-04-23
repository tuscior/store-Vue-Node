import express from 'express'
import controller from './products.controller'



export const productsRouter = express.Router()


productRouter.route('/')
    .get(controller.sendAll)