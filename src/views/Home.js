//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import './Home.css';
import WorkyardLogo from '../assets/images/workyard-logo.svg';

const customContentStyle = {
  'width': '429px',
  'height': '531px',
};

const customTitleStyle = {
  'width': '264px',
  'height': '23px',
  'font-size': '18px',
  'color': 'rgb(57, 57, 57)',
  'margin': 'auto',
  'text-align': 'center',
  'font-weight': 'regular',
};


//-----------------------------------------------------------------------------------------
//------------------------------------ Home Component -------------------------------------
//-----------------------------------------------------------------------------------------


class Home extends Component {
  
  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------
  
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handlerExample = this.handlerExample.bind(this);
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handlerExample() {
    console.log("Handler Example Running!");
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------
  
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const { handlerExample } = this;

    return (
      <div className="home-container">
        <img src={WorkyardLogo} alt="Workyard logo" className="workyard-logo"/>
        <h1>Post a project</h1>
        <button onClick={this.handleOpen}>Create Project</button>

        <div>
          {/* <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} /> */}
          <Dialog
            title="Add a project you've worked"
            actions={actions}
            modal={false}
            contentStyle={customContentStyle}
            titleStyle={customTitleStyle}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <DatePicker hintText="Date Picker" />
          </Dialog>
        </div>
        
      </div>
    );
  }
}


  //-------------------------------------------------------------------------
  //-------------------- Mapping store to Home's props ----------------------
  //-------------------------------------------------------------------------


  const mapStateToProps = (state, ownProps) => {

    return {
    }
  }


  const mapDispatchToProps = dispatch => {
    return {
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(Home);