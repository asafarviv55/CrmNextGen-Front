"use client"

import DataTable from "react-data-table-component";

export default function Table({data, columns, onRowClicked}){

    return <DataTable
                electableRows
                pagination
                columns={columns}
                data={data}
                fixedHeader
                selectableRows
                onRowClicked={onRowClicked}
                fixedHeaderScrollHeight="87%" />
}