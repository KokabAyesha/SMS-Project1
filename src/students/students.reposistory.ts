import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { StudentsEntity} from 'src/students/entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

//'src/students/entities/student.entity';

@Injectable()
export class StudentRepository extends Repository<StudentsEntity> {
  constructor(dataSource: DataSource) {
    super(StudentsEntity, dataSource.createEntityManager());
  }
  async createStudent(createWalletDto:CreateStudentDto) {
    try{
      return this.save(CreateStudentDto);
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
      return this.findOne({
        where: {
          id,
        },
      });
    } catch (error){
      throw error;
    }
  }
  async updateStudent(id: number, UpdateStudentDto:UpdateStudentDto) {
    try{
        const students = await this.findById(id);
        const updateWallet = {...students,...UpdateStudentDto};
        console.log(students);
        return this.save(UpdateStudentDto);
      } catch (error){
        throw error;
      }
    }
    async removeStudent(id: number) {
      try{
        const students = await this.findById(id);
        // return this.remove(wallet);
        return this.delete({id});
      } catch (error){
        throw error;
      }
    }
  
  
   
  }
  