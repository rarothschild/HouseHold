import { IsLoggedIn } from "./IsLoggedIn";
import { NotLoggedIn } from "./NotLoggedIn";

function NavElement(props) {
  return (
      <a href={props.href} class="w-full py-2 text-x1 bg-gray-200 md:hover:text-gray-300 duration-500 border border-gray-500">
        <span class="h-full px-2">{props.children}</span>
      </a>
  )
}

export function Sidebar(props) {
  return(
    <div class="h-full bg-gray-100">
      <div id="UserProfCard" class="grid h-24 p-2 items-center bg-white">
        <Show when={typeof props.user.token !== 'undefined'} fallback={<NotLoggedIn setUser={props.setUser}/>}> 
          <IsLoggedIn />
        </Show>
      </div>
      <hr />
      <div class="grid grid-rows-4 justify-items-start gap-0 ">
        <NavElement href="/">Home</NavElement>
        <NavElement href="/profile">Profile</NavElement>
        <NavElement href="/residences">Residences</NavElement>
        <NavElement href="/contacts">Contacts</NavElement>
      </div>
    </div>
  )
}