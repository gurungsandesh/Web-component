import { FormControlLabelProps, RadioGroupProps } from "@mui/material";

export interface RadioProps
  extends Required<Pick<RadioGroupProps, "name">>,
    Pick<RadioGroupProps, "value" | "onChange" | "onBlur" | "defaultValue"> {
  label: string;
  option: radioOption[];
}

interface radioOption
  extends Required<Pick<FormControlLabelProps, "value" | "label">> {}
