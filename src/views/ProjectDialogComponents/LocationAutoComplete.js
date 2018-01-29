//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//------------------------------------ Location Component -------------------------------------
//-----------------------------------------------------------------------------------------


class Location extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {

    let input = this.refs.search;
    let options = {
      componentRestrictions: {
        country: 'us'
      }
    };

    let autocomplete = new window.google.maps.places.Autocomplete(input, options);
    let { handleLocationChange } = this.props;

    window.google.maps.event.addListener(autocomplete, 'place_changed', function () {
      let place = autocomplete.getPlace();
      let location_place_id = place.id;
      let location_lat = place.geometry.location.lat();
      let location_long = place.geometry.location.lng();
      let address = place.formatted_address;

      let adr_address = place.adr_address;
      let htmlObject = document.createElement('div');
      htmlObject.innerHTML = adr_address;
      let suburb = htmlObject.getElementsByClassName('locality')[0].innerHTML;
      let state = htmlObject.getElementsByClassName('region')[0].innerHTML;

      let payload = {
        suburb,
        state,
        location_place_id,
        location_lat,
        location_long,
        address,
      }

      handleLocationChange(payload)
    });
  }
  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------


  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input className="location-input" type="text" name="name" ref="search" />
        </form> 
      </div>
    );
  }
}


//-------------------------------------------------------------------------
//-------------------- Mapping store to Location's props ----------------------
//-------------------------------------------------------------------------


const mapStateToProps = (state, ownProps) => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Location);