import { IsLoggedIn } from "./IsLoggedIn";
import { NotLoggedIn } from "./NotLoggedIn";
import { For } from "solid-js";

export function Sidebar(props) {
  return(
    <div class="w-72 h-full border-r border-black">
      <div id="UserProfCard" class="grid h-24 p-2 items-center bg-white">
        <Show when={typeof props.user.token !== 'undefined'} fallback={<NotLoggedIn setUser={props.setUser}/>}> 
          <IsLoggedIn />
        </Show>
      </div>
      <div class="flex flex-col">
        <For each={props.routes} >
          {(item, index) => (
            <div>
              <button onClick={() => props.setRoute(item)} class="w-full py-2 text-x1 hover:text-gray-300 duration-500 ">
                <span class=" font-medium text-xl h-full px-2">{item}</span>
              </button>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}