//@flow
import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from './NavBar'
const Main = React.createClass({

  render() {
    // Then we go ahead and return some JSX
    return (
      <div>
        <NavBar />

        {/* Do we need this?  */}
        {/* We use cloneElement here so we can auto pass down props */}
        { React.cloneElement(this.props.children, this.props) }

      </div>
    );
  }

});

export default Main;