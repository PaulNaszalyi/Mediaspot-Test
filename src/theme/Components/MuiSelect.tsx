import { Components, Theme } from "@mui/material";

const MuiSelect: NonNullable<Components<Theme>["MuiSelect"]> = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    select: ({ theme }) => ({
      display: "inline-flex",
      alignItems: "center",
      height: "auto",
      minHeight: "auto",
      ".Mui-error &": {
        backgroundColor: theme.palette.error.alpha,
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
      },
      "~ .MuiOutlinedInput-notchedOutline": {
        borderBottomColor: `transparent`,
        borderTopColor: `${theme.palette.backgroundAlpha.border}`,
      },
      "&:hover": {
        "~ .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.backgroundAlpha.border,
        },
      },
      ".Mui-focused &": {
        "~ .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.backgroundAlpha.borderFocus,
        },
      },
      ".MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: theme.spacing(1),
      },
    }),
    outlined: {},
    icon: ({ theme }) => ({
      color: theme.palette.text.tier,
    }),
  },
};

export default MuiSelect;
