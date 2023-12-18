function solve(input) {

    let n = input.shift();
  
    let individualTasksArr = [];

    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(":"); //сплитване входните данни от всеки ред в масив
      const empl = {assignee,
                    task:  [[taskId, title, status, estimatedPoints]]};
      individualTasksArr.push( empl); //всеки масива от реда се добавя, като нов обект в масива
    }

    let inputLine = input.shift().split(':');
    let command = inputLine[0];

    while(input.length > 0){
        let currentAssignee = inputLine[1];

        switch(command){
            case 'Add New':
                let taskId = inputLine[2];
                let title = inputLine[3];
                let status = inputLine[4];
                let estimatedPoints = inputLine[5];

                const assignee = individualTasksArr.find( task => task.assignee === currentAssignee ); 

                if (assignee){
                    for (const el of individualTasksArr) {
                      el.task.push([taskId, title, status, estimatedPoints]) 
                    }
                }

                break;
            case 'Change Status':
                break;
            case 'Remove Task':
                break;
        }


        inputLine = input.shift().split(':');
        command = inputLine[0];
    }
    console.log();
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
