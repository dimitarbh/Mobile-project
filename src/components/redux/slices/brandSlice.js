import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    brands: [],
    isLoading: false,
    error: null,
}

export const brands = createAsyncThunk(
    'brands',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://smartphonearena-be-production.up.railway.app/brands');
            return response.data.brand; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const modelsData = createAsyncThunk(
    'brand/models',
    async (brandId, thunkAPI) => {
        try {
            const response = await axios.get('https://smartphonearena-be-production.up.railway.app/brands/')
        }
    }
)

const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        setBrands: (state, action) => {
            state.brands = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(brands.fulfilled, (state, action) => {
                state.brands = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(brands.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(brands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { setBrands, setLoading, setError } = brandsSlice.actions;
export default brandsSlice.reducer;
