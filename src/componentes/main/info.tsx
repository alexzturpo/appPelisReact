import { useNavigate } from "react-router-dom";
import { ButtonBuy, ContainerInfo, MiniAvatar } from "../styled.components"
import { FaRegCirclePlay,FaStar } from "react-icons/fa6";
import Hero from "../../assets/3D-Man.png"
import "./info.css";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
const Info = ()=>{
    const history = useNavigate()
    const {state} = useContext(Context)
    console.log(`mi valos useState: ${state}`)
    const goToPage = ():void => {
        history('/detail/1')
    }
    return(<>
        <ContainerInfo > 
            <div className="icon-play">
            <FaRegCirclePlay size={35} color={'#B31312'}/>
            </div>
            <h1 className="title-info"> Marvel</h1> 
            <section className="detail-info">
                <p>2020</p>
                <p>●</p>
                <p>Fantastic</p>
                <p>●</p>
                <p>2h 35min</p>
            </section>
            <section className="starts"> 
                <FaStar color={'orange'}/>
                <FaStar color={'orange'}/>
                <FaStar color={'orange'}/> 
                <FaStar color={'Gray'}/> 
                <FaStar color={'Gray'}/> 
            </section>
            <section className="descripcion">
                <div className="descrip-title"> <strong>Plot summary</strong> </div>
                <div className="descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores distinctio odio hic, nihil ipsam reprehenderit autem ullam temporibus vel. Dignissimos pariatur velit laboriosam maxime autem veniam fugit iste doloribus sit?. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aut perferendis ad! Animi officia exercitationem repudiandae facilis iure. Voluptate possimus fugit optio est vero magnam necessitatibus enim molestiae repellendus corporis!</div>
            </section>
            <section className="descripcion">
                <div className="descrip-title"> <strong>Plot summary</strong> </div>
                <div className="heros-icon">
                <MiniAvatar src={Hero}/>
                <MiniAvatar src={Hero}/>
                <MiniAvatar src={Hero}/>
                <MiniAvatar src={Hero}/>
                </div>
            </section>
            <section className="descripcion buy">
                <ButtonBuy onClick={goToPage}>Comprar</ButtonBuy>
            </section>
        </ContainerInfo>
    </>)
}
export default Info