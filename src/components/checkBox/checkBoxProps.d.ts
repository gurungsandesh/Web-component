import { FormGroupProps } from "@mui/material";

interface checkBoxProps
  extends Pick<FormGroupProps, "onChange" | "defaultValue" | "onBlur"> {
  option: checkboxOption[];
  name: string;
}

interface checkboxOption
  extends Required<Pick<FormControlLabelProps, "value" | "label">> {}

// Required<Pick<CheckboxProps, "name">>,
