"use client"

import DataTable from "react-data-table-component";

export default function Table({data}){
    const columns = [
        {
            name: '#',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'userId',
            selector: row => row.userId,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Completed',
            selector: row => row.completed,
            sortable: true,
        },
    ];
    return <DataTable
            electableRows
            pagination
            columns={columns}
            data={data}
            fixedHeader
            fixedHeaderScrollHeight="87%"
            />
}