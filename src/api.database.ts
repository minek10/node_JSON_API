import { connect } from 'mongoose';
import { createConnection } from 'typeorm';
import { Category } from './models/Category';
import { Todo } from './models/Todo';
import { User } from './models/User';

class DatabaseConnector {
    async function initApp() {
        try {
            const connexion = await createConnection({
                type:"mysql",
                username: "root",
                password : "test",
                host:"localhost",
                port: 3306,
                database: "fullstack_example",
                synchronize: true,
                entities: [Todo, User, Category]
            });
            const result = await connexion.query("SHOW DATABASES;")
            console.log("Connecté")
            //console.log(result);
        } catch(e){
            console.log("Non connecté", e);
        }
    }

export {DatabaseConnector};


