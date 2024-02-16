import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) 
  {
    const wallet = await this.teachersService.create(createTeacherDto);
    return { success:true,data: wallet, };
  }
  // {
  //   return this.teachersService.create(createTeacherDto);
  // }

  @Get()
  async findAll() {
    try{
      const teachers = await this.teachersService.findAll();
      return { success:true,data: teachers };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find teacher'};
    }

    // return this.teachersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try{
      const wallet = await this.teachersService.findOne(id);
      return { success:true,data: this.teachersService };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find teacher data.'};
    }
   
  }

  // findOne(@Param('id') id: string) {
  //   return this.teachersService.findOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeachertDto: UpdateTeacherDto) {
      try{
        const wallet = await this.teachersService.update(id, updateTeachertDto);
        return { success:true,data: this.teachersService };
      } catch (error){
        console.log(error);
        return {success:false,message:'unabel to update teachers.'};
      }
  }

  // update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
  //   return this.teachersService.update(+id, updateTeacherDto);
  // }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
   
    try{
      const wallet = await this.teachersService.remove(id);
      return { success:true,
        message: 'teacher with id ${id} has been deleted successfully' };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to update teacher.'};
    }
  }
}

  // remove(@Param('id') id: string) {
  //   return this.teachersService.remove(+id);
  // }
