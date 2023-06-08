import {celebrator, Segments, Joi} from 'celebrate';
import fileExtensions from "joi-file-extensions";

class UserValidation{
    constructor(){
        this.celebrate = celebrator({ reqContext:true }, {convert:true});
    }

    createRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                fullName:Joi.string().required(),
                password: Joi.string().required().allow(''),
                email: Joi.string().email({ tlds: { allow: false } }).required(),
                tokenGoogle:Joi.string().when('password', { is: '', then: Joi.required().messages({
                    'string.required': `Google Token is required`,
                })}),
                idRol:Joi.string().required()
            })
        })
    }

    updateRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                fullName:Joi.string().optional(),
                password: Joi.string().optional(),
                idRol:Joi.string().optional(),
                studies: Joi.array().items(
                    {
                        universidad: Joi.string(),
                        grado:Joi.string(),
                    }
                ).optional(),
                aboutMe:Joi.string().optional(),
                photoUrl:Joi.string().optional(),
                phone:Joi.string().optional(),
                dateBirthay:Joi.string().optional(),
            })
        })
    }

    uploadImage(){
        const joiCustom = Joi.extend(fileExtensions);
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                photo:joiCustom.file().contents(),
                idUser:Joi.string().required()
            })
        })
    }


}

export default new UserValidation();