import { Components, Theme } from "@mui/material";

const MuiAppBar: NonNullable<Components<Theme>["MuiAppBar"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundImage: "none",
      boxShadow: "none",
      ".MuiToolbar-root": {
        paddingRight: "0",
        borderBottom: `1px solid ${theme.palette.backgroundAlpha.border}`,
      },
    }),
  },
};

export default MuiAppBar;
