import { BrowserRouter as Route } from "react-router-dom";
// import "@assets/bootstrap/bootstrap.css";
import "./App.scss";
// import "./i18n";
import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f9e0f7ff",
          borderRadius: 5,
          fontFamily: "'Montserrat', sans-serif",
        },
      }}
    >
      <Route>
        <LandingPage />
      </Route>
    </ConfigProvider>
  );
}

export default App;
