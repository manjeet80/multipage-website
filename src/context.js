import React, { useContext, useEffect, useReducer } from "react"
import {reducer} from './reducer'
const AppContext = React.createContext()

const API = "https://fakestoreapi.com/products?limit=5";

const intialState = {
    name:"",
    image:"",
    services:[]
}


const AppProvider = ({children}) =>{

const [state, dispatch] = useReducer(reducer,intialState)

const updateHomePage = () =>{
    return dispatch({
        type:"HOME_UPDATE",
        payload:{
            name:"Technical Website",
            image:"./images/hero.svg"
        }
    })
}
const updateAboutPage = () =>{
    return dispatch({
        type:"ABOUT_UPDATE",
        payload:{
            name:"About Page",
            image:"./images/about.svg"
        }
    })
}

const getServices = async (url) =>{
    try{
          const res = await fetch(url)
          const data = await res.json()
          dispatch({
            type:"GET_SERVICES",
            payload:data
            })
    }catch(err){console.log(err)
    }
}
useEffect(()=>{
getServices(API)
},[])
     return(
     <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
        {children}
        </AppContext.Provider>
        )
}

const useGlobalContext = () =>{
   return useContext(AppContext)
}

export {AppContext, AppProvider,useGlobalContext}