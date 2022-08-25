import { Sidebar } from './components/Sidebar'
import { ResidenceList } from './components/ResidenceList'

function App() {
  return (
    <div class= "h-screen w-screen flex items-stretch bg-slate-200" id="main" >
      <div>
        <Sidebar />
      </div>
      <div class ="w-full flex items-center justify-center m-5	">
        <ResidenceList />
      </div>
    </div>
  );
}

export default App;
