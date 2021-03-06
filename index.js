const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes')
const PORT = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))
