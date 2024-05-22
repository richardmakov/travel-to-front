import { Alert } from "@mui/material";
import { PropsWithChildren } from "react";

export default function ErrorMessage({children}: PropsWithChildren) {
  return (
    <Alert sx={{ my:1, width:'100%'}} severity="error">{children}</Alert>
  )
}
