const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const registros = require("./rutas/registros");

app.use(morgan("tiny"));

app.use(bodyParser.json());

app.use("/registro", registros);

app.use((req, res, next) => {
  let err = new Error("no encontrado");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({ message: err.message, error: err });
  });
}

app.listen(3000, () => {
  console.log("servidor en puerto 3000");
});
