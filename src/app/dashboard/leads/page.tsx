import Table from "@/app/compoments/table";
import getData from "@/app/utils/fetcher"
import DataTable from "react-data-table-component";

export default async function Leads(){
    const data = await getData('https://jsonplaceholder.typicode.com/todos');
    return (
        <div className="leads grid-80-auto">
            <div className="top-bar border-bottom">
                <div className="flex">
                    <h1>Leads</h1>
                    <span className="tab active">All leads</span>
                    <span className="tab">New leads</span>
                    <span className="tab">Closed leads</span>
                </div>

                <div className="flex gap items-center">
                    <div className="input-search goust">
                        <input type="search" placeholder="Search here.."/>
                    </div>
                    <button className="btn btn-goust icon icon-filter">Filter by</button>
                    <button className="btn btn-goust icon icon-sort">Sort by</button>
                    <button className="btn btn-primary icon icon-create">Create listing</button>
                </div>
            </div>

            <div className="box-wrap">
                <div className="box">
                    <div className="scroll">
                        <Table data={data}  />
                    </div>
                </div>
            </div>

        </div>
    )
}