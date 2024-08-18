import express from 'express';
import { PORT } from './env.js';
import middleware from './middleware/middlewware.js';
import route from './setup/parentRoute.js';


const app = express()

middleware(app)
route(app)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});