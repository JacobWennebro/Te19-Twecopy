import { Router } from "express";

export default (r: Router) => {

    r.get('/meeps', (req, res) => {

        res.send("pog");

    });


    r.get('/meeps/:id', (req, res) => {

        res.send(`meep ${req.params.id}`);

    });

}