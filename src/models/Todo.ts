import { prop, Ref } from '@typegoose/typegoose';
import { Column, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './Base';
import { Category } from './Category';
import { User } from './User';
// class Todo{
//     @prop({required:true, unique:true})
//     public title?:string;
//     @prop()
//     public description?:string;
//     @prop({ref:()=>Category})
//     public category?:Ref<Category>
//     @prop({ref:()=>User})
//     public user?:Ref<User>;
// }

class Todo extends BaseModel{
    @Column("varchar", {   
        required:true, 
        unique:true})
    public title?:string;
    
    @Column("text")
    public description?:string;

    @ManyToMany( () => Category, (category) => category.todos)
    public category ?: Category[];

    @ManyToOne( () => User, (user) => user.todos)
    public users ?: User[];

    
}

export{Todo};