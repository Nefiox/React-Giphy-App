// import render from "dom-serializer";
import React, {Component} from "react";
import Gif from './Gif';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            gif: []
        }
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=YXWuXcT39KxyhvmHdXsYlOCKiQptAhJO')
        .then(response => response.json())
        .then(res => { this.setState({ gif: res.data }) })
        .catch(err => console.log(err))
        };

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    {
                        this.state.gif.map(gifs => {
                            return <Gif {...gifs} key={gifs.id}/>
                            // return <Gif url={gifs.images.original.url} title={gifs.title} key={gifs.id}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Content;