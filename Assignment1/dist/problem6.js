"use strict";
{
    function updateProfile1(profile, updates) {
        return Object.assign(Object.assign({}, profile), updates);
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile1(myProfile, { age: 26 }));
}