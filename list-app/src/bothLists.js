import React from 'react';
import {NameForm} from './form'
import {ToDo} from './oneList'

export class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                text: 'one item',
                done: false,
                id: 0,
            },{
                text: 'two item',
                done: true,
                id: 1,
            }],
            nextId: 2,
        }
    }

    addItem(text){
        const items = this.state.items.concat({
            text: text,
            done: false,
            id: this.state.nextId,
        })

        let nextId = this.state.nextId;

        this.setState({
            items: items,
            nextId: ++nextId,
        })
    }

    handleClick(i){
        const items = this.state.items.slice();
        
        items[i].done = !items[i].done;
        this.setState({
            items: items,
        })
    }

    render() {
        const items = this.state.items;
        
        const toDo = items.filter(item => item.done === false);
        const done = items.filter(item => item.done === true);

        return (
            <div className="lists">
                <div>
                
                    <NameForm
                    onSubmit = {(text) => this.addItem(text)}
                    />
                </div>
                <div className="to-do">
                    To Do
                    <ToDo 
                    
                    items = {toDo}
                    onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <br/>
                <div className='done'>
                    Done
                    <ToDo 
                    
                    items = {done}
                    onClick = {(i) => this.handleClick(i)}
                    />
                </div>
            
            </div>
        );
    }
}