let counter = document.getElementById("counter");
let number = counter.innerHTML;
let newNumber = parseInt(number, 10);

let timer = setInterval(countUp, 1000);

let addSecond = document.getElementById("+");
let subtractSecond = document.getElementById("-");

let likeButton = document.getElementById("<3");
let ul = document.querySelector("ul.likes");
// ul.setAttribute("style", "list-style: none");
let li = document.createElement("li");

let pauseButton = document.querySelector("button#pause");

function countUp() {
    newNumber++;
    counter.innerHTML = newNumber;
};


document.addEventListener("click", function(e) {
    if (e.target.id === "+"){
        newNumber++;
        counter.innerHTML = newNumber;
    } else if (e.target.id === "-") {
        newNumber--;
        counter.innerHTML = newNumber;
        
        
        
        
    } else if (e.target.id === "<3") {
        let likeCounter = 0
        currentNumber = document.querySelector("#counter")
        const individualLike = document.querySelector("ul li")
        if (!individualLike || (individualLike && !individualLike.innerText.includes(`${currentNumber.innerText}`))) {
            ul.appendChild(li)
            li.innerText = `You liked the number ${currentNumber.innerText} 1 time(s).`
        } else if (individualLike && individualLike.innerText.includes(`${currentNumber.innerText}`)){
            likeCounter++
            li.innerText = `You liked the number ${currentNumber.innerText} ${likeCounter} time(s).`
        }

            // ul.appendChild(li);
            


    } else if (e.target.id === "pause") {
        if (pauseButton.innerText === "pause") {
            pauseButton.innerText = "resume";
            addSecond.disabled = true;
            subtractSecond.disabled = true;
            likeButton.disabled = true;
            clearInterval(timer)
        } else {
            pauseButton.innerText = "pause";
            timer = setInterval(countUp, 1000);
            addSecond.disabled = false;
            subtractSecond.disabled = false;
            likeButton.disabled = false;
        };
    };
});