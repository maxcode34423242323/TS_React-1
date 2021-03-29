import React, { useState, useRef } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
/*     const [title, setTtitle] = useState<string>('')
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTtitle(event.target.value)
    } */
    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            /* console.log(title)
            setTtitle('') */
        }
    }
    return(
        <div className="input-field mt2">
            <input 
            /* value={title}  */
            ref={ref}
            type="text" 
            id="title" 
            placeholder='Введите название дела'
            /* onChange={changeHandler} */
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className='active'>Введите название дела</label>
        </div>
    ) 
        
    
}