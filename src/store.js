import { configureStore } from '@reduxjs/toolkit';
import shareSlice from "./modules/shareSlice";
import resellerSlice from "./modules/reseller/resellerSlice";

export const store = configureStore({
    reducer: {
        share: shareSlice,
        reseller: resellerSlice
    },
});