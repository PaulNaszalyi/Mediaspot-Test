import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import SelectAssets from "./pages/screening/1.select-assets.tsx";
import SelectRecipients from "./pages/screening/2.select-recipients.tsx";

export const router = createBrowserRouter([
    {
        path: "/screening",
        element: <App/>,
        children: [
            {path: "select-assets", element: <SelectAssets/>},
            {path: "select-recipients", element: <SelectRecipients/>}
        ],
    },
]);
