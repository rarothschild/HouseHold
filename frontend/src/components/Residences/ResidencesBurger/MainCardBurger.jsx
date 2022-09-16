export function MainCardBurger(props) {
    return(
        <div>
            <div class="relative pb-2/3">
              <img class="absolute h-full w-full" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"/>
            </div>
            <div class="grid grid-cols-3 w-full border divide-x">
                <div class="p-2 pr-2 col-span-2 overflow-x-scroll">
                    <p class="text-lg whitespace-nowrap">{props.place.streetAddress}</p>
                    <p class="text-lg whitespace-nowrap">{props.place.city}</p>
                    <p class="text-lg whitespace-nowrap">{props.place.zipCode}</p>
                </div>
                <div class="grid grid-cols-2 h-full grid-rows-2 gap-3 p-3 justify-items-center items-center">
                    <button onClick={() => props.setPanelSelector("residenceDetails")} class="h-full w-full rounded-lg bg-zinc-400">
                        <i class="fa-solid fa-house"></i>
                    </button>
                    <button onClick={() => props.setPanelSelector("tenants")} class="h-full w-full rounded-lg bg-green-400">
                        <i class="fa-solid fa-people-line"></i>
                    </button>
                    <button onClick={() => props.setPanelSelector("documents")} class="h-full w-full rounded-lg bg-yellow-400">
                        <i class="fa-solid fa-file"></i>
                    </button>
                    <button onClick={() => props.setPanelSelector("analytics")} class="h-full w-full rounded-lg bg-violet-500">
                        <i class="fa-solid fa-chart-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}