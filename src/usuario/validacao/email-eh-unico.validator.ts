import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import{Injectable} from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailEhUnicoValidator implements ValidatorConstraintInterface{
    constructor(private usuarioRepository : UsuarioRepository){}

   async validate(value: any, validationArguments?: ValidationArguments):  Promise<boolean> {
        const usuarioComEmailExistente = await this.usuarioRepository.existeComEmail(value);
        return !usuarioComEmailExistente;
    } 
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailEhUnicoValidator

        });
    }
}