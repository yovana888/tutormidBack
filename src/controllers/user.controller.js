import user from "../models/user.model";
import { IdException } from "../exceptions/id.exceptions";
import { ErrorException } from "../exceptions/error.exceptions";
import rolController from "./rol.controller";
import { isValidHttpUrl, isValidPassword} from '../utils/url.utils';
import BucketS3 from '../providers/s3.providers'

import mongoose from "mongoose";
class UserController {
  constructor() {
    this.model = user;
    this.bucket = new BucketS3('avatars');
  }

  async listRecords(req, res) {
    try {
      const records = await this.model
        .find({ status: true })
        .populate("idRol", {
          name: 1,
        });
    console
      return res.status(200).json(records);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createRecord(req, res) {
    try {
      const {idRol, password} = req.body;
      const controller = new rolController();
      const isValid = await controller.existId(idRol);
      if (!isValid) throw new ErrorException('IdRol Not Found',404);
      if(password!=='' && password){
            const isValid = isValidPassword(password);
            if(isValid!==true) throw new ErrorException(isValid,404);
      }
      const newData = this.model({ ...req.body });
      await newData.save();
      return res.status(200).json(newData);
    } catch (error) {
      return res.status(error?.code || 500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) throw new IdException();
      const data = await this.model.findById(id).populate("idRol", {
        name: 1,
      });
      if (!data) throw new IdException();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(error?.code || 500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      const {idRol, photoUrl} = body;
      const controller = new categoryController();

      if(idRol){
          const isValid = await controller.existId(idRol);
          if (!isValid) throw new IdCategoryException();
      }

      if(photoUrl){
        const isValidUrl = isValidHttpUrl(photoUrl);
        if (!isValidUrl) throw new ErrorException('url photo invalid',400);
      }

      if (!mongoose.Types.ObjectId.isValid(id)) throw new IdException();
      const data = await this.model.findById(id);
      if (!data) throw new IdException();

      await data.updateOne(body);

      return res.status(200).json({ message: "Ok" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async uploadImage(req, res){
    try{
        let { body, files } = req;
        const { photo } = files;
        const { idUser } = body;
        console.log(photo, idUser, 'nanita' )
        //const photoUrl = await this.bucket.uploadFile(photo, idUser);
        return res.status(200).json({message:'process'}); 
    }catch{
        return res.status(500).json({ message: error.message });
    }
}

  async deleteById(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) throw new IdException();
      const record = await this.model.findById(id);
      if (!record) throw new IdException();

      await record.updateOne({ status: false });
      return res.status(204).send();
    } catch (error) {
      return res.status(error?.code || 500).json({ message: error.message });
    }
  }
}

export default UserController;
