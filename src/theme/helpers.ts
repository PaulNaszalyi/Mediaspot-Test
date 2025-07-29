import { Theme } from "@mui/material";

export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const hexToRgbString = (hex: string) => {
  const rgbObj = hexToRgb(hex);

  return rgbObj !== null && rgbObj.r + "," + rgbObj.g + "," + rgbObj.b;
};

const helpers = (theme: Theme) =>
  ({
    centeredModal: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ".MuiBackdrop-root": {
        position: "absolute",
      },
    },
    modalTabs: {
      paddingLeft: "12px",
      paddingRight: "12px",
      background: "#14141F",
    },
    absoluteBackDrop: {},
    scrollableContainer: {
      flexGrow: 1,
      // height: " calc(100vh - 54px)",
      height: "100%",
      overflow: "auto",
      overflowX: "hidden",
      scrollbarWidth: "thin",
      scrollbarColor: `${
        theme.palette.mode === "dark" ? theme.palette.background[200] : theme.palette.background[400]
      } transparent`,
      scrollbarBorderRadius: 6,
    },
    scrollBar: {
      scrollbarWidth: "thin",
      // Support for Chrome since changes (https://developer.chrome.com/docs/css-ui/scrollbar-styling?hl=fr)
      scrollbarColor: `${
        theme.palette.mode === "dark" ? theme.palette.background[200] : theme.palette.background[400]
      } transparent`,
      scrollbarBorderRadius: 6,
      "::-webkit-scrollbar": {
        display: "block",
        borderRadius: 6,
        background: "transparent",
        width: 8,
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
        borderRadius: 6,
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: 6,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.background[200] : theme.palette.background[400],
      },
    },
    clampedText: {
      display: "-webkit-box",
      textOverflow: "ellipsis",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    ellipsis: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    fullImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
    },
    panelHighlights: {
      //@TODO light/dark mode
      boxShadow:
        theme.palette.mode === "dark"
          ? "0px 4px 8px 0px rgba(0, 0, 0, 0.40), 0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.30) inset"
          : "0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.10) inset",
    },
    sectionHighlights: {
      //@TODO light/dark mode
      boxShadow:
        theme.palette.mode === "dark"
          ? "0px 4px 8px 0px rgba(0, 0, 0, 0.40), 0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.30) inset"
          : "0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 0px 0px rgba(255, 255, 255, 0.20) inset, 0px 0px 0px 0px rgba(0, 0, 0, 0.10) inset",
    },
    stickyHighlights: {
      //@TODO light/dark mode
      boxShadow:
        theme.palette.mode === "dark"
          ? "0px 4px 8px 0px rgba(24, 24, 36, 0.40)"
          : "0px 4px 8px 0px rgba(24, 24, 36, 0.05)",
    },
    popoverMenuHighlights: {
      //@TODO light/dark mode
      boxShadow:
        theme.palette.mode === "dark"
          ? "0px 4px 8px 0px rgba(0, 0, 0, 0.40), 0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.30) inset"
          : "0px 4px 12px 2px rgba(0, 0, 0, 0.08), 0px 1px 0px 0px rgba(255, 255, 255, 0.5) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.1) inset",
    },
    maskingGradient: {
      backgroundDefault: `linear-gradient(90deg, rgba(${hexToRgbString(
        theme.palette.background.default
      )}, 0) 0%, rgba(${hexToRgbString(theme.palette.background.default)}, 1) 30%)`,
      backgroundElevated: `linear-gradient(90deg, rgba(${hexToRgbString(
        theme.palette.background.paper
      )}, 0) 0%, rgba(${hexToRgbString(theme.palette.background.paper)}, 1) 30%)`,
    },
    listPageHeaderShadow: {
      container: {
        boxShadow:
          theme.palette.mode === "dark"
            ? `12px 0px 8px 0px rgba(${hexToRgbString(theme.palette.background.default)}, 1)`
            : "0px 4px 8px 0px rgba(0, 0, 0, 0.40), 0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px -1px 0px 0px rgba(0, 0, 0, 0.30) inset",
      },
    },
    maskImage: {
      right: {
        maskImage: `linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
      },
      bottom: {
        maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)`,
      },
      full: {
        maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)`,
      },
    },
    baseTransition: {
      transition: theme.transitions.create(["all"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter,
      }),
    },
  } as const);

declare module "@mui/material/styles" {
  interface Theme {
    helpers: typeof helpers;
  }
  interface ThemeOptions {
    helpers: typeof helpers;
  }
}

export default helpers;
