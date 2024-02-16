import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from './students.reposistory';
@Injectable()
export class StudentsService {
  
  createStudent: any;
  updateStudent: any;
  removeStudent: any;
  removeStudentDto: any;
  constructor(private readonly studentsReposistry: StudentRepository) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.studentsReposistry.createStudent(createStudentDto);
  }
 
  async findAll() {
    return this.studentsReposistry.findAll();
  }


  async findOne(id: number) {
    return this.studentsReposistry.findById(id);
  }


  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.studentsReposistry,this.updateStudent(id,updateStudentDto);  }


  async remove(id: number) {
    return this.studentsReposistry,this.removeStudent(id);
  }

}
