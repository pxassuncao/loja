import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDTO{
    
    @IsNotEmpty({message:'O nome não pode ser vazio!'})
    nome: string;

    @IsEmail(undefined, {message:'O email informado é inválido!'})
    email: string;

    @MinLength(6, {message:'A senha ter que ser composta no minimo de seis caracteres!'})
    senha: string;
}