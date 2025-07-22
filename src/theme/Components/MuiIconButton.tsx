import { Components, Theme } from "@mui/material";
const MuiIconButton: NonNullable<Components<Theme>["MuiIconButton"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      "&.Mui-disabled": {
        opacity: 0.5,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: ({ theme }) => ({
        width: "32px",
        height: "32px",
        svg: {
          fontSize: "16px",
        },
      }),
    },
    {
      props: { size: "medium" },
      style: ({ theme }) => ({
        width: "40px",
        height: "40px",
        svg: {
          fontSize: "20px",
        },
      }),
    },
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        width: "48px",
        height: "48px",
        svg: {
          fontSize: "24px",
        },
      }),
    },
    {
      props: { color: "primary" },
      style: ({ theme }) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.backgroundAlpha.border}`,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
      }),
    },
    {
      props: { color: "secondary" },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.alpha,
        "&:hover": {
          backgroundColor: theme.palette.primary.alphaHover,
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }),
    },
    {
      props: { color: "ghost" },
      style: ({ theme }) => ({
        color: theme.palette.mode === "dark" ? theme.palette.text.primary : theme.palette.text.secondary,
        "&:hover": {
          backgroundColor: theme.palette.backgroundAlpha.hover,
          border: `1px solid ${theme.palette.backgroundAlpha.border}`,
        },
      }),
    },
    {
      props: { color: "white" },
      style: ({ theme }) => ({
        background: theme.palette.absolute.white,
        color: theme.palette.primary.dark,
        "&:hover": {
          //@TODO : industrialize
          background: "#CBDAF8",
        },
        "&:disabled": {
          opacity: 0.5,
        },
      }),
    },
    {
      props: { color: "whiteSoft" },
      style: ({ theme }) => ({
        background: theme.palette.backgroundBoldAlpha.main,
        color: theme.palette.absolute.white,
        "&:hover": {
          background: theme.palette.backgroundBoldAlpha.hover,
        },
        "&:disabled": {
          opacity: 0.5,
        },
      }),
    },
    {
      props: { color: "whiteGhost" },
      style: ({ theme }) => ({
        color: theme.palette.absolute.white,
        "&:hover": {
          background: theme.palette.backgroundBoldAlpha.hover,
        },
        "&:disabled": {
          opacity: 0.5,
        },
      }),
    },
    {
      props: { color: "neutral" },
      style: ({ theme }) => ({
        color: theme.palette.mode === "dark" ? theme.palette.text.primary : theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.backgroundAlpha.border}`,
        backgroundColor: theme.palette.backgroundAlpha.main,
        "&:hover": {
          border: `1px solid ${theme.palette.backgroundAlpha.border}`,
          backgroundColor: theme.palette.backgroundAlpha.hover,
        },
      }),
    },
    {
      props: { color: "error" },
      style: ({ theme }) => ({
        color: theme.palette.error.text,
        borderTop: `1px solid ${theme.palette.backgroundAlpha.border}`,
        backgroundColor: theme.palette.error.alpha,
        "&:hover": {
          border: `1px solid ${theme.palette.backgroundAlpha.border}`,
          backgroundColor: theme.palette.error.alphaHover,
        },
      }),
    },
  ],
};

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    xlarge: true;
  }
  interface IconButtonPropsVariantOverrides {
    rounded: true;
  }
  interface IconButtonPropsColorOverrides {
    secondary: true;
    neutral: true;
    white: true;
    whiteSoft: true;
    whiteGhost: true;
    ghost: true;
  }
}

export default MuiIconButton;
