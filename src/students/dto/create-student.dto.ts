import { IsBoolean, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";


export class CreateStudentDto {
    @IsNotEmpty()
    
    @IsString()
    courseName: string;

    @IsNumber()
    creditHours: number;
    @IsNumber()
    fee: number;
    @IsBoolean()
    isManager: boolean;
}
