document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });
    //Event listener for button click
    document.getElementById("solveRoom2").addEventListener("click", () => {
        //Defining a set of JavaScript concepts
        const jsConcepts = new Set(['closure', 'scope', 'hoisting']);
        //Defining a set of React concepts
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        //Finding the intersection of Javascript and React concepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        //Set the text content oh an HTML element to dispplay the common concepts
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch directions');
                }
                return response.json();
            
            })
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        document.getElementById("room3Result").innerHTML = message;
                    })
                    .catch(error => {
                        document.getElementById("room3result").innerHTML= `Navigation Error: ${error.message};`
                    });
            })
            .catch(error => {
                document.getElementById("room3Result").innerHTML =`Navigation Error: ${error.message}`;
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA]);
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
};
