let ask = prompt("what would you do like to do? (type 'quit' to exit)");
let list = [];
while (ask !== "quit") {
    if (ask === "quit"){
      break
    }else if (ask === "new") {
        let newItem = prompt("what do you want to add in list?")
        list.push(newItem)
        ask = prompt("what would you do like to do? (type 'quit' to exit)");
    }else if (ask === "list"){
        if (list && list.length > 0){
          console.log("********")
          for (item of list){
              console.log(item)
          }console.log("*******")
          ask = prompt("what would you do like to do? (type 'quit' to exit)");
        }
    }else if (ask === "delete"){
        let newDelete = prompt("what do you want to delete ?")
        if (list && list.length > 0 && newDelete < list.length){
            list.pop(newDelete)
        }ask = prompt("what would you do like to do? (type 'quit' to exit)");
    }else{
      ask = prompt("write right word")
    }
}