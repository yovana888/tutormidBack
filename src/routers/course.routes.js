import { Router } from "express";
import courseController from "../controllers/course.controller";
import courseValidation from "../validations/course.validation";
class courseRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/',courseValidation.createRecord(), this.create)
                          .get('/search/', courseValidation.searchRecord(), this.searchByName)
                          .get('/:id', this.getById)
                          .patch('/:id',courseValidation.updateRecord(), this.updateById)
                          .delete('/:id', this.deleteById)
    }

    async all(req, res){
        const controller = new courseController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new courseController();
        return controller.createRecord(req, res);
    }

    async getById(req, res){
        const controller = new courseController();
        return controller.getById(req, res);
    }

    async searchByName(req, res){
        const controller = new courseController();
        return controller.searchByName(req, res);
    }

    async updateById(req, res){
        const controller = new courseController();
        return controller.updateById(req, res);
    }

    async deleteById(req, res){
        const controller = new courseController();
        return controller.deleteById(req, res);
    }

}

export default new courseRouter();