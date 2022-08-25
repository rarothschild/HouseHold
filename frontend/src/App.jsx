import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { ResidenceList } from './components/ResidenceList'

function App() {
  return (
    <div class= "h-screen w-screen items-stretch overflow-y-hidden" id="main" >
      <Header />
      <div class="h-full grid grid-cols-10 gap-0">
        <div class="col-span-2 border-r-2">
          <Sidebar />
        </div>
        <div class="col-span-8">
          <ResidenceList />
        </div>
      </div>
    </div>
  );
}

export default App;
