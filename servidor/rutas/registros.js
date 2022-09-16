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

module.exports = router;
