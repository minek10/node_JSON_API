import express, { urlencoded } from 'express';
import { resolve, join } from 'path';
import { router } from './app.router';
import exphbs from 'express-handlebars';
import { Helpers } from './views/helpers/Helpers';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import session, { MemoryStore } from 'express-session';
import flash from 'express-flash';
import { config } from 'dotenv';
import { DatabaseConnector } from './app.database';

//setup env variables 
config({path:'variables.env'});


DatabaseConnector.initDatabase();

const app = express();

//loging with morgan
app.use(morgan('combined', {
    stream:createWriteStream(join(process.cwd(), '/private/logs/access.log'), {flags:'a'})
}));
//Static files
app.use(express.static(`${process.cwd()}/public`));

//Parse request
app.use(urlencoded({extended:true}));


//Handlebars Templating
app.set('views', resolve(process.cwd(), 'src', 'views'));
const hbsConfig:ExphbsOptions = {extname:'.hbs'};
const hbs = exphbs.create(hbsConfig);
Helpers.registerHelpers(hbs);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


//Session Management
const sessionStore: MemoryStore= new MemoryStore;
app.use(session({
    cookie:{maxAge:60000},
    store:sessionStore,
    saveUninitialized:true,
    resave:true,
    secret:'triptyk'
}));

//Flash Messages Management
app.use(flash());

//Specific routes
app.use(router);

app.listen(process.env.PORT, ()=>{
    // eslint-disable-next-line no-console
    console.log(`The server is running on port : ${process.env.PORT}`);
});