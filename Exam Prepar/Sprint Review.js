function solve(input) {

    let n = input.shift();
  
    let individualTasksArr = [];

    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(":"); //сплитване входните данни от всеки ред в масив
      
      const empl = {assignee,
                    task:  {taskId, title, status, estimatedPoints}};
      individualTasksArr.push( empl); //всеки масива от реда се добавя, като нов обект в масива
    }

    while(input.length > 0){
        let inputLine = input.shift().split(':');
        let command = inputLine[0];
        let assignee = inputLine[1];
        const currentAssignee = individualTasksArr.find( task => task.assignee === assignee ); 

        if (!currentAssignee){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            continue;
        }

        switch(command){
            case 'Add New':
                let taskId = inputLine[2];
                let title = inputLine[3];
                let status = inputLine[4];
                let estimatedPoints = inputLine[5];

                const newTask = {assignee, task:  {taskId, title, status, estimatedPoints}};
                individualTasksArr.push(newTask);
                break;
            case 'Change Status':
                let taskIdChange = inputLine[2];
                let newStatus = inputLine[3];
                let isExist = false;

                for (const el of individualTasksArr) {
                    if(el.task.taskId === taskIdChange){
                        el.task.status = newStatus;
                        isExist = true;
                    }
                }

                if(!isExist){
                  console.log(`Task with ID ${taskIdChange} does not exist for ${assignee}!`);
                }

                break;
            case 'Remove Task':
                let index = inputLine[2];
                let isExistIndex = false;

                if (index < individualTasksArr.length && index >= 0){
                      for (const el of individualTasksArr) {
                          if(el.assignee === assignee){
                            let assigneeIndex = individualTasksArr.indexOf(el);
                            if (assigneeIndex === index){
                                isExistIndex = true;
                            }
                          }
                      }
                  }else {
                    console.log('Index is out of range!');
                  }

                if(isExistIndex){
                    individualTasksArr.splice(index, 1);
                }

                break;
        }
    }
   
    let tODo = 0;
    let inProgr = 0;
    let codeReview = 0;
    let done = 0;

    for (const el of individualTasksArr) {
        if(el.task.status === 'ToDo'){
            tODo += Number(el.task.estimatedPoints);
        }else if(el.task.status === 'In Progress'){
            inProgr += Number(el.task.estimatedPoints);
        }else if(el.task.status === 'Code Review'){
            codeReview += Number(el.task.estimatedPoints);
        }else if(el.task.status === 'Done'){
            done += Number(el.task.estimatedPoints);
        }
    }

    console.log(`ToDo: ${tODo}pts`);
    console.log(`In Progress: ${inProgr}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

}

solve( [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
);
