import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




const oneProductSlice = createSlice({
    name: "oneProduct",
    initialState: {
        product: {},
        status: '',
        error: ''
    },
    reducers: {},
})


export default oneProductSlice.reducer