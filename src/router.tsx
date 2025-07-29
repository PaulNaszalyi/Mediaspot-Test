import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import SelectAssets from "./pages/screening/1.select-assets.tsx";
import SelectRecipients from "./pages/screening/2.select-recipients.tsx";
import ReviewSubmit from "./pages/screening/3.review-submit.tsx";
import Confirmation from "./pages/screening/4.confirmation.tsx";

export const router = createBrowserRouter([
    {
        path: "/screening",
        element: <App/>,
        children: [
            {path: "select-assets", element: <SelectAssets/>},
            {path: "select-recipients", element: <SelectRecipients/>},
            {path: "review-submit", element: <ReviewSubmit/>},
            {path: "confirmation", element: <Confirmation/>}
        ],
    },
]);
