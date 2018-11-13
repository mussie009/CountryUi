import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCountry } from '../actions/index';
import { bindActionCreators } from 'redux';
import CountryDetail from './Country_Detail';

class CountryRow extends Component {

  constructor(props) {
    super(props);
    this.selectCountry = this.selectCountry.bind(this);
    
  }

  selectCountry() {
    this.props.selectCountry(this.props.country);
  }

  render() {
    
    return(
          <div onClick={this.selectCountry()}>
            <CountryDetail /> 
          </div>
        );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectCountry}, dispatch);
}

export default connect(null, mapDispatchToProps)(CountryRow);
