import { IsNotEmpty, IsString } from 'class-validator';

export class SignInInputDto {
  @IsString({ message: 'Nome do usuário é obrigatório' })
  @IsNotEmpty({ message: 'Nome do usuário é obrigatório' })
  username: string;

  @IsString({ message: 'Senha obrigatória' })
  @IsNotEmpty({ message: 'Senha obrigatória' })
  password: string;
}

export class SignInOutputDto {
  token: string;
  userId: string;
}
