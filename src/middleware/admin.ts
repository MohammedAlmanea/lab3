import { Request, Response } from 'express';

 export const admin = (req:Request,res:Response,next:Function) => {
    if (req.query.admin) {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
}