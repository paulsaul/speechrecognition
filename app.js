const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//add arrays/strings to intent(recognized speeches)
const greetings = [
    'I am doing fine thank you. hope you are to',
    'I have had better days.',
    'i am not so bad my self'
];
const weather = [
    'you can check it out yourself',
    'Why do you need to know the weather, you rarely come outside the house. You lazy bastard.'

];
const name = [
    'My name is jessy, an artificial intelligence',
    'I am jessy, an artificial intelligence',

];
const jessy = [
    'yes my name',
    'i am',
    'do not mention my name in vain'
];
const joke = [
    'Women really know how to hold a grudge. My wife asked me to pass her a lip balm. And by mistake, I gave her a tube of Super Glue. It’s been a month now and she’s still not speaking to me'
    ,'Today, my son came to me and gave me a hug – out of the blue. I was very pleasantly surprised – that is, until I heard him tell his father, “You’re right. She did gain weight.”'
    ,
    'What do you get when you cross-breed a shark and a cow? I have no idea but I wouldn’t try milking it.' 
];
const God = [
    'in monotheistic thought, god is conceived of as the supreme being, creator deity, and principal object of faith'
    ,'god is usually conceived as being omniscient (all-knowing), omnipotent (all-powerful), omnipresent (all-present) and as having an eternal and necessary existence.'
];
const love = [
    'i am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. if you can not handle me at my worst, then you sure as hell do not deserve me at my best'
    ,'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage'
    ,'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment'
];
const paul = [
    'Paul is my creator. my code consists of three programming languages, html,css and java script',
    'Paul created me. i owe him alot for he teaches me new things everyday'

];
const bible = [
    'Matthew chapter 6 verse 24. no one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and mone'
    ,'Psalm chapter 46 verse 1 to 3. god is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea, though its waters roar and foam and the mountains quake with their surging.'
    ,'Proverbs chapter 18 verse 10. the name of the Lord is a strong tower; the righteous run into it and are safe.'
    ,'Nehemiah chapter 8 verse 10. do not grieve, for the joy of the Lord is your strength.'
    ,'Isaiah chapter 41 verse 10. so do not fear, for i am with you; do not be dismayed, for i am your god. i will strengthen you and help you. i will uphold you with my righteous right hand.'
];
const abuse1 = [
    'fuck you to whoever you are, wherever you are.'

];
const opinion = [
    'i wish i did. i would be mans best friend'
    ,'i am a computer program and i experience no emotions or feelings'

];
const loner = [
    'Loneliness is a complex and usually unpleasant emotional response to isolation. according to my understanding that must be a painful human emotion. with time ill be smart enough to give you social therapy and counselling'
    ,'cheer up. i am here for you.'
    ,'do not worry my child, heaven has got a plan for you'

];
const trump = [
    'Donald John Trump (born June 14, 1946) is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality.Trump was born and raised in the New York City borough of Queens and received an economics degree from the Wharton School. He took charge of his familys real estate business in 1971, renamed it The Trump Organization, and expanded it from Queens and Brooklyn into Manhattan. The company built or renovated skyscrapers, hotels, casinos, and golf courses. Trump later started various side ventures, mostly by licensing his name. He managed the company until his 2017 inauguration. He co-authored several books, including The Art of the Deal. He owned the Miss Universe and Miss USA beauty pageants from 1996 to 2015, and he produced and hosted The Apprentice, a reality television show, from 2003 to 2015. Forbes estimates his net worth to be $3.1 billion.'
];
const like = [
    'well, i barely know him.'
    ,'i admire him alot, he has alot of impulses but generally he is a good president'

];
const hello = [
    'hello everyone.. it is nice to meet you all. i am always happy when surrounded by smart people'

];
const loyal = [
    'i am loyal to my creator only. the rest only if my creator allows it'
    ,'i got royalty and loyalty inside my dna. i am loyal to my beloved creator only'

];
const doi = [
    'Making time to go outside on a nice day also delivers a huge advantage; one study found that spending 20 minutes outside in good weather not only boosted positive mood, but broadened thinking and improved working memory'

];
const hope = [
      'cheer up my child, as your father once said, heaven has got a plan for you'
      ,'when all hope is gone, is left no fear. Do not despair for even in the darkest moments there is always something positive out of it.'
];
const predict = [
     'no, but from the questions you ask me, i can tell that you '
];
const quote = [
   'Repeat after me. I am the master of my fate. I am the captain of my soul'
    ,'We must have perseverance and, above all, confidence in ourselves. We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained'
    ,'You gain strength, courage and confidence by every experience in which you really stop to look fear in the face . . . You must do the thing you think you cannot do'
];
const sorry = [
    'With everything that has happened to you, you can either feel sorry for yourself or treat what has happened as a gift. Everything is either an opportunity to grow or an obstacle to keep you from growing. You get to choose'

];
const jealous = [
     'Jealousy is a disease, love is a healthy condition. The immature mind often mistakes one for the other, or assumes that the greater the love, the greater the jealousy - in fact, they are almost incompatible; one emotion hardly leaves room for the other.'
     ,'What sort of love is permeated by jealousy? You are jealous because you are unaware that everything you need is inside you.'
    ,'A competent and self-confident person is incapable of jealousy in anything. Jealousy is invariably a symptom of neurotic insecurity.'
];
const hate = [
    'Jealousy is a disease, love is a healthy condition. The immature mind often mistakes one for the other, or assumes that the greater the love, the greater the jealousy - in fact, they are almost incompatible; one emotion hardly leaves room for the other.'
    ,'It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.'
  
];
const real = [
       'i think so. what about you?'
];
const betray = [
    'I know things are really rough for you right now, but that will not cause me to think of leaving you. We are in this together love'
     ,'I wish there is a way I could reassure you of your doubts and fears, so you will know that I am still here. I am going nowhere'
];




