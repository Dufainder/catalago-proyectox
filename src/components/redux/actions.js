import { PRODUCTS, PRODUCT } from "./types";
import axios from "axios";

const url = 'http://localhost:3001/productos'

export const getProducts = ()=>{
    
    return (dispatch) => {
        axios.get(`${url}`)
        .then( json => {
            console.log(json, 'el json')
            return dispatch ({
                 type: PRODUCTS,
                 payload: json.data
                 
            })
        }).catch(error => {
            console.log(error, 'error')
        })

    } 

} 


export const getProducto = (id)=>{
    
    return (dispatch) => {
        axios.get(`${url}`)
        .then( json => {
            console.log(json, 'el json')
            return dispatch ({
                 type: PRODUCT,
                 payload: json.data
                 
            })
        }).catch(error => {
            console.log(error, 'error')
        })

    } 

} 