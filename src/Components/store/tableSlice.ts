import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RowObj {
  name: string;
  status: string;
  date: string;
  progress: number;
}

interface TableState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: TableState = {
  data: [],
  loading: true,
  error: null,
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setData, setLoading, setError } = tableSlice.actions;
export default tableSlice.reducer;
