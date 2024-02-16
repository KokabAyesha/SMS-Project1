import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesRepository } from './courses.repository';

@Injectable()
export class CoursesService {
  // [x: string]: any;
  createCourse: any;
  updateCourse: any;
  removeCourse: any;
  removeCourseDto: any;
  CoursesReposistry: any;
  constructor(private readonly coursesReposistry: CoursesRepository) {}
 
  async create(createWalletDto: CreateCourseDto) {
    return this.coursesReposistry.createCourse(CreateCourseDto);
  }
 
  async findAll() {
    return this.coursesReposistry.findAll();
  }


  async findOne(id: number) {
    return this.coursesReposistry.findById(id);
  }


  async update(id: number, updateCoursetDto: UpdateCourseDto) {
    return this.coursesReposistry,this.updateCourse(id,updateCoursetDto);  }


  async remove(id: number) {
    return this.CoursesReposistry,this.removeCourse(id);
  }

}
