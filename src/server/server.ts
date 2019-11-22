import * as express from 'express';
import * as morgan from 'morgan'
import routes from './routes'
import passport from 'passport';
import * as path from 'path'


const app = express();


//Middlewares
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.json());
// app.use(passport.initialize())
app.use(routes);

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html' ))
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
