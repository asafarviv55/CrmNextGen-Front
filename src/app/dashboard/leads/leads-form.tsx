import Loader from "@/app/compoments/loader/loader";
import Tray from "@/app/compoments/tray/tray";
import LeadModel from "@/models/lead-model";
import appConfig from "@/utils/app-config";
import { useContext, useState } from "react";
import { OptionsContext } from "./leads";


export default function LeadsForm({callback, lead}: {callback: Function, lead?:LeadModel}){

    const options = useContext(OptionsContext);
    
    const [load, setLoad ] = useState<boolean>(false);
    const [err, setErr ] = useState<string>("");

    const sources = options.filter(o => o.metakey === "source");
    const statuses = options.filter(o => o.metakey === "status");
    const priorities = options.filter(o => o.metakey === "Priority");
    const industries = options.filter(o => o.metakey === "Industry");

    async function save (formData: FormData)  {

        setLoad(true);
        try {
            const response = await fetch( appConfig.leadsUrl, {
                method: "POST",
                headers: {
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
                        {sources.map(s => <option key={s.id} value={s.id}>{s.metavalue}</option>)}
                    </select>
                </label>


                <label>
                    <span>Status:</span>
                    <select name="status" required>
                        {statuses.map(s => <option key={s.id} value={s.id}>{s.metavalue}</option>)}
                    </select>
                </label>

            </div>
            
            <div className="grid colmuns-2 gap">

                <label>
                    <span>priority:</span>
                    <select name="priority" required>
                        {priorities.map(p => <option key={p.id} value={p.id}>{p.metavalue}</option>)}
                    </select>
                </label>


                <label>
                    <span>industry:</span>
                    <select name="industry" required>
                        {industries.map(i => <option key={i.id} value={i.id}>{i.metavalue}</option>)}
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