import LeadModel, { LeadStatus, Note } from "@/models/lead-model";
import { useState } from "react";
import arrowIcon from "../../../../public/arrow-l.svg";
import calanderIcon from "../../../../public/calander.svg";
import clockIcon from "../../../../public/clock.svg";
import circleIcon from "../../../../public/circle.svg";
import Image from "next/image";
import LeadNote from "./lead-note";


export default function LeadHistory({lead}: {lead:LeadModel}){

    const [ note, setNote ] = useState<Note>()

    if(note) return <LeadNote note={note} setNote={setNote} leadId={lead.id}/>
    
    return (
        <div className="leads-history flex colmun gap">
           { lead.notes?.map(n => {
            const date = new Date(n.createdOn);
            return (
                <div onClick={() => setNote(n)} className={`leads-history-box leads-history-box-${n.status} flex colmun gap`} key={n.id}>
                    <div>
                        <Image src={calanderIcon} alt="" />
                        <span>{date.toLocaleDateString()}</span>
                    </div>
                    <div>
                        <Image src={clockIcon} alt="" />
                        <span>{date.toLocaleTimeString()}</span>
                    </div>
                    <div>
                        <Image className={`image-${n.status}`} src={circleIcon} alt="" />
                        <span>{LeadStatus[n.status]}</span>
                    </div>
                    <Image className="arrow-icon" src={arrowIcon} alt="" />
                </div>)
            }
           )} 

        </div>    
    )
}