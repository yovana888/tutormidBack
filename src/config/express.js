import express from "express"
import morgan from "morgan"
import cors from "cors"
require("dotenv").config();

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
    }

    async core(){
        this.middlewares();
        this.routes();
        this.listen();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(cors({origin:"*"}))
    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Express Running, port: ${this.port}`);
        })
    }


}

export default new Server();