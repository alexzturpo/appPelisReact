import { Flex } from "../styled.components"
import Carrusel from "./carrusel"
import Info from "./info"

const Main = ():JSX.Element => { 
    return (
        <> 
            <Flex>
                <Carrusel/>
                <Info/>
            </Flex>
        </>
    ) 
}
export default Main