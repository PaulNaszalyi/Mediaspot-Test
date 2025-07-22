import { Components, Theme } from "@mui/material";

const MuiSwitch: NonNullable<Components<Theme>["MuiSwitch"]> = {
  styleOverrides: {
    track: ({ theme }) => ({
      background: theme.palette.background[400],
    }),
    thumb: ({ theme }) => ({
      background: theme.palette.background[400],
    }),
    root: ({ theme }) => ({
      ".Mui-checked": {
        ".MuiSwitch-thumb": {
          background: theme.palette.primary.main,
        },
      },
    }),
  },
};

export default MuiSwitch;
