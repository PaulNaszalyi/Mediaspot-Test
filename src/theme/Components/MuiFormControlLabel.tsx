import { Components, Theme } from "@mui/material";

const MuiFormControlLabel: NonNullable<Components<Theme>["MuiFormControlLabel"]> = {
  variants: [
    {
      props: { variant: "outlined" },
      style: ({ theme }) => ({
        marginLeft: 0,
        marginRight: 0,
        padding: `${theme.spacing(1)}`,
        borderRadius: 6,
        border: `1px solid ${theme.palette.backgroundAlpha.border}`,
      }),
    },
  ],
};

declare module "@mui/material/FormControlLabel" {
  interface FormControlLabelProps {
    variant?: "outlined";
  }
  interface FormControlLabelPropsVariantOverrides {
    outlined: true;
  }
}

export default MuiFormControlLabel;
