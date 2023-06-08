import { Router } from "express";
import categoryController from "../controllers/category.controller";
import categoryValidation from "../validations/category.validation";
class CategoryRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/',categoryValidation.createRecord(), this.create)
                          .get('/:id', this.getById)
                          .patch('/:id',categoryValidation.updateRecord(), this.updateById)
                          .delete('/:id', this.deleteById)
    }

    async all(req, res){
        const controller = new categoryController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new categoryController();
        return controller.createRecord(req, res);
    }

    async getById(req, res){
        const controller = new categoryController();
        return controller.getById(req, res);
    }

    async updateById(req, res){
        const controller = new categoryController();
        return controller.updateById(req, res);
    }

    async deleteById(req, res){
        const controller = new categoryController();
        return controller.deleteById(req, res);
    }

}

export default new CategoryRouter();