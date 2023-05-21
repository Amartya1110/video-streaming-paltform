import { createSlice } from "@reduxjs/toolkit";


const suggestionCacheSlice = createSlice({
    name:"suggestionCache",
    initialState: {},
    reducers:{
        addToSuggestionCache: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
})

/*
* The structure of the SuggestionCache will be as follows:
* {
    "serachQuery": [suggestion1, suggestion2, and so on...]
*/

export const {addToSuggestionCache} = suggestionCacheSlice.actions

export default suggestionCacheSlice.reducer