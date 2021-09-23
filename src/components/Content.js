import React from "react";
import Card from './Card';

function Content() {
    return(
        <div className="container">
            <div className="row text-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
      </div>
    );
}

export default Content;