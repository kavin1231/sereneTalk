import React from "react";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
};

export default App;
