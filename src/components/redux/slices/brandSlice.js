import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    brands: [],
    isLoading: false,
    error: null,
}

export const fetchBrands = createAsyncThunk(
    'brands/fetchBrands',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://smartphonearena-be-production.up.railway.app/brands');
            console.log(response.data.brands)
            return response.data.allBrands; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchModelsByBrand = createAsyncThunk(
    'brands/fetchModelsByBrand',
    async (brandId, thunkAPI) => {
        try {
            const response = await axios.get(`https://smartphonearena-be-production.up.railway.app/brands/${brandId}/models`);
            return response.data.models;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

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
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.brands = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchBrands.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchBrands.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchModelsByBrand.fulfilled, (state, action) => {
                state.brands = action.payload; 
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchModelsByBrand.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchModelsByBrand.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { setBrands, setLoading, setError } = brandsSlice.actions;
export default brandsSlice.reducer;
