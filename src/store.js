import { configureStore } from '@reduxjs/toolkit';
import shareSlice from "./modules/shareSlice";

export const store = configureStore({
    reducer: {
        share: shareSlice
    },
});