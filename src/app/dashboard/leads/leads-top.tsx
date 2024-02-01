"use client";

import Tray from "@/app/compoments/tray/tray";
import { useState } from "react";
import LeadsForm from "./leads-form";

export default function LeadsTop({filter}){

    const [showTray, setShowTray] = useState<boolean>(false);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    
    const afterAddLid = () => {
        setShowTray(false);
    }
    
    const innerFilter = (type: string) => {
        setActiveFilter(type);
        filter(type);
    }

    return (
        <div className="top-bar border-bottom">
            <div className="flex">
                <h1>Leads</h1>
                <span onClick={() => innerFilter("all")} className={`tab ${activeFilter === "all" ? "active" : ""}`}>All leads</span>
                <span onClick={() => innerFilter("new")} className={`tab ${activeFilter === "new" ? "active" : ""}`}>New leads</span>
                <span onClick={() => innerFilter("closed")} className={`tab ${activeFilter === "closed" ? "active" : ""}`}>Closed leads</span>
            </div>

            <div className="flex gap items-center">
                <div className="input-search goust">
                    <input type="search" placeholder="Search here.."/>
                </div>
                <button className="btn btn-goust icon icon-filter">Filter by</button>
                <button className="btn btn-goust icon icon-sort">Sort by</button>
                <button onClick={() => setShowTray(true)} className="btn btn-primary icon icon-create">Create listing</button>
            </div>

            { showTray && <>
                <Tray setClose={()=> setShowTray(false)} title="New Lead">
                    <LeadsForm callback={afterAddLid}/>
                </Tray>
            </> }
        </div>
)
}