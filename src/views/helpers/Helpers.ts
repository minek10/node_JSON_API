import slug from 'slug';
class Helpers {
    static registerHelpers(engine:any) {
        engine.handlebars.registerHelper('slug', (arg:string, arg2:string) =>{
           return slug(arg);
        });
    }
}
export {Helpers};