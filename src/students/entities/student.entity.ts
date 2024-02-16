import { Entity, Column, OneToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "src/shared.entities/base.entity";
@Entity("students")

export class StudentsEntity extends BaseEntity{

@Column()
StdName : string;

@Column()
age : number;

@Column()
contactNo: number;


@Column()
studyProgramm: number;
    stdcourses: any;
    stdTeachers: any;


}


