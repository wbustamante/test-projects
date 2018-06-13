export class Project {
    id: string;
    req: number;
    title: string; 
    description: string;
    attachements: string[];
    status: Status;
    required_by: Person;
    area: string;
    created: string;
    done_by?: string;
    assigned_to: Person[];
    approved_by: Person[];
}
class Status {
    status: string; 
    date: string;
}
class Person {
    name: string; 
    email?: string;
    date?: string;
}

export const AREAS = [
    'Operaciones',
    'Finanzas',
    'IT',
    'RRHH'
]

export const APPROVERS = [
    'Gloria Lopez',
    'Alexander Marriaga',
    'Paola Ramos',
    'William Bustamante'
]