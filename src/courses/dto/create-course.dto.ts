import { IsBoolean, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";


export class CreateCourseDto {
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
