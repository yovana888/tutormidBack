import course from "../models/course.models";
import { IdException } from "../exceptions/id.exceptions";
import mongoose from "mongoose";
class CourseController {
  constructor() {
    this.model = course;
  }

  async listRecords(req, res) {
    try {
      const records = await this.model.find();
      return res.status(200).json(records);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createRecord(req, res) {
    try {
      const newData = this.model({ ...req.body });
      await newData.save();

      return res.status(200).json(newData);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) throw new IdException();
      const data = await this.model.findById(id).populate('idCategory',{
        name:1
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
      if (!mongoose.Types.ObjectId.isValid(id)) throw new IdException();

      const data = await this.model.findById(id);
      if (!data) throw new IdException();

      await data.updateOne(body);

      return res.status(200).json({ message: "Ok" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async searchByName(req, res){
     try {
        const { name } = req.query;
        const data = await this.model.find({name:{$regex:name}})
        return res.status(200).json(data.length > 0 ? data : []);
     } catch (error) {
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

export default CourseController;
