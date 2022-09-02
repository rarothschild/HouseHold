import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './components/Home/Home'
import { ResidenceList } from './components/Residences/ResidenceList'
import { createSignal, createEffect } from "solid-js"
import { Router , Routes, Route } from "@solidjs/router"


function Main() {
  const [user, setUser] = createSignal([]);

  createEffect(() => console.log(user()));

  return (
    <Router>
      <div class= "h-screen w-screen items-stretch overflow-y-hidden" id="main" >
        <Header />
        <div class="h-full grid grid-cols-10 gap-0">
          <div class="col-span-2 border-r-2 z-1">
            <Sidebar user={user()} setUser={setUser} />
          </div>
          <div class="col-span-8 z-2">
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/residences" component={<ResidenceList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <Main />
  )
}

export default App;
