import React from 'react';
import { connect } from "react-redux";
import { toggleArticle } from "./redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        toggleArticle: id => dispatch(toggleArticle(id))
    };
  }

export const OneItem = (props) => {
    
    return (
        <button 
            className="flex-item" 
            onClick = {() => props.toggleArticle(props.value.id)}>
                { props.value.text }
        </button>
    );
}

export const ListItem = connect(
    null,
    mapDispatchToProps
  )(OneItem);