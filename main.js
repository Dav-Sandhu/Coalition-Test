import './style.css'

const app = document.getElementById("app")

const home = document.createElement("div")
const secondNavbar = document.createElement("div")
const history = document.createElement("div")
const team = document.createElement("div")
const footer = document.createElement("div")

home.id = "home"
secondNavbar.id = "second-navbar"
history.id = "history"
team.id = "team"
footer.id = "footer"

const navbar = `
    <nav class="navbar navbar-expand-md">
        <img src="/assets/icon.png" class="navbar-brand ms"></img>

        <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navContent" 
        aria-controls="navContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ms" id="navContent">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <button class="nav-link text-light me-4" id="history-btn">
                        <u><i>01.HISTORY</i></u>
                    </button>
                </li>
                <li class="nav-item" id="team-btn">
                    <button class="nav-link text-light">
                        <u><i>02.TEAM</i></u>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
`

const scrollToElement = (element) => {
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: 'start', inline: 'nearest'})
}

const addEvents = (element) => {
    const ul = element.childNodes[1].childNodes[5].childNodes[1]

    ul.childNodes[1].childNodes[1].addEventListener("click", () => {
        scrollToElement("history")
    })

    ul.childNodes[3].childNodes[1].addEventListener("click", () => {
        scrollToElement("team")
    })

    element.childNodes[1].childNodes[1].addEventListener("click", () => {
        scrollToElement("home")
    })
}

home.innerHTML = navbar
secondNavbar.innerHTML = navbar
secondNavbar.childNodes[1].childNodes[1].src="/assets/logo.png"

addEvents(home)
addEvents(secondNavbar)

app.appendChild(home)
app.appendChild(secondNavbar)
app.appendChild(history)
app.appendChild(team)
app.appendChild(footer)