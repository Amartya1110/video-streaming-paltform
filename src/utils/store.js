import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import suggestionCacheSlice from "./features/suggestionCacheSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        suggestionCache: suggestionCacheSlice,
    },
})

export default store