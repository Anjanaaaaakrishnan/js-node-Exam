import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const taskMap = new Map();

showMenu();

function showMenu() {
  console.log(`
1.Add Task
2.View
3.Delete
4.Exit
  `);

  rl.question("choose an option :",option);

 
}

function option(opt) {
  switch (opt) {

    case "1":
      rl.question("Add a task: ", (task) => {
       
        
        if (task!=="") {
          const taskId = taskMap.size + 1;
          taskMap.set(taskId,task);
          
          console.log(`Task added: [${taskId}] ${task} ${subject} ${date} ${status}`);
        }
        showMenu();
    
      });
      break;

     
  

      case "2":
        if(taskMap.size>0){
            console.log("Tasks Are:");
            for(const[taskId,task]of taskMap){
                console.log(`[${taskId}] ${task}`)
            }
        }
        showMenu();
        break;
  
  
    case "3":
      rl.question("Enter the task ID to delete: ", (taskId) => {
        const id = Number(taskId);

        if (taskMap.has(id)) {
         
         
            taskMap.delete(id);

          console.log(`[${id}] deleted`);
        } 

        showMenu();
      });
      break;
    
      

    case "4":
      console.log("Exit from task manager")
      rl.close();
      break;

    default:
      console.log("Invalid option");
      showMenu();
  }
}


    