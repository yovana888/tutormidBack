import { Router } from "express";
import nivelController from "../controllers/nivel.controller";
import nivelValidation from "../validations/nivel.validation";
class NivelRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/',nivelValidation.createRecord(), this.create)
                          .get('/:id', this.getById)
                          .patch('/:id',nivelValidation.updateRecord(), this.updateById)
                          .delete('/:id', this.deleteById)
    }

    async all(req, res){
        const controller = new nivelController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new nivelController();
        return controller.createRecord(req, res);
    }

    async getById(req, res){
        const controller = new nivelController();
        return controller.getById(req, res);
    }

    async updateById(req, res){
        const controller = new nivelController();
        return controller.updateById(req, res);
    }

    async deleteById(req, res){
        const controller = new nivelController();
        return controller.deleteById(req, res);
    }

}

export default new NivelRouter();