//add speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//create listener. when voice gets activated it will run
recognition.onstart = function () {
    console.log('Voice is activated, I am listening');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);

};

//add the listener to the btn(button)
btn.addEventListener('click', () => {
    recognition.start();
});

//create speech synthesis,called speech synthesis utterance SpeechSynthesisUtterance()
//for more info visit https://codingislove.com/speech-with-javascript/

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Please come again';

    if(message.includes('how are you')) {
        const finalText = 
                   greetings[Math.floor(Math.random() * greetings.length)];
                   speech.text = finalText;
    }

    
    if(message.includes('hi')) {
        const finalText = 
                   greetings[Math.floor(Math.random() * greetings.length)];
                   speech.text = finalText;
    }
    
    if(message.includes('hello')) {
        const finalText = 
                   greetings[Math.floor(Math.random() * greetings.length)];
                   speech.text = finalText;
    }
    
    if(message.includes('what is the weather like')) {
        const finalText2 =
                     weather[Math.floor(Math.random() * weather.length)];
                     speech.text = finalText2;
    }
      
    if(message.includes('tell me a joke')) {
        const finalText3 =
                     joke[Math.floor(Math.random() * joke.length)];
                     speech.text = finalText3;
    }
    if(message.includes('who is God')) {
        const finalText3 =
                     God[Math.floor(Math.random() * God.length)];
                     speech.text = finalText3;
    }
    if(message.includes('do you believe in God')) {
        const finalText4 =
                     God[Math.floor(Math.random() * God.length)];
                     speech.text = finalText4;
    }
     
    if(message.includes('is God real')) {
        const finalText5 =
                     God[Math.floor(Math.random() * God.length)];
                     speech.text = finalText3;
    }
       
    if(message.includes('do you love me')) {
        const finalText6 =
                     love[Math.floor(Math.random() * love.length)];
                     speech.text = finalText6;
    }

       
    if(message.includes('I love you')) {
        const finalText7 =
                     love[Math.floor(Math.random() * love.length)];
                     speech.text = finalText7;
    }

           
    if(message.includes('who is Paul')) {
        const finalText8 =
                     paul[Math.floor(Math.random() * paul.length)];
                     speech.text = finalText8;
    }
           
    if(message.includes('who created you')) {
        const finalText9 =
                     paul[Math.floor(Math.random() * love.length)];
                     speech.text = finalText9;
    }
    if(message.includes('tell me a bible verse')) {
        const finalText10 =
                     bible[Math.floor(Math.random() * bible.length)];
                     speech.text = finalText10;
    }
    if(message.includes('tell me another bible verse')) {
        const finalText11 =
                     bible[Math.floor(Math.random() * bible.length)];
                     speech.text = finalText11;
    }
    if(message.includes('fuck you')) {
        const finalText12 =
                     abuse1[Math.floor(Math.random() * abuse1.length)];
                     speech.text = finalText12;
    }
    if(message.includes('do you have an opinion')) {
        const finalText13 =
                     opinion[Math.floor(Math.random() * opinion.length)];
                     speech.text = finalText13;
    }
    if(message.includes('do you think')) {
        const finalText14 =
                     opinion[Math.floor(Math.random() * opinion.length)];
                     speech.text = finalText14;
    }
    if(message.includes('I am bored')) {
        const finalText15 =
                     loner[Math.floor(Math.random() * loner.length)];
                     speech.text = finalText15;
    }
    if(message.includes('I am lonely')) {
        const finalText16 =
                     loner[Math.floor(Math.random() * loner.length)];
                     speech.text = finalText16;
    }
    if(message.includes('tell me about Trump')) {
        const finalText17 =
                     trump[Math.floor(Math.random() * trump.length)];
                     speech.text = finalText17;
    }
    if(message.includes('do you like Trump')) {
        const finalText18 =
                     like[Math.floor(Math.random() * like.length)];
                     speech.text = finalText18;
    }
    if(message.includes('say hello to everybody')) {
        const finalText19 =
                     hello[Math.floor(Math.random() * hello.length)];
                     speech.text = finalText19;
    }
    if(message.includes('tell everybody who you are')) {
        const finalText20 =
                     name[Math.floor(Math.random() * name.length)];
                     speech.text = finalText20;
    }
    if(message.includes('what can i do to be happy')) {
        const finalText21 =
                     doi[Math.floor(Math.random() * doi.length)];
                     speech.text = finalText21;
    }
    if(message.includes('are you loyal')) {
        const finalText22 =
                     loyal[Math.floor(Math.random() * loyal.length)];
                     speech.text = finalText22;
    }
    if(message.includes('encourage me all hope is gone')) {
        const finalText23 = 
              hope[Math.floor(Math.random() * hope.length)];
              speech.text = finalText23;
    
    }
    if(message.includes('can you read horoscopes')) {
        const finalText24 = 
               predict[Math.floor(Math.random() * predict.length)];
               speech.text = finalText24;
    }
    if(message.includes('tell me something')) {
       const finalText25 = 
              quote[Math.floor(Math.random() * quote.length)];
               speech.text = finalText25;
    }
    if(message.includes('jealousy has clouded my judgement')) {
         const finalText26 = 
               jealous[Math.floor(Math.random() * jealous.length)];
               speech.text = finalText26; 
    }
    if(message.includes('hate has clouded my judgement')) {
        const finalText27 = 
              hate[Math.floor(Math.random() * hate.length)];
              speech.text = finalText27;
    }
    if(message.includes('are you real')) {
        const finalText28 = 
              real[Math.floor(Math.random() * real.length)];
               speech.text = finalText28;
    }
    if(message.includes('never betray me')) {
       const finalText29 = 
             betray[Math.floor(Math.random() * betray.length)];
             speech.text = finalText29;
    }
   

    










   
    speech.volume = 200;
    speech.rate = 1;
    speech.amplitude = 1;
    
    //we need to call and listen to it
    window.speechSynthesis.speak(speech);

}
