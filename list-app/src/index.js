import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      this.props.onSubmit(this.state.value)
    }
  
    render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Add item:
          </label>
          <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

function ListItem (props) {
    return (
        <button 
            className="flex-item" 
            onClick = {props.onClick}>
                { props.value }
        </button>
    );
}
  
class ToDo extends React.Component {

    renderListItem(index) {
      return (<ListItem 
        key = {this.props.items[index].id}
        value = {this.props.items[index].text}
        onClick = {() => this.props.onClick(this.props.items[index].id)}
        />
      );
    }    
  
    render() {     
        const rows = this.props.items.map((item, index) => {
            return this.renderListItem(index)
        })
        
        return (
            <div className='list'>
                {rows}
            </div>
            
        );
    }
}
  
class Lists extends React.Component {
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
        // console.log(items)
        
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
                    <ToDo 
                    
                    items = {toDo}
                    onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <br/>
                <div className='done'>
                    <ToDo 
                    
                    items = {done}
                    onClick = {(i) => this.handleClick(i)}
                    />
                </div>
            
            </div>
        );
    }
}
  
  // ========================================
  
ReactDOM.render(
    <Lists />,
    document.getElementById('root')
);
