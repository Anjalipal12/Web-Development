// str=“abcdabcdefgggh”
// ans=“abcdefgh

function getunique(str){
    let ans = "";
    for(let i = 0 ; i<n ; i++){
        let currchar = arr[i];

        if(ans.indexOf(currchar) == -1){
            ans += currchar;
        }
    }
    return ans;
}
getunique(str);