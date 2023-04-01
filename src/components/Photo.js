import { Component } from "react";

class Photo extends Component{
    render(){
        return <figure className="figure">
            <img className="photo" src={this.props.post.imageLink} alt=""/>
            <figcaption><p>{this.props.post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={()=>{
                    this.props.onRemovePhoto(this.props.post)
                }}> Remove</button>
            </div>
        </figure>
    }
}

export default Photo