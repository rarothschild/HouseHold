import { createEffect, createSignal, For } from "solid-js";
import { ResidenceDetails } from "./Panels/ResidenceDetails"
import { Tenants } from "./Panels/Tenants"
import { Documents } from "./Panels/Documents"
import { Analytics } from "./Panels/Analytics"


export function ResidenceHotdog(props) {
    const [showPanel,setShowPanel] = createSignal("");

    createEffect((prev) => {
        console.log(!showPanel())
        if (showPanel() === prev) {
            setShowPanel("")
        }
    })

    return(
        <div class="max-w-sm w-full lg:max-w-full">
            <div class="max-w-sm w-full h-48 lg:max-w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border border-gray-400" style="background-image: url('/src/assets/house1.jpg')" title="House">
                </div>
                <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div class="grid grid-cols-2 h-full">
                        <div class="m-4  grid-cols-1">
                            <h1>{props.place.streetAddress}</h1>
                            <h1>{props.place.city} {props.place.state}, {props.place.zipCode}</h1>
                        </div>
                        <div class="grid-cols-1 border-l border-gray-400">
                            <h1 class=" bg-slate-200 p-1">Tenants</h1>
                        </div>
                    </div>
                    <div class="h-10 pl-2 w-full grid grid-cols-6 space-x-2 items-center justify-between  bg-slate-200 border-t border-gray-400">
                        <button class="grid-cols-1 bg-purple-300 rounded" onClick={() => setShowPanel("residenceDetails")}>Details</button>
                        <button class="grid-cols-1 bg-purple-300 rounded" onClick={() => setShowPanel("tenants")}>Tenants</button>
                        <button class="grid-cols-1 bg-purple-300 rounded" onClick={() => setShowPanel("analytics")}>Analytics</button>
                        <button class="grid-cols-1 bg-purple-300 rounded" onClick={() => setShowPanel("documents")}>Documents</button>
                    </div>
                </div>
            </div>
            <Show when={showPanel() !== ""}>
                <Switch>
                    <Match when={showPanel() === "residenceDetails"}>
                        <ResidenceDetails place={props.place} />
                    </Match>
                    <Match when={showPanel() === "tenants"}>
                        <Tenants place={props.place}/>
                    </Match>
                    <Match when={showPanel() === "documents"}>
                        <Documents place={props.place} />
                    </Match>
                    <Match when={showPanel() === "analytics"}>
                        <Analytics place={props.place} />
                    </Match>
                </Switch>
            </Show>
        </div>
    )
}