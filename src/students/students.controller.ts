import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const students = await this.studentsService.create(createStudentDto);
    return { success:true,data: students, };

    //return this.studentsService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    try{
      const students = await this.studentsService.findAll();
      return { success:true,data: students };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find students'};
    }

    
  //  return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const students = await this.studentsService.findOne();
      return { success:true,data: students };
    } catch (error){
      console.log(error);
       console.log(error);
      return {success:false,message:'unabel to find students'};
    }
    // return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id, , ParseIntPipe') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    try{
      const students = await this.studentsService.update(id, updateStudentDto);
      return { success:true,data: students };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to update students'};
    }


    // return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    {
   
      try{
        const students = await this.studentsService.remove(id);
        return { success:true,
          message: 'students with id ${id} has been deleted successfully' };
      } catch (error){
        console.log(error);
        return {success:false,message:'unabel to update wallet.'};
      }
  
    // return this.studentsService.remove(+id);
  }
}
}
