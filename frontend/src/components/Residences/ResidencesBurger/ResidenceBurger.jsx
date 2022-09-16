import { createEffect, createSignal, For } from "solid-js";
import { MainCard } from "./MainCard";
import { ResidenceDetails } from "./Panels/ResidenceDetails"
import { Tenants } from "./Panels/Tenants"
import { Documents } from "./Panels/Documents"
import { Analytics } from "./Panels/Analytics"

export function ResidenceBurger(props) {

    const [panelSelector, setPanelSelector] = createSignal("")

    createEffect(() => {
        console.log(panelSelector())
    })

    return(
        <div class="max-w-md bg-white rounded shadow-lg">
            <Switch fallback={<MainCard place={props.place} setPanelSelector={setPanelSelector} />}>
                <Match when={panelSelector() === "residenceDetails"}>
                    <ResidenceDetails place={props.place} setPanelSelector={setPanelSelector} />
                </Match>
                <Match when={panelSelector() === "tenants"}>
                    <Tenants place={props.place} setPanelSelector={setPanelSelector} />
                </Match>
                <Match when={panelSelector() === "documents"}>
                    <Documents place={props.place} setPanelSelector={setPanelSelector} />
                </Match>
                <Match when={panelSelector() === "analytics"}>
                    <Analytics place={props.place} setPanelSelector={setPanelSelector} />
                </Match>
            </Switch>
        </div>
    )
}