import ReactGA from "react-ga4";
import {Cookies} from "react-cookie-consent";

export const initGA = (id: string) => {
    if (process.env.NODE_ENV === "production") {
        ReactGA.initialize([
            {
                trackingId: id
            }
        ]);
    }
};

export const handleAcceptAnalyticsCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
        initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
};

export const handleDeclineAnalyticsCookie = () => {
    //remove Google Analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
};