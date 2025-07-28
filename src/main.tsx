import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {store} from "./app/store";
import {ThemeDark} from "./theme";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";

async function enableMocking() {
    if (import.meta.env.NODE_ENV !== "development") {
        return;
    }

    const {worker} = await import("./mocks/browser");

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start();
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider theme={ThemeDark}>
                    <CssBaseline/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    );
});
