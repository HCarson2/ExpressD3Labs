const express = require('express');

// const greeting = ('Hello stranger')

const app = express ();

let responses = ["It is certain", "It is decidedly so", "Without a doubt",
 "Yes definitely","You may rely on it", "As I see it yes", 
 "Most likely", "Outlook good","Yes", 
 "Signs point to yes", "Reply hazy try again", "Ask again later",
 "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
 "Don't count on it", "My reply is no", "My sources say no",
 "Outlook not so good", "Very doubtful"]

// const tip = 

app.get('/greeting/:name', (req, res)=>{
    res.send('Hello stranger whats up '  + req.params.name);
});


app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send(req.params.tipPercentage)
});

app.get('/magic/:Millionaire', (req, res)=>{
    res.send(
		req.params.Millionaire +`<p>${
			responses[randomNumber(responses.length)]
		}</p>`
	);
});

function randomNumber(max){
    return Math.floor(Math.random() * max);
}


 




app.listen(3000, ()=>{
    console.log('listening on port');
});

