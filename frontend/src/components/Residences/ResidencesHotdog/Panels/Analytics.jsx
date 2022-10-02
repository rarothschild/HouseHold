
const utitity1 = {
    name:"Electric", 
    payedOn:15, 
    x: [1, 2, 3, 4],
    y: [150, 140, 130],
}
const utitity2 = {
    name:"Electric", 
    payedOn:15, 
    x: [1, 2, 3, 4],
    y: [10, 16, 15],
}
const utitity3 = {
    name:"Electric", 
    payedOn:15, 
    x: [1, 2, 3, 4],
    y: [50, 40, 30],
}

export function Analytics(props) {

    var data = [ utitity1, utitity2, utitity3 ];

    var layout = {
    title:'Adding Names to Line and Scatter Plot'
    };
    
    

    return(
        <div class="h-auto border">
            <div id="ledgerPlot">
                
            </div>
        </div>
    )
}