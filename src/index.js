import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './login/Login';
import registerServiceWorker from './registerServiceWorker';

import { Switch , BrowserRouter, Route,Redirect} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/main"  exact  component={App}/>
                    <Route path="/login" component={Login} />
                    <Redirect from="/" to="/login"/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render( <Index/>, document.getElementById('root'));
registerServiceWorker();
