import { Show, createSignal } from "solid-js";
import { UserProfCard } from './UserProfCard'

function LoginForm(){
  const [formData, setFormData] = createSignal({
    username: '',
    password: ''
  });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  return(
    <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
      <form class="grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <input onChange={e => onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div>
          <input onChange={e => onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

function RegisterForm(){
   const [formData, setFormData] = createSignal({
    username: '',
    password: ''
   });
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  return(
    <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
      <form class="grid grid-rows-4 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <input onChange={e => onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div>
          <input onChange={e => onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" />
        </div>
        <div>
          <input onChange={e => onChange(e)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Re-Password" />
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

function NotLoggedIn(props) {

  const toggleLogin = (event) => {
    props.setShowRegister(false)
    props.setShowLogin(!props.showLogin)
  };
  const toggleRegister = (event) => {
    props.setShowLogin(false)
    props.setShowRegister(!props.showRegister)
  };

  return(
    <div class="grid grid-cols-1 gap-2 justify-center px-8">
      <button type="button" onClick={toggleLogin} class=" font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
          <span>Login</span>
      </button>
      <button type="button" onClick={toggleRegister} class="font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
          <span>Register</span>
      </button>
    </div>
  )
}

function LoggedIn() {
  return(
    <div><p>Test</p></div>
  )
}

export function Sidebar(props) {
  const [showLogin, setShowLogin] = createSignal(false);
  const [showRegister, setShowRegister] = createSignal(false);
  
  return(
    <div class="h-full shadow-md bg-white">
      <div class="grid h-24 p-2 items-center">
        <Show when={false} fallback={<NotLoggedIn showLogin={showLogin()} setShowLogin={setShowLogin} showRegister={showRegister()} setShowRegister={setShowRegister}/>}> 
          <LoggedIn /> 
        </Show>
      </div>
      <Show when={showLogin()}><LoginForm /></Show>
      <Show when={showRegister()}><RegisterForm /></Show>
    </div>
  )
}