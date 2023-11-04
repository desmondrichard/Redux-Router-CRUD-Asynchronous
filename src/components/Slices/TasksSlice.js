import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksList:[],
  setSelectedTask:{}
}

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTaskToList:(state,action)=>{
        var id=parseInt(Math.random()*10);
        const tasks={...action.payload,id}
        state.tasksList.push(tasks)   
     },
     removeTaskFromList:(state,action)=>{
        state.tasksList=state.tasksList.filter((a)=>{
            return a.id!==action.payload.id;
        })
     },
     updateTaskInList:(state,action)=>{
        state.tasksList=state.tasksList.map((a)=>{
            return a.id===action.payload.id?action.payload:a;
        })
     },
     setSelectedTask:(state,action)=>{
        state.selectedTask=action.payload;
     }

  }

})

export const { addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask } = tasksSlice.actions

export default tasksSlice.reducer