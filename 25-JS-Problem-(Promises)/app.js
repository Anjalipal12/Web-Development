function savetoDb(data) {
  // Step 1: Promise ban raha hai
  return new Promise((resolve, reject) => {

    // Step 2: Random internet speed nikalna (1-10)
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    // Step 3: Condition check
    if (internetSpeed > 4) {
      // success case
      resolve("success : data was saved");
    } else {
      // failure case
      reject("failure : weak connection");
    }
  });
}
savetoDb("apna college")
  .then(() => {
    console.log("promise was resolved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
/*.then() tab chalega jab resolve() call hua ho.

.catch() tab chalega jab reject() call hua ho.*/
savetoDb("apna college")
  .then((msg) => {
    console.log("Resolved:", msg);
  })
  .catch((err) => {
    console.log("Rejected:", err);
  });
/*Agar fast speed → Resolved: success : data was saved

Agar slow speed → Rejected: failure : weak connection*/

savetoDb("apna college")
  .then(() => {
    console.log("data1 saved");
    return savetoDb("helloworld");
  })
  .then(() => {
    console.log("data2 saved");
    return savetoDb("shradhha");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
/*savetoDb() ek Promise return karta hai (jo tum pehle wale code me bana chuke ho).

.then() chain ka matlab hai – ek kaam hone ke baad agla kaam karo.*/
savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("shradhha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });
