import { Components, Theme } from "@mui/material";

const MuiAccordionSummary: NonNullable<Components<Theme>["MuiAccordionSummary"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
      minHeight: 48,
    }),
    content: ({ theme }) => ({
      alignItems: "center",
      "&.Mui-expanded": {
        margin: `${theme.spacing(1.5)} 0`,
      },
    }),
    expandIconWrapper: ({ theme }) => ({
      color: theme.palette.text.secondary,

      svg: {
        color: theme.palette.text.secondary,
      },
    }),
  },
};

export default MuiAccordionSummary;
