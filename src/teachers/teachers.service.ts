import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeachersRepository } from './teachers.repository';

@Injectable()
export class TeachersService {
  createTeacher: any;
  updateTeacher: any;
  removeTeacher: any;
  removeTeacherDto: any;
  
  constructor(private readonly teachersReposistry: TeachersRepository) {}

  async create(createTeacherDto: CreateTeacherDto) {
    return this.teachersReposistry.createTeacher(createTeacherDto);
  }

  async findAll() {
    return this.teachersReposistry.findAll();
  }

  async findOne(id: number) {
    return this.teachersReposistry.findById();
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return this.teachersReposistry, this.updateTeacher(id, updateTeacherDto);
  }

  async remove(id: number) {
    return this.teachersReposistry, this.removeTeacher(id);
  }
}
