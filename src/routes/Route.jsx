import {Route, Redirect} from 'react-router-dom';
import React, {useState } from 'react';

function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){

const [loading, setLoading] = useState(false);
const [signed, setSigned] = useState(true)

if(loading) {
    setLoading(false);
    setSigned(true);
    return (
        <div>  
            <h1>Carregando a página</h1>
        </div>
    )
}

if(!signed && isPrivate) {
    return <Redirect to="/" />
}

if(!signed && !isPrivate) {
    return <Redirect to="/" />
}

return (
    <Route
    {...rest}
    render={props => (
        <Component {...props} />
    )} />
)

}

export default RouteWrapper;