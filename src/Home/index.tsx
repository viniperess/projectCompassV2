import React, {ChangeEvent, FormEvent, useState,useEffect} from "react";
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

interface loginProps {
  name: string,
  profile_photo: string
}


interface postProps {
  user: string,
  post_date: Date | string,
  description: string,
  likes: number,
  comments: commentProps[],
  url_imagem: string
}

interface commentProps {
  user: string,
  comment: string
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

      const [posts, setPosts] = useState<postProps[]>([]);
      const fetchposts = async () => {
          const response = await fetch(`http://localhost:5000/api/v1/user/post`);
          const data = await response.json();
          setPosts(data.posts);
          console.log(data.posts);
        };
      
        useEffect(() => {
          fetchposts();
        }, []);
      

    const [comments, setComments] = useState<commentProps[]>([]);


      const  [newPosted, setNewPosted] = useState("");  
      const login: loginProps[] =JSON.parse(localStorage.getItem("token")!);
      
      const posted = (e: FormEvent) => {
          e.preventDefault();

          const userPosted: string = login[0].name;
          const photoPosted: string = login[0].profile_photo;
          
          const postDate: Date = new Date();

          const post = {  
            user: userPosted,
            post_date: postDate,
            description: newPosted,
            likes: 0,
            comments: [],
            url_imagem: photoPosted
          }

          setPosts([post, ...posts]);

          setNewPosted("");
      };

      const newText = (e: ChangeEvent<HTMLTextAreaElement>) => {
          e.target.setCustomValidity("");
          setNewPosted(e.target.value);
      }

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
            <p>{login[0].name}</p>
            <img src={login[0].profile_photo} alt="" />
          </div>
        </div>
      
        <form action="/" method="post" className="posts" onSubmit={posted}>
          <div className="newPost">
            <img src={login[0].profile_photo} alt="Imagem de Exibição do Usuário" />
            
            <textarea
              className="sendPost" name="posted" value={newPosted}
              placeholder="No que você está pensando?" onChange={newText}
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
          </form>
        
        <div className="post-container">
        {posts.map((post, index) => (
          <div className="oldPost" key={index}>            
          <div className="oldUserPost">
              
              <img src={users.find(user => user.user === post.user)?.profile_photo} alt="" />
              <div className="oldPostText">
              <p className="patricia">{post.user}</p>
              <div className="timePost">
              <img src={Time} alt="" />
              <p className="timeOldPost">{new Date(post.post_date).toLocaleString()}</p>
              <p className="strongOldPost">Paisagens Exuberantes</p>
              </div>
              </div>
          </div>
          <div className="legendPost">
              <p>{post.description}</p>
          </div>
          <div className="landscapeOldPost">
            {/* <img src={post.url_imagem} alt="" /> */}
          </div>
          <div className="iterationsOldPost">
              <div className="like">
                  <img src={Like} alt="" />
                  <p className="likesText">Curtiu</p>
                  <p className="likesNumber">{post.likes}</p>
              </div>
              <div className="comment">
                  <div className="commentPost">
                      <img src={Comment} alt="" />
                      <p className="commentText">Comentários</p>
                      <p className="commentNumber">{post.comments ? post.comments.length : 0}</p>
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
          <img src={login[0].profile_photo} alt="Imagem de Exibição do Usuário" />
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

          { post.comments && post.comments.map((comment: commentProps, index) => (
            <div className="juniorComment" key={index}>
              <img src={users.find(user => comment.user === user.user)?.profile_photo} alt={post.user} />
              <div className="junior">
                  <p className="juniorProfile"></p>
                  <p className="juniorMsg"><strong>{comment.user}:</strong> {comment.comment}</p>
              </div> 
            </div>
          ))}
  
          <div className="horizontal">
                  </div>
                  <div className="seeComments">
                      <p>Ver todos os comentários</p>
                            </div>
          </div>
        ))}
        </div>
         
        <div className="sideBarTop">
          <p className="myFriends">Meus Amigos</p>

          <div className="friends">
            <ul className="listFriends">
            {users.map(
                  (user, i) =>
                <li key={i}>
                  <img src={user.profile_photo} alt="" />  
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
