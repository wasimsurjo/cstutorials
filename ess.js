var quotes=['Be yourself; everyone else is already taken.','Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe','So many books, so little time','Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.','Youve gotta dance like theres nobody watching,Love like youll never be hurt, Sing like theres nobody listening,And live like its heaven on earth','You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.','In three words I can sum up everything I\'ve learned about life: it goes on.','If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.']


function getQuote(){
    var rand = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[rand];
}