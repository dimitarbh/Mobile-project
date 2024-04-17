import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    profile: null,
}

export const login = createAsyncThunk(
    'auth/login',
    async({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://smartphonearena-be-production.up.railway.app/auth/login',
                {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({email, password})
                }
            )
            if(!response.ok){
                const errorData = await response.json()
                return thunkAPI.rejectWithValue(errorData)
            }
            const userData = await response.json()
            return userData.user
        } catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://smartphonearena-be-production.up.railway.app/auth/register',
                {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({email, password})
                }
            )
            if(!response.ok){
                const errorData = await response.json()
                return thunkAPI.rejectWithValue(errorData)
            }
            const userData = await response.json()
            thunkAPI.dispatch(login({email, password}))
            return userData
        } catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

// export const profile = createAsyncThunk(
//     'auth/profile',
//     async (_, thunkAPI) => {
//         try {
//             const response = await fetch('https://smartphonearena-be-production.up.railway.app/auth/profile', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 return thunkAPI.rejectWithValue(errorData);
//             }
//             const profileData = await response.json();
//             return profileData;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

const authAPI = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        // updateProfile: (state, action) => {
        //     state.profile = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled,(state, action) => {
            state.user = action.payload
            state.error = null 
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null 
        })
        // .addCase(profile.fulfilled, (state, action) => {
        //     state.profile = action.payload
        //     state.isLoading = false
        //     state.error = null
        // })
        // .addCase(profile.pending, (state) => {
        //     state.isLoading = true
        //     state.error = null
        // })
        // .addCase(profile.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.payload
        // })
    }
})

export const {loginSuccess, logout, updateProfile} = authAPI.actions
export default authAPI.reducer