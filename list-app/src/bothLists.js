import React from 'react';
import {Form} from './form'
import {ToDo} from './oneList'
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const connectedLists = ({ articles }) => {
    
    const toDo = articles.filter(item => item.done === false);
    const done = articles.filter(item => item.done === true);

    return (
        <div className="lists">
            <div>
                <Form
                />
            </div>
            <div className="to-do">
                To Do
                <ToDo 
                items = {toDo}
                />
            </div>
            <br/>
            <div className='done'>
                Done
                <ToDo 
                items = {done}
                />
            </div>
            
        </div>
    )
};

export const Lists = connect(mapStateToProps)(connectedLists);
