import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
// import store from "./redux/root";
import store from "./redux/rtk/app/store";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const configuration = {
    onUpdate: (registration) => {
        if (registration && registration.waiting) {
            if (
                window.confirm(
                    "New version available!  refresh to update your app?"
                )
            ) {
                registration.waiting.postMessage({ type: "SKIP_WAITING" });
                window.location.reload();
            }
        }
    },
};
// serviceWorkerRegistration.register(configuration);
// reportWebVitals();
