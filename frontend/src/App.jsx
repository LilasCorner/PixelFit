import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import CoolDownStretchGenerator from "./Pages/CoolDownStretchGenerator";
import RandomWorkoutGenerator from "./Pages/RandomWorkoutGenerator";
import TargetedMuscleGroupGenerator from "./Pages/TargetedMuscleGroupGenerator";
import WarmupGenerator from "./Pages/WarmupGenerator";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import Register from "./Login/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/CDSG" element={<CoolDownStretchGenerator />}></Route>
        <Route path="/RWG" element={<RandomWorkoutGenerator />}></Route>
        <Route path="/TMGG" element={<TargetedMuscleGroupGenerator />}></Route>
        <Route path="/WG" element={<WarmupGenerator />}></Route>
        <Route path="/Login" element={<Login  />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
