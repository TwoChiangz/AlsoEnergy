/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

groupParse = (employees) => {
    let obj = {}; //initialize return object
    employees.forEach(function(employee) { // loop through all employees in list
        let name;
        if ("nameOrder" in employee) {    // checks name order 
            name = {name: employee["last"] + ' ' + employee["first"]};
        }
        else {
            name = {name: employee["first"] + ' ' + employee["last"]};
        }
        if (!(employee["group"] in obj)){ // if group doesn't exist yet add else add onto current list of name objects
            obj[employee["group"]] = [name];
        }
        else{
            obj[employee["group"]].push(name)
        }
        
    });
    return(obj)
};

console.log(groupParse(employees))

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
