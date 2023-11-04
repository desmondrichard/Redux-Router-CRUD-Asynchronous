import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    tasksList: [],
    selectedTask: {},
    isLoading: false,
    error: '',
}

const base_url="http://localhost:5000/tasks";

//GET:
export const getTasksFromServer = createAsyncThunk("tasks/getTasksFromServer",
async(_,{rejectWithValue})=>{
    const response=await fetch(base_url)
    if(response.ok){
        const jsonResponse=await response.json();
        return jsonResponse;
    }else{
        return rejectWithValue({error:'No tasks found'})
    }
}
)

//POST:
export const addTasksToServer = createAsyncThunk("tasks/addTasksToServer",
async(task,{rejectWithValue})=>{
    const options={
        method:"POST",
        body:JSON.stringify(task),
        headers:{
            'content-type':"application/json;charset=UTF-8"
        }
    }
    const response=await fetch(base_url,options)
    if(response.ok){
        const jsonResponse=await response.json();
        return jsonResponse;
    }else{
        return rejectWithValue({error:'No tasks found'})
    }
}
)

//added export below
export const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
       
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter((a) => {
                return a.id !== action.payload.id;
            })
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((a) => {
                return a.id === action.payload.id ? action.payload : a;
            })
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload;
        }

    },
    extraReducers:(builder)=>{
        //GET:
        builder
        .addCase(getTasksFromServer.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(getTasksFromServer.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error='';
            state.tasksList=action.payload;

        })
        .addCase(getTasksFromServer.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload.error;
            state.tasksList=[];
        })
        //POST
        .addCase(addTasksToServer.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addTasksToServer.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.error='';
            state.tasksList.push(action.payload);

        })
        .addCase(addTasksToServer.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload.error;
        
        })
    }
})

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions

export default tasksSlice.reducer

