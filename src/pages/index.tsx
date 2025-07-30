import {useEffect} from "react";
import {selectScreeningStep, setStep} from "../features/screenings/screeningSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {Box, Button, Typography} from "@mui/material";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(selectScreeningStep);

    useEffect(() => {
        dispatch(setStep(0));
    }, [dispatch]);

    if (currentStep > 0) {
        return null;
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }}>
            <Box sx={{textAlign: 'center', maxWidth: '800px'}}>
                <Typography variant="h1">
                    Welcome to the Screening App
                </Typography>
                <Typography variant="h4" sx={{mb: 6}}>
                    by Mediaspot
                </Typography>
                <Button variant="contained" sx={{p: '12px 16px'}} href="/screening/select-assets">
                    Let's get started
                </Button>
            </Box>
        </Box>
    );
}

export default HomePage;
