import { createStore } from "solid-js/store";
import { login} from "../../actions/auth";

export function LoginForm(props){

    const [fields, setFields] = createStore();
  
    const onSubmit = e => {
      e.preventDefault();
      const res = login(props.setUser, fields.email ,fields.password)
      
      //props.setShowLogin(false)
    };
  
    return(
      <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
        <form class="grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
          <div>
            <h1>Sign In</h1>
          </div>
          <div>
            <input onInput={(e) => setFields("email", e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" onInput={(e) => setFields("password", e.target.value)}
             class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Password" />
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }