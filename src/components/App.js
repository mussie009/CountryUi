import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import CountriesList from './Countries';

  
class App extends Component {
    
    render(){
        return (
        <div className="container">
        <BrowserRouter>
            <div>
            <Header />
            <Route exact path="/" component={CountriesList} /> 
            </div>
        </BrowserRouter>
        </div>
        );
    }
};
export default App;
  
