// Solid
import { createSignal, createEffect } from "solid-js"
import { Router , Routes, Route } from "@solidjs/router"
import { hydrate } from "solid-js/web";
// Components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './components/Home/Home'
import { Profile } from './components/Profile/Profile'
import { Contacts } from './components/Contacts/Contacts'
import { ResidenceList } from './components/Residences/ResidenceList'
// Actions
import { updateResidenceList } from './actions/residences'


function Main() {
  const [user, setUser] = createSignal([]);
  const [residences, setResidences] = createSignal([]);

  createEffect(() => {
    if (user().length !== 0) {
      console.log('updating resi list')
      updateResidenceList(setResidences,user())
      localStorage.setItem("user", user())
    }
  });

  createEffect(() => {
    console.log(residences())
  });

  return (
    <Router>
      <div class= "h-screen w-screen items-stretch overflow-y-hidden" id="main" >
        <Header />
          <div class="flex h-full">
            <aside class="w-64 h-full border-r-2">
              <Sidebar user={user()} setUser={setUser} />
            </aside>
            <div class="p-2 bg-slate-200 h-full w-full">
              <Routes>
                <Route path="/" component={Home} />
                <Route path="/profile" component={<Profile />} />
                <Route path="/residences" component={<ResidenceList user={user()} residences={residences()} setResidences={setResidences}/>} />
                <Route path="/contacts" component={<Contacts />} />
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
