import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, RouteProps, Switch} from 'react-router-dom';
import {Box, CircularProgress} from "@material-ui/core";
import routes from "./routes";
import DrawerLayout from "./shared/DrawerLayout";

interface AppRoute extends RouteProps {
    component: any,
    layout: any,
}

const AppRoute: React.FC<AppRoute> = ({ component, layout, ...rest }) => {

    const Component = component;
    const Layout = layout;

    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    )
}

function App() {

    const [loading, isLoading] = useState<boolean>(true);

    useEffect(() => {
        document.title = 'Mirco Poretti';
        isLoading(false);
    }, []);

    return (
        <Box component="main" className="main">
            {!loading ?
                <Router>
                    <Switch>
                        {(
                            routes.map(route => (
                                <AppRoute layout={DrawerLayout} key={route.name} path={route.path} component={route.component} exact />
                            ))
                        )}
                        {<Redirect to="/"/>}
                    </Switch>
                </Router>
                : <CircularProgress className={"spinner"}/>}
        </Box>
    );
}

export default App;
