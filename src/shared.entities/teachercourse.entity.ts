import { Entity, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { TeacherEntity } from 'src/teachers/entities/teacher.entity';

@Entity('studentcourses')
export class StudentCourseEntity extends BaseEntity {
    @ManyToOne(() => TeacherEntity, (teachers) => teachers.stdTeachers)
    @JoinColumn({ name: 'courseId' })
    courses: TeacherEntity;

  @ManyToOne(() => CourseEntity, (courses) => courses.stdCourses)
  @JoinColumn({ name: 'courseId' })
  course: CourseEntity;
}