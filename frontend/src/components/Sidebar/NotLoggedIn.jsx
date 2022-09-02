import { Show, createSignal } from "solid-js";
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export function NotLoggedIn(props) {

    const [showLogin, setShowLogin] = createSignal(false);
    const [showRegister, setShowRegister] = createSignal(false);

    const toggleLogin = (event) => {
      setShowRegister(false)
      setShowLogin(!showLogin())
    };
    const toggleRegister = (event) => {
      setShowLogin(false)
      setShowRegister(!showRegister())
    };
  
    return(
        <div>
            <div class="grid grid-cols-1 gap-2 justify-center px-8">
                <button type="button" onClick={toggleLogin} class=" font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                    <span>Login</span>
                </button>
                <button type="button" onClick={toggleRegister} class="font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
                    <span>Register</span>
                </button>
            </div>
            <Show when={showLogin()}><LoginForm setUser={props.setUser} setShowLogin={setShowLogin}/></Show>
            <Show when={showRegister()}><RegisterForm setUser={props.setUser} setShowRegister={setShowRegister}/></Show>
        </div>
    )
  }