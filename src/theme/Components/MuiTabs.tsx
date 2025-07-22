import { Components, Theme } from "@mui/material";

const MuiTabs: NonNullable<Components<Theme>["MuiTabs"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottom: `1px solid ${theme.palette.backgroundAlpha.border}`,
    }),
    indicator: ({ theme }) => ({
      height: 3,
      boxShadow: theme.palette.mode === "dark" ? `0px 0px 12px ${theme.palette.primary.main}` : "",
    }),
    flexContainer: {
      alignItems: "center",
    },
  },
};

export default MuiTabs;
