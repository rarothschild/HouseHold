export function Sidebar() {
    return(
        <div class="w-60 h-full shadow-md bg-white" id="sidenav">
          <div class="pt-4 pb-2 px-6">
            <a href="#!">
              <div class="flex items-center">
                <div class="shrink-0">
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar"/>
                </div>
                <div class="grow ml-3">
                  <p class="text-sm font-semibold text-blue-600">Jason McCoel</p>
                </div>
              </div>
            </a>
          </div>
          <ul class="relative px-1">
            <li class="relative">
              <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
                <span>Profile</span>
              </a>
            </li>
          </ul>
          <hr class="my-2"/>
          <ul class="relative px-1">
            <li class="relative">
              <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"></path>
                </svg>
                <span>Residences</span>
              </a>
            </li>
          </ul>
        </div>
    )
}