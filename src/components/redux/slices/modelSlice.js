import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    models: [],
    isLoading: false,
    error: null,
}

export const models = createAsyncThunk(
    'models',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(
                'https://smartphonearena-be-production.up.railway.app/models',
                {
                    method: 'GET',
                    headers: {'Content-Type':'application/json'},
                }
            )
            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
            const modelsData = await response.json();
            return modelsData;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const modelsSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setModels: (state, action) => {
            state.models = action.payload;
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
            .addCase(models.fulfilled, (state, action) => {
                state.models = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(models.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(models.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default modelsSlice.reducer;
