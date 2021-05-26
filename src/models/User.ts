import { plugin, prop, Ref } from '@typegoose/typegoose';
import passportLocal from 'passport-local-mongoose';
import { Column, Entity, OneToMany } from 'typeorm';
import { Todo } from './Todo';
@plugin(passportLocal, {
    usernameField:'email'
})

// class User{
//     @prop({required:true, unique:true})
//     public email?:string;
//     @prop({ref: ()=>Todo})
//     public todos?: Ref<Todo>[];
// }

@Entity() 

class User{
    @Column("varchar", {
        required:true, 
        unique:true
    })
    public email?:string;

    @OneToMany( () => Todo, (todo) => todo.users)
    public todos?: Todo[];
}

export{User};