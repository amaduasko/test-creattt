import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { IBeer } from '../../types';

const CardComponent = ({ beer }: { beer: IBeer }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
        }}
      >
        <CardMedia
          component='img'
          height='200'
          image={beer.image_url}
          alt={beer.name}
          style={{ width: 'auto' }}
        />
      </div>

      <CardContent
        style={{
          paddingBottom: 5,
          overflowY: 'auto',
          height: 170,
        }}
      >
        <Typography gutterBottom variant='h5' component='div'>
          {beer.name}, abv: {beer.abv}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {beer.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
