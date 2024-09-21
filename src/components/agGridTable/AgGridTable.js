import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import '../../files/styles/components/agGridTable/agGridTable.scss';

export default function AgGridTable({ rowData, colDefs }) {
    return (
        <div className="ag-theme-quartz max-height-300">
            <AgGridReact
                domLayout="autoHeight"
                rowData={rowData || []}
                columnDefs={colDefs || []} />
        </div>
    )
}