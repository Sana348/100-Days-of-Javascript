function palindrome(str){
    str = str.toLowerCase();
    let i = 0;
    let j = str.length - 1;
    while(i<j){
        if(str[i]!=str[j]){
            console.log("No, it is not Palindrome");
            return;
        }

        i++;
        j--;

    }
    console.log("Yes, it is a Palindrome");


}
let str = "anna";
palindrome(str);