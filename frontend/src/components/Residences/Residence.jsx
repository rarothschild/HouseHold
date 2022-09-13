import { createEffect, createSignal, For } from "solid-js";
import { MainCard } from "./MainCard";
import { ResidenceDetails } from "./Panels/ResidenceDetails"
import { Tenants } from "./Panels/Tenants"
import { Documents } from "./Panels/Documents"
import { Analytics } from "./Panels/Analytics"

export function Residence(props) {

    const [panelSelector, setPanelSelector] = createSignal("")


    return(
        <div>
            <Switch fallback={<MainCard place={props.place} />}>
                <Match when={panelSelector() === "residenceDetails"}>
                    <ResidenceDetails place={props.place} />
                </Match>
                <Match when={panelSelector() === "tenants"}>
                    <Tenants place={props.place} />
                </Match>
                <Match when={panelSelector() === "documents"}>
                    <Documents place={props.place} />
                </Match>
                <Match when={panelSelector() === "analytics"}>
                    <Analytics place={props.place} />
                </Match>
            </Switch>
        </div>
    )
}