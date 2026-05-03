const mymsg = [{
title: "Hey My Dear Crush, This is the First Message of your e-card",
image: "cat.png",


},
{
    title: "I Always Admire",
    text: "Want to Let you Know that I Always Admire you From a Distance",
    image: "butterflies.png"
},
{
    title: "When First Time I Saw YOu",
    text: "I Stucked and Freeze Looking at You",
    image: "photo-camera.png",
},
{
    title: "Try To Confess",
    text: "When Ever I Tried to Confess I Hesitate Every time.",
    image: "bunny.jpg",

},
{
    title: "I Got Courage!",
    text: "Finally I Got the Courage To Tell You.",
    image: "cat.png"
},
{
    title: "Confession To You",
    text: "I Like you So Much from the Day I saw you once helping the children and Playing Like a child",
    image: "flower.png"
},
{
    title: "The Day I Fall For you",
    text: "From That Day, I Admire you Secretly and Thinking About you Only.",
    image: "bunny.jpg"
},
{
    title: "So I created this E-card",
    text: "To Convey my Felling to You and How you like about it.Please Let me Know",
    image: "cloud.png",

},
{
    title: "Thanks For Listening My Feeling",
    text: "I will be Waiting For your Response",
    image: "103.jpg"
},
{
    title: "Byee Love You So Much",
    text: "Finally I feel Light like a Cloud after sharing my words with you.",
    image: "cutegirl.png"
},
{
    title: "Thanks For Watching",
    text:"Made with Love By @Akshan Perveen",
    image:"chick.png"
}
]

let currentIndex = 0;

const textanimate = document.querySelector('.animatetext');
const titleanimate = document.querySelector('.animatetitle');
const imganimate = document.querySelector('.animateimgs')
const audio = document.getElementById("myaudio");
const audiobtn = document.getElementById("play-audio");
const prebtn = document.getElementById("prebtn");
const nextbtn = document.getElementById("nextbtn");
const pauseaudio = document.getElementById("pause-audio");
const title = document.getElementById("title");
const cardtext = document.getElementById("cardtext");
const downloadbtn = document.getElementById("downloadbtn");


const imgs = document.getElementById("imgs");

function Textmsg(index) {
    textanimate.classList.remove('animate-text');
    titleanimate.classList.remove('animate-title');
    imganimate.classList.remove("animate-imgs");

    void imganimate.offsetWidth;

    void textanimate.offsetWidth;
    void titleanimate.offsetWidth;

    title.textContent = mymsg[index].title;
        cardtext.textContent = mymsg[index].text || "";

    imgs.src = mymsg[index].image;

    textanimate.classList.add('animate-text');
    titleanimate.classList.add('animate-title');
    imganimate.classList.add("animate-imgs");

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


function downloadcard(){
    const img = document.getElementById("section");

    const scale = 3;

    domtoimage.toJpeg(img, {
        quality:1,
        bgcolor: "#ffffff",
        height:img.offsetHeight * scale,
        width: img.offsetWidth * scale,


        style:{
            width:img.offsetWidth + "px",
            height: img.offsetHeight + "px",
            transformOrigin: "top left",
            transform: `scale(${scale})`,
        }
    }).then(function(dataUrl){
const link = document.createElement("a");
link.download = "coeur.jpeg";
link.href = dataUrl;

        link.click();

    }).catch(function(error){
        console.error("Export failed:", error);
    });
}


downloadbtn.addEventListener("click",()=>{
    downloadcard();
})

nextbtn.addEventListener('click',()=>{
    imganimate.classList.add('animate-imgs');
    textanimate.classList.add('animate-text');
    void text.offsetWidth;
titleanimate.classList.add('animate-title');
        removeanimate();

})

function removeanimate(){
    textanimate.classList.remove('animate-text');

}
