import { Components, Theme } from "@mui/material";

const MuiAccordionDetails: NonNullable<Components<Theme>["MuiAccordionDetails"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderTop: `1px solid ${theme.palette.background[300]}`,
      padding: theme.spacing(1.5),
    }),
  },
};

export default MuiAccordionDetails;
