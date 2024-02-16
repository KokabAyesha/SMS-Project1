import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { StudentsEntity } from 'src/students/entities/student.entity';
import { TeacherEntity } from 'src/teachers/entities/teacher.entity';

@Entity('studentcourses')
export class StudentCourseEntity extends BaseEntity {
  @ManyToOne(() => StudentsEntity, (student) => student.stdTeachers)
  @JoinColumn({ name: 'studentId' })
  student: StudentsEntity;

  @ManyToOne(() => TeacherEntity, (teachers) => teachers.stdTeachers)
  @JoinColumn({ name: 'courseId' })
  teachers: TeacherEntity;
}