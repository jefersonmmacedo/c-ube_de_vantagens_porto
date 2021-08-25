import {Switch} from 'react-router-dom';
import React from 'react';
import RouteWrapper from './Route';
import Home from '../pages/Home/Home';
import ContactPage from '../pages/Contact/Contact';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import NewCupom from '../pages/NewCupom/NewCupom';
import SearchCupom from '../pages/SearchCupom/SearchCupom';
import ValidadeCupom from '../pages/ValidadeCupom/ValidadeCupom';


function Routes() {
    return (
        <Switch>
            <RouteWrapper exact path="/" component={Home} />
            <RouteWrapper exact path="/contact" component={ContactPage} />
            <RouteWrapper exact path="/partners" component={CompanyPage} />
            <RouteWrapper exact path="/newcupom" component={NewCupom} />
            <RouteWrapper exact path="/searchcupom" component={SearchCupom} />
            <RouteWrapper exact path="/validatecupom" component={ValidadeCupom} />
        </Switch>
    )
}

export default Routes;
