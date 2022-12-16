import { Show, Switch } from "solid-js";
import { For } from "solid-js";
import { createSignal, createEffect } from "solid-js"

const addressBook = [
  { streetAddress: "10821 Willow Reed Cir. W", city: "Parker", state:"CO" ,zipCode: "80134", rent:2000 },
  { streetAddress: "41 Sunridge Ln", city: "Durango", state:"CO", zipCode: "81301", rent:2000 },
  { streetAddress: "340 1/2 W. 3rd Ave", city: "Durango", state:"CO", zipCode: "81301", rent:2000 },
  { streetAddress: "2137 Superior St.", city: "Bellginham", state:"WA", zipCode: "98229", rent:2000 },
];

function InfoePanel(props) {
    return(
        <div>
            Info
        </div>
    )
}

function PeoplePanel(props) {
    return(
        <div class="p-2">
            People
        </div>
    )
}

function MoneyPanel(props) {
    return(
        <div>
            Money
        </div>
    )
}

function MailPanel(props) {
    return(
        <div>
            Mail
        </div>
    )
}

function MaintenancePanel(props) {
    return(
        <div>
            Maintenance
        </div>
    )
}

function ResidenceDetails(props) {
    const [showDetails,setShowDetails] = createSignal(false)
    const [place,setPlace] = createSignal(props.place)
    const [subPanel,setSubPanel] = createSignal("people")

    return(
      <div class="flex-col flex-none w-64 border border-gray-500">
        <div class="h-36 bg-slate-200  ">
          Tmp
        </div>
        <div class="flex flex-col p-2 overflow-x-hidden">
            <p>{place().streetAddress}</p>
            <p>{[place().city,' ',place().state,', ',place().zipCode]}</p>
        </div>
        <div class="flex h-30 place-items-center p-4 gap-4 ">
            <button class="px-2 py-1 bg-blue-400">Alerts</button>
            <button onClick={() => {setShowDetails(!showDetails())}} class="px-2 py-1 bg-blue-400">Details</button>
        </div>
        <Show when={showDetails()}>
            <div class="absolute flex mt-2 bg-white w-96 h-52 border border-[#aaa]">
              <div class="h-full flex flex-col p-2 gap-2 w-28 border-r border-black">
                <button onClick={()=>setSubPanel("info")}>Info</button>
                <button onClick={()=>setSubPanel("people")}>People</button>
                <button onClick={()=>setSubPanel("money")}>Money</button>
                <button onClick={()=>setSubPanel("mail")}>Mail</button>
                <button onClick={()=>setSubPanel("maintenance")}>Maintenance</button>
              </div>
              <Switch>
              <Match when={subPanel() === "info"}>
                    <InfoePanel />    
                </Match>
                <Match when={subPanel() === "people"}>
                    <PeoplePanel />    
                </Match>
                <Match when={subPanel() === "money"}>
                    <MoneyPanel />
                </Match>
                <Match when={subPanel() === "mail"}>
                    <MailPanel />
                </Match>
                <Match when={subPanel() === "maintenance"}>
                    <MaintenancePanel />
                </Match>
            </Switch>
            </div>
        </Show>
      </div>
    )
}

export function Residences(props) {
    
    return (
    <div class="h-full">
      <div class="flex gap-2 h-12 border-b border-black">
        <buton>Add Residence</buton>
        <buton>Search</buton>
        <buton>Sort By: Issues, Maintenace Requests, Age, etc...</buton>
      </div>
      <div class="flex flex-wrap gap-3 p-3 overflow-y-scroll">
        <For each={addressBook}>
          {(place) => { return <ResidenceDetails place={place} /> }}
        </For>
      </div>
    </div>
  );
}