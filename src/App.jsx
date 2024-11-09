import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WLCheckerPage from "./pages/WLCheckerPage";
import Layout from "./layout/MainLayout";

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wl-checker" element={<WLCheckerPage />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
