import { Show, Switch } from "solid-js";
import { For } from "solid-js";
import { createSignal, createEffect } from "solid-js"
import { createServerAction$, redirect } from "solid-start/server";

const addressBook = [
  { streetAddress: "10821 Willow Reed Cir. W", city: "Parker", state:"CO" ,zipCode: "80134", rent:2000 },
  { streetAddress: "41 Sunridge Ln", city: "Durango", state:"CO", zipCode: "81301", rent:2000 },
  { streetAddress: "340 1/2 W. 3rd Ave", city: "Durango", state:"CO", zipCode: "81301", rent:2000 },
  { streetAddress: "2137 Superior St.", city: "Bellginham", state:"WA", zipCode: "98229", rent:2000 },
];

const utilities = []

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

export function Residences(props) {
    
    const [residence,setResidence] = createSignal(addressBook[0])
    const [panel,setPanel] = createSignal("info")

    export function routeData({ params }: RouteDataArgs) {
        return createServerData$(
          async ([, id], { request }) => {
            if (!isLoggedIn(request)) {
              throw redirect("/login");
            }
       
            return prisma.students.findUnique({ where: { id } })
          },
          { key: () => ["students", params.id] }
        );
      }

    function ResidenceTabs(props) {
        return (
            <div class="w-full pl-4 flex flex-row h-16 gap-6 border-b border-black">
                <button onClick={()=>setPanel("info")}>Info</button>
                <button onClick={()=>setPanel("people")}>People</button>
                <button onClick={()=>setPanel("money")}>Money</button>
                <button onClick={()=>setPanel("mail")}>Mail</button>
                <button onClick={()=>setPanel("maintenance")}>Maintenance</button>
            </div>
        )
    }

    function ResidenceSidebar() {
        return(
            <div class="h-full w-72 border-r border-black">
                <div class="flex flex-col gap-2 border-b border-black">
                    <buton>Add Residence</buton>
                    <buton>Search</buton>
                    <buton>Sort By: Issues, Maintenace Requests, Age, etc...</buton>
                </div>
                <div class="mt-2">
                    <For each={addressBook}>
                        {(item,index) => (
                            <button class="w-full p-2" onClick={()=>setResidence(addressBook[index()])}>
                                {item.streetAddress}
                            </button>
                        )}
                    </For>
                </div>
            </div>
        )
    }

    function InfoPanel() {
        return(
            <div class="h-full w-full grid place-content-center p-2 items-center gap-8">
                <div class="flex flex-col items-center p-6 border border-gray-400">
                    <div class=" mb-6 h-32 w-32 bg-gray-400">
                        Tmp
                    </div>
                    <div>
                        <p>{residence().streetAddress}</p>
                        <p>{residence().streetAddress}</p>
                    </div>
                </div>
                <div class="flex flex-col items-center p-6 border border-gray-400">
                    <div class="mb-8">
                        Residence Settings
                    </div>
                    <form class="flex flex-col gap-2">
                        <input class="border-2 border-gray-300" value="address">{residence().streetAddress} </input>
                        <input class="border-2 border-gray-300" value="city">{residence().streetAddress}</input>
                    </form>
                </div>
            </div>
        )
    }

    function MoneyPanel(props) {
        return(
            <div class="h-full w-full grid place-content-center p-2 items-center gap-4">
                <div class="flex flex-row items-center p-6 border border-gray-400">
                    Test
                </div>
                <div class="grid grid-rows-6 grid-cols-6 items-center p-6 border border-gray-400">
                    Test
                </div>
            </div>
        )
    }

    return (
    <div class="flex h-full">
      <ResidenceSidebar />
      <div class="flex flex-col w-full">
        <ResidenceTabs />
        <Switch>
            <Match when={panel() === "info"}>
                <InfoPanel residence={residence()} />    
            </Match>
            <Match when={panel() === "people"}>
                <PeoplePanel />    
            </Match>
            <Match when={panel() === "money"}>
                <MoneyPanel />
            </Match>
            <Match when={panel() === "mail"}>
                <MailPanel />
            </Match>
            <Match when={panel() === "maintenance"}>
                <MaintenancePanel />
            </Match>
        </Switch>
      </div>
    </div>
  );
}