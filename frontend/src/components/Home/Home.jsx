function ExamplePics(props) {

}

export function Home(props) {
    return(
        <div class="v-full h-full bg-violet-200 p-2">
            <div class="text-center mt-10">
                <h1 class="text-xl">Welcome to HouseHold!</h1>
                <p>A place for both landlords and tenants to coordinate, communicate, and stay orgainzed.</p>
            </div>
            <div class="h-96 mt-8 grid grid-cols-3 border border-black ">
                <div> Example pic 1</div>
                <div> Example pic 2</div>
                <div> Example pic 3</div>
            </div>
        </div>
    )
}