//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import './Projects.css';
import { CONTRACT_VALUES, PROJECT_TYPES } from '../../util/Constants'

//-----------------------------------------------------------------------------------------
//------------------------------------ Projects Component -------------------------------------
//-----------------------------------------------------------------------------------------


class Projects extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------


  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className="projects-container">

        {this.props.project.map((project,index) => {
          return(
            <div className="project-box" key={index}>
              <div className="project-text">

                <div>{PROJECT_TYPES[project.project_type_id - 1].name}</div>
                <br/>
                <div className="project-description">{project.description}</div>
                <br />
                <div>{`$ ${project.min_contract_value}K - ${project.min_contract_value}K`}</div>
                <div>{`${project.suburb}, ${project.state}`}</div>

              </div>
            </div>
          )
        })}

      </div>
    );
  }
}


//-------------------------------------------------------------------------
//-------------------- Mapping store to Projects's props ----------------------
//-------------------------------------------------------------------------


const mapStateToProps = (state, ownProps) => {
  return {
    project: state.default.project,
  }
}


const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);