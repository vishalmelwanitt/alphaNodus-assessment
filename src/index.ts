import express from 'express';
import routes from './app';

const PORT = process.env.API_PORT || 3000;
const index = express();

index.use('/v1', routes);

index.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default index;