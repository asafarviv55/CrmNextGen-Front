import Loader from "@/app/compoments/loader/loader";
import Tray from "@/app/compoments/tray/tray";
import LeadModel from "@/models/lead-model";
import appConfig from "@/utils/app-config";
import { useState } from "react";


export default function LeadsForm({callback, lead}: {callback: Function, lead?:LeadModel}){

    const [load, setLoad ] = useState<boolean>(false);
    const [err, setErr ] = useState<string>("");


    const sources = ["website", "referral", "Social Media", "Email Campaign", "Cold Call", "Event/Trade Show", "Advertisement"];
    const statuses = ["New", "Contacted", "Qualified", "Not Interested", "Converted", "Lost"];
    const priorities = ["High", "Medium", "Low"];
    const industries = ["Technology", "Healthcare", "Finance", "Manufacturing", "Retail", "Education"];

    async function save (formData: FormData)  {

        setLoad(true);
        try {
            const response = await fetch( appConfig.leadsUrl, {
                method: "POST",
                headers: {
                    mode: "cors",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            })
            if( !response.ok ) throw new Error(response.status)
            alert("נשמר בהצלחה");
            callback();
        } catch (error:any) {
            setErr(error.message);            
        }finally{
            setLoad(false);
        }
    }

    return (
        <form className="form relative" action={save}>

            <label>
                <span>Name:</span>
                <input type="text" name='name' required value={lead?.name}/>
            </label>
           
            <label>
                <span>Email:</span>
                <input type="email" name='email' required/>
            </label>
           
            <label>
                <span>Phone:</span>
                <input type="text" name='phone' required/>
            </label>

            <div className="grid colmuns-2 gap">

                <label>
                    <span>Source:</span>
                    <select name="source" required>
                        {sources.map((s,i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                </label>


                <label>
                    <span>Status:</span>
                    <select name="status" required>
                        {statuses.map((s,i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                </label>

            </div>
            
            <div className="grid colmuns-2 gap">

                <label>
                    <span>priority:</span>
                    <select name="priority" required>
                        {priorities.map((p,i) => <option key={i} value={p}>{p}</option>)}
                    </select>
                </label>


                <label>
                    <span>industry:</span>
                    <select name="industry" required>
                        {industries.map((d,i) => <option key={i} value={d}>{d}</option>)}
                    </select>
                </label>

            </div>

            <label>
                <span>Note:</span>
                <textarea name="note" rows="8"></textarea>
            </label>

            <button className="btn btn-primary">Save</button>

            {load && <Loader />}
            {err && <span>{err}</span>}

        </form>
)
}