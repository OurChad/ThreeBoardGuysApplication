import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import './Thumbnail.css'

class Thumbnail extends PureComponent {

    constructor(props) {
        super(props);
        
        this.img = this.props.thumbnail ? <img src={this.props.thumbnail} alt={this.props.alt} /> : <FontAwesome name={this.props.icon} size="5x" className="font-awesome"/>;
    }
    render() {
        return (
            <div className="thumbnail">            
                {this.img}
                <div className="caption">
                    <h3 className="thumbnail-title">{this.props.title}</h3>
                    <p className="thumbnail-description">{this.props.description}</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Thumbnail;