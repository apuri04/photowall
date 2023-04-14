import Photo from "./Photo";
import {Link} from 'react-router-dom'
import AddButton from "./AddButton";


function PhotoWall(props) {
    return  (
    <div>
        <Link className="addIcon" to="/AddPhoto"><AddButton/></Link>
        <div className="photoGrid"> 
            {props.posts
            .sort(function (x,y) { return (y.id - x.id)})
            .map((item,index) => <Photo key={index} post={item} onRemovePhoto={props.onRemovePhoto}></Photo>)}
        </div>
    </div>)
}
export default PhotoWall