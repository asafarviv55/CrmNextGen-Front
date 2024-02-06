export default class LeadModel{
    id: number
    name: string
    source: string
    phone: string
    email: string
    status: LeadStatus
    assignTo: number
    priority: string
    createdOn: string
    updated_on: string
    createdBy: number
    updated_by: number
    customerId: any
    notes: Note[]
}

// export default class LeadModel{
//     name: string;
//     source: "website" | "referral" | "Social Media" | "Email Campaign" | "Cold Call" | "Event/Trade Show" | "Advertisement";
//     phone: string;
//     email: string;
//     status: "New" | "Contacted" | "Qualified" | "Not Interested" | "Converted" | "Lost";
//     assignTo: "Sales Representative 1" | "Sales Representative 2" | "Sales Manager";
//     priority: "High" | "Medium" | "Low";
//     industry: "Technology" | "Healthcare" | "Finance" | "Manufacturing" | "Retail" | "Education";
//     note: string;
//     dateOfEntry: Date;
//     customerId: number;
//     notes: Note[]
// }


  
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


