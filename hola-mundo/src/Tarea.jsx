
function Tarea({ task, isDone, eliminateTask, id}){

    return(
        <div className="Task">
            {task.map((cell, i) => (                                            
                <span className={(i === 2 && isDone) ? 'checkmark': ((i === 2 && isDone === false) ? 'elemento': '')} key={i}>{cell}</span>                   
            ))}
            <button type="button" onClick={eliminateTask}>Eliminar tarea</button>
        </div>
        
    )
}

export default Tarea;