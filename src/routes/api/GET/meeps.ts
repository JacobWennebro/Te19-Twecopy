import { Router } from "express";
import { getMeeps } from "../../../database";
import Status from 'http-status-codes'

export default (r: Router) => {

    r.get('/meeps', async (req, res) => {
        const meeps = await getMeeps();

        res.status(
            meeps.error ? 
            Status.INTERNAL_SERVER_ERROR :
            Status.OK
        ).json(meeps);
    });


    r.get('/meeps/:id', (req, res) => {

        res.send(`meep ${req.params.id}`);

    });

}