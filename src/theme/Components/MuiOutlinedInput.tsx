import { Components, Theme } from "@mui/material";

const MuiOutlinedInput: NonNullable<Components<Theme>["MuiOutlinedInput"]> = {
  defaultProps: {
    notched: false,
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.backgroundAlpha.main,
      "&:hover": {
        backgroundColor: theme.palette.backgroundAlpha.hover,
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.backgroundAlpha.border,
        },
      },
      "&.Mui-focused": {
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.backgroundAlpha.borderFocus,
        },
      },
      "&.Mui-disabled": {
        ".MuiInputBase-input": {
          WebkitTextFillColor: theme.palette.text.primary,
          opacity: 0.4,
        },
        ".MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      },
      ".MuiInputBase-input": {
        padding: "10px 12px",
        lineHeight: "20px",
        minHeight: "auto",
        height: "auto",

        "&::-webkit-calendar-picker-indicator": {
          color: theme.palette.text.tier,
        },
      },
      ".MuiSelect-icon": {
        color: theme.palette.text.tier,
      },
      svg: {
        color: theme.palette.primary.main,
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        borderBottom: `1px solid ${theme.palette.error.main}`,
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: "transparent",
      borderBottom: `1px solid ${theme.palette.backgroundAlpha.border}`,
    }),
    error: ({ theme }) => ({
      svg: {
        color: theme.palette.error.main,
      },
    }),
    multiline: ({ theme }) => ({
      padding: 0,
      ".MuiInputBase-input": {
        padding: "8px 12px",
      },
    }),
    sizeSmall: {
      ".MuiInputBase-input": {
        padding: "8px",
        lineHeight: "16px",
      },
      svg: {
        fontSize: 16,
      },
    },
  },
  variants: [
    {
      props: { size: "large" },
      style: {
        fontSize: 15,
        ".MuiInputBase-input": {
          padding: "12px",
          lineHeight: "24px",
        },
        svg: {
          fontSize: 24,
        },
      },
    },
    {
      props: { size: "xlarge" },
      style: {
        fontSize: 17,
        ".MuiInputBase-input": {
          padding: "16px",
          lineHeight: "24px",
        },
        svg: {
          fontSize: 24,
        },

        ".MuiAutocomplete-endAdornment": {
          top: "calc(50% - 14px)",
        },
      },
    },
    {
      props: { size: "xlarge", multiline: true },
      style: {
        ".MuiInputBase-input": {
          padding: "16px 20px",
        },
      },
    },
    {
      props: { size: "large", multiline: true },
      style: {
        ".MuiInputBase-input": {
          padding: "12px 16px",
        },
      },
    },
  ],
};

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    large: true;
    xlarge: true;
  }
}

export default MuiOutlinedInput;
