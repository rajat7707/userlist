import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable} from 'mdbreact';

const DatatablePage = (props) => {

    let data = {};

    if(props.type === 'todolist'){

        const columns = [
            { label: <span>id </span>, field: 'id', sort: 'asc', width: 270},
            { label: <span>Name </span>, field: 'name', sort: 'asc', width: 270},
            { label: <span>Phone </span>, field: 'phone', sort: 'asc', width: 270},
            { label: <span>Address</span>, field: 'address', sort: 'asc', width: 270},
        ];
        const rows = props.data;
        data = { columns, rows };
    }

    return (
            <MDBDataTable
                striped
                bordered
                hover
                btn
                data={data}
                noBottomColumns
                exportToCSV = {true}
                filter="name"
                theadColor="blue"
                noRecordsFoundLabel="No User Added"
                responsiveSm = {true}
                
            />
    );
}

export default DatatablePage;