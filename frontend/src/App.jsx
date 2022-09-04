import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './components/Home/Home'
import { Profile } from './components/Profile/Profile'
import { Contacts } from './components/Contacts/Contacts'
import { ResidenceList } from './components/Residences/ResidenceList'
import { createSignal, createEffect } from "solid-js"
import { Router , Routes, Route } from "@solidjs/router"
import { hydrate } from "solid-js/web";


function Main() {
  const [user, setUser] = createSignal([]);
  //const [user, setUser] = userStore({
  //  user: [],
  //  token: []
  //})

  createEffect(() => {
    console.log(user())
    console.log(typeof user().token !== 'undefined')
  });

  return (
    <Router>
      <div class= "h-screen w-screen items-stretch overflow-y-hidden" id="main" >
        <Header />
        <div class="h-full grid grid-cols-10 gap-0">
          <div class="col-span-2 border-r-2">
            <Sidebar user={user()} setUser={setUser} />
          </div>
          <div class="col-span-8 p-2 bg-slate-200 h-full">
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/profile" component={<Profile />} />
              <Route path="/residences" component={<ResidenceList />} />
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
