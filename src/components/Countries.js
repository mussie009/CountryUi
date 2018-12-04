import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCountries } from '../actions/appActions';

import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from 'lodash';
import CountriesRow from './Country_Row';

class CountriesList extends Component {
  
  componentDidMount(){
      this.props.fetchCountries();
     
    }
    
    renderList() {
      return _.map(this.props.countries, country => {
          return country;
      });
        
    }
    
    render() {
      return(
        <div>
          <h4>Fetched Countries: {this.renderList().length}</h4>
          <br/>
          <ReactTable
              data={this.renderList()}
              columns={[
                {
                  Header: "Flag",
                  Cell: (row) => {
                    return <div><img height={34} width={50} src={row.original.flag} alt="flag"/></div>
                  },
                },
                {
                  Header: "Name (click to sort)",
                  accessor: "name"
                },
                {
                  Header: 'Region',
                  accessor: "region"
                },
                {
                  Header: 'Capital City',
                  accessor: "capital"
                },
              

              ]}
              defaultPageSize={20}
              className="-striped -highlight"
              SubComponent={row => {
                return (
                  <div style={{ padding: "20px" }}>
                    <CountriesRow />
                  </div>
                );
              }}
            />
        </div>


      );
    };
}

function mapStateToProps(state) {
  return { countries: state.countries };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
