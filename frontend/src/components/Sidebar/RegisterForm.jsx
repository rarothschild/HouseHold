import { createStore } from "solid-js/store";
import { register} from "../../actions/auth";
import { useForm, ErrorMessage } from "../../actions/validate";

export function RegisterForm(props){
    const { validate, formSubmit, errors } = useForm({
      errorClass: "error-input"
    });
    const [fields, setFields] = createStore();
    const fn = (form) => {
      console.log(props)
      console.log(form)
      console.log(props.email)
      console.log(props.password)
      register(props.setUser, props.email, props.password)
    };
    const matchesPassword = ({ value }) =>
      value === fields.password ? false : "Passwords must Match";
  
    return (
      <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2">
        <form use:formSubmit={fn}>
          <h1>Sign Up</h1>
          <div class="field-block">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            {errors.email && <ErrorMessage error={errors.email} />}
          </div>
          <div class="field-block">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required=""
              minlength="8"
              onInput={(e) => setFields("password", e.target.value)}
            />
            {errors.password && <ErrorMessage error={errors.password} />}
          </div>
          <div class="field-block">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              required=""
              use:validate={[matchesPassword]}
            />
            {errors.confirmpassword && (
              <ErrorMessage error={errors.confirmpassword} />
            )}
          </div>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }