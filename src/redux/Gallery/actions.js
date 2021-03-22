import {
    GET_MARS_ROVER_IMAGES,
    RECEIVE_MARS_ROVER_IMAGES,

} from './constants';

//initial dispatch action to get the rover images
export function getRoverImages(data) {
    return {
        type : GET_MARS_ROVER_IMAGES,
        data
    }
}

//action to receie the rover images and update the reducer
export function receiveRoverImages(data) {
    return {
        type : RECEIVE_MARS_ROVER_IMAGES,
         data
    }
}

