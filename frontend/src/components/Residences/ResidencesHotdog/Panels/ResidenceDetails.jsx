import { createStore } from "solid-js/store";

export function ResidenceDetails(props) {
    const [fields, setFields] = createStore();
  
    const onBack = e => {
        e.preventDefault();
        props.setPanelSelector("")
      };

    const onSubmit = e => {
      e.preventDefault();
      if (fields.password === fields.re_password) {
          register(fields.email, fields.full_name ,fields.password)
      }
    };

    return(
        <div class="border border-t-0 border-gray-400">
            <form class="w-1/2 grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
                <h1>Update Residence</h1>
                <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input name="full_name" type="streetAddress" placeholder="Street Address" onInput={(e) => setFields("full_name", e.target.value)}/>
                </div>
                <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input name="email" type="city" placeholder="City" onInput={(e) => setFields("email", e.target.value)}/>
                </div>
                <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input name="zipCode" placeholder="Zip Code" onInput={(e) => setFields("password", e.target.value)} />
                </div>
                <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <input name="state" placeholder="State" onInput={(e) => setFields("re_password", e.target.value)}/>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="submit">Update</button>
            </form>
        </div>
    )
}