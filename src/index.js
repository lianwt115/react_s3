import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import Login from './login/Login';
import registerServiceWorker from './registerServiceWorker';

import { Switch , BrowserRouter, Route,Redirect} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/main"    component={App}/>
                        <Route path="/login" component={Login} />
                        <Redirect from="/"  to="/login"/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render( <Index/>, document.getElementById('root'));
registerServiceWorker();
