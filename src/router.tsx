import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import SelectAssets from "./pages/screening/1.select-assets.tsx";
import SelectRecipients from "./pages/screening/2.select-recipients.tsx";
import ReviewSubmit from "./pages/screening/3.review-submit.tsx";
import Confirmation from "./pages/screening/4.confirmation.tsx";
import HomePage from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "screening/select-assets", element: <SelectAssets/>},
            {path: "screening/select-recipients", element: <SelectRecipients/>},
            {path: "screening/review-submit", element: <ReviewSubmit/>},
            {path: "screening/confirmation", element: <Confirmation/>}
        ],
    },
]);
