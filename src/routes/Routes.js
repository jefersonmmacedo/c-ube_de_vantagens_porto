import {Switch} from 'react-router-dom';
import React from 'react';
import RouteWrapper from './Route';
import Home from '../pages/Home/Home';
import ContactPage from '../pages/Contact/Contact';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import NewCupom from '../pages/NewCupom/NewCupom';
import SearchCupom from '../pages/SearchCupom/SearchCupom';
import ValidadeCupom from '../pages/ValidadeCupom/ValidadeCupom';
import NewCompany from '../pages/NewCompany/NewCompany';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';


function Routes() {
    return (
        <Switch>
            <RouteWrapper exact path="/" component={Home} />
            <RouteWrapper exact path="/contact" component={ContactPage} />
            <RouteWrapper exact path="/partners" component={CompanyPage} />
            <RouteWrapper exact path="/newcupom" component={NewCupom} />
            <RouteWrapper exact path="/searchcupom" component={SearchCupom} />
            <RouteWrapper exact path="/validatecupom" component={ValidadeCupom} />
            <RouteWrapper exact path="/signin" component={SignIn} />
            <RouteWrapper exact path="/signup" component={SignUp} />
            <RouteWrapper exact path="/newcompany" component={NewCompany} />
        </Switch>
    )
}

export default Routes;