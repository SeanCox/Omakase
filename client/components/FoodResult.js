import React from 'react';
import { Image, Thumbnail, Button } from 'react-bootstrap';
import DirectionButton from './DirectionButton'
var FoodResult = (props) => (
    <div className='food-result'>
        <Thumbnail src={props.foodType.value.image}>
            <h3>{props.result.restaurant_name}</h3>
            <div>{props.result.address}</div>
            <div>{props.result.location_name} {props.result.zipcode}</div>
            <DirectionButton />
        </Thumbnail>
    </div>
);

export default FoodResult;
