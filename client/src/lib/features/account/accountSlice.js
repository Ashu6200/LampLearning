const { createSlice } = require("@reduxjs/toolkit");

const accountSlice = createSlice({
    name: "account",
    initialState: {
        account: null,
        registerData: null,
        registerData: null,
        registerToken: null,
        isAuthenticated: false
    },
    reducers: {
        registerationData: (state, action) => {
            const data = action.payload
            state.registerData = data
        },
        regitser: (state, action) => {
            const { registerToken } = action.payload
            state.registerToken = registerToken
        },
        login: (state, action) => {
            const { token, user } = action.payload
            state.account = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state,) => {
            state.account = null;
            state.isAuthenticated = false;
        },
    }
})

export const { registerationData, regitser, login, logout } = accountSlice.actions
export default accountSlice.reducer