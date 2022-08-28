import { Show, createSignal } from "solid-js";
import { IsLoggedIn } from "./IsLoggedIn";
import { NotLoggedIn } from "./NotLoggedIn";

export function UserProfCard(props) {
  return(
      <div class="grid h-24 p-2 items-center">
        <Show when={false} fallback={<NotLoggedIn setUser={props.setUser}/>}> 
          <IsLoggedIn />
        </Show>
      </div>
    )
}