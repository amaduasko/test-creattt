import { createSlice } from '@reduxjs/toolkit';

interface IFilter {
  page: number;
  name: string;
  abv: string;
}

const setHostFilter = (state: IFilter) =>
  localStorage.setItem('filter', JSON.stringify(state));

const getHostFilter = () => {
  const filter = localStorage.getItem('filter');
  if (filter) {
    return JSON.parse(filter);
  } else return null;
};

const initialState =
  getHostFilter() || ({ page: 1, name: '', abv: '' } as IFilter);

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage(state, { payload }) {
      setHostFilter({ ...state, page: payload });
      state.page = payload;
    },
    nextPge(state) {
      setHostFilter({ ...state, page: state.page + 1 });
      state.page += 1;
    },
    previewsPge(state) {
      if (state.page > 1) {
        setHostFilter({ ...state, page: state.page - 1 });
        state.page -= 1;
      }
    },
    setAbv(state, { payload }) {
      setHostFilter({ ...state, abv: payload });
      state.abv = `${payload}`;
    },
    setName(state, { payload }) {
      setHostFilter({ ...state, name: payload });
      state.name = `${payload}`;
    },
  },
});

export const { nextPge, previewsPge, setAbv, setName, setPage } =
  filterSlice.actions;
export default filterSlice.reducer;
