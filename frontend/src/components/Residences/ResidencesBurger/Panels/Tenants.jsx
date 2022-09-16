
export function Tenants(props) {
  
    const onBack = e => {
        e.preventDefault();
        props.setPanelSelector("")
      };

    return(
        <div class="h-full w-full">
            <div class="grid grid-cols-3 bg-teal-400">
                <p class="col-span-2">Tenants</p>
                <button class="col-span-1">Add</button>
            </div>
            <div class="h-full">
                <p>Tenant 1</p>
                <p>Tenant 2</p>
                <p>Tenant 3</p>
                <p>Tenant 4</p>
            </div>
        </div>
    )
}