export default class LeadModel{
    id: number
    name: string
    source: string
    phone: string
    email: string
    status: LeadStatus
    assignTo: number
    createdOn: string
    updated_on: string
    createdBy: number
    updated_by: number
    customerId: any
    notes: Note[]
}
  
export interface Note {
    id: number
    status: number
    createdOn: string
    record: string
    createdBy: number
}

export enum LeadStatus{
    "new" = 1,
    "open" = 2,
    "closed" = 3,
}