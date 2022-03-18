import { Router } from 'express';
import database from '../../../database';
import { body, validationResult } from 'express-validator'

export default (router: Router) => {

    router.post('/meeps', 
        body('body').isString().isLength({ max: 140, min: 10 }),
        body('color').isString().isLength({ max: 6, min: 6 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const data = req.body;

        if(data) {
            await database.promise()
            .query('INSERT INTO meeps (body, color) VALUES (?,?)', [data.body, data.color])
            .then((response) => {
                res.json({
                    ...data
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    task: {
                        error: 'Error getting meep'
                    }
                })
            });
        }
        
    });

}