function showRandomFact() {
    const fact= [
        "I like to sleep",
        "I like to play",
        "I dislike sour food."
    ];
    const randomIndex= Math.floor(Math.random() * fact.length);
    alert(fact[randomIndex]);
}