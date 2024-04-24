import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    brands: [],
    isLoading: false,
    error: null,
}

export const brands = createAsyncThunk(
    'brands',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(
                'https://smartphonearena-be-production.up.railway.app/brands',
                {
                    method: 'GET',
                    headers: {'Content-Type':'application/json'},
                }
            )
            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
            const brandsData = await response.json();
            return brandsData;
        } catch(error) {
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
