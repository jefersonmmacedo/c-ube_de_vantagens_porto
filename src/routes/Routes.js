import {Switch} from 'react-router-dom';
import React from 'react';
import RouteWrapper from './Route';
import Home from '../pages/Home/Home';
import ContactPage from '../pages/Contact/Contact';
import CompanyPage from '../pages/CompanyPage/CompanyPage';
import SearchCupom from '../pages/SearchCupom/SearchCupom';
import ValidadeCupom from '../pages/ValidadeCupom/ValidadeCupom';
import SignIn from '../pages/SignIn/SignIn';
import Companies from '../pages/Companies/Companies';
import RegulationPage from '../pages/RegulationPage/RegulationPage';
import UploadImage from '../pages/UploadImage/UploadImage';
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import CompanyPageAdmin from '../pages/Admin/CompaniesPageAdmin/CompaniesPageAdmin';
import NewCompany from '../pages/Admin/NewCompany/NewCompany';
import CuponsPageAdmin from '../pages/Admin/CuponsPageAdmin/CuponsPageAdmin';
import NewCupom from '../pages/Admin/NewCupom/NewCupom';
import SignUp from '../pages/Admin/SignUp/SignUp';
import UsersAdmin from '../pages/Admin/UsersAdmin/UsersAdmin';
import TermsOfUsePage from '../pages/TermsOfUsePage/TermsOfUsePage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage/PrivacyPolicyPage'
 
function Routes() {
    return (
        <Switch>
            <RouteWrapper exact path="/" component={Home} />
            <RouteWrapper exact path="/contact" component={ContactPage} />
            <RouteWrapper exact path="/partners" component={CompanyPage} />
            <RouteWrapper exact path="/searchcupom" component={SearchCupom} />
            <RouteWrapper exact path="/validatecupom" component={ValidadeCupom} />
            <RouteWrapper exact path="/signin" component={SignIn} />
            <RouteWrapper exact path="/companies" component={Companies} />
            <RouteWrapper exact path="/regulation" component={RegulationPage} />
            <RouteWrapper exact path="/new" component={UploadImage} />
            <RouteWrapper exact path="/TermsOfUse" component={TermsOfUsePage} />
            <RouteWrapper exact path="/PrivacyPolicy" component={PrivacyPolicyPage} />

            
            <RouteWrapper exact path="/admin/dashboard" component={Dashboard} isPrivate />
            <RouteWrapper exact path="/admin/companyadmin" component={CompanyPageAdmin} isPrivate />
            <RouteWrapper exact path="/admin/newcompany" component={NewCompany} isPrivate/>
            <RouteWrapper exact path="/admin/cuponsadmin" component={CuponsPageAdmin} isPrivate />
            <RouteWrapper exact path="/admin/newcupom" component={NewCupom} isPrivate/>
            <RouteWrapper exact path="/admin/users" component={UsersAdmin} isPrivate />
            <RouteWrapper exact path="/admin/signup" component={SignUp} isPrivate/>

        </Switch>
    )
}

export default Routes;
