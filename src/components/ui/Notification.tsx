import React from "react";
import { Snackbar, Alert, AlertColor, Typography } from "@mui/material";

interface NotificationProps {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  open,
  message,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
