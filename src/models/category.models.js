import { Model, Schema, model } from 'mongoose';

const schema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    status: {
        type: Boolean,
        default: true,
    }
},{
    collection:"category",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})

class CategoryModel extends Model {}

schema.loadClass(CategoryModel);

export default model('Category', schema);