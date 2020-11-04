import React from 'react';


function ListItem (props) {
    return (
        <button 
            className="flex-item" 
            onClick = {props.onClick}>
                { props.value }
        </button>
    );
}
  
export class ToDo extends React.Component {

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