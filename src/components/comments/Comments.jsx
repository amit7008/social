import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext";



const comments = [
    {
        id: 1,
        desc: "Lorem ipsum doar sdf isdf lsdfsdflk sadflaksdf alsdfjalsd fj;asldfas;lfd sal;kfj sadlkfs dlfsfdsdfsdfsdf",
        name: "Amit Kumar",
        userId: 1,
        profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    },
    {
        id: 2,
        desc: "Lorem ipsum doar sdf isdf lsdfsdflk sadflaksdf alsdfjalsd fj;asldfas;lfd sal;kfj sadlkfs dlfsfdsdfsdfsdf",
        name: "Lalit Kumar",
        userId: 2,
        profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    },
    {
        id: 3,
        desc: "Lorem ipsum doar sdf isdf lsdfsdflk sadflaksdf alsdfjalsd fj;asldfas;lfd sal;kfj sadlkfs dlfsfdsdfsdfsdf",
        name: "Ravi Kumar",
        userId: 3,
        profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
    }

];
const Comments = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <div className='comments'>
    <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
    </div>
    {comments.map((comment)=>(
        <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
        </div>
    ))}
    </div>
  )
}

export default Comments