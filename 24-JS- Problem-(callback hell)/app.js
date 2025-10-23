// // Select the <h1> element from the document
// h1 = document.querySelector("h1"); 

// // Function to change the color of h1 after a given delay
// // and then call the next color change function if provided
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         // Change the color of h1
//         h1.style.color = color;

//         // If a next function is passed, call it
//         if (nextColorChange) nextColorChange();
//     }, delay); // Wait for "delay" milliseconds before running the code
// }

// // Call the function in a nested way to change colors one after another
// changeColor("red", 1000, () => {        // After 1 second -> red
//     changeColor("orange", 1000, () => { // After another 1 second -> orange
//         changeColor("green", 1000, () => {  // Then -> green
//             changeColor("yellow", 1000, () => { // Then -> yellow
//                 changeColor("blue", 1000);  // Finally -> blue
//             });
//         });
//     });
// });

// // This nested structure of callbacks is called "Callback Hell"

// Function to "save data to DB" (simulation only)
function savetoDb(data, success, failure) {
    // Random internet speed between 1 and 10
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    // If speed is greater than 4 → success, otherwise → failure
    if (internetSpeed > 4) {
        success(); // call the success callback
    } else {
        failure(); // call the failure callback
    }
}

// ======================
// Callback Hell Example
// ======================

// Try saving "apna college" into the database
savetoDb(
    "apna college",
    () => {   // success callback
        console.log("success1: data1 was saved");

        // Now try saving "hello world"
        savetoDb(
            "hello world",
            () => {   // success callback for 2nd data
                console.log("success2: data2 saved");

                // Now try saving "shraddha"
                savetoDb(
                    "shraddha",
                    () => {   // success callback for 3rd data
                        console.log("success3: data3 saved");
                    },
                    () => {   // failure callback for 3rd data
                        console.log("failure3: weak connection (data3 not saved)");
                    }
                );
            },
            () => {  // failure callback for 2nd data
                console.log("failure2: weak connection (data2 not saved)");
            }
        );
    },
    () => {   // failure callback for 1st data
        console.log("failure1: weak connection (data1 not saved)");
    }
);
/*👉 Callback Hell ka problem:

Code messy ho jata hai.

Read karna difficult ho jata hai.

Error handling complex ho jata hai.

Isliye modern JS mein Promises aur async/await use karte hain taaki code clean lage.*/

