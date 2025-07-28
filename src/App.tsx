import {Container} from "@mui/material";
import Header from "./components/Header/header.tsx";

function App() {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Header/>
        </Container>
    )
}

export default App
