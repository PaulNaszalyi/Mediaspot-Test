import { Components, Theme } from "@mui/material";

const MuiSvgIcon: NonNullable<Components<Theme>["MuiSvgIcon"]> = {
  styleOverrides: {
    root: () => ({
      fontSize: 20,
    }),
    fontSizeSmall: () => ({
      fontSize: 16,
    }),
    fontSizeLarge: () => ({
      fontSize: 24,
    }),
  },
};

export default MuiSvgIcon;
