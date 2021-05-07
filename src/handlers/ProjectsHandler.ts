import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import multer from 'multer';
import slug from 'slug';
import { v4 } from 'uuid';
import { Project } from '../models/Project';
class ProjectsHandler{
    static multerOptions ={
        storage : multer.diskStorage({
            destination: (req, file, cb)=>{
                cb(null, './public/uploads/projects');
            },
            filename:(req, file, cb)=>{
                const extension = file.originalname.split('.')[file.originalname.split('.').length-1];
                cb(null, `${v4()}.${extension}`);
            }
        })
    };
    static async getProjects(req:Request, res:Response){
        //get Projects datas 
        const projects = await JSON.parse( (await readFile(`${process.cwd()}/src/models/projects.json`)).toString()).projects;
        //templating render
        res.render('projects', {datas:{projects}});
    }

    static async getProjectBySlug(req:Request, res:Response){
        const projectsData = await JSON.parse(await (await readFile(`${process.cwd()}/src/models/projects.json`)).toString());
        const project= projectsData.projects.find(project => slug(project.name) === req.params.slug);
        res.render('projects/details', { data: { project} });
    }

    static async getProjectsById(req:Request, res:Response){
        const projectsData = await JSON.parse(await (await readFile(`${process.cwd()}/src/models/projects.json`)).toString());
        const project= projectsData.projects.find(project => project.id === parseInt(req.params.id));
        res.render('projects/details', { data: { project} });
    }

    static async addProject(req:Request, res:Response){
        const errors = await req.flash('error');
        res.render('projects/addProject', {errors});
    }

    static uploadImage= multer(ProjectsHandler.multerOptions).single('image');

    static async create(req:Request, res:Response){
        console.log(req.body);
        await Project.create(req.body);
        res.status(201).send('ok');
    }
}

export {ProjectsHandler};