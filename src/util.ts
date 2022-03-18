import { Router } from 'express';
import fs from 'fs';
import path from 'path';

export const GenerateRouter = (router: Router, dir: string) => {

    const GET = fs.readdirSync(path.join(__dirname, `routes/${dir}/GET`));
    const POST = fs.readdirSync(path.join(__dirname, `routes/${dir}/POST`));

    const methods = [
        ...GET.map(g => ({ file: g, method: 'GET' })),
        ...POST.map(p => ({ file: p, method: 'POST' }))
    ];

    for(const m of methods) {
        const methodName = m.file.substring(0, m.file.length-3);

        try {
            const methodFunc = require(path.join(__dirname, `routes/${dir}/${m.method}/${m.file}`)).default;
            methodFunc(router);

            console.log(`Loaded method "${m.method}: ${methodName}"`)
        } catch(e) {
            console.log(`Failed loading method "${m.method}: ${methodName}"`);
        }
    }

    return router;
}