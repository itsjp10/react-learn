
function Tarea({ task }){
    return(
        <div className="Task">
            {task.map((cell, i) => (                                            
                <span className={(i === 2 && cell) ? 'checkmark':''} key={i}>{cell}</span>                   
            ))}
        </div>
        
    )
}

export default Tarea;