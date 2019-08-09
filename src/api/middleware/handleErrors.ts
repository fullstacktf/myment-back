import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length <= 0){
        return res.status(400).send('Empty body?');
    } 
    next();
}