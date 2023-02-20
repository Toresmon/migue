const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const session = require("cookie-session");
const nodemailer = require("nodemailer");
const  imgbbUploader  =  require ( "imgbb-uploader" ) ;
//Base de Datos
const mongoose = require("mongoose");

//hashS

const bcrypt = require("bcrypt");


//vistas
app.set("view engine", "ejs");
//Defino la localización de mis vistas
app.set("views", path.join(__dirname, "views"));


app.use(morgan("dev"));
//Middleware para poder obtener data de los requests con BodyParser
app.use(express.json());

const port = 3500;

//Corremos el servidor en el puerto seleccionado
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

mongoose.connect("mongodb+srv://Miguel:<Mjef04101719>@cluster0.wcvt4wp.mongodb.net/test", { 
    serverSelectionTimeoutMS:0, 
}) 
.then((con) => {
    console.log("Conectado a la DB");
});