
///////////
Question1: The significance of union and intersection types in Typescript.

Answer: Union and intersection types are powerful TypeScript features.

union types means increase flexibility by allowing variables to be one of 
several types, supporting conditional logic.

And intersection types means enable combining multiple types into one, ensuring objects meet all defined type conditions for consistency.

/////////
Question2:How to handle asynchronous operations using async/await over callback/promise TypeScript.

Answer:

1.Use async/await for readability and ease of error handling.

2.Combine with try/catch to handle errors in a structured way.

3.Run multiple operations in parallel with Promise.all() if they’re independent.

that's it.


////////
Question3:


Answer:

Type guards are crucial for writing safe, flexible, and maintainable TypeScript code. They allow us to:

1.Refine types dynamically and safely.
2.Handle complex union types by narrowing down possible types.
3.Increase readability by reducing excessive type assertions.
