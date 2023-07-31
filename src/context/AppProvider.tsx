
import {Context} from "./AppContext"
import { AppState, PropsProvider } from "../interfaces/interface"
import hero from '../assets/3D-Man.png'
const state: AppState = {
    name: '3D-Man',
    url: hero ,
    time: '2 horas'
}
export const AppProvider = ({ children }:PropsProvider )=>{
    return (
        <Context.Provider value={{state}}>
            { children }
        </Context.Provider>
    )
}