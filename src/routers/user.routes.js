import { Router } from "express";
import userController from "../controllers/user.controller";
import userValidation from "../validations/user.validation";

class UserRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/upload',userValidation.uploadImage(), this.uploadImage)
                          .post('/',userValidation.createRecord(), this.create)
                          .get('/:id', this.getById)
                          .patch('/:id',userValidation.updateRecord(), this.updateById)
                          .delete('/:id', this.deleteById)
    }

    async all(req, res){
        const controller = new userController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new userController();
        return controller.createRecord(req, res);
    }

    async uploadImage(req, res){
        const controller = new userController();
        return controller.uploadImage(req, res);
    }

    async getById(req, res){
        const controller = new userController();
        return controller.getById(req, res);
    }

    async updateById(req, res){
        const controller = new userController();
        return controller.updateById(req, res);
    }

    async deleteById(req, res){
        const controller = new userController();
        return controller.deleteById(req, res);
    }

}

export default new UserRouter();