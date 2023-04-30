import React, {useState,useEffect} from "react";
import Logo from "../image/compass_logo.png";
import "./styles.css";
import homeBar from "../image/home.png";
import Pedro from "../image/pedro.jpg";
import Webcam from "../image/webcam.png";
import Landscape from "../image/landscape.png";
import Clips from "../image/clips.png";
import Location from "../image/location.png";
import Face from "../image/face.png";
import Time from "../image/time.png"
import Like from "../image/like.png"
import Share from "../image/share.png"
import Comment from "../image/msg.png"
import Junior from "../image/junior.png"


interface userProps {
    name: string,
    user: string,
    birthdate: Date | string,
    email: string,
    password: string,
    profile_photo: string
}

const Home: React.FC = () => {

    const [users, setUsers] = useState<userProps[]>([]);
    const fetchusers = async () => {
        const response = await fetch(`http://localhost:5000/api/v1/user`);
        const data = await response.json();
        setUsers(data.users);
        console.log(data.users);
      };
    
      useEffect(() => {
        fetchusers();
      }, []);

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
            <textarea
              className="sendPost"
              placeholder="No que você está pensando?"
            ></textarea>
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
        <div className="oldPost">
            <div className="oldUserPost">
                <img src={Pedro} alt="" />
                <div className="oldPostText">
                <p className="patricia">Patricia Menezes</p>
                <div className="timePost">
                <img src={Time} alt="" />
                <p className="timeOldPost">12 minutos atrás em </p>
                <p className="strongOldPost">Paisagens Exuberantes</p>
                </div>
                </div>
            </div>
            <div className="legendPost">
                <p>Minha última viagem para a Ilha do Comendador, um lugar simplesmente incrível, natureza praticamente intocada. Recomendo a todos que apreciam o mundo como ele é.</p>
            </div>
            <div className="landscapeOldPost">
            </div>
            <div className="iterationsOldPost">
                <div className="like">
                    <img src={Like} alt="" />
                    <p className="likesText">Curtiu</p>
                    <p className="likesNumber">1.7k</p>
                </div>
                <div className="comment">
                    <div className="commentPost">
                        <img src={Comment} alt="" />
                        <p className="commentText">Comentários</p>
                        <p className="commentNumber">345</p>
                    </div>
                </div>
                <div className="share">
                    <div className="toShare">
                        <img src={Share} alt="" />
                        <p className="shareText">Compartilhar</p>
                    </div>
                </div>
            
            </div>
            <div className="newComment">
            <img src={Pedro} alt="Imagem de Exibição do Usuário" />
            <div className="iconsComment">
            <textarea
              className="sendComment"
              placeholder="O que você está pensando?">
            </textarea>
            <img src={Webcam} alt="" />
            <img src={Landscape} alt="" />
            <img src={Clips} alt="" />
            <img src={Location} alt="" />
            <img src={Face} alt="" />
            </div>
            </div>
            <div className="allComments">
                <p>Todos os comentários</p>
            </div>
            <div className="juniorComment">
                <img src={Junior} alt="" />
                <div className="junior">
                    {/* <p className="juniorProfile"></p> */}
                    <p className="juniorMsg"><strong>Junior Saraiva:</strong> Que bela paisagem! As cores são simplesmente deslumbrantes e a composição é maravilhosa. Essa foto é uma verdadeira obra de arte que captura a beleza natural do nosso mundo. É fascinante ver como a natureza pode ser tão impressionante e inspiradora. Agradeço por compartilhar esta imagem conosco!</p>
                </div> 
            </div>
            <div className="horizontal">
            </div>
            <div className="seeComments">
                <p>Ver todos os comentários</p>
            </div>
        </div>
        <div className="sideBarTop">
          <p className="myFriends">Meus Amigos</p>

          <div className="friends">
            <ul className="listFriends">
            {users.map(
                  (user, i) =>
                <li key={i}>
                  <img src="https://source.unsplash.com/800x600/?profile" alt="" />  
                  <p>{user.name}</p>
                </li>
                )}
            </ul>
          </div>
        </div>

        <div className="sideBarMiddle">

        </div>
        <div className="sideBarBottom">

        </div>

      </div>
    </div>
  );
};

export default Home;
