import {useAppDispatch} from "../../app/hooks.ts";
import {useEffect} from "react";
import {setStep, resetForm} from "../../features/screenings/screeningSlice.ts";
import {Box, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import Footer from "../../components/Footer/footer.tsx";

const Confirmation = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetForm());
        dispatch(setStep(4));
    }, [dispatch]);

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
                <CheckCircle
                    sx={{
                        fontSize: 80,
                        backgroundColor: '#21c19a',
                        borderRadius: '50%',
                        mb: 2
                    }}
                />
                <Typography variant="h1" sx={{mb: 2}}>
                    Screening request successful
                </Typography>
                <Typography>
                    Your recipients will receive an email with a link to access shared assets
                </Typography>
                <Footer
                    previousButton={{
                        pathTo: "/screening/select-assets",
                        label: "Back to homepage",
                        noIcon: true
                    }}
                    nextButton={{
                        pathTo: "/screening/select-assets",
                        label: "Create another screening",
                        noIcon: true
                    }}
                    contentCentered
                />
            </Box>
        </Box>
    );
}

export default Confirmation;
