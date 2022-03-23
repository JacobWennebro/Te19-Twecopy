import { Router } from "express";
import { getMeeps } from "../../../database";

export default (router: Router) => {

    router.get('/', async (req, res) => {
        res.render('index.ejs', {
            meeps: (await getMeeps()).data
        });
    });

}