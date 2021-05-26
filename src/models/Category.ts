import { prop } from '@typegoose/typegoose';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './Base';
import { Todo } from './Todo';
// class Category{
//     @prop({required:true, unique:true})
//     public title?:string;
// }

@Entity()

class Category extends BaseModel{

    @Column("varchar", {
        nullage:false,
        length:64
    })
    public title?:string;

    @ManyToMany( ()=> Todo, (todo) => todo.category)
    public todos ?: Todo[];
}


export{Category};