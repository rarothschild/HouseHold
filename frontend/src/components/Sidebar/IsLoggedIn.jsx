export function IsLoggedIn(props) {

    const toggleLogin = (event) => {
      props.setShowRegister(false)
      props.setShowLogin(!props.showLogin)
    };
    const toggleRegister = (event) => {
      props.setShowLogin(false)
      props.setShowRegister(!props.showRegister)
    };
  
    return(
      <div class="grid grid-cols-1 gap-2 justify-center px-8">
        <button type="button" onClick={toggleLogin} class=" font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
            <span>Login</span>
        </button>
        <button type="button" onClick={toggleRegister} class="font-bold text-ellipsis whitespace-nowrap rounded bg-stone-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50">
            <span>Register</span>
        </button>
      </div>
    )
  }