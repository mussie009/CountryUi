import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryDetail extends Component {
  
  render() {
    
    if (!this.props.activeCountry){
      return <div>No Official language to show...</div>
    }
    return (
      <div>Official Language: {this.props.activeCountry.languages[0].name}</div>
    );
  }
}



function mapStateToProps({activeCountry}) {
  return {activeCountry};
}

export default connect(mapStateToProps)(CountryDetail);
