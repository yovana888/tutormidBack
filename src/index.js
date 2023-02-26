import Server from "./config/express";
import database from "./config/database";
require("dotenv").config();

(async ()=>{
    await database();
    await Server.core();
})();