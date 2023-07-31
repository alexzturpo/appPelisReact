import styled from 'styled-components'
import {Props} from "../interfaces/interface"

export const Flex = styled.div <Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
` 
export const Container = styled.div <Props>`
    margin-top: 50px;
    width: 90%;
    height: calc(${props => props.height}vh - 50px);
    border-radius: 60px 60px 0 0; 


    // background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(179, 19, 18,.6) 0%, rgba(43, 42, 76,.6) 100%),
    url(${props => props.src}) no-repeat;

    background-size: cover;
    background-position: center;
    // opacity: .5;


    // background: red;
`

export const ContainerInfo = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;  
    display: flex;
    flex-direction: column;
    align-items: center
`
export const AvatarContainer = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    margin: auto;
    // background: red;
`
export const Degrade = styled.div<Props>`
    width: 100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(198,0,0,0) 0%,rgba(43, 42, 76,1) 100%);;
    margin: auto;
`
export const Avatar = styled.div<Props>`
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.height}vh;
    background: url(${props => props.src}) no-repeat;
    background-position: top;
    // background-size: cover;  
    // background-origin: padding-box;
    // padding: 60px;
`
export const MiniAvatar = styled.div<Props>`
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    padding: 10px;
    background: url(${props => props.src}) no-repeat;
    background-size: contain;
    background-position: top;
    // background: red;
    border-radius: 50%;
    border: 1px solid white;
`
export const ButtonBuy = styled.button<Props>`
    width: 80%;
    margin: auto;
    background: rgba(198,0,0,1);
    border: none;
    color: white;
    padding: 10px;
    margin: 10px; 
    border-radius: 7px;
    cursor: pointer; 
`