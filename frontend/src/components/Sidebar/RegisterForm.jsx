import { createStore } from "solid-js/store";
import { register} from "../../actions/auth";
import { useForm, ErrorMessage } from "../../actions/validate";

export function RegisterForm(props){

    const [fields, setFields] = createStore();
  
    const onSubmit = e => {
      e.preventDefault();
      if (fields.password === fields.re_password) {
          register(fields.email, fields.full_name ,fields.password)
      }
    };

    return (
      <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
         <form class="grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
          <h1>Sign Up</h1>
          <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input name="full_name" type="username"placeholder="Full Name" required 
              onInput={(e) => setFields("full_name", e.target.value)}/>
          </div>
          <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input name="email" type="email"placeholder="Email" required 
              onInput={(e) => setFields("email", e.target.value)}/>
          </div>
          <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input type="password" name="password" placeholder="Password" required
              minlength="8" onInput={(e) => setFields("password", e.target.value)} />
          </div>
          <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <input type="password" name="confirmpassword" placeholder="Confirm Password" required
              onInput={(e) => setFields("re_password", e.target.value)}/>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="submit">Submit</button>
        </form>
      </div>
    );
  }