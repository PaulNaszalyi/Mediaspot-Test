import { Components, Theme } from "@mui/material";

const MuiPopover: NonNullable<Components<Theme>["MuiPopover"]> = {
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? theme.palette.background[200] : theme.palette.background.paper,
      border: `1px solid ${theme.palette.backgroundAlpha.border}`,
      marginTop: theme.spacing(1.5),
      ".MuiMenu-list": {
        padding: 0,
      },
      ".MuiMenuItem-root": {
        borderBottom: `1px solid ${theme.palette.backgroundAlpha.border}`,
      },
      ".MuiMenuItem-root:last-child": {
        borderBottom: "none",
      },
    }),
  },
};

export default MuiPopover;
