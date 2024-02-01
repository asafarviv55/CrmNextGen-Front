import Loader from "@/app/compoments/loader/loader";
import Tray from "@/app/compoments/tray/tray";
import LeadModel from "@/models/lead-model";
import appConfig from "@/utils/app-config";
import { useState } from "react";


export default function LeadsForm({callback, lead}: {callback: Function, lead?:LeadModel}){

    const [load, setLoad ] = useState<boolean>(false);
    const [err, setErr ] = useState<string>("");

    async function save (formData: FormData)  {
        setLoad(true);
        try {
            const response = await fetch( appConfig.leadsUrl, {
                method: "post",
                body: formData
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

            <div className="flex gap">

                <label>
                    <span>Source:</span>
                    <select name="source" required>
                        <option value="Linkedin">Linkedin</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                    </select>
                </label>


                <label>
                    <span>Status:</span>
                    <select name="status" required>
                        <option value="open">open</option>
                        <option value="closed">closed</option>
                        <option value="new">new</option>
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