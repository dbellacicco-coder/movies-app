import { BrowserRouter } from "react-router-dom";
import APPRouter from "./Router";
import { Container } from "@mui/material";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Container sx={{ mt: 9 }} maxWidth="xl">
          <APPRouter />
        </Container>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
