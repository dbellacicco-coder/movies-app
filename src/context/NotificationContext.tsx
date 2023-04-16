import { createContext, useState, useContext } from "react";
import { AlertColor } from "@mui/material";
import Notification from "../components/ui/Notification";

interface NotificationContextProps {
  getError: (message: string) => void;
  getSuccess: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextProps | null>(
  null
);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (message: string) => {
    setSeverity("error");
    setOpen(true);
    setMessage(message);
  };

  const getSuccess = (message: string) => {
    setSeverity("success");
    setOpen(true);
    setMessage(message);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        message={message}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("El contexto no esta disponible");
  return context;
};
