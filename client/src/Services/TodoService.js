export default {
    // By default this is a GET request
    getTodos : ()=>{
        return fetch('/user/todos')
                .then(response=>{
                    // Passport automatically sends a 401 if the user is not Authorized
                    if(response.status !== 401){
                    // If Authorized, will return the data
                        return response.json().then(data => data);
                    }
                    // Otherwise a message of "Unauthorized" will display
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    // Since POST request, mothod, body and header must be used
    postTodo : todo=>{
        return fetch('/user/todo',{
            method : "post",
            body : JSON.stringify(todo),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            // Passport automatically sends a 401 if the user is not Authorized
            if(response.status !== 401){
                // If Authorized, will return the data
                return response.json().then(data => data);
            }
            else
                // Otherwise a message of "Unauthorized" will display
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    }
}