/*export default function appReducer(state={products:[]},action)
{
    switch(action.type)
    {
        case 'ADD':
            return{...state,products:[...state.prodacts,action.payload]}
        case 'UPDATE':
            var data=[...state.products];
            var index=data.findIndex(obj=>obj.id===action.payload.id); 
            data[index].name=action.payload.name;
            data[index].discraption=action.payload.discraption; 
            data[index].adress=action.payload.adress;
            data[index].phone=action.payload.phone;
            return {...state,products:[...data]}
        case 'DELETE':
            var data=[...state.products];
            var index=data.findIndex(obj=>obj.id===action.payload.id)
            data.splice(index,1);
            return {...state,products:[...data]}
                
    }
}*/
export default function appReducer(state={username:[]},action)
{
    switch(action.type)
    {
   case 'USERNAME':
    return {...state,  username : state.username}
    default:
        return state;
    }
}