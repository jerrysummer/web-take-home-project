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
import PROJECT_TYPES from '../util/Constants'
import CONTRACT_VALUES from '../util/Constants'

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
      contractValue: null,
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
  
  handleProjectDescriptionChange = (event, index, value) => {
    this.setState({ projectDescription: event.target.value });
  };

  handleContractValueChange = (event, index, value) => {
    this.setState({ contractValue: value });
  };

  handleLocationChange = (event, index, value) => {
    this.setState({ location: event.target.value });
  };

  handlerExample() {
    console.log("Handler Example Running!");
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------
  
  render() {
    const styles = {
      uploadButton: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      flatButton: {
        marginLeft: 0,
        marginRight: 'auto',
        display: 'block',
      }, 
      customContentStyle: {
        'width': '429px',
        'height': '531px',
      },
      customTitleStyle: {
        'width': '264px',
        'height': '23px',
        fontSize: '18px',
        'color': 'rgb(57, 57, 57)',
        'margin': 'auto',
        textAlign: 'center',
        fontWeight: 'regular',
      }
    };

    const actions = [
      <FlatButton
        style={styles.flatButton}
        label="Submit"
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
          <Dialog
            title="Add a project you've worked on"
            actions={actions}
            modal={false}
            contentStyle={styles.customContentStyle}
            titleStyle={styles.customTitleStyle}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <FlatButton
              label="Upload photos"
              labelPosition="before"
              containerElement="label"
              style={styles.uploadButton}
            >
              <input type="file" style={styles.uploadInput}/>
            </FlatButton>

            <SelectField
              value={this.state.projectType}
              onChange={this.handleProjectTypeChange}
              floatingLabelText="Select project type"
              fullWidth={true}
            >
              {items}
            </SelectField><br /><br />

            <TextField
              hintText="Add a project description"
              id="text-field-controlled"
              fullWidth={true}
              value={this.state.projectDescription}
              onChange={this.handleProjectDescriptionChange}
              underlineShow={true}
            /><br />

            <SelectField
              value={this.state.contractValue}
              onChange={this.handleContractValueChange}
              fullWidth={true}
              floatingLabelText='Select a contract value'
              underlineShow={true}
            >
              {sizes}
            </SelectField><br /><br />

            <TextField
              hintText="Add location"
              id="text-field-controlled"
              fullWidth={true}
              value={this.state.location}
              onChange={this.handleLocationChange}
              underlineShow={true}
            /><br />

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