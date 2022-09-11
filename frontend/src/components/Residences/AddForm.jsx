import { SubmitButton } from '../FormStyles'
import { addResidence, updateResidenceList } from "../../actions/residences";
import { createStore } from "solid-js/store";

export default function AddForm(props){
    const [fields, setFields] = createStore();
  
    const onSubmit = e => {
      e.preventDefault();
      const res = addResidence(props.user, fields.streetAddress,fields.zipCode,fields.city,fields.country)
      props.setShowAdd(false)
      updateResidenceList(props.setResidences, props.user)
    };
  
    return(
        <div class="absolute bg-white opacity-100 border-2 border-slate-500 m-2 w-72">
            <form class="grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>
                <div><h1>Add Residence</h1></div>
                <div>
                    <input onInput={(e) => setFields("streetAddress", e.target.value)} 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="streetAddress" type="text" placeholder="Street Address" />
                </div>
                <div>
                    <input onInput={(e) => setFields("city", e.target.value)} 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="city" type="text" placeholder="Zip Code" />
                </div>
                <div>
                    <input onInput={(e) => setFields("zipCode", e.target.value)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="zipCode" placeholder="Zip Code" />
                </div>
                <div>
                    <input onInput={(e) => setFields("country", e.target.value)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="country" placeholder="Country" />
                </div>
                <SubmitButton />
            </form>
        </div>
    );
}