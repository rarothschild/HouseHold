import { createStore } from "solid-js/store";

export const ErrorMessage = (props) => <span class="error-message">{props.error}</span>;

export function checkValid({ element, validators = [] }, setErrors, errorClass) {
  return async () => {
    element.setCustomValidity("");
    element.checkValidity();
    let message = element.validationMessage;
    if (!message) {
      for (const validator of validators) {
        const text = await validator(element);
        if (text) {
          element.setCustomValidity(text);
          break;
        }
      }
      message = element.validationMessage;
    }
    if (message) {
      errorClass && element.classList.toggle(errorClass, true);
      setErrors({ [element.name]: message });
    }
  };
}

export function useForm({ errorClass }) {
  const [errors, setErrors] = createStore({}),
    fields = {};

  const validate = (ref, accessor) => {
    console.log('validate Start')
    const validators = accessor() || [];
    let config;
    fields[ref.name] = config = { element: ref, validators };
    ref.onblur = checkValid(config, setErrors, errorClass);
    ref.oninput = () => {
      if (!errors[ref.name]) return;
      setErrors({ [ref.name]: undefined });
      errorClass && ref.classList.toggle(errorClass, false);
    };
    console.log('end')
  };

  const formSubmit = (ref, reqFunc, accessor) => {
    // Upgrade with https://www.solidjs.com/examples/forms
    const callback = accessor() || (() => {});
    ref.setAttribute("novalidate", "");

    ref.onsubmit = async (e) => {
      e.preventDefault();
      console.log(ref)
      console.log(reqFunc)
    };
  };

  return { validate, formSubmit, errors };
}
