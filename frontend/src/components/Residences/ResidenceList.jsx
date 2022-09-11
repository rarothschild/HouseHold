import { Residence } from "./Residence";
import { createSignal, For } from "solid-js";
import { ResidenceHeader } from "./ResidenceHeader";

export function ResidenceList(props) {
    return (
      <div class="h-full w-full bg-white shadow-md">
        
        <ResidenceHeader user={props.user} setResidences={props.setResidences}/>

        <div class=" grid grid-cols-1 w-full divide-y divide-slate-200">
          <For each={props.residences}>
            {(place) => {
              return (
                <div class="flex flex-row w-full h-36 pt-0 divide-x divide-slate-200 shrink-0">

                  <div class="basis-1/6 grid grid-cols-1 justify-items-center items-center m-6">
                    <div class="">
                      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar"/>
                    </div>
                    <div class="grow ml-3 place-items-center">
                      <p class="text-sm font-semibold text-blue-600">{place.streetAddress}</p>
                    </div>
                  </div>

                  <div class="basis-1/4 grid grid-rows-5 grid-cols-1 shrink-0 w-40 ">
                    <div class="row-span-1 bg-stone-400">
                      <div class="grid grid-cols-4 p-0.5">
                        <div class="col-span-3 pl-2 font-bold">
                          <h1>Tenants</h1>
                        </div>
                        <div class="col-span-1 justify-self-end pr-1">
                          <button type="button" class="pl-1 pr-1 bg-stone-300 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50">
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row-span-4 m-1">
                      <p>{place.tenants}</p>
                    </div>
                  </div>
                  <div class="basis-1/2">
                    <span>Placeholder</span>
                  </div>
                </div>
              );
            }}
          </For>
          <div></div>
        </div>

      </div>
    );
}