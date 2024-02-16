import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TeacherEntity } from "./entities/teacher.entity";
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';


@Injectable()
export class TeachersRepository extends Repository<TeacherEntity> {
  constructor(private dataSource: DataSource) {
    super(TeacherEntity, dataSource.createEntityManager());
  }
  async createTeacher(createTeacherDto:CreateTeacherDto) {
    try{
      return this.save(createTeacherDto);
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
  async updateTeacher(id: number, UpdateTeacherDto:UpdateTeacherDto) {
    try{
        const teachers = await this.findById(id);
        const updateTeacher = {...teachers,...UpdateTeacherDto};
        console.log(teachers);
        return this.save(UpdateTeacherDto);
      } catch (error){
        throw error;
      }
    }
    async removeTeacher(id: number) {
      try{
        const teachers = await this.findById(id);
        // return this.remove(wallet);
        return this.delete({id});
      } catch (error){
        throw error;
      }
    }
  
  
   
  }
  