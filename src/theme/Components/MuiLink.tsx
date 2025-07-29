import { Components, Theme } from "@mui/material";

const MuiLink: NonNullable<Components<Theme>["MuiLink"]> = {
  styleOverrides: {
    root: () => ({
      display: "inline-flex",
      alignItems: "center",
      fontWeight: 500,
    }),
  },
};

export default MuiLink;
