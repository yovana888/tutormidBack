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
    collection:"typeStudy",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})

class TypeStudyModel extends Model {}

schema.loadClass(TypeStudyModel);

export default model('TypeStudy', schema);