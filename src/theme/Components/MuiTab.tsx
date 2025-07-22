import { Components, Theme } from "@mui/material";

const MuiTab: NonNullable<Components<Theme>["MuiTab"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: "auto",
      padding: `0 ${theme.spacing(1)}`,
      fontWeight: 500,
      flexDirection: "row",
      color: theme.palette.text.tier,
      minHeight: 48,
      "&.Mui-selected": {
        color: theme.palette.text.primary,
      },
      marginRight: theme.spacing(0.5),

      ".MuiTouchRipple-root": {
        opacity: theme.palette.mode === "light" ? "0.2" : "1",
      },
    }),
  },
};

export default MuiTab;
