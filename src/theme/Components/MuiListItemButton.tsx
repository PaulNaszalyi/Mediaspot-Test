import { Components, Theme } from "@mui/material";

const MuiListItemButton: NonNullable<Components<Theme>["MuiListItemButton"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.button,
      color: theme.palette.text.tier,
      borderRadius: 6,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 8,
      paddingBottom: 8,
      svg: {
        fontSize: 16,
        color: theme.palette.text.tier,
      },
      "&:hover": {
        background: theme.palette.backgroundAlpha.main,
      },
      "&.Mui-selected": {
        background: theme.palette.primary.main,
        color: theme.palette.text.inverted,
        svg: {
          color: theme.palette.text.inverted,
        },
        "&:hover": {
          background: theme.palette.primary.main,
        },
      },
      "& .MuiListItemIcon-root": {
        minWidth: 0,
        marginRight: 8,
      },
    }),
    // selected: ({theme}) => ({
    //   background: theme.palette.backgroundAlpha.main,
    //   color: theme.palette.text.primary,
    // })
  },
};

export default MuiListItemButton;
