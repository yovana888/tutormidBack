import {celebrator, Segments, Joi} from 'celebrate'

class NivelValidation{
    constructor(){
        this.celebrate = celebrator({ reqContext:true }, {convert:true});
    }

    createRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required()
            })
        })
    }

    updateRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().optional()
            })
        })
    }
}

export default new NivelValidation();