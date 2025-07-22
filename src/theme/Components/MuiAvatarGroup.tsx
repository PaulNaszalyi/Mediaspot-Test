import { Components, Theme } from "@mui/material";

const MuiAvatarGroup: NonNullable<Components<Theme>["MuiAvatarGroup"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiAvatar-colorDefault": {
        background: theme.palette.background[400],
        color: theme.palette.text.secondary,
        fontSize: 13,
        lineHeight: 16,
        fontWeight: 500,
      },
    }),
  },
};

export default MuiAvatarGroup;
