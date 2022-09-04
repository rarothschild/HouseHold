function FormInput(props) {
    return (
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id={props.id} type="text" placeholder={props.children}>
        </input>
    )
  }

export function Profile (props) {
    return(
        <div class="grid grid-cols-2 h-full">
            <div class="">
                My Network
            </div>
            <div class="bg-white border-slate-500">
            <form class="grid grid-rows-3 p-4 bg-white border-slate-500 items-center gap-1" onSubmit={e => onSubmit(e)}>

            </form>
                <FormInput id="FirstName">First Name</FormInput>
                <FormInput id="FirstName">Last Name</FormInput>
                <FormInput id="FirstName">My Primary House</FormInput>
                <FormInput id="FirstName">Email</FormInput>
            </div>
        </div>
    )
} 