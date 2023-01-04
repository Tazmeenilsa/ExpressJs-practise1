const qoutes = document.getElementById("qoutes")
const author = document.getElementById("author")
const newQ = document.getElementById("newQuotes")
const tweetMe = document.getElementById("tweetMe")
let realData = "";
let quotesData = ""

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author} `
    window.open(tweetPost)
}

const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * 20)
    quotesData = realData[randomNum]
    // console.log(realData[randomNum])
    qoutes.innerText = `${quotesData.text}`
    quotesData.author == null
        ?
        (author.innerText = "unKnown")
        :
        (author.innerText = `By ${quotesData.author}`)

}

const getQoutes = async () => {
    const api = "https://type.fit/api/quotes"

    try {
        let data = await fetch(api)
        realData = await data.json()
        getNewQuotes()

        // console.log(realData.length)
        // console.log(realData[30])
    }
    catch (error) {
        console.log(error)
    }
}
tweetMe.addEventListener("click", tweetNow)
newQ.addEventListener("click", getNewQuotes)
getQoutes()