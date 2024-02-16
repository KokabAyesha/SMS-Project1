import { BaseEntity, Column, Entity,} from "typeorm";
// import { BaseEntity} from 'src/shared/base.entity'

@Entity('courses')
export class CourseEntity extends BaseEntity{
    

    @Column()
    courseName: string;

    @Column()
    creditHours: number;


    @Column({nullable: true})
    fee: number;


    @Column()
    isManager: boolean;
    stdCourses: any;
    stdTeachers: any;
}

