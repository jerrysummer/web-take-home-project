//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import './Home.css';
import WorkyardLogo from '../assets/images/workyard-logo.svg';
import { CONTRACT_VALUES, HOME_STYLES as styles } from '../util/Constants'
import projectTypes from './ProjectDialogComponents/HomeTypeMenuItems';
import projectValues from './ProjectDialogComponents/HomeValueMenuItems';
import Location from './ProjectDialogComponents/LocationAutoComplete'

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
      suburb:'',
      state:'',
      location_place_id:'',
      location_lat:'',
      location_long:'',
      address:'',
      date_unix:'',
      description: '',
      images:[],
      files: [],
      default_image_url:'',
      project_type_id: null,
      contract_value_id: null,
      min_contract_value: '',
      max_contract_value: '',
    }
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.handleSubmit();
  };

  handleSubmit = () => {
    console.log('submit')
  }

  handleProjectTypeChange = (event, index, value) => {
    this.setState({ project_type_id: value });
  };
  
  handleProjectDescriptionChange = (event, index, value) => {
    this.setState({ description: event.target.value });
  };

  handleContractValueChange = (event, index, value) => {
    this.setState({ 
      contract_value_id: index, 
      min_contract_value: CONTRACT_VALUES[index].min,
      max_contract_value: CONTRACT_VALUES[index].max,
    });
  };

  handleLocationChange = (payload) => {
    this.setState({ ...payload });
  };

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------
  
  render() {
    const actions = [
      <FlatButton
        style={styles.flatButton}
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

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
              value={this.state.project_type_id}
              onChange={this.handleProjectTypeChange}
              floatingLabelText="Select project type"
              fullWidth={true}
            >
              { projectTypes }
            </SelectField><br /><br />

            <TextField
              hintText="Add a project description"
              id="text-field-controlled2"
              fullWidth={true}
              value={this.state.description}
              onChange={this.handleProjectDescriptionChange}
            /><br />

            <SelectField
              value={this.state.contract_value_id}
              onChange={this.handleContractValueChange}
              fullWidth={true}
              floatingLabelText='Select a contract value'
            >
              { projectValues }
            </SelectField><br /><br />

            <Location handleLocationChange={this.handleLocationChange}/>
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