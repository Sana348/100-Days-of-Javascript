const truncateString = (str, count) => {
    if(str.length > count){
        return str.slice(0, count) + ('...');
    }
}





console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));