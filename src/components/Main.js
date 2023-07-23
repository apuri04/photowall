import { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from 'react-router-dom'

class Main extends Component {
constructor(){
    super()
    this.state = {
        posts: [{
            id: 0,
            description: "Urban X 18",
            imageLink: "https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/gJHoa6jJtDWngqu4PvQESH12"
            }, {
            id: 1,
            description: "Urban X  Plus 18",
            imageLink: "https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/5ufaT6hURE6SHjJ1UQ9uY2LY"
            }, {
            id: 2,
            description: "Urban X.",
            imageLink: "https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/cVzSp2fTFnTfWSocTr2YvHvX"
            }, {
            id: 3,
            description: "Urban X Plus.",
            imageLink: "https://imotor-cms-uploads.s3.ap-southeast-2.amazonaws.com/u3q3sYBsBkP5y5UpCGDce62U"
            }
        ]
    }

this.removePhoto = this.removePhoto.bind(this);
this.navigate = this.navigate.bind(this);
}

navigate(){
    this.setState({screen: "addphoto"})
}

addPhoto(photo){
    this.setState((state) => ({posts: state.posts.concat([photo])
    }))
}
removePhoto(removedPhoto){
    this.setState((state) => ({posts: state.posts.filter(post => post!== removedPhoto)}))
}
render(){
    console.log(this.state.posts)
    return (<div>
        { 
            <Route exact path="/Photowall" render={()=> (    
                <div>
                    <Title title={'Photowall'}/>
                    <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                </div>)}/>

        }
        {
        <Route path = "/AddPhoto" render={({history})=><AddPhoto onAddPhoto={(addedPhoto) =>{
            this.addPhoto(addedPhoto)
            history.push("/")
        }}/>}></Route>
        }
    </div>)
}
}

export default Main