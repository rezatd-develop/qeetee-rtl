"use client";

import { createSlice } from "@reduxjs/toolkit";
import enumerations from '../../../../constants/enumerations/enumerations';

const initialState = {
    pageNameType: enumerations.pageNameTypes.home,
};

export const pageDetailsSlice = createSlice({
    name: "pageDetails",
    initialState,
    reducers: {
        setPageNameType: (state, action) => {
            state.pageNameType = action.payload;
        },
    },
});

export const { setPageNameType } = pageDetailsSlice.actions

export default pageDetailsSlice.reducer;