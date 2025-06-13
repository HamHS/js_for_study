let ask = prompt("what would you do like to do? (type 'quit' to exit)");
let list = [];
while (ask !== "quit") {
    if (ask === "new") {
        let newItem = prompt("what do you want to add in list?");
        list.push(newItem);
        console.log(`${newItem} is pushed in list`)
        ask = prompt("what would you do like to do? (type 'quit' to exit)");
    }else if (ask === "list"){
        if (list && list.length > 0){
          console.log("********");
          for (let i = 0; i < list.length; i++){
              console.log(`${i} : ${list[i]}`);
          }console.log("*******");
          ask = prompt("what would you do like to do? (type 'quit' to exit)");
        }else{
          ask = prompt("there is no list. what would you do like to do? (type 'quit' to exit)");
        }
    }else if (ask === "delete"){
        let newDelete = parseInt(prompt("what do you want to delete ?"))
        if (list && list.length > 0 && newDelete < list.length && (!Number.isNaN(newDelete)) ){
            list.splice(newDelete,1);
            console.log(`number of ${newDelete} is deleted`)
        }else{
          newDelete = prompt("write correct number");
        }
        ask = prompt("what would you do like to do? (type 'quit' to exit)");
    }else{
      ask = prompt("write right word");
    }
}