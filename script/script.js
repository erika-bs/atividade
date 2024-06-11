const pic = document.querySelectorAll(".pic");


const newPics = [
    './img/left2.jpg',
    './img/main2.jpg',
    './img/right2.jpg'
];

const formerPics = [
    './img/left.jpg',
    './img/main.jpg',
    './img/right.jpg'
];

pic.forEach((item,index) => {

    item.addEventListener("mouseover",()=>{
        item.style.backgroundImage = `url(${newPics[index]})`;
    })

    item.addEventListener("mouseout", () => {
        item.style.backgroundImage = `url(${formerPics[index]})`;
    })

})



const buttonBullets = document.getElementById('buttonBullets');
buttonBullets.addEventListener("click",() => {
    const tracklistBullets = document.getElementById('tracklistB');
    tracklistBullets.innerHTML = `

        <h2 class="center">I Brought You My Bullets, You Brought Me Your Love</h2>
        <h3 class="center">TRACKLIST</h3>


        <ul class="ul-track">
            <li class="li-track">1. Romance</li>
            <li class="li-track">2. Honey, this mirror isn't big enough for the two of us</li>
            <li class="li-track">3. Vampires will never hurt you</li>
            <li class="li-track">4. Drowning Lessons</li>
            <li class="li-track">5. Our Lady of Sorrows</li>
            <li class="li-track">6. Headfirst for Halos</li>
            <li class="li-track">7. Skylines and Turnstiles</li>
            <li class="li-track">8. Early Sunsets Over Monroeville</li>
            <li class="li-track">9. This is the Best Day Ever</li>
            <li class="li-track">10. Cubicles</li>
            <li class="li-track">11. Demolition Lovers</li>
        </ul>
    
    `;
})


const button3Cheers = document.getElementById('button3Cheers');
button3Cheers.addEventListener("click",() => {
    const tracklist3Cheers = document.getElementById('tracklist3');
    tracklist3Cheers.innerHTML = `

        <h2 class="center">Three Cheers For Sweet Revenge</h2>
        <h3 class="center">TRACKLIST</h3>


        <ul class="ul-track">
            <li class="li-track">1. Helena</li>
            <li class="li-track">2. Give 'Em Hell, Kid</li>
            <li class="li-track">3. To the End</li>
            <li class="li-track">4. You know what they do to guys like us in prison</li>
            <li class="li-track">5. I'm not okay (I promise)</li>
            <li class="li-track">6. The Ghost of You</li>
            <li class="li-track">7. The Jetset Life is Gonna Kill You</li>
            <li class="li-track">8. Interlude</li>
            <li class="li-track">9. Thank you for the Venom</li>
            <li class="li-track">10. Hang 'Em High</li>
            <li class="li-track">11. It's not a fashion statement, it's a deathwish</li>
            <li class="li-track">12. Cemytery Drive</li>
            <li class="li-track">13. I never told you what I do for a living</li>
            <li class="li-track">14. Bury Me in Black</li>
        </ul>
    
    `;
})


const buttonBlackParade = document.getElementById('buttonBlackParade');
buttonBlackParade.addEventListener("click",() => {
    const tracklistBP = document.getElementById('tracklistBP');
    tracklistBP.innerHTML = `

        <h2 class="center">The Black Parade</h2>
        <h3 class="center">TRACKLIST</h3>

        <ul class="ul-track">
            <li class="li-track">1. The End</li>
            <li class="li-track">2. Dead!</li>
            <li class="li-track">3. This is how I dissapear</li>
            <li class="li-track">4. The Sharpest lives</li>
            <li class="li-track">5. Welcome to the Black Parade</li>
            <li class="li-track">6. I don't love you</li>
            <li class="li-track">7. House of Wolves</li>
            <li class="li-track">8. Cancer</li>
            <li class="li-track">9. Mama</li>
            <li class="li-track">10. Sleep</li>
            <li class="li-track">11. Teenagers</li>
            <li class="li-track">12. Disenchanted</li>
            <li class="li-track">13. Famous last Words</li>
            <li class="li-track">14. Blood</li>
        </ul>
    
    `;
})

const buttonDangerDays = document.getElementById('buttonDangerDays');
buttonDangerDays.addEventListener("click",() => {
    const tracklistDD = document.getElementById('tracklistDD');
    tracklistDD.innerHTML = `

        <h2 class="center">Danger Days</h2>
        <h3 class="center">TRACKLIST</h3>

        <ul class="ul-track">
            <li class="li-track">1. Look Alive, Sunshine</li>
            <li class="li-track">2. Na Na Na</li>
            <li class="li-track">3. Bulletproof Heart</li>
            <li class="li-track">4. Sing</li>
            <li class="li-track">5. Planetary (GO!)</li>
            <li class="li-track">6. The Only hope for me is you</li>
            <li class="li-track">7. Jet-Star and the Kobra Kid</li>
            <li class="li-track">8. Party Poison</li>
            <li class="li-track">9. Save yourself, I'll hold them back</li>
            <li class="li-track">10. S/C/A/RE/C/R/O/W</li>
            <li class="li-track">11. Summertime</li>
            <li class="li-track">12. DESTROYA</li>
            <li class="li-track">13. The Kids from Yesterday</li>
            <li class="li-track">14. Goodnight, Dr Death</li>
            <li class="li-track">15. Vampire Money</li>
            <li class="li-track">16. We don't need another song about California</li>
        </ul>
    
    `;
})