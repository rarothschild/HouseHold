export function Header() {
    return(
        <div class="grid p-1 w-full grid-cols-10 grid-rows-1 items-center bg-violet-500 border-b-8 border-b-neutral-600">

            <div class="col-span-2 ml-5 font-extrabold text-xl">
                <span>HouseHold</span>
            </div>

            <div class="col-span-5"></div>

            <div class="col-span-3">
                <div class="grid grid-cols-2 gap-2">
                    <button type="button" class="font-bold p-2 bg-stone-300 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50">
                        <span>Login</span>
                    </button>

                    <button type="button" class="font-bold p-2 bg-stone-300 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50">
                        <span>Register</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
