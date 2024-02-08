"use client"

import DataTable from "react-data-table-component";

export default function Table({data, columns, onRowClicked}){

    return <DataTable
                selectableRows
                pagination
                columns={columns}
                data={data}
                fixedHeader
                onRowClicked={onRowClicked}
                fixedHeaderScrollHeight="87%" />
}