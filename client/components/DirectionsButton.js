import React from 'react';
import { Button } from 'react-bootstrap';

var DirectionButton = (props) => (
  //should redirect you to maps
  <button onClick={()=>{console.log('Button Clicked')} bsStyle="primary"}>
    <p>DirectionButton</p>
  </button>
);

// props.result.address
// props.result.zipcode

//http://maps.apple.com/?q=51.507269,-0.127695
//http://maps.apple.com/?address=

//https://developer.apple.com/library/safari/featuredarticles/iPhoneURLScheme_Reference/
//MapLinks/MapLinks.html#//apple_ref/doc/uid/TP40007899-CH5-SW1