import { Router } from "express";
import typeStudyController from "../controllers/typeStudy.controller";
import typeStudyValidation from "../validations/typeStudy.validation";
class TypeStudyRouter{
    constructor(){
        this.router=Router();
    }

    init(){
        return this.router.get('/', this.all)
                          .post('/',typeStudyValidation.createRecord(), this.create)
                          .get('/:id', this.getById)
                          .patch('/:id',typeStudyValidation.updateRecord(), this.updateById)
    }

    async all(req, res){
        const controller = new typeStudyController();
        return controller.listRecords(req, res);
    }

    async create(req, res){
        const controller = new typeStudyController();
        return controller.createRecord(req, res);
    }

    async getById(req, res){
        const controller = new typeStudyController();
        return controller.getById(req, res);
    }

    async updateById(req, res){
        const controller = new typeStudyController();
        return controller.updateById(req, res);
    }

}

export default new TypeStudyRouter();