import { Button, Divider, Grid, Stack } from '@mui/material';
import { nextPge, previewsPge } from '../../redux/beer';
import { useDispatch, useSelector } from 'react-redux';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import _ from 'lodash';

const Pagination = () => {
  const state = useSelector((state) => state);
  const {
    page: current,
    abv,
    name,
  } = _.get(state, 'filter', {
    page: 1,
    abv: '',
    name: '',
  });
  const dispatch = useDispatch();

  return (
    <form>
      <Grid
        container
        justifyContent='center'
        style={{ marginTop: 25, marginBottom: 15 }}
      >
        <Stack
          direction='row'
          spacing={2}
          divider={<Divider orientation='vertical' flexItem />}
        >
          <Button
            className='pagination__btn'
            color='primary'
            variant='contained'
            disabled={current === 1 || abv !== '' || name !== ''}
            onClick={() => dispatch(previewsPge())}
          >
            <ChevronLeftIcon />
          </Button>

          <Button className='pagination__btn' variant='contained'>
            {current}
          </Button>

          <Button
            className='pagination__btn'
            color='primary'
            variant='contained'
            disabled={abv !== '' || name !== ''}
            onClick={() => dispatch(nextPge())}
          >
            <ChevronRightIcon />
          </Button>
        </Stack>
      </Grid>
    </form>
  );
};

export default Pagination;
