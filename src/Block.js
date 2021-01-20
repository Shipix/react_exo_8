import React, { Component } from 'react'
import Event from './Event'
export default class Block extends Component {
    test = ()=>{
        console.log("Bonjour");
    }
    testA = (e)=>{
        console.log(e.target);
    }
    state = {
        block:[
            {
                id:1,
                nom:"event 1",
                fct:this.testA,
                type:'onMouseOver'

            },
            {
                id:2,
                nom:"event 2",
                fct:this.test,
                type:'onClick'


            },
            {
                id:3,
                nom:"event 3",
                fct:this.test,
                type:'onMouseOver'


            },
            {
                id:4,
                nom:"event 4",
                fct:this.test,
                type:'onClick'


            },
            {
                id:5,
                nom:"event 5",
                fct:this.test,
                type:'onMouseOver'


            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.block.map(block =>(
                <Event 
                    key={block.id}
                    nom={block.nom}
                    fct={block.fct}
                    type={block.type}
                    
                />
            ))}   
            </div>
        )
    }
}
