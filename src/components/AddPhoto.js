import { Component } from "react";

class AddPhoto extends Component{
    constructor(){
        super()
        this.addPhoto = this.addPhoto.bind(this);
    }

    addPhoto(e) {
        e.preventDefault();
        let link = e.target.link.value;
        let description = e.target.description.value;
        let posts= {id: new Date().getTime(),
            description: description,
            imageLink:link }
        this.props.onAddPhoto(posts)
    }
    render() {
        return (
            <div>
                <h1>Add Photo here</h1>
                <div className="form">
                    <form onSubmit={this.addPhoto}>
                        <input type="text" placeholder="link" name="link"/>
                        <input type="text" placeholder="description" name="description"/>
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto