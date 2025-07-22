import { Components, Theme } from "@mui/material";

const MuiInputLabel: NonNullable<Components<Theme>["MuiInputLabel"]> = {
  defaultProps: {
    variant: "standard",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 500,
      color: theme.palette.text.primary,
      "&.Mui-focused, &.Mui-error": {
        color: "inherit",
      },
    }),
  },
};

export default MuiInputLabel;
