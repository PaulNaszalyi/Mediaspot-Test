import { Components, Theme } from "@mui/material";

const MuiAlert: NonNullable<Components<Theme>["MuiAlert"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.body1,
      fontWeight: 500,
      padding: " 8px 16px",
      ".MuiAlert-icon, .MuiAlert-message": {
        padding: 0,
      },
    }),
    standardSuccess: ({ theme }) => ({
      backgroundColor: theme.palette.success.alpha,
      color: theme.palette.success.main,
    }),
    standardError: ({ theme }) => ({
      backgroundColor: theme.palette.error.alpha,
      color: theme.palette.error.main,
    }),
    standardInfo: ({ theme }) => ({
      backgroundColor: theme.palette.primary.alpha,
      color: theme.palette.primary.main,
      ".MuiAlert-icon": {
        color: theme.palette.primary.main,
      },
    }),
    standardWarning: ({ theme }) => ({
      backgroundColor: theme.palette.warning.alpha,
      color: theme.palette.warning.main,
    }),
  },
};

export default MuiAlert;
