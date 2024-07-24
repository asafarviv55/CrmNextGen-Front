"use client"

import Table from "@/app/compoments/table";
import LeadsTop from "./leads-top";
import LeadModel, { LeadStatus } from "@/models/lead-model";
import Tray from "@/app/compoments/tray/tray";
import { createContext, useState } from "react";
import LeadHistory from "./lead-history";
import OptionsModel from "@/models/options-model";

interface ILeadsProps{
    leads: LeadModel[]
    options: OptionsModel[]
}

export const OptionsContext = createContext<OptionsModel[]>([]);

export default function Leads({leads, options}:ILeadsProps){

    const [showTray, setShowTray] = useState<boolean>(false);
    const [row, setRow] = useState<LeadModel>();
    const [leadsList, setLeadList ] = useState<LeadModel[]>(leads);

    const filter = (type:string) => {
        if(type === 'all') setLeadList([...leads])
        if(type === 'New') setLeadList(leads.filter(l => l.status === "New"))
        if(type === 'closed') setLeadList(leads.filter(l => l.status === "closed"))
    }

    const rowClick = (d:LeadModel) => {
        setShowTray(true)
        setRow(d)
    }

    const columns = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
            width: "80px" 
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => <a href={`tel:${row.phone}`}>{row.phone}</a>,
            sortable: true,
        },
        {
            name: 'Source',
            selector: row => row.source,
            sortable: true,
            width: "110px"
        },
        {
            name: 'Status',
            selector: row => <span className={`lead-status lead-status-${row.status}`}>{ row.status }</span>,
            sortable: true,
        },
        {
            name: 'Created By',
            selector: row => row.createdBy,
            sortable: true,
        },
        {
            name: 'Assign To',
            selector: row => row.assignTo,
            sortable: true,
        },
        {
            name: 'Created',
            selector: row => row.createdOn,
            sortable: true,
        },
    ];

    return (
        <OptionsContext.Provider value={options}>
            <div className="leads grid-80-auto">
                <LeadsTop filter={filter}/> 
                <div className="box-wrap">
                    <div className="box">
                        <Table data={leadsList} columns={columns} onRowClicked={rowClick}/>
                    </div>
                </div>

                { showTray && 
                    <Tray setClose={()=> setShowTray(false)} title={"Client History"}>
                        {row && <LeadHistory lead={row}/> }
                    </Tray>
                }
            </div>
        </OptionsContext.Provider>
    )
    
}