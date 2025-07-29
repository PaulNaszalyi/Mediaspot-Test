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
    selectValidUntil,
    setStep,
    selectSelectedAssets,
    setSubmitting,
    selectIsSubmitting
} from "../../features/screenings/screeningSlice.ts";
import {displayDate} from "../../utils/time.ts";
import {MailOutline} from "@mui/icons-material";
import SelectedAssets from "../../components/Assets/SelectedAssets.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ReviewSubmit = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const recipients = useAppSelector(selectRecipients);
    const validUntil = useAppSelector(selectValidUntil);
    const message = useAppSelector(selectMessage);
    const selectedAssets = useAppSelector(selectSelectedAssets);
    const isSubmitting = useAppSelector(selectIsSubmitting);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(setStep(3));
    }, [dispatch]);

    const handleSubmit = async () => {
        try {
            dispatch(setSubmitting(true));
            setSubmitError(null);

            const screeningRequest = {
                assets: selectedAssets.map(asset => asset.id),
                recipients,
                validUntil,
                message: message || undefined,
            };

            const response = await fetch('/api/screenings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(screeningRequest),
            });

            if (!response.ok) {
                alert('An error occurred while submitting the screening request. Please try again.');
                return;
            }

            setTimeout(() => {
            }, 1000);

            navigate('/screening/confirmation');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError('Failed to submit screening request. Please try again.');
        } finally {
            dispatch(setSubmitting(false));
        }
    };

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
                                    <MailOutline/>
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
                        <strong>{message || "No message"}</strong>
                    </Typography>

                    {submitError && (
                        <Typography color="error" sx={{mt: 2, mb: 2}}>
                            {submitError}
                        </Typography>
                    )}

                </CardContent>
            </Card>
            <Footer
                previousButton={{pathTo: "/screening/select-recipients"}}
                nextButton={{
                    onClick: handleSubmit,
                    label: isSubmitting ? "Submitting..." : "Submit",
                    disabled: isSubmitting
                }}
            />
        </>
    );
}

export default ReviewSubmit;
