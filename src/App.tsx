import './App.css';

import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Card from './components/Card';
import Filter from './components/filter';
import Pagination from './components/pagination';
import _ from 'lodash';
import { useGetBeerByPageNdFilterQuery } from './services/beer';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector((state) => state);
  const [sleep, setSleep] = useState(true);

  const { page, abv, name } = _.get(state, 'filter', {
    page: 1,
    abv: '',
    name: '',
  });

  const { data, isLoading } = useGetBeerByPageNdFilterQuery({
    page,
    abv,
    name,
  });

  useEffect(() => {
    if (isLoading) {
      setSleep(true);
    } else {
      setTimeout(() => {
        setSleep(false);
      }, 1500);
    }
  }, [isLoading]);

  return (
    <div className='App'>
      <Container>
        <Filter />
        {sleep ? (
          <div className='spinner'>
            <CircularProgress color='warning' />
            <Typography>Loading...</Typography>
          </div>
        ) : (
          <Grid container spacing={2}>
            {data?.map((beer) => (
              <Grid item key={beer.id}>
                <Card beer={beer} />
              </Grid>
            ))}
          </Grid>
        )}
        <Pagination />
      </Container>
    </div>
  );
}

export default App;
