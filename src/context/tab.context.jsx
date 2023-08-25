import { createContext,useState,useContext } from "react";

const TabContext = createContext();

import {steps} from "../components/stepper/steps.data"

function TabContextProvider({ children }) {

    const [activeTab,setActiveTab] = useState(1)
    const [steppers, setSteppers] = useState(steps);

    const updateActiveTab = (current) => {
        setActiveTab(current)
    }

    const toggleActive = (e, id) => {
      setSteppers((prevSteppers) => {
        return prevSteppers.map((stepper) =>
          stepper.id === id
            ? { ...stepper, active: true }
            : { ...stepper, active: false }
        );
      });
      updateActiveTab(id)
    };



  return <TabContext.Provider value={{updateActiveTab,activeTab,steppers,toggleActive}}>
    {children}
  </TabContext.Provider>;
}

export {
    TabContext,
    TabContextProvider
}
