import { UserProfCard } from "./UserProfCard"

export function Sidebar(props) {
  return(
    <div class="h-full shadow-md bg-white">
      <UserProfCard user={props.user} setUser={props.setUser} />
      <hr />
      <div class="grid grid-rows-5 justify-items-start gap-2 ml-5 mt-3">
          <button>Home</button>
          <button>Profile</button>
          <button>People</button>
          <button>Analytics</button>
      </div>
    </div>
  )
}