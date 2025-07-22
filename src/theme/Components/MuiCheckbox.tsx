import { Components, Theme } from "@mui/material";

const MuiCheckbox: NonNullable<Components<Theme>["MuiCheckbox"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.backgroundAlpha.main,
      padding: "6px",

      // "&:hover": {
      //   color: theme.palette.backgroundAlpha.hover,
      // },
      // ".Mui-checked:hover": {
      //   color: theme.palette.primary.main,
      // },
      svg: {
        width: "22px",
        height: "22px",
      },
      "&:not(.Mui-checked)": {
        svg: {
          fill: theme.palette.backgroundBoldAlpha.border,
        },
        "&:hover": {
          svg: {
            fill: theme.palette.backgroundBoldAlpha.borderFocus,
          },
        },
      },
      "&.Mui-disabled": {
        color: theme.palette.backgroundAlpha.main,
      },
    }),
  },
};

export default MuiCheckbox;
