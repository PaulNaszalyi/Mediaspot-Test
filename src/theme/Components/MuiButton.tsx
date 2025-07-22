import { Components, darken, Theme } from "@mui/material";
const MuiButton: NonNullable<Components<Theme>["MuiButton"]> = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      border: "1px solid transparent",
      backgroundColor: theme.palette.backgroundAlpha.main,
      minWidth: "unset",
      textWrap: "nowrap",
      ...theme.typography.button,
      "&.Mui-disabled": {
        opacity: 0.4,
      },
      "&:hover": {
        backgroundColor: theme.palette.backgroundAlpha.hover,
        borderColor: theme.palette.backgroundAlpha.border,
      },
      "&.is-selected": {
        backgroundColor: theme.palette.backgroundAlpha.pressed,
        borderColor: theme.palette.backgroundAlpha.borderFocus,
      },
    }),
    sizeLarge: ({ theme }) => ({
      ...theme.typography.buttonLarge,
      padding: "11px 16px",
      ".MuiSvgIcon-root": {
        fontSize: "24px !important",
      },
    }),
    sizeMedium: {
      padding: "9px 12px",
      ".MuiSvgIcon-root": {
        fontSize: "20px !important",
      },
    },
    sizeSmall: {
      padding: "7px 8px",
      lineHeight: "16px",
      ".MuiButton-iconSizeSmall": {
        marginRight: "6px",
      },
      ".MuiSvgIcon-root": {
        fontSize: "16px !important",
      },
      ".MuiButton-endIcon": {
        marginLeft: "6px",
        marginRight: 0,
      },
    },
    containedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.primary.mainHover,
      },
      "&.Mui-disabled": {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    }),
    outlinedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.alpha,
      borderColor: "transparent",
      color: theme.palette.primary.text,
      "&:hover": {
        backgroundColor: theme.palette.primary.alphaHover,
      },
      "&.Mui-disabled": {
        backgroundColor: theme.palette.primary.alpha,
        color: theme.palette.primary.text,
      },
    }),
    textPrimary: ({ theme }) => ({
      color: theme.palette.text.primary,
      "&:hover": {
        background: theme.palette.backgroundAlpha.hover,
      },
      "&.Mui-disabled": {
        background: theme.palette.backgroundAlpha.hover,
        color: theme.palette.text.primary,
      },
    }),
    containedError: ({ theme }) => ({
      backgroundColor: theme.palette.error.main,
      "&:hover": {
        // @TODO industrialize
        backgroundColor: darken(theme.palette.error.main, 0.15),
      },
      "&.Mui-disabled": {
        opacity: 0.5,
        backgroundColor: theme.palette.error.main,
        color: theme.palette.common.white,
      },
    }),
    outlinedError: ({ theme }) => ({
      backgroundColor: theme.palette.error.alpha,
      "&:hover": {
        backgroundColor: theme.palette.error.alphaHover,
      },
      "&.Mui-disabled": {
        color: theme.palette.error.main,
      },
    }),
  },
  variants: [
    {
      props: { size: "xlarge" },
      style: {
        padding: "15px 20px",
        fontSize: 15,
        lineHeight: "24px",
        borderRadius: 12,
        ".MuiSvgIcon-root": {
          fontSize: "24px !important",
        },
      },
    },
    {
      props: { variant: "rounded" },
      style: {
        borderRadius: 100,
        background: "transparent",

        "&:hover": {
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
        },
      },
    },
    {
      props: { variant: "icon", size: "medium" },
      style: {
        padding: 9,
        ".MuiButton-icon": { marginRight: 0 },
      },
    },
    {
      props: { variant: "icon", size: "large" },
      style: {
        padding: 11,
        ".MuiButton-icon": { marginRight: 0 },
      },
    },
    {
      props: { variant: "icon", size: "xlarge" },
      style: {
        padding: 15,
        ".MuiButton-icon": { marginRight: 0 },
      },
    },
    {
      props: { variant: "white" },
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
      props: { variant: "whiteSoft" },
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
      props: { color: "neutral" },
      style: ({ theme }) => ({
        background: theme.palette.backgroundAlpha.main,
        color: theme.palette.text.primary,
        "&:hover": {
          background: theme.palette.backgroundAlpha.hover,
          border: `1px solid ${theme.palette.backgroundAlpha.border}`,
        },
        "&:disabled": {
          color: theme.palette.text.disabled,
        },
      }),
    },
  ],
};

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xlarge: true;
  }
  interface ButtonPropsVariantOverrides {
    rounded: true;
    white: true;
    whiteSoft: true;
    icon: true;
  }
  interface ButtonPropsColorOverrides {
    secondary: false;
    neutral: true;
  }
}

export default MuiButton;
