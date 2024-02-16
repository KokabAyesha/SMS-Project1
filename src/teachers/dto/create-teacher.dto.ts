import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateTeacherDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsNumber()
    age: number;
    @IsNumber()
    salary: number;
    @IsBoolean()
    isManager: boolean;
}
