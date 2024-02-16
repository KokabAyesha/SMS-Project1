import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CourseEntity } from "./entities/course.entity";
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesRepository extends Repository<CourseEntity> {
  constructor(private dataSource: DataSource) {
    super(CourseEntity, dataSource.createEntityManager());
  }
  async createCourse(createCourseDto:CreateCourseDto) {
    try{
      return this.save(createCourseDto);
    } catch (error){
      throw error;
    }
  }
  async findAll() {
    try{
      return this.find();
    } catch (error){
      throw error;
    }
  }
  async findById(id: number) {
    try{
      return this.findOne(id);

      // return this.findOne({
      //   where: {
      //     id,
      //   },
      // });
    } catch (error){
      throw error;
    }
  }
  async updateCourse(id: number, UpdateCourseDto:UpdateCourseDto) {
    try{
      const Course = await this.findById(id);
      const updateCourse = {...Course,...UpdateCourseDto};
      console.log(Course);
      return this.save(UpdateCourseDto);
    } catch (error){
      throw error;
    }
  }
  async removeCourse(id: number) {
    try{
      const Course = await this.findById(id);
      // return this.remove(course);
      return this.delete(id);
    } catch (error){
      throw error;
    }
  }


 
}
