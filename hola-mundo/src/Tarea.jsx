
function Tarea({ task, isDone }){
    return(
        <div className="Task">
            {task.map((cell, i) => (                                            
                <span className={(i === 2 && isDone) ? 'checkmark': ((i === 2 && isDone === false) ? 'elemento': '')} key={i}>{cell}</span>                   
            ))}
        </div>
        
    )
}

export default Tarea;