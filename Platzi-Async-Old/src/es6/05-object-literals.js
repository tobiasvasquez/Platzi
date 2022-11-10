//Enhanced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("Tob", 23, "AR", 10));