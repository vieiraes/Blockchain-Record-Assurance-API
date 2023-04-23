import express from 'express'
import { genesisBlock } from './genesisBlock'
import * as controllers from './controllers'
import { connectDB } from './services/connection'


const app = express()
const router = express.Router()
app.use(router)
app.use(express.json())

async function bootstrap() {
  const port = 3434;
  const server = app.listen(port, () => console.log(`App listening on port ${port}!`))
  if (server) {
    const genesis = await genesisBlock()
    connectDB()
  } else {
    console.warn('Server error')
  }
}
bootstrap()


/*
@routes
*/
app.use('/ledger', controllers.LedgerController)