import React from 'react';
import {ListItem} from './oneItem'

export const ToDo = (props) =>{

    const renderListItem = (index) => {
      return (<ListItem 
        key = {props.items[index].id}
        value = {props.items[index]}
        />
      );
    }    
        
    const rows = props.items.map((item, index) => {
        return renderListItem(index)
    })
    
    return (
        <div className='list'>
            {rows}
        </div>
        
    );
    
}