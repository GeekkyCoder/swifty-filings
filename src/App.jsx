import "./App.css";

import { useContext, useEffect } from "react";

import TopHeader from "./components/top-header/topheader.component";
import Stepper from "./components/stepper/stepper.component";
import Main from "./components/main/main.component";
import { HorizontalLine } from "./components/form/form.styles";
import Footer from "./components/footer/footer.component";

import { TabContext } from "./context/tab.context";
import { FormContext } from "./context/form.context";

function App() {
  const { activeTab } = useContext(TabContext);
  const { form } = useContext(FormContext);

  useEffect(() => {
    if (activeTab === 4) {
      alert(JSON.stringify(form));
    }
  }, [activeTab]);

  return (
    <div className="app-container">
      <TopHeader />
      <Stepper />
      <Main />
      <HorizontalLine />
      <Footer />
    </div>
  );
}

export default App;
