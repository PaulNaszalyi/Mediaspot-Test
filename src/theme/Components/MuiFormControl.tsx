import { Components, Theme } from "@mui/material";

const MuiFormControl: NonNullable<Components<Theme>["MuiFormControl"]> = {
  defaultProps: {
    variant: "standard",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiOutlinedInput-root": {
        marginTop: "24px",
      },
      ".MuiInputLabel-root": {
        transform: "none",
      },
      ".MuiFormHelperText-root": {
        marginTop: theme.spacing(0.5),
        fontSize: 12,
        color: theme.palette.text.secondary,
      },
      "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input::placeholder": {
        opacity: "1 !important",
        color: theme.palette.text.secondary,
      },
    }),
  },
  variants: [
    {
      props: { size: "large" },
      style: {},
    },
    {
      props: { size: "xlarge" },
      style: {},
    },
  ],
};

declare module "@mui/material/FormControl" {
  interface FormControlPropsSizeOverrides {
    large: true;
    xlarge: true;
  }
}

export default MuiFormControl;
