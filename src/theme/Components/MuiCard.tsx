import { Components, Theme } from "@mui/material";

const MuiCard: NonNullable<Components<Theme>["MuiCard"]> = {
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
  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        background: "transparent",
        "&.selected, &[aria-selected=true]": {
          background: theme.palette.primary.alpha,
          borderColor: theme.palette.primary.main,
        },
      }),
    },
  ],
};

declare module "@mui/material/Card" {
  interface CardPropsOverrides {
    ariaSelected: boolean;
  }
}

export default MuiCard;
