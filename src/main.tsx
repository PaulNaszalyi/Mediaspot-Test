import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {store, persistor} from "./app/store";
import {ThemeDark} from "./theme";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import { PersistGate } from 'redux-persist/integration/react';

async function enableMocking() {
    if (!import.meta.env.DEV) {
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
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={ThemeDark}>
                        <CssBaseline/>
                        <RouterProvider router={router}/>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
});
