import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // userSlice - export default userSlice.reducer;

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
