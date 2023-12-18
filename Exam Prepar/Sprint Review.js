function solve(input) {

    let n = input.shift();
  
    let individualTasksArr = [];

    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(":"); //сплитване входните данни от всеки ред в масив
      
      const empl = {assignee,
                    task:  [{taskId, title, status, estimatedPoints}]};

        const person = individualTasksArr.find( task => task.assignee === assignee ); 

        if (person){
            for (const el of individualTasksArr) {
                if(el.assignee === person.assignee){
                    let obj = {taskId, title, status, estimatedPoints}
                    el.task.push(obj);
                }
            }
        }else {
            individualTasksArr.push(empl); //всеки масива от реда се добавя, като нов обект в масива
        }
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

                for (const el of individualTasksArr) {
                    if(el.assignee === assignee){
                        let obj = {taskId, title, status, estimatedPoints}
                        el.task.push(obj);
                    }
                }
                
                break;
            case 'Change Status':
                let taskIdChange = inputLine[2];
                let newStatus = inputLine[3];
                let isExist = false;

                for (const obj of individualTasksArr) {
    
                    let task = obj.task;
            
                   for (const iterator of task) {
                        if(iterator.taskId === taskIdChange){
                                    iterator.status = newStatus;
                                    isExist = true;
                                }
                        }     
                }

                if(!isExist){
                  console.log(`Task with ID ${taskIdChange} does not exist for ${assignee}!`);
                }

                break;
            case 'Remove Task':
                let index = inputLine[2];
                let isExistIndex = false;

                for (const el of individualTasksArr) {
                    if (el.assignee === assignee){
                       if (index < el.task.length && index >= 0){
                        isExistIndex = true;  
                       }else {
                        console.log('Index is out of range!');
                      }
                    }
                }   
                if(isExistIndex){
                    for (const el of individualTasksArr) {
                        if (el.assignee === assignee){
                            el.task.splice(index, 1);
                        }
                    }
                }

                break;
        }
    }
   
    let tODo = 0;
    let inProgr = 0;
    let codeReview = 0;
    let done = 0;

    for (const obj of individualTasksArr) {
    
        let task = obj.task;

       for (const iterator of task) {

            if(iterator.status === 'ToDo'){
                tODo += Number(iterator.estimatedPoints);
            }else if(iterator.status === 'In Progress'){
                inProgr += Number(iterator.estimatedPoints);
            }else if(iterator.status === 'Code Review'){
                codeReview += Number(iterator.estimatedPoints);
            }else if(iterator.status === 'Done'){
                done += Number(iterator.estimatedPoints);
            }

       } 
    
   
    }

    console.log(`ToDo: ${tODo}pts`);
    console.log(`In Progress: ${inProgr}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${done}pts`);

    if (done >= tODo + inProgr + codeReview){
        console.log('Sprint was successful!');
    }else {
        console.log('Sprint was unsuccessful...');
    }

}

solve([
        '4',
        'Kiril:BOP-1213:Fix Typo:Done:1',
        'Peter:BOP-1214:New Products Page:In Progress:2',
        'Mariya:BOP-1215:Setup Routing:ToDo:8',
        'Georgi:BOP-1216:Add Business Card:Code Review:3',
        'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
        'Change Status:Georgi:BOP-1216:Done',
        'Change Status:Will:BOP-1212:In Progress',
        'Remove Task:Georgi:3',
        'Change Status:Mariya:BOP-1215:Done',
    ]

);
