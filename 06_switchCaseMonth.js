
console.log("======= Assignment ======");
console.log("******* Switch Case ******");

function monthOfYear(month) {
    switch (month) {
        case 1:
            console.log(`0-> "January"`);
            break;
        case 2:
            console.log(` Month is "February" `);
            break;
        case 5:
            console.log(` Month is "May" `);
            break;
        case 12:
            console.log(` Month is "December"`);
            break;

        default:
            console.log(`Invalid Data ${month}`);

            break;
    }
    
}
monthOfYear(0)
monthOfYear(2)
monthOfYear(5)
monthOfYear(12)
monthOfYear(15)
monthOfYear(100)
monthOfYear(null)
monthOfYear(undefined)