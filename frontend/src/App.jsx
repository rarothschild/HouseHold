// Solid
import { createSignal, createEffect } from "solid-js"
import { Router , Routes, Route } from "@solidjs/router"
import { hydrate } from "solid-js/web";
// Components
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './components/Home'
import { Profile } from './components/Profile/Profile'
import { Contacts } from './components/Contacts/Contacts'
import { Residences } from './components/Residences'
// Actions
import { updateResidenceList } from './actions/residences'


function Main() {
  const [user, setUser] = createSignal([]);
  const [route, setRoute] = createSignal("home");
  const [residences, setResidences] = createSignal([]);

  const routes = ["home","residences"]

  createEffect(()=>{
    console.log(route())
  })

  // createEffect(() => {
  //   if (user().length !== 0) {
  //     console.log('updating resi list')
  //     updateResidenceList(setResidences,user())
  //     localStorage.setItem("user", user())
  //   }
  // });

  return (
  <div class="h-screen overflow-y-hidden">
    <Header routes={routes} route={route()} />
    <div class="flex h-[calc(100vh-5rem)] max-w-7xl mx-auto border-x border-black">
      <Sidebar user={user()} setUser={setUser} routes={routes} route={route()} setRoute={setRoute}/>
      <div class="w-full h-full">
      <Switch fallback={<div>Not Found</div>}>
        <Match when={route() === "home"}>
          <Home />
        </Match>
        <Match when={route() === "residences"}>
          <Residences />
        </Match>
      </Switch>
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
