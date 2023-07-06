import { IsNotEmpty, IsString } from 'class-validator';

export class InputCreateBoxDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export interface OutputCreateBoxDto {
  boxId: string;
}

export interface CreateBox {
  execute(input: InputCreateBoxDto): Promise<OutputCreateBoxDto>;
}
