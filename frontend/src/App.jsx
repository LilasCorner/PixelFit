import {Route, Routes,} from 'react-router-dom';
import Main from './Pages/Main';
import CoolDownStretchGenerator from './Pages/CoolDownStretchGenerator';
import RandomWorkoutGenerator from './Pages/RandomWorkoutGenerator';
import TargetedMuscleGroupGenerator from './Pages/TargetedMuscleGroupGenerator';
import WarmupGenerator from './Pages/WarmupGenerator';

function App() {
  return (
<Routes>
  <Route path="/" element={<Main/>}></Route>
  <Route path="/CDSG" element={<CoolDownStretchGenerator/>}></Route>
  <Route path="/RWG" element={<RandomWorkoutGenerator/>}></Route>
  <Route path="/TMGG" element={<TargetedMuscleGroupGenerator/>}></Route>
  <Route path="/WG" element={<WarmupGenerator/>}></Route>
</Routes>
  )
}

export default App
