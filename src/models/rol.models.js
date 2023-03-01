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
    collection:"rol",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})

class RolModel extends Model {}

schema.loadClass(RolModel);

export default model('Rol', schema);