import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./components/Header/header.tsx";

function App() {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Header/>
            <Outlet />
        </Container>
    )
}

export default App
