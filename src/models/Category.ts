import { prop } from '@typegoose/typegoose';
import { Column, OneToMany } from 'typeorm';
import { BaseModel } from './Base';
import { Todo } from './Todo';
// class Category{
//     @prop({required:true, unique:true})
//     public title?:string;
// }

class Category extends BaseModel{

    @Column("varchar", {
        nullage:false,
        length:64
    })
    public title?:string;

    @OneToMany( ()=> Todo, (todo) => todo.category)
    public todos ?: Todo[];
}


export{Category};