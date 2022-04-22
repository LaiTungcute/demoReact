import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import {addTodo} from '../reduxtoolkit/Slice'
import { display, textAlign } from '@mui/system';

function Style(props) {
  // const {hidden, unhidden} = props;
  const todoList = useSelector(state => state.todo); console.log(todoList);
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo(value));
    setValue('');
  }
  return (
    <>
      <input placeholder='nhap vao day' value={value} onChange={e => setValue(e.target.value)} 
        style={{display: 'flex', flexDirection: 'row', marginLeft: '45%', marginBottom: '20px', marginTop: '20px'}}/>
      <Button onClick={handleClick} variant="contained">Add todo</Button>
      <ul>
        {
          todoList && todoList.map(
            item => (
              <li key={item}>{item}</li>
            )
          )
        }
      </ul>
    </> 
  )
}

export default Style;