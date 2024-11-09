"use strict";
{
    function validateKeys1(obj, keys) {
        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i] in obj)) {
                return false;
            }
        }
        return true;
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys1(person, ["name", "age"]));
}
