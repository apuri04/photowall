import Photo from "./Photo";
import {Link} from 'react-router-dom'


function PhotoWall(props) {
    return  (
    <div>
        <Link className="addIcon" to="/AddPhoto">+</Link>
        <div className="photoGrid"> 
            {props.posts
            .sort(function (x,y) { return (y.id - x.id)})
            .map((item,index) => <Photo key={index} post={item} onRemovePhoto={props.onRemovePhoto}></Photo>)}
        </div>
    </div>)
}
export default PhotoWall