import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

import * as moment from 'moment';
import { v4 as uuid } from 'uuid';

import { Project, AREAS, APPROVERS } from '../clases/project';
import { PROJECTS } from '../clases/mocks/project-mock';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project; 
  areas:String[] = AREAS;
  approvers:String[] = APPROVERS;
  projectList: Project[] = PROJECTS;

  separatorKeysCodes = [ENTER, COMMA];
  removable: boolean = true;

  constructor() { }

  ngOnInit() {
    //this.project.status = {status: 'Nuevo', date: moment().toISOString()};
    //this.project.required_by = {name:'', date: moment().format('DD/MM/YYYY')};
    this.project = this.projectList[1];
  }

  onAdd(): void {
    this.project.id = uuid();
    this.project.created = moment().toISOString();
    this.projectList.push(this.project); 
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.project.approved_by.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(approver: any): void {
    let index = this.project.approved_by.indexOf(approver);

    if (index >= 0) {
      this.project.approved_by.splice(index, 1);
    }
  }

}
