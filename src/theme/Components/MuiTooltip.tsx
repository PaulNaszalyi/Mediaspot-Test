import { Components, Theme } from "@mui/material";

const MuiTooltip: NonNullable<Components<Theme>["MuiTooltip"]> = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.backgroundAlpha.border}`,
      color: theme.palette.text.primary,
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.background.paper,
    }),
  },
};

export default MuiTooltip;
