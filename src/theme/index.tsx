import { createTheme } from "@mui/material/styles";
import MuiCssBaseline from "./Components/MuiCssBaseline";
import MuiListItemButton from "./Components/MuiListItemButton";
import MuiButton from "./Components/MuiButton";
import MuiIconButton from "./Components/MuiIconButton";
import paletteDark from "./paletteDark";
import shadowsDark from "./shadowsDark";
import typography from "./typography";
import helpers from "./helpers";
import MuiCheckbox from "./Components/MuiCheckbox";
import MuiLink from "./Components/MuiLink";
import MuiChip from "./Components/MuiChip";
import MuiSelect from "./Components/MuiSelect";
import MuiOutlinedInput from "./Components/MuiOutlinedInput";
import MuiPopover from "./Components/MuiPopover";
import {
  MuiToggleButton,
  MuiToggleButtonGroup,
} from "./Components/MuiToggleButton";
import MuiSvgIcon from "./Components/MuiSvgIcon";
import MuiAppBar from "./Components/MuiAppBar";
import MuiFormControl from "./Components/MuiFormControl";
import MuiInputLabel from "./Components/MuiInputLabel";
import MuiAccordion from "./Components/MuiAccordion";
import MuiAccordionSummary from "./Components/MuiAccordionSummary";
import MuiAccordionDetails from "./Components/MuiAccordionDetails";
import MuiAlert from "./Components/MuiAlert";
import MuiSwitch from "./Components/MuiSwitch";
import MuiFormControlLabel from "./Components/MuiFormControlLabel";
import MuiAutocomplete from "./Components/MuiAutocomplete";
import MuiTabs from "./Components/MuiTabs";
import MuiTab from "./Components/MuiTab";
import MuiPagination from "./Components/MuiPagination";
import MuiCard from "./Components/MuiCard";
import MuiTooltip from "./Components/MuiTooltip";
import MuiAvatarGroup from "./Components/MuiAvatarGroup";

export const ThemeDark = createTheme({
  palette: paletteDark,
  typography,
  shadows: shadowsDark,
  components: {
    MuiCssBaseline,
    MuiListItemButton,
    MuiButton,
    MuiIconButton,
    MuiCheckbox,
    MuiLink,
    MuiChip,
    MuiFormControl,
    MuiSelect,
    MuiInputLabel,
    MuiOutlinedInput,
    MuiPopover,
    MuiToggleButton,
    MuiToggleButtonGroup,
    MuiSvgIcon,
    MuiAppBar,
    MuiAccordion,
    MuiAccordionSummary,
    MuiAccordionDetails,
    MuiAlert,
    MuiSwitch,
    MuiFormControlLabel,
    MuiAutocomplete,
    MuiTabs,
    MuiTab,
    MuiPagination,
    MuiCard,
    MuiTooltip,
    MuiAvatarGroup,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 6,
  },
  helpers,
});
