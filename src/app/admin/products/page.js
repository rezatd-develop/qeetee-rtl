'use client'

import { useEffect, useState } from "react";

import AgGridTable from "@/src/components/agGridTable/AgGridTable";
import { GetApProductsList } from "@/src/services/api/apiRequests/admin/products/AdminPanelServices";

export default function AdminProducts() {
    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => getProducts(), []);

    const getProducts = () => {
        let parameters = {
            'page_size': pageSize,
            'page_number': pageNumber,
        }

        GetApProductsList(parameters, (result) => console.log('***result', result), (resolve) => console.log('***resolve', resolve))
    }

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);
    return <div className="p-3">
        <div className="fw-bold font-size-1300 bg-dark text-white py-2 px-3 rounded mb-3">Products</div>
        <AgGridTable rowData={rowData}
            colDefs={colDefs} />
    </div>
}