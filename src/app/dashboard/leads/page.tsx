import getData from "@/app/utils/fetcher"
import DataTable from "react-data-table-component";
import Leads from "./leads";
import LeadModel from "@/models/lead-model";
import appConfig from "@/utils/app-config";
import "./leads.css";

export default async function LeadsPage(){    
    // const leads = await getData<LeadModel[]>( appConfig.leadsUrl );
    const leads = [
        {
            "id": 10,
            "name": "asaf arviv",
            "source": "Linkedin",
            "phone": "0537128129",
            "email": "assaf@gmail.com",
            "status": 1,
            "assignTo": 1,
            "createdOn": "2024-01-28T12:00:38.000+00:00",
            "updated_on": "2024-01-28T12:00:38.000+00:00",
            "createdBy": 1,
            "updated_by": 1,
            "customerId": null,
            "notes": [
                {
                    "id": 1,
                    "status": 1,
                    "createdOn":"2024-01-28T12:00:38.000+00:00",
                    "record": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                },
                {
                    "id": 2,
                    "status": 2,
                    "createdOn":"2024-01-29T12:00:38.000+00:00",
                    "record": "Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                }
            ]
        },
        {
            "id": 11,
            "name": "Naftali stein",
            "source": "Facebook",
            "phone": "0537128129",
            "email": "naftali@gmail.com",
            "status": 2,
            "assignTo": 2,
            "createdOn": "2024-02-01T12:00:38.000+00:00",
            "updated_on": "2024-02-01T12:00:38.000+00:00",
            "createdBy": 1,
            "updated_by": 1,
            "customerId": null,
            "notes": [
                {
                    "id": 1,
                    "status": 3,
                    "createdOn":"2024-01-28T12:00:38.000+00:00",
                    "record": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                },
                {
                    "id": 2,
                    "status": 2,
                    "createdOn":"2024-01-29T12:00:38.000+00:00",
                    "record": "Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                }
            ]
        },
        {
            "id": 12,
            "name": "Netanel Moshe",
            "source": "Facebook",
            "phone": "0537128129",
            "email": "Netanel@gmail.com",
            "status": 3,
            "assignTo": 3,
            "createdOn": "2024-02-01T12:00:38.000+00:00",
            "updated_on": "2024-02-01T12:00:38.000+00:00",
            "createdBy": 1,
            "updated_by": 1,
            "customerId": null,
            "notes": [
                {
                    "id": 1,
                    "status": 2,
                    "createdOn":"2024-01-28T12:00:38.000+00:00",
                    "record": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                },
                {
                    "id": 2,
                    "status": 2,
                    "createdOn":"2024-01-29T12:00:38.000+00:00",
                    "record": "Dolore quo, culpa recusandae repudiandae nihil debitis quod iure maiores maxime placeat molestias, inventore nobis fuga neque impedit minima porro necessitatibus ad?",
                    "createdBy": 1
                }
            ]
        }
    ]

    return <Leads leads={leads}/>
}