import { Components, Theme } from "@mui/material";

const MuiAutocomplete: NonNullable<Components<Theme>["MuiAutocomplete"]> = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiInputBase-root": {
        padding: 1,
      },
      ".MuiOutlinedInput-root .MuiAutocomplete-input": {
        padding: "0 11px", // was 0 11px before mui v5.15.12
        height: "100% !important",
      },
      ".MuiAutocomplete-tag + .MuiAutocomplete-input ": {
        marginLeft: theme.spacing(0.5),
      },
    }),
    popupIndicator: ({ theme }) => ({
      "svg, &.MuiIconButton-root svg": {
        color: theme.palette.text.tier,
      },
    }),
    endAdornment: ({ theme }) => ({
      top: "calc(50% - 0px)", // was -11px before mui v5.15.12
      right: "2px !important",

      ".MuiIconButton-root": {
        width: 32,
        height: 32,
      },
    }),
  },
  variants: [
    {
      props: { size: "small" },
      style: {
        ".MuiInputBase-root": {
          padding: 4,
          minHeight: "32px !important",
        },
        ".MuiOutlinedInput-root .MuiAutocomplete-input": {
          padding: "0 4px !important",
        },
      },
    },
    {
      props: { size: "large" },
      style: {
        ".MuiInputBase-root": {
          padding: 4,
          minHeight: "48px !important",
        },
        ".MuiOutlinedInput-root .MuiAutocomplete-input": {
          padding: "0 8px",
        },
      },
    },
    {
      props: { size: "xlarge" },
      style: {
        ".MuiInputBase-root": {
          padding: 8,
          height: 56,
          minHeight: "56px !important",
        },
        ".MuiOutlinedInput-root .MuiAutocomplete-input": {
          padding: "0 12px",
        },
      },
    },
  ],
};

declare module "@mui/material/Autocomplete" {
  interface AutocompletePropsSizeOverrides {
    large: true;
    xlarge: true;
  }
}

export default MuiAutocomplete;
