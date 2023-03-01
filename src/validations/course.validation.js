import {celebrator, Segments, Joi} from 'celebrate'
class TypeStudyValidation{
    constructor(){
        this.celebrate = celebrator({ reqContext:true }, {convert:true});
    }

    createRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().required(),
                idCategory: Joi.string().required()
            })
        })
    }

    updateRecord(){
        return this.celebrate({
            [Segments.BODY]:Joi.object().keys({
                name:Joi.string().optional(),
                idCategory: Joi.string().optional()
            })
        })
    }

    searchRecord(){
        return this.celebrate({
            [Segments.QUERY]:Joi.object().keys({
                name:Joi.string().required(),
            })
        })
    }
}

export default new TypeStudyValidation();