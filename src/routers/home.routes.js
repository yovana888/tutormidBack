import { Router } from "express";

class HomeRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.index)
    }

    index(req, res){
        return res.status(200).json({
            message:'OK'
        })
    }
}

export default new HomeRouter();