import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { StudentsEntity } from 'src/students/entities/student.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';

@Entity('studentcourses')
export class StudentCourseEntity extends BaseEntity {
  @ManyToOne(() => StudentsEntity, (student) => student.stdcourses)
  @JoinColumn({ name: 'studentId' })
  student: StudentsEntity;

  @ManyToOne(() => CourseEntity, (courses) => courses.stdCourses)
  @JoinColumn({ name: 'courseId' })
  courses: CourseEntity;
}