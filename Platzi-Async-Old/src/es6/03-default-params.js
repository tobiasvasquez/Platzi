function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'AR';
    console.log(name, age, country);
}

newUser();
 
newUser('Tob', '23', 'AR');

function newAdmin(name = 'Tob', age = '23', country = 'AR'){
    console.log(name,age,country);
}

newAdmin();

newAdmin('Ana','ES', );