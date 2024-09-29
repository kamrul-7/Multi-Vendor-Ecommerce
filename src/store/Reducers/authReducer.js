import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue }) => {
        try {
            
            const { data } = await api.post('/api/admin-login', info, { withCredentials: true });
            
            return data;
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response?.data || 'Login failed');
        }
    }
);

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loader = true;
            })
            .addCase(admin_login.fulfilled, (state, action) => {
                state.loader = false;
                state.successMessage = 'Login successful';
            })
            .addCase(admin_login.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.payload;
            });
    },
});

export default authReducer.reducer;
