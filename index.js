let movieHtml = ""

function getHtml(id){
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=7c64754d`)
    .then(res => res.json())
    .then(function(data){
        console.log("Clear")
        movieHtml +=`<div class="movie">
                        <div>
                            <img src = "${data.Poster}" alt = "${data.Title}">
                        </div>
                        <div class= "text">
                            <div class="title-rating">
                                <div>
                                    <h3>${data.Title}</h3>
                                </div>
                                <div>
                                    <p>${data.imbdRating} ⭐</p>  
                                </div>
                            </div>
                            <div>
                                <div class="info">
                                    <div>
                                        <p>${data.Runtime}</p>
                                    </div>
                                    <div>
                                        <p>${data.Genres}</p>
                                    </div>
                                    <div class="info">
                                        <div>
                                            <img src="icon-1.png" width = "25" height= "25">
                                        </div>
                                        <div>
                                            <p>Watchlist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>${data.Plot}</p>
                        </div>
                    </div>
                    <hr>`
    })
}

function extractInfo(data){
    let resultNum = data.Search.length
    for (let i = 0; i < resultNum; i++){
        let movieId = data.Search[i].imdbID
        console.log(movieId)
        getHtml(movieId)
    }    
}

document.getElementById("search").addEventListener("click", function(){ 
    fetch (`https://www.omdbapi.com/?s=${document.getElementById("search-bar").value}&apikey=7c64754d`)
    .then(res => res.json())
    .then(function(data){
        extractInfo(data)
        })
    .then(document.getElementById("main").innerHTML = movieHtml)
})
        
fetch(`https://www.omdbapi.com/?i=tt0848228&apikey=7c64754d`)
    .then(res => res.json())
    