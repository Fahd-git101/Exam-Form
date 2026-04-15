//window.alert("Welcome");
const bank = {
    ques:["what is your favourite operating system (OS)", "what is vendor or company of your PC", "what is minimum require RAM For WIN10", "what is program language use to build web site", "What is RAM Stand for", "What is HDD Stand for", "What is SSD Stand for"],
    ans:[
        ["windows", "linux", "mac", "android"],
        ["hp", "dell", "lenovo", "apple"],
        ["2g", "4g", "6g", "8g"],
        ["html", "css", "js", "python"],
        [],[],[]
    ],
    trueAns:["windows", "dell", "4g", "html", "random access memory", "hard disk drive", "solid state drive"]
};

var tscore = bank.ques.length;
var score = 0;
const params = new URLSearchParams(window.location.search);

if(bank.trueAns.length == params.size){

    for(let a = 0 ; a < params.size ; a++){
        var solution = params.get(`q${a}`);
        if(solution.toLowerCase() === bank.trueAns[a]){
            score +=1;
        }
    }

    var percentage = (score / tscore)*100 ;

    let h1 = document.createElement("h1"); 

    h1.innerText =` Your Score ${score} / ${bank.trueAns.length} , and your percntage is ${parseInt(percentage)}% `;
    
    h1.style.cssText = `
        margin : 0px;
        padding : 0px;
        color : white;
        opacity : 0;
        font-size : 2rem;
        font-family : sans-serif;
        text-align : center;
        z-index : 110;
        transition : 0.5s;
    `;
    h1.style.position = "fixed";
    h1.style.top = "0px";
    h1.style.width = "100vw";
    h1.style.height = "auto";
    h1.style.background = (percentage <= 50) ? "#d50707" : (percentage > 50 && percentage <= 70) ? "#c7d507" : "#00a323";
    
    document.body.appendChild(h1);
    
    setTimeout(() => {
        h1.style.opacity = "1";
        h1.style.padding = "20px 0px";
    }, 100);

    setTimeout(() => {
        h1.style.opacity = "0";
        h1.style.padding = "0px";
    }, 5000);

    // alert(`Your Score ${score} / ${bank.trueAns.length} , and your percntage is ${parseInt(percentage)}%`);

    setTimeout(() => {
        window.location.href = window.location.pathname;
    }, 5500);
}

for (let i =0 ; i< bank.ques.length; i++){
    // document.write(` // it's the same as document.write but it will write inside the form tag and not outside of it
    document.getElementById("quiz").innerHTML +=` 
        <article>
            <p> ${i+1} - ${bank.ques[i]} ?</p>
            ${bank.ans[i].length > 0 ? `
                ${bank.ans[i].map((value, ind) => `
                    <div>
                        <input id="ch${ind}-q${i}" value="${value}" type="radio" name="q${i}" required>
                        <label for="ch${ind}-q${i}">${value}</label>
                    </div>
                    <br>
                `).join("")}
            ` : `
                <div>
                    <input class="answer" type="text" name="q${i}" required placeholder="Write Answer">
                </div>
            `}                
        </article>
    `;
};