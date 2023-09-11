import { OutlinedInputProps } from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

export interface InputProps
  extends Required<Pick<OutlinedInputProps, "label" | "name">>,
    Pick<
      OutlinedInputProps,
      | "value"
      | "placeholder"
      | "disabled"
      | "onChange"
      | "onBlur"
      | "defaultValue"
      | "multiline"
      | "rows"
    > {
  type: HTMLInputTypeAttribute;
}
