import { ModalProps } from "@mui/material";

export interface CustomModalProps
  extends Required<Pick<ModalProps, "children" | "open" | "onClose">> {}
