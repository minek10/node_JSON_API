import { Router } from 'express';
import { PageHandler } from './handlers/PageHandler';
import { ProjectsHandler } from './handlers/ProjectsHandler';
import { ProjectValidator } from './validators/ProjectValidator';

const router = Router();
router.get('/', PageHandler.getHome);
router.get('/event', PageHandler.getLanding);
router.get('/projects', ProjectsHandler.getProjects);
router.get('/projects/add', ProjectsHandler.addProject);
router.post('/projects/create', ProjectsHandler.uploadImage, ProjectValidator.getValidationRules(), ProjectValidator.validate, ProjectsHandler.create);
router.get('/projects/:slug', ProjectsHandler.getProjectBySlug);

export {router};