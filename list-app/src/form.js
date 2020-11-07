import React from 'react';
import { connect } from "react-redux";
import { addArticle } from "./redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.addArticle( this.state.value );
      this.setState({ value: "" });
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

export const Form = connect(
    null,
    mapDispatchToProps
  )(NameForm);
