import { Grid, InputAdornment, TextField } from '@mui/material';
import { setAbv, setName, setPage } from '../../redux/beer';
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import _ from 'lodash';
import { useState } from 'react';

const Filter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const name = _.get(state, 'filter.name', '');
  const abv = _.get(state, 'filter.abv', '');
  const [value, setValue] = useState({ beerName: name, abv: abv });

  const handleChangeValue = (evt: any, name: string) => {
    setValue({ ...value, [name]: evt.target.value });
    dispatch(setPage(1));

    if (name === 'beerName') {
      dispatch(setName(evt.target.value));
    } else if (name === 'abv') {
      dispatch(setAbv(evt.target.value));
    }
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems='center'
        style={{ marginBottom: 15 }}
      >
        <Grid item lg={5}>
          <TextField
            variant='outlined'
            size='small'
            placeholder='search'
            value={value.beerName}
            onChange={(_) => handleChangeValue(_, 'beerName')}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            label='abv'
            size='small'
            value={value.abv}
            onChange={(_) => handleChangeValue(_, 'abv')}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Filter;
