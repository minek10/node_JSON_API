import { Document, model, Schema } from 'mongoose';

export interface IProject extends Document{
    name:string;
    description:string;
    image:string;
    tags:string[];
    technologies:string[];
}

const ProjectSchema : Schema = new Schema({
    name:{type:String, required:true, unique:true},
    description:{type:String, required:true, unique:false},
    image:{type:String, required:false},
    tags:{type:[String], required:false},
    technologies:{type:[String], required:false}
});

const Project = model<IProject>('Project', ProjectSchema);
export {Project};