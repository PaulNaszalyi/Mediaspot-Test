import { Components, Theme } from "@mui/material";
import { hexToRgbString } from "../../Utils/Helpers/cssUtils";

const MuiChip: NonNullable<Components<Theme>["MuiChip"]> = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "6px",
      paddingLeft: 2,
      paddingRight: 2,
      "&.MuiChip-filledError": {
        color: theme.palette.text.primary,
      },
      "&.MuiChip-outlinedError": {
        backgroundColor: theme.palette.error.alpha,
        color: theme.palette.error.main,
      },
      "&.MuiChip-outlinedWarning": {
        backgroundColor: theme.palette.warning.alpha,
        color: theme.palette.warning.main,
      },
      "&.MuiChip-outlinedSuccess": {
        backgroundColor: theme.palette.success.alpha,
        color: theme.palette.success.main,
      },
      "&.MuiChip-outlinedInfo": {
        backgroundColor: theme.palette.info.alpha,
        color: theme.palette.info.main,
      },
      "&.MuiChip-outlinedAccent": {
        backgroundColor: theme.palette.accent.alpha,
        color: theme.palette.accent.main,
      },
      ".MuiChip-deleteIcon": {
        marginLeft: 0,
        marginRight: 0,
        color: theme.palette.text.tier,
      },
    }),
    icon: () => ({
      marginLeft: 0,
      marginRight: 2,
    }),
    label: () => ({
      padding: "0px 2px",
    }),
    sizeSmall: ({ theme }) => ({
      ...theme.typography.body2,
      fontWeight: 500,
      height: "20px",
      paddingLeft: 3,
      paddingRight: 3,
      svg: {
        width: "12px",
        height: "12px",
      },
    }),
    sizeMedium: ({ theme }) => ({
      ...theme.typography.body1,
      fontWeight: 500,
      height: "24px",
      paddingLeft: 4,
      paddingRight: 4,
      svg: {
        width: "16px",
        height: "16px",
      },
    }),
    labelMedium: ({ theme }) => ({
      paddingLeft: 4,
      paddingRight: 4,
    }),
    outlined: {
      border: "none",
    },
    outlinedPrimary: ({ theme }) => ({
      backgroundColor: theme.palette.primary.alpha,
      color: theme.palette.primary.text,
    }),
  },
  variants: [
    {
      props: { color: "primary" },
      style: ({ theme }) => ({
        "&.MuiChip-clickable": {
          "&:hover": {
            background: theme.palette.primary.mainHover,
          },
        },
        "&.MuiChip-filled": {
          color: theme.palette.mode === "dark" ? theme.palette.primary.contrastText : theme.palette.primary.main,
          background: theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.primary.alpha,
        },
      }),
    },
    {
      props: { color: "default", variant: "outlined" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.backgroundAlpha.main,
        color: theme.palette.text.secondary,
        ".MuiChip-icon": {
          color: theme.palette.text.secondary,
        },
      }),
    },
    {
      props: { color: "default", variant: "filled" },
      style: ({ theme }) => ({
        backgroundColor: theme.palette.background[400],
        color: theme.palette.text.secondary,
        ".MuiChip-icon": {
          color: theme.palette.text.secondary,
          opacity: 0.8,
        },
      }),
    },
    {
      props: { color: "info" },
      style: ({ theme }) => ({
        "&.MuiChip-clickable": {
          "&:hover": {
            background: theme.palette.info.mainHover,
          },
        },
        "&.MuiChip-filled": {
          color: theme.palette.mode === "dark" ? theme.palette.info.dark : theme.palette.info.main,
          background: theme.palette.mode === "dark" ? theme.palette.info.main : theme.palette.info.alpha,
        },
      }),
    },
    {
      props: { color: "error" },
      style: ({ theme }) => ({
        "&.MuiChip-clickable": {
          "&:hover": {
            background: theme.palette.error.mainHover,
          },
        },
        "&.MuiChip-filled": {
          color: theme.palette.mode === "dark" ? theme.palette.error.dark : theme.palette.error.main,
          background: theme.palette.mode === "dark" ? theme.palette.error.main : theme.palette.error.alpha,
        },
      }),
    },
    {
      props: { color: "warning" },
      style: ({ theme }) => ({
        "&.MuiChip-clickable": {
          "&:hover": {
            background: theme.palette.warning.mainHover,
          },
        },
        "&.MuiChip-filled": {
          color: theme.palette.mode === "dark" ? theme.palette.warning.dark : theme.palette.warning.main,
          background: theme.palette.mode === "dark" ? theme.palette.warning.main : theme.palette.warning.alpha,
        },
      }),
    },
    {
      props: { color: "success" },
      style: ({ theme }) => ({
        "&.MuiChip-clickable": {
          "&:hover": {
            background: theme.palette.success.mainHover,
          },
        },
        "&.MuiChip-filled": {
          color: theme.palette.mode === "dark" ? theme.palette.success.dark : theme.palette.success.main,
          background: theme.palette.mode === "dark" ? theme.palette.success.main : theme.palette.success.alpha,
        },
      }),
    },
    {
      props: { variant: "tag" },
      style: ({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.backgroundAlpha.border}`,
        color: theme.palette.text.secondary,
        "&:hover": {
          backgroundColor: theme.palette.backgroundAlpha.hover,
          borderColor: theme.palette.backgroundAlpha.borderFocus,
        },
        "&.active, &.selected": {
          backgroundColor: theme.palette.primary.main,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
        },
      }),
    },
    {
      props: { size: "large" },
      style: ({ theme }) => ({
        height: 32,
        fontSize: 13,
        fontWeight: 500,
        paddingLeft: 8,
        paddingRight: 8,
        ".MuiChip-label": {
          paddingLeft: 4,
          paddingRight: 4,
        },
        ".MuiChip-icon,  .MuiChip-deleteIcon": {
          fontSize: 20,
        },
      }),
    },
    {
      props: { size: "micro" },
      style: ({ theme }) => ({
        height: 16,
        fontSize: "11px",
        fontWeight: 500,
        lineHeight: "16px",
        borderRadius: "3px",

        ".MuiChip-icon, .MuiChip-deleteIcon": {
          fontSize: 12,
        },
      }),
    },
  ],
};

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    large: true;
    micro: true;
  }
  interface ChipPropsVariantOverrides {
    tag: true;
  }
}

export default MuiChip;
