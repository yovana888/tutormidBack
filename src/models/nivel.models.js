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
    collection:"nivel",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})

class NivelModel extends Model {}

schema.loadClass(NivelModel);

export default model('Nivel', schema);