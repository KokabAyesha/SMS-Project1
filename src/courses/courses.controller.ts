import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    const courses = await this.coursesService.create(createCourseDto);
    return { success:true,data: courses, };
    // return this.coursesService.create(createCourseDto);
  }

  // @Get()
  // findAll() {
  //   return this.coursesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.coursesService.findOne(+id);
  // }


  @Get()
  async findAll() {
    try{
      const courses = await this.coursesService.findAll();
      return { success:true,data: courses };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find courses'};
    }
  }


  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    try{
      const courses = await this.coursesService.findOne(id);
      return { success:true,data: courses };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to find wallet data.'};
    }
   
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCourseDto: UpdateCourseDto) {
      try{
        const courses = await this.coursesService.update(id, UpdateCourseDto);
        return { success:true,data: courses};
      } catch (error){
        console.log(error);
        return {success:false,message:'unabel to update courses.'};
      }
  }


  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }


  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
   
    try{
      const wallet = await this.coursesService.remove(id);
      return { success:true,
        message: 'courses with id ${id} has been deleted successfully' };
    } catch (error){
      console.log(error);
      return {success:false,message:'unabel to update courses.'};
    }
  }
}
