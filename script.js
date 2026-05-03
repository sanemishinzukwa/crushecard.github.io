const mymsg = [{
title: "Hey My Dear Crush, This is the First Message of your e-card",
image: "./assets/chick.png",


},
{
    title: "I Always Admire",
    text: "Want to Let you Know that I Always Admire you From a Distance",
    image: "./assets/butterflies.png"
},
{
    title: "When First Time I Saw YOu",
    text: "I Stucked and Freeze Looking at You",
    image: "./assets/photo-camera.png",
},
{
    title: "Try To Confess",
    text: "When Ever I Tried to Confess I Hesitate Every time.",
    image: "./",

},
{
    title: "I Got Courage!",
    text: "Finally I Got the Courage To Tell You.",
    image: "./assets/cat.png"
},
{
    title: "Confession To You",
    text: "I Like you So Much from the Day I saw you once helping the children and Playing Like a child",
    image: ""
},
{
    title: "The Day I Fall For you",
    text: "From That Day, I Admire you Secretly and Thinking About you Only.",
    image: ""
},
{
    title: "So I created this E-card",
    text: "To Convey my Felling to You and How you like about it.Please Let me Know",
    image: "./assets/cloud.png",

},
{
    title: "Thanks For Listening My Feeling",
    text: "I will be Waiting For your Response",
    image: ""
},
{
    title: "Byee Love You So Much",
    text: "Finally I feel Light like a Cloud after sharing my words with you.",
    image: ""
}
]

let currentIndex = 0;

const audio = document.getElementById("myaudio");
const audiobtn = document.getElementById("play-audio");
const prebtn = document.getElementById("prebtn");
const nextbtn = document.getElementById("nextbtn");
const pauseaudio = document.getElementById("pause-audio");
const title = document.getElementById("title");
const cardtext = document.getElementById("cardtext");


const imgs = document.getElementById("imgs");

function Textmsg(index) {
    title.textContent = mymsg[index].title;
        cardtext.textContent = mymsg[index].text;

    imgs.src = mymsg[index].imgs;

    prebtn.disabled = index === 0;
    nextbtn.disabled = index === mymsg.length - 1;
}




nextbtn.addEventListener ("click", ()=>{
    if (currentIndex < mymsg.length - 1){
        currentIndex++ ;
        Textmsg(currentIndex);
    }
});
prebtn.addEventListener ("click", ()=>{
    if (currentIndex > 0){
        currentIndex--;
        Textmsg(currentIndex);
    }
});
Textmsg(currentIndex);


function playaudio(){
audio.play();

    if(audio === audio.play()){
    audio.pause();

    }
    else{
        audio.play();
    }

}

function audiopause(){
    audio.pause();
}

audiobtn.addEventListener("click", ()=>{
    playaudio();
})

pauseaudio.addEventListener("click", ()=>{
    audiopause();
})

function add(){
    audiobtn.addEventListener("");
    let text = document.getElementById("textbtn");
}