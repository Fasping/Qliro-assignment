import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import RunSimulation from "./components/RunSimulation";
import StrategyToggle from "./components/StrategyToggle";
import Output from "./components/Output";
import Frame from "./components/Frame";
import Backdrop from "./components/Backdrop";
import LoadingBackdrop from "./components/LoadingBackdrop";
import Title from "./components/Title";

import { fetchMonty } from "./utils/fetchMonty";

const App = () => {
  const [simulation, setSimulation] = useState({});
  const [loading, setLoading] = useState(false);
  const [sampleSize, setSampleSize] = useState(0);
  const [keep, setKeep] = useState(true);
  const [fresh, setFresh] = useState(false);
  const [msg, setMsg] = useState("");

  const cbSampleSize = (sampleSize) => setSampleSize(Number(sampleSize));

  const simulate = async (sampleSize, keep, numberOfDoors) => {
    setMsg("Waiting for computation results...");
    setLoading(true);
    const res = await fetchMonty(sampleSize, keep, numberOfDoors);
    setSimulation(res);
    setLoading(false);
    setFresh(true);
  };

  const inputCheck = (sampleSize, keep, numberOfDoors) => {
    if (isNaN(sampleSize)) {
      setMsg("Sample size should be an integer");
      setLoading(true);
      setFresh(false);
    } else if (sampleSize <= 0) {
      setMsg("Sample size should be a positive integer");
      setLoading(true);
      setFresh(false);
    } else if (!Number.isInteger(sampleSize)) {
      setMsg("Sample size shouldn't be a float");
      setLoading(true);
      setFresh(false);
    } else {
      simulate(sampleSize, keep, numberOfDoors);
    }
  };

  const cbSetKeep = (keep) => setKeep(keep);
  const cbSetFresh = (fresh) => setFresh(fresh);

  // number of doors for specific case AKA Monty Hall problem
  const numberOfDoors = 3;

  return (
    <div className="App">
      <Title />
      <div className="Output">
        <Frame title="Controls" show={true}>
          <Input initial={0} cbSampleSize={cbSampleSize} />
          <StrategyToggle cbSetKeep={cbSetKeep} keep={keep} />
          <RunSimulation
            label="Run simulation"
            simulate={inputCheck}
            sampleSize={sampleSize}
            numberOfDoors={numberOfDoors}
            keep={keep}
            cbSetFresh={cbSetFresh}
          />
          <h2 style={{ textAlign: "center" }}>{loading ? msg : ""}</h2>
        </Frame>
        <Frame title="Results" show={fresh}>
          <Output simulation={simulation} keep={keep}></Output>
        </Frame>
      </div>
      <Backdrop />
      <LoadingBackdrop />
    </div>
  );
};

export default App;
