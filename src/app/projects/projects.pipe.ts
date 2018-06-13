import {Pipe, PipeTransform } from '@angular/core';
import {Project} from '../clases/project';
import * as moment from 'moment';

@Pipe({name: 'progress'})
export class ProjectsPipe implements PipeTransform {
    transform(project: Project): number {
        if (project.done_by) {
            let db = moment(project.done_by);
            let td = Date.now();
            let sd = moment(project.status.date);
            let progress = db.diff(td,'days')/db.diff(sd,'days')*100
            return Math.round(progress);
        }
        else {
        return 0;
        }
    
    }
}