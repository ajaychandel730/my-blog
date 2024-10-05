
export const getErrorMessage = (error:unknown):string=>{
    let message = "Something went wrong with mongodb.";
    if(error != null && typeof error === "object" && "message" in error){
        message = String(error.message);
    }

    return message;
}