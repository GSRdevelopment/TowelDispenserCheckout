import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51I5Jz5GCNckDYYIo4RyI6Zoj7EHfEcUEHLB8hRGRwGkeLmGscr4spB76sDQAReMWy8FjUdTsLczl6Ga64AqBfnU300sKDq05j6",
  {apiVersion: "2020-08-27"});

ReactDOM.render(
    <Elements stripe={stripePromise}>
        <App />
    </Elements>,
    document.getElementById('root')
);