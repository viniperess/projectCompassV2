import React from 'react';
import Logo from '../image/compass_logo.png';
import './styles.css';
import homeBar from '../image/home.png'
import Pedro from '../image/pedro.jpg'
import Webcam from '../image/webcam.png'
import Landscape from '../image/landscape.png'
import Clips from '../image/clips.png'
import Location from '../image/location.png'
import Face from '../image/face.png'

const Home: React.FC = () => {
    return (
    <div className="container">
        <div className="logoLeft">
            <img src={Logo} alt="" />
        </div>
    <div className="all">
        <div className="home">
            <div className="homeText">
                <img src={homeBar} alt="" />
                <p>Home</p>
            </div>
            <div className="homeUser">
                <p>Username</p>
                <img src={Pedro} alt="" />
            </div>
        </div>
            <div className="posts">
                <div className="newPost">
                    <img src={Pedro} alt="Imagem de Exibição do Usuário" />
                    <textarea className="sendPost" placeholder="No que você está pensando?"></textarea>
                </div>
                <div className="postIcons">
                    <div className="icons">
                        <img src={Webcam} alt="" />
                        
                        <img src={Landscape} alt="" />
                        
                        <img src={Clips} alt="" />
                        
                        <img src={Location} alt="" />
                        
                        <img src={Face} alt="" />
                    </div>
                    <button className="btnPost">Postar</button>
                </div>
            </div>

            <div className="oldPost"></div>
    
        <div className="sideBarTop">
            <p className="myFriends">Meus Amigos</p>
        
        <div className="friends">
            <ul className="listFriends">
                <li>
                    <img src={Pedro} alt="" />
                    <p>Ana Luiza</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Camila</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Dener</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Diego</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Emanuelle</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Emanuel</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Gabriel fiss</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Gabriel Medeiros</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Isadora</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>José</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Josiel</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Kaiane</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Luiz Ricardo</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Luiz Tadeu</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Maria Flor</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Pedro</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Victor</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Vinicius Faller</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Vinicius Madruga</p>
                </li>
                <li>
                    <img src={Pedro} alt="" />
                    <p>Yuri</p>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
    );
}

export default Home;