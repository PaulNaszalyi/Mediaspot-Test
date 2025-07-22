import { Components, Theme } from "@mui/material";

const MuiAccordion: NonNullable<Components<Theme>["MuiAccordion"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 4,
      background: theme.palette.background.paper,
      boxShadow: "none",
      overflow: "hidden",
      padding: `0 ${theme.spacing(1.5)}`,
    }),
  },
};

export default MuiAccordion;
