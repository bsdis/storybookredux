import {
  configureStore,
  createSlice,
  combineReducers,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export type hittype = [number, number, number, number, number, number, string];
export type hitstype = hittype[];

const addHitThunk = createAsyncThunk("frachits/fetch", async (hit: hittype) => {
  return [hit];
});
const frachitsSlice = createSlice({
  name: "frachits",
  initialState: null as hitstype | null,
  reducers: {
    add: (state, action: PayloadAction<hitstype>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addHitThunk.pending, (state, action) => {
      return state;
    });
    builder.addCase(addHitThunk.fulfilled, (state, action) => {
      return { ...action.payload };
    });
    builder.addCase(addHitThunk.rejected, (state, action) => {
      return null;
    });
  },
});

const rootReducer = combineReducers({
  frachits: frachitsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
export const frachitActions = { ...frachitsSlice.actions, addHitThunk };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
