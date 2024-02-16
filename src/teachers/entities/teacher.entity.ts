// export class Teacher {}
import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "src/shared.entities/base.entity";
@Entity("students")

export class TeacherEntity extends BaseEntity{
    [x: string]: any;

@Column()
StdName : string;

@Column()
age : number;

@Column()
contactNo: number;


@Column()
studyProgramm: number;
    stdcourses: any;


}