import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home";
import { DerHofPage } from "./pages/der-hof";
import { ProduktePage } from "./pages/produkte";
import { VermietungPage } from "./pages/vermietung";
import { KontaktPage } from "./pages/kontakt";
import { NotFoundPage } from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="der-hof" element={<DerHofPage />} />
          <Route path="produkte" element={<ProduktePage />} />
          <Route path="vermietung" element={<VermietungPage />} />
          <Route path="kontakt" element={<KontaktPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
