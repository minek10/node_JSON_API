import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

class ProjectValidator{
    static getValidationRules =()=>{
        return [
            body('name').notEmpty().withMessage('This name field must be filled !'),
            body('description').isLength({min:10, max:200}).withMessage('You must set a description with minimum 10 characters and maximum 200')
        ];
    }
    static validate =(req:Request, res:Response, next:NextFunction) =>{
        console.log(req.body.name);
        const errors = validationResult(req);
        if(errors.array().length >0){
           errors.array().forEach(error=>{
               req.flash('error', error.msg);
           });
            return res.sendStatus(400);
        }
        return next();
    }
}

export {ProjectValidator};