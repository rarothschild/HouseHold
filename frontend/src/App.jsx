import { Header } from './components/Header'
import { ResidenceList } from './components/ResidenceList'

function App() {
  return (
    <div class= "h-screen w-screen flex items-stretch bg-slate-200" id="main" >
      <div class ="w-full items-center justify-center m-5	">
        <Header />
        <ResidenceList />
      </div>
    </div>
  );
}

export default App;
