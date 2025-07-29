import Footer from "../../components/Footer/footer.tsx";
import {Card, CardContent, Typography, TextField, Chip, Box, Alert} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {
    selectRecipients,
    setRecipients,
    selectValidUntil,
    setValidUntil,
    selectMessage,
    setMessage,
    setStep
} from "../../features/screenings/screeningSlice.ts";
import {useState, KeyboardEvent, useEffect} from "react";
import SelectedAssets from "../../components/Assets/SelectedAssets.tsx";

const SelectRecipients = () => {
    const dispatch = useAppDispatch();
    const recipients = useAppSelector(selectRecipients);
    const validUntil = useAppSelector(selectValidUntil);
    const message = useAppSelector(selectMessage);
    const [inputValue, setInputValue] = useState('');
    const [emailFormatWarning, setEmailFormatWarning] = useState(false);

    useEffect(() => {
        dispatch(setStep(2));
    }, [dispatch]);

    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && inputValue.trim()) {
            event.preventDefault();
            const email = inputValue.trim();
            if (!emailValidationRegex.test(email)) {
                setEmailFormatWarning(true);
                return;
            }
            if (email && !recipients.includes(email)) {
                dispatch(setRecipients([...recipients, email]));
            }
            setInputValue('');
        }
        setEmailFormatWarning(false);
    };

    const handleRemoveRecipient = (emailToRemove: string) => {
        dispatch(setRecipients(recipients.filter(email => email !== emailToRemove)));
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValidUntil(event.target.value));
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMessage(event.target.value));
    };

    return (
        <>
            <Card>
                <CardContent sx={{backgroundColor: "#101018"}}>

                    {/* --- ASSETS --- */}
                    <SelectedAssets/>

                    {/* --- RECIPIENTS --- */}
                    <Typography variant="h4" sx={{mb: 2}}>
                        Recipients
                        <Typography variant="h4" component="span" color="text.secondary" ml={1}>
                            {recipients.length}
                        </Typography>
                    </Typography>

                    <TextField
                        fullWidth
                        type="email"
                        label="Emails"
                        placeholder="Enter an email and press enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        sx={{mb: 1}}
                    />

                    {
                        emailFormatWarning &&
                        <Alert severity="warning" sx={{mb: 1}}>
                            Please enter a valid email address
                        </Alert>
                    }

                    <Box sx={{display: 'flex', gap: 1, mb: 5}}>
                        {recipients.map((email, index) => (
                            <Chip
                                key={index}
                                label={email}
                                onDelete={() => handleRemoveRecipient(email)}
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Box>

                    {/* --- OPTIONS --- */}
                    <Typography variant="h4" sx={{mb: 1}}>
                        Options
                    </Typography>

                    <TextField
                        fullWidth
                        type="date"
                        label="Valid until"
                        value={validUntil}
                        onChange={handleDateChange}
                        sx={{
                            mb: 1,
                            '& input[type="date"]::-webkit-calendar-picker-indicator': {
                                filter: 'invert(1)',
                                cursor: 'pointer'
                            }
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Typography component="span" color="text.secondary">
                        Your screening will expire on the selected date
                    </Typography>

                    <TextField
                        fullWidth
                        type="text"
                        label="Message (optional)"
                        placeholder="Welcome! Here are our latest titles"
                        value={message}
                        onChange={handleMessageChange}
                        sx={{mt: 3, mb: 1}}
                    />
                    <Typography component="span" color="text.secondary">
                        It will be shared in the welcome email
                    </Typography>
                </CardContent>
            </Card>
            <Footer
                previousButton={{pathTo: "/screening/select-assets"}}
                nextButton={{
                    pathTo: "/screening/review-submit",
                    disabled: !recipients.length
                }}
            />
        </>
    );
}

export default SelectRecipients;
