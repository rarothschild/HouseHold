import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { ResidenceList } from './components/ResidenceList'
import { createSignal } from "solid-js"


function Main() {
  const [user, setUser] = createSignal([]);

  return (
    <div class= "h-screen w-screen items-stretch overflow-y-hidden" id="main" >
      <Header />
      <div class="h-full grid grid-cols-10 gap-0">

        <div class="col-span-2 border-r-2 z-1">
          <Sidebar user={user()} setUser={setUser} />
        </div>
        <div class="col-span-8 z-2">
          <ResidenceList />
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Main />
  )
}

export default App;
