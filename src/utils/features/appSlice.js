import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSideBarOpen: true,
    },
    reducers: {
        toggle: (state, action) => {
            state.isSideBarOpen = !state?.isSideBarOpen
        },
        collapseSideBar: (state, action) => {
            state.isSideBarOpen = false
        }
    }
})


export const {toggle, collapseSideBar} = appSlice.actions
export default appSlice.reducer