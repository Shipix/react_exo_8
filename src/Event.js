import React, { Component } from 'react'

export default class Event extends Component {
    render() {
        

        return (
            <div>
                 
                 {this.props.type == 'onMouseOver' // ma verifiction & condition ternaire 
                    ?<h1 onMouseOver={this.props.fct}>{this.props.nom}</h1>// si c'est true 
                    :<h1 onClick={this.props.fct}>{this.props.nom}</h1>// si c'est false
                }
            </div>
            
        )
    }
}
