import { connect } from 'mongoose';

class DatabaseConnector {
    static async initDatabase(){
        try{
            return await connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/tpk_api', {
                useCreateIndex:true,
                useFindAndModify:true,
                useNewUrlParser:true,
                useUnifiedTopology:true
                
            });
        }catch(e){
            console.log(e);
            return false;
        }
    }
}

export {DatabaseConnector};