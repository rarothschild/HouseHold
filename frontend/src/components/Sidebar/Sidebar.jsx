import { UserProfCard } from "./UserProfCard"

export function Sidebar(props) {
  return(
    <div class="h-full shadow-md bg-white">
      <UserProfCard user={props.user} setUser={props.setUser} />
    </div>
  )
}