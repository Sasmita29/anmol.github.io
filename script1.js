document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('surpriseAudio');
    const myVideo = document.getElementById('myVideo');
    
    const santa = document.getElementById('santa');

    playButton.addEventListener('click', () => {
        
        audio.play();
        myVideo.play();
        moveSanta();
    });

    function moveSanta() {
        const maxX = window.innerWidth - santa.clientWidth;
        const maxY = window.innerHeight - santa.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        santa.style.transform = `translate(${randomX}px, ${randomY}px)`;

        setTimeout(moveSanta, 1000); // Move Santa every 2 seconds
    }
});
