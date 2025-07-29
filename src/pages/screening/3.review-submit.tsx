import {
    Card,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Footer from "../../components/Footer/footer.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {
    selectMessage,
    selectRecipients,
    selectValidUntil, setStep
} from "../../features/screenings/screeningSlice.ts";
import {displayDate} from "../../utils/time.ts";
import {Email} from "@mui/icons-material";
import SelectedAssets from "../../components/Assets/SelectedAssets.tsx";
import {useEffect} from "react";

const ReviewSubmit = () => {
    const dispatch = useAppDispatch();
    const recipients = useAppSelector(selectRecipients);
    const validUntil = useAppSelector(selectValidUntil);
    const message = useAppSelector(selectMessage);

    useEffect(() => {
        dispatch(setStep(3));
    }, [dispatch]);

    return (
        <>
            <Card>
                <CardContent sx={{backgroundColor: "#101018"}}>

                    {/* --- ASSETS --- */}
                    <SelectedAssets/>

                    {/* --- RECIPIENTS --- */}
                    <Typography variant="h4" sx={{mb: 1}}>
                        Recipients
                        <Typography variant="h4" component="span" color="text.secondary" ml={1}>
                            {recipients.length}
                        </Typography>
                    </Typography>

                    <List sx={{mb: 2}}>
                        {recipients.map((email, index) => (
                            <ListItem key={index} sx={{pt: 0}}>
                                <ListItemIcon sx={{minWidth: "32px"}}>
                                    <Email/>
                                </ListItemIcon>
                                <ListItemText primary={email}/>
                            </ListItem>
                        ))}
                    </List>

                    {/* --- OPTIONS --- */}
                    <Typography variant="h4" sx={{mb: 2}}>
                        Options
                    </Typography>
                    <Typography>
                        Valid until
                    </Typography>
                    <Typography sx={{mb: 2}}>
                        <strong>{validUntil ? displayDate(validUntil) : "No expiration date set"}</strong>
                    </Typography>

                    <Typography>
                        Message
                    </Typography>
                    <Typography sx={{mb: 2}}>
                        <strong>{message || "No message provided"}</strong>
                    </Typography>

                </CardContent>
            </Card>
            <Footer
                previousButton={{pathTo: "/screening/select-recipients"}}
                nextButton={{
                    pathTo: "/screening/confirmation",
                    label: "Submit",
                }}
            />
        </>
    );
}

export default ReviewSubmit;
