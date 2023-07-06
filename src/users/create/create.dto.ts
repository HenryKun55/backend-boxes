import { IsNotEmpty, IsString } from 'class-validator';

export class InputCreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export interface OutputCreateUserDto {
  userId: string;
}

export interface CreateUser {
  execute(input: InputCreateUserDto): Promise<OutputCreateUserDto>;
}
