// -----------------HOME TEXT OBSERVER-----------------------------

const homeText = document.querySelectorAll(".home-text")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showElement", entry.isIntersecting)        
    })
},{
    threshold: 0.2,
})
homeText.forEach(homeText => {
    observer.observe(homeText)
})


// -----------------BTN OBSERVER-----------------------------


const btn = document.querySelectorAll(".btn")

const observerBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showBtn", entry.isIntersecting)    })
},{
    threshold: 0.2,
})

btn.forEach(btn => {
    observerBtn.observe(btn)
})



// ----------------- OBSERVER SHOW ABOUT TEXT FROM RIGHT-----------------------------

const right= document.querySelectorAll(".text")

const observerRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showAboutText", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
right.forEach(right => {
    observerRight.observe(right)
})

// ----------------- OBSERVER SHOW ABOUT IMG FROM LEFT-----------------------------

const aboutImg= document.querySelectorAll(".about-img")

const observerImg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showAboutImg", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
aboutImg.forEach(aboutImg => {
    observerImg.observe(aboutImg)
})
// ----------------- OBSERVER SHOW PROJECTS IMG FROM RIGHT-----------------------------
const protImg= document.querySelectorAll(".proImg")

const observerImgs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showProjectstImgs", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
protImg.forEach(protImg => {
    observerImgs.observe(protImg)
})


// -------------OBSERVER SHOW PROJECTS TITLE AND DESCRIPTION FROM LEFT-----------------------------

const proTxt= document.querySelectorAll(".show")

const observerTxt = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("projectsShowTxt", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
proTxt.forEach(proTxt => {
    observerTxt.observe(proTxt)
})

// -------------OBSERVER SHOW PROJECTS LIVE BTN FROM LEFT-----------------------------

const liveBtn= document.querySelectorAll(".live-btn")

const observerLiveBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showLiveBtn", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
liveBtn.forEach(liveBtn => {
    observerLiveBtn.observe(liveBtn)
})

// -------------OBSERVER SHOW PROJECTS SOURCE BTN FROM LEFT-----------------------------

const sourceBtn= document.querySelectorAll(".source-btn")

const observerSourceBtn = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showSourceBtn", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
sourceBtn.forEach(sourceBtn => {
    observerSourceBtn.observe(sourceBtn)
})



// ----------OBSERVER SHOW CONTACT-----------------------------


const contact= document.querySelectorAll(".show")

const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("showContact", entry.isIntersecting)
        // if (entry.isIntersecting) observer.unobserve(entry.target)
        
    })
},{
    threshold: 0.2,
})
contact.forEach(contact => {
    observerContact.observe(contact)
})





























const img = document.querySelectorAll('.about-img')[0];

img.addEventListener('click',function(){
    img.classList.toggle('active')
})
