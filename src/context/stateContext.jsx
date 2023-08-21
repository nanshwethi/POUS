import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    StateContextProvider.propTypes = {
        children:PropTypes.any
      };

  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(1);

  const nextStepperHandler = () => {
    if (current < 4) {
      setCurrent(current + 1);
    } 
    //else if (current === 4) {
    //   setCurrent(1);
    // }
  };

  const data = { showModal, setShowModal,nextStepperHandler,current, setCurrent };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
