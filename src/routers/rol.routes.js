import { Router } from "express";
import RolController from "../controllers/rol.controller";
import rolValidation from "../validations/rol.validation";
class RolRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/',rolValidation.createRecord(), this.create)
                          .get('/:id', this.getById)
                          .patch('/:id',rolValidation.updateRecord(), this.updateById)
                          .delete('/:id', this.deleteById)
    }

    async all(req, res){
        const controller = new RolController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new RolController();
        return controller.createRecord(req, res);
    }

    async getById(req, res){
        const controller = new RolController();
        return controller.getById(req, res);
    }

    async updateById(req, res){
        const controller = new RolController();
        return controller.updateById(req, res);
    }

    async deleteById(req, res){
        const controller = new RolController();
        return controller.deleteById(req, res);
    }

}

export default new RolRouter();