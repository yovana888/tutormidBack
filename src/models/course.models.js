import { Model, Schema, model } from 'mongoose';

const schema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    idCategory: {
        ref: 'Category',
        type: Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }
},{
    collection:"course",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})

class CategoryModel extends Model {}

schema.loadClass(CategoryModel);

export default model('Course', schema);