//syntax error, reference error, type error
//erro handling

// try{
//     //code that might fail goes here
//     let result = 10/0;
//     console.log(result);
//     undefinedFunction(); // This will cause an error!
//     console.log("this line will not run.")
// }catch (error){
//     // This runs only if something goes wrong
//     console.log("An error occured " + error.message);

// }
// console.log("the program continues here.");

// try {
//     let age = 24;
//     console.log(age.length());

// }
// catch(error){
//     console.log("an error occured " + error.message)
// }

function loadUserData(userId){
    console.log("starting to load data...")
    try{
        if (!userId.startsWith("BAD")){
            throw new Error("User Id must start with BAD");
        }
        console.log("Data loaded for user: " + userId);
    } catch(error){
        console.log("Failed " + error.message);
    } finally{
        console.log("Loading complete. CLosing connection ");
    }
};
loadUserData();
