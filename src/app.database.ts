import { connect } from 'mongoose';

class DatabaseConnector {
    static async initDatabase(){
        try{
            await connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/portal', {
                useCreateIndex:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
            });
        }catch(e){
            console.log(e);
        }
    }
}

export {DatabaseConnector};