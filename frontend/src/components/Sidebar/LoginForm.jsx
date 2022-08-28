import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { useForm } from "../../actions/validate";

export function LoginForm(props){
    const [formData, setFormData] = createSignal({
      username: '',
      password: ''
    });
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = e => {
      e.preventDefault();
      if (typeof formData.username === 'string' && formData.username.length === 0) {
        console.log('Username is empty');
      } else {
        login(props.setUser, formData.username, formData.password);
      }
    };
  
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