import { Injectable } from '@angular/core';

import { Project } from '../clases/project';
import { PROJECTS } from '../clases/mocks/project-mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }
}
