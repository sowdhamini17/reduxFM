export function addtodoAction(todo){
console.log("addAction:",todo);

   return{
    type:'add',
    payload:todo
   } 
}