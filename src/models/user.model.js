import { Model, Schema, model } from "mongoose";
import { hashSync, genSaltSync, compareSync } from "bcryptjs";

const schema = new Schema({
    fullName:{
        type:String,
        required:true,
    },
    studies:{
        type:[{
            universidad : String,
            grado : String
        }],
        default : []
    },
    aboutMe:{
        type:String,
        default: '',
    },
    photoUrl:{
        type: String,
        default: '',
        required: false,
    },
    phone:{
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    emailVerify: {
        type: Boolean,
        default: false,
    },
    tokenGoogle: {
        type: String,
        default: '',
    },
    dateBirthay:{
        type: String,
        default: '',
    },
    password: {
        type: String,
        required: false,
    },
    idRol: {
        ref: 'Rol',
        type: Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
},{
    collection:"users",
    timestamps:{
        createdAt:'created_at',
        updatedAt: 'update_at'
    },
    versionKey: false
})


class UserModel extends Model {}

schema.loadClass(UserModel);

export default model('User', schema);