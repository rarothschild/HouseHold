import { createStore } from "solid-js/store";
import { register} from "../../actions/auth";
import { useForm, ErrorMessage } from "../../actions/validate";

export function RegisterForm(props){

    const [fields, setFields] = createStore();
  
    const onSubmit = e => {
      e.preventDefault();
      if (fields.password === fields.re_password) {
          register(fields.email, fields.password)
      }
    };

    return (
      <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
        <form onSubmit={e => onSubmit(e)}>
          <h1>Sign Up</h1>
          <div class="field-block">
            <input name="email" type="email"placeholder="Email" required 
              onInput={(e) => setFields("email", e.target.value)}/>
          </div>
          <div class="field-block">
            <input type="password" name="password" placeholder="Password" required=""
              minlength="8" onInput={(e) => setFields("password", e.target.value)} />
          </div>
          <div class="field-block">
            <input type="password" name="confirmpassword" placeholder="Confirm Password"
              onInput={(e) => setFields("re_password", e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }