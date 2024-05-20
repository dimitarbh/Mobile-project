import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    models: [],
    selectedModel: null,
    isLoading: false,
    error: null,
};

export const fetchModels = createAsyncThunk(
    'models/fetchModels',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(
                'https://smartphonearena-be-production.up.railway.app/models',
                {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                }
            );
            if (!response.ok) {
                const errorData = await response.json();
                return thunkAPI.rejectWithValue(errorData);
            }
            const modelsData = await response.json();
            return modelsData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const fetchModelById = createAsyncThunk(
    'models/fetchModelById',
    async (modelId, thunkAPI) => {
      try {
        const response = await fetch(`https://smartphonearena-be-production.up.railway.app/model/${modelId}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response text:', errorText);
          return thunkAPI.rejectWithValue(errorText);
        }
  
        const modelData = await response.json();
        return modelData;
      } catch (error) {
        console.error('Error fetching model:', error);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

const modelsSlice = createSlice({
    name: 'models',
    initialState: {
        selectedModel: null,
        isLoading: false,
        error: null,
      },
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
            .addCase(fetchModels.fulfilled, (state, action) => {
                state.models = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchModels.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchModels.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchModelById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
              })
              .addCase(fetchModelById.fulfilled, (state, action) => {
                state.selectedModel = action.payload;
                state.isLoading = false;
                state.error = null;
              })
              .addCase(fetchModelById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Error fetching model details';
              });
    }
});

export default modelsSlice.reducer;
