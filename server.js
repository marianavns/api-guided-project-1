const app = require('./src/app')

const port = 3074

app.listen(port, () => {
    console.log(`Executando em ${port}`)
})