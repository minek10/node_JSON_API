import { NextFunction, Request, Response } from 'express';

class PageHandler {
    static getHome(req:Request, res:Response, next:NextFunction){
        const links = [
            {name:'technocite', url:'https://technocite.be'},
            {name:'triptyk', url:'https://triptyk.eu'},
            {name:'google', url:'https://google.com'}
        ];
        res.render('index', {metas:{title:'my landing page'}, datas:{promoOn:false, dayBeforeEnd:'<b>43</b>', links}});
        // res.sendFile(`${process.cwd()}/public/html/index.html`);
    }
    static getLanding(req:Request, res:Response, next:NextFunction){
        res.render('landing', {layout:'simple'});
        // res.sendFile(`${process.cwd()}/public/html/landin2021.html`);
    }
}

export {PageHandler};