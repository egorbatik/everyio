import express from 'express'
import router from './src/routes'

export const app = express();
const port = 3000


app.use('/', router);

app.listen(port, () => {
    console.log('The application is listening on port 3000!');
})