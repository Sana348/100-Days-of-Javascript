const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    }
    const words = str.split(" ");

    return words.reduce(
        (accum, curWord) => (curWord.length > accum.length ? curWord : accum), ""
    );
}

console.log(findLongestWord("assd iuweryhudsaijh jhgdsbnmcxz,.\i9p dsgyur 8uyehjkds owiaso  nbvjcxnkjowo jhdsu jhh shjbx 9iwe"));
