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
  initialState: [[0,1,2,3,4,5,'what'], [0,1,2,3,4,5,'isthis']] as hitstype,
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

export const selectFracHits = (state:RootState) => state.frachits