const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const passport = require('passport');

    const JwtStrategy = require('passport-jwt').Strategy;
    const ExtractJwt = require('passport-jwt').ExtractJwt;
    const secret = process.env.SECRET;

const cors = require('cors');
const UsersModel = require('./models/UsersModel');

const passportJwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};

const passportJwt = (passport) => {
passport.use(
    new JwtStrategy(
        passportJwtOptions,
        (jwtPayload, done) => {
            UsersModel.findOne({_id: jwtPayload.id})
            .then(
                (document) => {
                    return done(null, doucment);
                }
            )
            .catch(
                (err) => {
                    return done(null, null);
                }
            )
        }

    )
)
};

const ProductsRoutes = require('./routes/ProductsRoutes');
const FeedsRoutes = require('./routes/FeedsRoutes');
const UsersRoutes = require('./routes/UsersRoutes');
const EmailsRoutes = require('./routes/EmailsRoutes');

const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(passport.initialize());
server.use(cors());

passportJwt(passport);

const dbURL = process.env.DB_URL; 

mongoose.connect(
    dbURL, 
    {
        'useNewUrlParser': true,
        'useUnifiedTopology': true
    
    }
) .then (
    () => {
        console.log('You are connected to MongoDB');
    }
).catch(
    (e) => {
        console.log ('catch', e);
    }
);

server.use(
    '/products', 
    ProductsRoutes
);

server.use(
    '/feeds',
    passport.authenticate('jwt', {session:false}), 
    FeedsRoutes
);

server.use(
    '/feeds/like',
    FeedsRoutes
);

server.use(
    '/users', 
    UsersRoutes
);

server.use(
    '/emails', 
    EmailsRoutes
);

server.get(
    '/',
    (req, res) => {
        res.send("<h1>Welcome to MyCars.com</h1>" +
        "<a href='/about'>About Us</a>");
    }
);

server.get(
    '/about',
    (req, res) => {
        res.send("<h1>About Us</h1>" +
        "<a href='/contact'>Contact Us</a>");
    }
);

server.get(
    '/contact',
    (req, res) => {
        res.send("<h1>Contact Us</h1>" +
        "<a href='/products'>Our Products</a>");
    }
);

server.get(
    '/products',
    (req, res) => {
        res.send("<h1>Our Products</h1>") 
    }
);

server.get(
    '/products',
    (req, res)=>{
        ProductsModel
        .find()
        .then(
            (results) => {
                res.json(results)
            }
        )
        .catch(
            (e)=> {
                console.log('error occured', e)
            }
        );
    }
);

// Route for 404
server.get('*', (req, res)=> {
    res.send('404! Page not found :(')
});

// Connect to port (range 3000 - 9999)
// http://127.0.0.1:8081 (aka http://localhost:8080)
server.listen( 
    process.env.PORT || 8081, ()=>{
        console.log('You are connected http://127.0.0.1:8081!');
    }
);