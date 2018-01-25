//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

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
  fontSize: '18px',
  'color': 'rgb(57, 57, 57)',
  'margin': 'auto',
  textAlign: 'center',
  fontWeight: 'regular',
};

const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];
const sizes = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

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
      open: false,
      projectType: null,
      projectDescription: '',
      contractSize: null,
      location: '',
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

  handleProjectTypeChange = (event, index, value) => {
    this.setState({ projectType: value });
  };

  handleContractSizeChange = (event, index, value) => {
    this.setState({ contractSize: value });
  };

  handleProjectDescriptionChange = (event, index, value) => {
    this.setState({ projectDescription: event.target.value });
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
            <SelectField
              value={this.state.projectType}
              onChange={this.handleProjectTypeChange}
              floatingLabelText="Select project type"
              fullWidth={true}
            >
              {items}
            </SelectField><br />

            <TextField
              hintText="Add a project description"
              id="text-field-controlled"
              fullWidth={false}
              value={this.state.projectDescription}
              onChange={this.handleProjectDescriptionChange}
              underlineShow={true}
            /><br />

            <SelectField
              value={this.state.contractSize}
              onChange={this.handleContractSizeChange}
              fullWidth={false}
              floatingLabelText='Select a contract size'
              underlineShow={true}
            >
              {sizes}
            </SelectField><br />

            


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