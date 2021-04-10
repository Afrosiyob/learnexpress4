const { Router } = require( "express" );
const User = require( "../models/User" );
const router = Router();
const bcrypt = require( "bcrypt" );
const config = require( "config" );

const jwt = require( "jsonwebtoken" );

const { check, validationResult } = require( "express-validator" );

// PREFIX => api/auth/registration

router.post(
    "/registration",
    // VALIDATION REQUEST
    [
        check( "email", "Incorrect email..." ).isEmail(),
        check( "password", "Very short password..." ).isLength( { min: 6 } ),
    ],

    async ( req, res ) => {
        try {
            // GET ERROR FROM VALIDATION
            const errors = validationResult( req );

            // CHECK ERROR
            if ( !errors.isEmpty() ) {
                return res.status( 400 ).json( {
                    error: error.array(),
                    message: "Wrong data...",
                } );
            }

            // GET REQUEST FROM FRONTEND
            const { email, password } = req.body;

            console.log( "Body : " + req.body );


            // CHECK USER WITH EMAIL
            const checkEmail = await User.findOne( { email } );

            if ( checkEmail ) {
                return res.status( 400 ).json( { message: "This user exist..." } );
            }

            // HASH PASSWORD FOR SECURTY
            const hashedPassword = await bcrypt.hash( password, 12 );

            // CREATE USER
            const user = new User( { email, password: hashedPassword } );

            // SAVE USER
            await user.save();

            // SEND ANSWER
            res.status( 201 ).json( { message: "User created..." } );
        } catch ( error ) {
            console.log( error.message );
            res.status( 500 ).json( { message: "Try again..." } );
        }
    }
);

// PREFIX => api/auth/login

router.post(
    "/login",
    // VALIDATION REQUEST
    [
        check( "email", "Incorrect email..." ).normalizeEmail().isEmail(),
        check( "password", "Enter Password" ).exists(),
    ],

    async ( req, res ) => {
        try {
            // GET ERROR FROM VALIDATION
            const errors = validationResult( req );

            // CHECK ERROR
            if ( !errors.isEmpty() ) {
                return res.status( 400 ).json( {
                    error: errors.array(),
                    message: "Wrong data...",
                } );
            }

            // GET REQUEST FROM FRONTEND
            const { email, password } = req.body;
            console.log( "Body : " + req.body );


            // CHECK AND GET USER WITH EMAIL
            const user = await User.findOne( { email } );

            if ( !user ) {
                return res.status( 400 ).json( {
                    message: "User not found...",
                } );
            }

            // COMPARE PASSWORD
            const isMatch = await bcrypt.compare( password, user.password );

            if ( !isMatch ) {
                return res.status( 400 ).json( { message: "Wrong password..." } );
            }

            // SET TOKEN
            const token = jwt.sign( { userId: user.id }, config.get( "jwtSecret" ), {
                expiresIn: "1d",
            } );

            res.json( {
                token,
                userId: user.id,
            } );
        } catch ( error ) {
            res.status( 500 ).json( { message: "Try again..." } );
        }
    }
);

module.exports = router;