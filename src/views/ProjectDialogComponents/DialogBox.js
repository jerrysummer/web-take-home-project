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

import { CONTRACT_VALUES, HOME_STYLES as styles } from '../../util/Constants'
import projectTypes from './HomeTypeMenuItems';
import projectValues from './HomeValueMenuItems';
import Location from './LocationAutoComplete';
import { openUploadCareDialog, imagesToFiles, stateToPayload } from '../../util/helpers/ProjectHelpers';
import Images from './ImagesDisplay';
import './Dialogbox.css';
import { postProject } from '../../util/api_calls/ProjectApiCalls'
import { addProject } from '../../actions/ProjectActions'

//-----------------------------------------------------------------------------------------
//------------------------------------ Home Component -------------------------------------
//-----------------------------------------------------------------------------------------


class DialogBox extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      suburb: '',
      state: '',
      location_place_id: '',
      location_lat: '',
      location_long: '',
      address: '',
      date_unix: '',
      description: '',
      images: [],
      files: [],
      default_image_url: '',
      project_type_id: null,
      contract_value_id: null,
      min_contract_value: '',
      max_contract_value: '',
    }
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------
  // header = () => {
  //   let OSName = "Unknown OS";
  //   if (navigator.appVersion.indexOf("Win") !== -1) OSName = "Windows";
  //   if (navigator.appVersion.indexOf("Mac") !== -1) OSName = "MacOS";
  //   if (navigator.appVersion.indexOf("X11") !== -1) OSName = "UNIX";
  //   if (navigator.appVersion.indexOf("Linux") !== -1) OSName = "Linux";

  //   let devicePixelRatio = window.devicePixelRatio;

  //   let screenWidth = window.screen.width;
  //   let screenHeight = window.screen.height;

  //   console.log(OSName, devicePixelRatio, screenWidth, screenHeight)
  // }

  handleSubmit = () => {
    let payload = stateToPayload(this.state);

    // TODO: validate data first
    this.props.addProject(payload);
    this.props.handleClose();
  }
  fieldValidate = (payload) => {

  }

  handleImageUpload = () => {
    openUploadCareDialog(this.imageSetState);
  }

  imageSetState = (images) => {
    let files = imagesToFiles(images)
    let default_image_url = images[0].url;
    this.setState({
      images,
      files,
      default_image_url,
    });
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
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Add a project you've worked on"
        actions={actions}
        modal={false}
        contentStyle={styles.customContentStyle}
        titleStyle={styles.customTitleStyle}
        open={this.props.open}
        onRequestClose={this.props.handleClose}
      >
        <FlatButton
          label="Upload photos"
          labelPosition="before"
          containerElement="label"
          style={styles.uploadButton}
          onClick={this.handleImageUpload}
        >
        </FlatButton>

        <Images images={this.state.images} className="images-container"/>

        <SelectField
          value={this.state.project_type_id}
          onChange={this.handleProjectTypeChange}
          floatingLabelText="Select project type"
          fullWidth={true}
        >
          {projectTypes}
        </SelectField>
        <br />
        <br />

        <TextField
          hintText="Add a project description"
          id="text-field-controlled2"
          fullWidth={true}
          value={this.state.description}
          onChange={this.handleProjectDescriptionChange}
        />
        <br />

        <SelectField
          value={this.state.contract_value_id}
          onChange={this.handleContractValueChange}
          fullWidth={true}
          floatingLabelText='Select a contract value'
        >
          {projectValues}
        </SelectField>
        <br />
        <br />

        <Location handleLocationChange={this.handleLocationChange} />
      </Dialog>
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


export default connect(null, { addProject })(DialogBox);