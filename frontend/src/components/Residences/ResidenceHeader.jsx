import { Show, createSignal } from 'solid-js';
import AddForm from './AddForm'

export function ResidenceHeader(props) {

    const [showAdd,setShowAdd] = createSignal(false);

    const showAddResidence = (event) => {
        setShowAdd(true)
      };

    return(
        <div>
            <div class="h-12 grid grid-cols-8 bg-stone-700 p-1 pl-3 items-center">
                <div class="col-span-2 items-center">
                    <button type="button"  onClick={showAddResidence} class="font-bold p-1 bg-stone-300 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50">
                        <span>Add Residence</span>
                    </button>
                </div>
                <div class="col-span-2 bg-white dark:bg-slate-900 relative pointer-events-auto">
                    <div class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <span class="mr-auto pl-2 flex-none text-xs font-semibold">Search</span>
                    </div>
                </div>
            </div>
            <Show when={showAdd()}> <AddForm user={props.user} setResidences={props.setResidences} setShowAdd={setShowAdd}/> </Show>
        </div>
    );
}