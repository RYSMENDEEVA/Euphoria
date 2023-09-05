import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: '',
        error: '',
        filter: {
            limit: 9,
            page: 1,
            
        }
    },
    reducers: {}
})

export default productSlice.reducer