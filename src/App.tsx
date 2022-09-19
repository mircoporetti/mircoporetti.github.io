import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, RouteProps, Switch} from 'react-router-dom';
import {Box, CircularProgress} from "@material-ui/core";
import routes from "./routes";
import DrawerLayout from "./shared/DrawerLayout";
import {CookieConsent, getCookieConsentValue} from "react-cookie-consent";
import {handleAcceptAnalyticsCookie, handleDeclineAnalyticsCookie} from "./googleAnalytics";

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

        const isConsent = getCookieConsentValue();
        if (isConsent === "true") {
            handleAcceptAnalyticsCookie();
        }
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
            <CookieConsent
                location="bottom"
                buttonText="Allow Cookies"
                cookieName="mirco_poretti_website"
                style={{background: "#134f5c"}}
                buttonStyle={{color: "#000000", background: "#FFFFFF", fontSize: "90%", borderRadius: "7%"}}
                enableDeclineButton={true}
                declineButtonText={"Decline"}
                declineButtonStyle={{background: "#134f5c", fontSize: "90%"}}
                expires={150}
                onAccept={handleAcceptAnalyticsCookie}
                onDecline={handleDeclineAnalyticsCookie}
            >
                This website uses cookies to improve the user experience, to analyze traffic and to allow you to write and read post's comments.{" "}
            </CookieConsent>
        </Box>
    );
}

export default App;
