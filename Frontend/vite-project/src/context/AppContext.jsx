import { createContext } from "react";
import { doctors } from "../assets/assets/assets";

export const AppContext =createContext();

const AppContextProvider =(props)=>{ //what we will add in value object we can access it to any component
    
    const currenySymbol = "$";
    const value ={
        doctors,
        currenySymbol
    }

    return (
        <AppContext.Provider value ={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider





