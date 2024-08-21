
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../actions/JokesActions";
import { initialState, JokesReducer } from "./JokesReducer";
const base_url = "https://v2.jokeapi.dev/joke/Any?lang=es&type=twopart";

export const JokesFetchReducer = () =>{
    const [ state, dispatch ] = useReducer(JokesReducer, initialState)
    
    const getData = () =>{
        fetch(base_url)
        .then( res=>{
            if(!res.ok) dispatch({type: ACTIONS.SET_ERROR,payload:"Request Error"});
            return res.json();
        })
        .then(info => {
            setTimeout(() => {
                dispatch({type:ACTIONS.SET_DATA, payload:info});
            }, 100);            
        })
        .catch(err=>{
            dispatch({type:ACTIONS.SET_ERROR, payload:err});
        })
    };
    // useEffect va a disparar la llamada al endpoint
    useEffect(()=>{
        getData();
    },[]);

    return state;
}