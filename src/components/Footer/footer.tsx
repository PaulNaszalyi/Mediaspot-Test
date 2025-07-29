import {Box, Button} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

interface ButtonProps {
    pathTo?: string;
    label?: string;
    noIcon?: boolean;
    onClick?: () => void;
}

interface NextButtonProps extends ButtonProps {
    disabled?: boolean;
}

interface FooterProps {
    nextButton: NextButtonProps;
    previousButton?: ButtonProps;
    contentCentered?: boolean;
}

const Footer = ({nextButton, previousButton, contentCentered}: FooterProps) => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: contentCentered ? 'center' : 'space-between',
                alignItems: 'center',
                flexDirection: previousButton ? 'row' : 'row-reverse',
                marginTop: '40px',
                gap: '16px'
            }}
        >
            {
                previousButton && (
                    <Button
                        variant="text"
                        sx={{p: '12px 16px'}}
                        onClick={() => navigate(previousButton.pathTo || '/screening/select-assets')}
                    >
                        {!previousButton.noIcon && <><ArrowBack/> &nbsp;</>}
                        {previousButton.label ? previousButton.label : `Back`}
                    </Button>
                )
            }
            <Button
                variant="contained"
                color="primary"
                disabled={nextButton.disabled}
                sx={{p: '12px 16px'}}
                onClick={() => nextButton.onClick ? nextButton.onClick() : navigate(nextButton.pathTo || '/screening/select-assets')}
            >
                {nextButton.label ? nextButton.label : `Next`}
                {!nextButton.noIcon && <> &nbsp; <ArrowForward/></>}
            </Button>
        </Box>
    )
}

export default Footer;
