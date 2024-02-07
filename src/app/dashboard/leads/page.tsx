import getData from "@/app/utils/fetcher"
import DataTable from "react-data-table-component";
import Leads from "./leads";
import LeadModel from "@/models/lead-model";
import OptionsModel from "@/models/options-model";
import appConfig from "@/utils/app-config";
import "./leads.css";


export default async function LeadsPage(){    
    const leads = await getData<LeadModel[]>( appConfig.leadsUrl );
    const options = await getData<OptionsModel[]>( appConfig.optionsUrl );
    return <Leads leads={leads} options={options}/>
}