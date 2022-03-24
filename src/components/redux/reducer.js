import { PRODUCTS, PRODUCT } from "./types";


const initialState={

    products:[],
    product:{}

}

export const Reducer = (state=initialState, action) =>{

     switch(action.type){
         case PRODUCTS : return{
             ...state,
             products: action.payload
         }

         case PRODUCT : return{
            ...state,
            product: action.payload
        }

         default: return state
         }
     }


