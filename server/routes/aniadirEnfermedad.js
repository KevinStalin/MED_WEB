const express = require('express');
const Enfermedad = require('../models/enfermedad');
const fetch = require('node-fetch');


const app = express();

app.get('/enfermedad', (req, res) => {
    res.render('enfermedad');
});
app.get('/enfermedades', (req, res) => {
    Enfermedad.find({})
        .exec((err, enfermedadesDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.send({ enfermedades: enfermedadesDB });
        });
    //res.send('SI esttaaaaa')
});
app.post('/enfermedades', (req, res) => {
    let body = req.body
    let enfermedad = new Enfermedad({
        descripcion: body.descripcion
    });
    enfermedad.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.send('Se guardo');
    });
});

module.exports = app;