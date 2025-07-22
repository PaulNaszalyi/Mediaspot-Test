import { Components, Theme } from "@mui/material";

const MuiPagination: NonNullable<Components<Theme>["MuiPagination"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiPaginationItem-root": {
        ...theme.typography.body1,
        height: "28px",
        minWidth: "28px",
        fontWeight: 500,
        color: theme.palette.text.tier,
        "&.Mui-selected": {
          color: theme.palette.primary.contrastText,
          background: theme.palette.primary.main,
        },
      },
    }),
  },
};

export default MuiPagination;
