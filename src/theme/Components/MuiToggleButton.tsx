import { Components, Theme } from "@mui/material";

export const MuiToggleButton: NonNullable<Components<Theme>["MuiToggleButton"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.tier,
      backgroundColor: "transparent",
      //   borderLeft: "none",
      //   borderRight: "none",
      //   borderBottom: "none",
      border: "none",
      borderRadius: "4px !important",
      //   borderTopColor: theme.palette.backgroundAlpha.border,
      "&.Mui-selected": {
        backgroundColor: theme.palette.backgroundAlpha.pressed,
        boxShadow: "inset 0px 4px 4px 150px rgba(0, 0, 0, 0.15)",
        borderLeft: "none",
        color: theme.palette.text.primary,
        pointerEvents: "none",
        borderTopColor: "transparent",
      },
      "&.MuiToggleButtonGroup-grouped&:not(:first-of-type)": {
        borderLeft: "none",
        marginLeft: 0,
      },
    }),
    sizeSmall: {
      padding: "6px",
      ".MuiSvgIcon-root": {
        fontSize: "16px !important",
      },
    },
    sizeMedium: {
      padding: "8px 11px 9px",
      height: 40,
      ".MuiSvgIcon-root": {
        fontSize: "20px !important",
      },
    },
  },
};

export const MuiToggleButtonGroup: NonNullable<Components<Theme>["MuiToggleButtonGroup"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.backgroundAlpha.main,
      padding: theme.spacing(0.25),
      borderRadius: 6,
    }),
  },
};
