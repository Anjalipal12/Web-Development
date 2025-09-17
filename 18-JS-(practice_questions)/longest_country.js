function longestCountry(countries){
    let longest = "";
    for(let i = 0 ; i<countries.length ; i++){
        if(Country.length > longest.length){
            longest = countries[i];
        }
    }
    return longest;
}
let countryList = ["Australia" , "Germany" ,"united states"];
console.log(longestCountry(countryList));