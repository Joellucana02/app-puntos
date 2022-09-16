const db = require("./../db");
const express = require("express");
const router = express.Router();

/* ===================================================================== */

/* 
CREATE TABLE usuario(
    usuario_id serial PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    dni VARCHAR (8) UNIQUE NOT NULL,
    numero VARCHAR (50) NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL
    );
    */

/* 
   CREATE TABLE guia(
       guia_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       apellido VARCHAR (50) NOT NULL,
       dni VARCHAR (8) UNIQUE NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL
);
*/

/* 
CREATE TABLE sector(
       sector_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL
);
*/

/* 
 CREATE TABLE horario(
       horario_id serial PRIMARY KEY,
       hora VARCHAR (50) NOT NULL,
       fecha VARCHAR (50) NOT NULL
       );
*/

/* 
 CREATE TABLE exposicion(
       exposicion_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       sector_id integer NOT NULL,
        CONSTRAINT fk_sector
        FOREIGN KEY (sector_id) REFERENCES sector(sector_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
       );
*/

/* 

 CREATE TABLE ruta(
       ruta_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       visita_id integer NOT NULL,
        CONSTRAINT fk_visita
        FOREIGN KEY (visita_id) REFERENCES visita(visita_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
       );
*/

/* 

 CREATE TABLE visita(
       visita_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       horario_id integer NOT NULL,
        CONSTRAINT fk_horario
        FOREIGN KEY (horario_id) REFERENCES horario(horario_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
       );
*/

/* 
        
 CREATE TABLE registro(
       registro_id serial PRIMARY KEY,
       visita_id integer NOT NULL,
       usuario_id integer NOT NULL,
        CONSTRAINT fk_visita
        FOREIGN KEY (visita_id) REFERENCES visita(visita_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
              CONSTRAINT fk_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
  
       );

*/
/* ===================================================================== */

router.get("/usuarios", async (req, res, next) => {
  try {
    return res.json({ msg: "blabla" });
  } catch (error) {}
});

/* ............................... */
router.get("/sector", async (req, res, next) => {
  try {
    const sectores = await db.query(`SELECT * FROM sector`);

    return res.json(sectores.rows);
    //return res.json({ msg: "efdsafdasdafawe" });
  } catch (error) {
    return next(error);
  }
});

router.post("/sector", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;

    const sector = await db.query(
      `INSERT INTO sector (nombre) VALUES ($1) RETURNING *`,
      [nombre]
    );

    return res.json(sector.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */
router.get("/exposicion", async (req, res, next) => {
  try {
    const exposicion = await db.query(`SELECT * FROM exposicion`);

    return res.json(exposicion.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/exposicion", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;
    const sector_id = req.body.sector_id;
    console.log(sector_id);
    const exposicion = await db.query(
      `INSERT INTO exposicion (nombre, sector_id) VALUES ($1,$2) RETURNING *`,
      [nombre, sector_id]
    );

    return res.json(exposicion.rows[0]);
  } catch (error) {
    return next(error);
  }
});

/* ............................... */

/* 
CREATE TABLE usuario(
    usuario_id serial PRIMARY KEY,
    nombre VARCHAR (50) NOT NULL,
    apellido VARCHAR (50) NOT NULL,
    dni VARCHAR (8) UNIQUE NOT NULL,
    numero VARCHAR (50) NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL
    );
    */
/* ............................... */
router.get("/usuario", async (req, res, next) => {
  try {
    const usuario = await db.query(`SELECT * FROM usuario`);

    return res.json(usuario.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/usuario", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const numero = req.body.numero;
    const email = req.body.email;
    const usuario = await db.query(
      `INSERT INTO usuario (nombre, apellido,dni,numero,email) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [nombre, apellido, dni, numero, email]
    );

    return res.json(usuario.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */
/* 
   CREATE TABLE guia(
       guia_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       apellido VARCHAR (50) NOT NULL,
       dni VARCHAR (8) UNIQUE NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL
);
*/
router.get("/guia", async (req, res, next) => {
  try {
    const guia = await db.query(`SELECT * FROM guia`);

    return res.json(guia.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/guia", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const dni = req.body.dni;
    const email = req.body.email;
    const guia = await db.query(
      `INSERT INTO guia (nombre, apellido,dni,email) VALUES ($1,$2,$3,$4) RETURNING *`,
      [nombre, apellido, dni, email]
    );

    return res.json(guia.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */
/* 
 CREATE TABLE horario(
       horario_id serial PRIMARY KEY,
       hora VARCHAR (50) NOT NULL,
       fecha VARCHAR (50) NOT NULL
       );
*/
router.get("/horario", async (req, res, next) => {
  try {
    const horario = await db.query(`SELECT * FROM horario`);

    return res.json(horario.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/horario", async (req, res, next) => {
  try {
    const hora = req.body.hora;
    const fecha = req.body.fecha;
    const horario = await db.query(
      `INSERT INTO horario (hora,fecha) VALUES ($1,$2) RETURNING *`,
      [hora, fecha]
    );

    return res.json(horario.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */
/* 

 CREATE TABLE ruta(
       ruta_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       visita_id integer NOT NULL,
        CONSTRAINT fk_visita
        FOREIGN KEY (visita_id) REFERENCES visita(visita_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
       );
*/
router.get("/ruta", async (req, res, next) => {
  try {
    const ruta = await db.query(`SELECT * FROM ruta`);

    return res.json(ruta.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/ruta", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;
    const visita_id = req.body.visita_id;
    const ruta = await db.query(
      `INSERT INTO ruta (nombre,visita_id) VALUES ($1,$2) RETURNING *`,
      [nombre, visita_id]
    );

    return res.json(ruta.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */
/* 

 CREATE TABLE visita(
       visita_id serial PRIMARY KEY,
       nombre VARCHAR (50) NOT NULL,
       horario_id integer NOT NULL,
        CONSTRAINT fk_horario
        FOREIGN KEY (horario_id) REFERENCES horario(horario_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
       );
*/
router.get("/visita", async (req, res, next) => {
  try {
    const visita = await db.query(`SELECT * FROM visita`);

    return res.json(visita.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/visita", async (req, res, next) => {
  try {
    const nombre = req.body.nombre;
    const horario_id = req.body.horario_id;
    const visita = await db.query(
      `INSERT INTO visita (nombre,horario_id) VALUES ($1,$2) RETURNING *`,
      [nombre, horario_id]
    );

    return res.json(visita.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

/* ............................... */

/* 
        
 CREATE TABLE registro(
       registro_id serial PRIMARY KEY,
       visita_id integer NOT NULL,
       usuario_id integer NOT NULL,
        CONSTRAINT fk_visita
        FOREIGN KEY (visita_id) REFERENCES visita(visita_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
              CONSTRAINT fk_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
  
       );

*/

router.get("/", async (req, res, next) => {
  try {
    const registros = await db.query(`SELECT * FROM registro`);

    return res.json(registros.rows);
  } catch (error) {
    return next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const registro_id = req.params.id;
    const registro = await db.query(
      `SELECT * FROM registro WHERE registro_id = $1 `,
      [registro_id]
    );

    return res.json(registro.rows);
  } catch (error) {
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const visita_id = req.body.visita_id;
    const usuario_id = req.body.usuario_id;
    const registro = await db.query(
      `INSERT INTO registro (visita_id,usuario_id) VALUES ($1,$2) RETURNING *`,
      [visita_id, usuario_id]
    );

    return res.json(registro.rows[0]);
  } catch (error) {
    return next(error);
  }
});
/* ............................... */

module.exports = router;
