'use strict'

import users from '/users.js';

//TASK-1
const getUserNames = arr => arr.map(user => user.name);
console.log('TASK-1');
console.log(getUserNames(users));

// TASK-2
const getUsersWithEyeColor = (arr, key) => arr.filter(user => user.eyeColor == key);
console.log('TASK-2');
console.log(getUsersWithEyeColor(users, 'blue'));

// TASK-3
const getUsersWithGender = (users, gender) =>
    users
    .filter(user => {
        if (user.gender === gender) {
            return user;
        }
    })
    .map(user => user.name);

console.log('TASK-3');
console.log(getUsersWithGender(users, 'male'));

// TASK-4
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log('TASK-4');
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// TASK-5
const getUserWithEmail = (users, email) => users.find(user => user.email === email);


console.log('TASK-5');
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// TASK-6
const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);

console.log('TASK-6');
console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK-7
const calculateTotalBalance = users => users.reduce((totalBalance, users) => totalBalance + users.balance, 0)
console.log('TASK-7')
console.log(`Total balance = ${calculateTotalBalance(users)}`); // 20916

// TASK-8
const getUsersWithFriend = (users, friendName) =>
    users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log('TASK-8')
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// TASK-9
const getNamesSortedByFriendsCount = users => users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log('TASK-9')
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// TASK-10
const getSortedUniqueSkills = users =>
    users
    .reduce((allSkills, users) => {
        allSkills.push(...users.skills)
        return allSkills;
    }, [])
    .reduce((filteredSkills, user) => {
        if (!filteredSkills.includes(user)) {
            filteredSkills.push(user)
        }
        return filteredSkills;
    }, [])
    .sort();


console.log('TASK-10')
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]