import Loader from "@/app/compoments/loader/loader";
import { Note } from "@/models/lead-model";
import appConfig from "@/utils/app-config";
import { useState } from "react";

export default function LeadNote({ note, setNote, leadId }: {note:Note, setNote: Function, leadId: number}){

    const [load, setLoad ] = useState<boolean>(false);
    const [err, setErr ] = useState<string>("");

    async function save (formData: FormData)  {
        setLoad(true);
        try {
            const response = await fetch( appConfig.leadsUrl, {
                method: "post",
                body: formData
            })
            if( !response.ok ) throw new Error(response.status?.toString())
            alert("נשמר בהצלחה");
        } catch (error:any) {
            setErr(error.message);            
        }finally{
            setLoad(false);
        }
    }

    const date = new Date(note.createdOn);


    return (
        <form className="form relative" action={save}>

            <label>
                <span>Date:</span>
                <input type="text" name='name' required defaultValue={date.toDateString()}/>
            </label>

            <div className="flex gap">
                <label>
                    <span>Time:</span>
                    <input type="time" name='time' required defaultValue={date.toTimeString()}/>
                </label>

                <label>
                    <span>Status:</span>
                    <select name="status" defaultValue={note.status} required>
                        <option value="1">new</option>
                        <option value="2">open</option>
                        <option value="3">closed</option>
                    </select>
                </label>

            </div>

            <label>
                <span>Record:</span>
                <textarea name="note" rows={8} defaultValue={note.record}></textarea>
            </label>

            <div className="flex colmun gap">
                <button className="btn btn-primary">Save</button>
                <button type="button" className="btn btn-goust" onClick={() => setNote(null)}>Back</button>
            </div>

            {load && <Loader />}
            {err && <span>{err}</span>}

        </form>
    )
}