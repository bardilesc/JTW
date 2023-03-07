const express = require("express")
const app = express()
const mongoose = require('mongoose');

// Validaciones y funciones generales
const cors = require("cors");
const verifyToken = require("./general_functions/verifyToken")

//middlewares
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// ENV 
const config = require("../config")

// CONF ENV
const port = process.env.PORT 

// MONGO BD CONNECT 

const connStr =
  `${config.db.prefix}://` +
  `${config.db.user ? `${config.db.user}:${config.db.pwd}@` : ''}` +
  `${config.db.host}` +
  `${config.db.port ? `:${config.db.port}` : ''}/` +
  `${config.db.dbname}` +
 // `?replicaSet=Main-shard-0&authSource=admin&retryWrites=true`;
  `?&authSource=admin&retryWrites=true`;

mongoose.set('strictQuery', true);
mongoose.connect(connStr, { useNewUrlParser: true });
var con = mongoose.connection;

if(!con){
  console.log("error de conexion bd")
}
console.log(connStr)

app.listen(port, ()=>{
    console.log("Servidor activo en el puerto " +  port)
})

// ruta de la funcion para obtener el token
app.use("/login", require("./routes/login.route"))

//rutas con token PRUEBAS
app.use("/post", verifyToken.verifyToken , require("./routes/post.route"))