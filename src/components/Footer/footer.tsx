import {Box, Button} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

interface PreviousButtonProps {
    pathTo: string;
}

interface NextButtonProps {
    disabled?: boolean;
    pathTo: string;
}

interface FooterProps {
    nextButton: NextButtonProps;
    previousButton?: PreviousButtonProps;
}

const Footer = ({nextButton, previousButton}: FooterProps) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: previousButton ? 'row' : 'row-reverse'
            }}
        >
            {
                previousButton && (
                    <Button
                        variant="outlined"
                        sx={{p: '12px 16px'}}
                        onClick={() => navigate(previousButton.pathTo)}
                    >
                        <ArrowBack/> &nbsp; Previous
                    </Button>
                )
            }
            <Button
                variant="contained"
                color="primary"
                disabled={nextButton.disabled}
                sx={{p: '12px 16px'}}
                onClick={() => navigate(nextButton.pathTo)}
            >
                Next &nbsp; <ArrowForward/>
            </Button>
        </Box>
    )
}

export default Footer;
