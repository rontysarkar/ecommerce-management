import express from "express"
import { ProductRoutes } from "./modules/products/product.route"
const app = express()
app.use(express.json());

app.use('/api/products',ProductRoutes)

app.get('/', (req, res) => {
  res.send('Hello hello')
})

export default app;