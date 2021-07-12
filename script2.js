// Mijn JavaScript - Filmzoeker

const movieUnorderedList = document.getElementById('ul-movielist');
console.log(movieUnorderedList);

const radioButtons = document.getElementsByName('filter');
console.log(radioButtons);

// Function to add movies to the DOM.
const addMoviesToDom = (movies) => {
    const movieListItems = movies.map((movie) => {
        
        const newListItem = document.createElement('li');
        
        const newImage = document.createElement('img');
        newImage.src = movie.Poster;

        const linkOnImage = document.createElement('a');
        linkOnImage.href = "https://www.imdb.com/title/" + movie.imdbID;
        linkOnImage.target = "_blank";
        
        newListItem.appendChild(linkOnImage);
        linkOnImage.appendChild(newImage);
        
        return newListItem;
    });

    movieListItems.forEach(newListitem => {
        movieUnorderedList.appendChild(newListitem);

    });
};

// Function to Remove Movies in List
const removeMoviesFromDom = () => {
    movieUnorderedList.innerHTML = "";
};

// Function to Filter Movies by Title
const filterMovies = (wordInMovieTitle) => {
    return movies.Movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(wordInMovieTitle.toLowerCase());
    });
};

// Function to Filter Movies by Year
const filterLatestMovies = () => {
    return movies.Movies.filter((movie) => {
        return movie.Year >= 2014;
    });
};

// Function Radio Button Change Handler
const handleOnChangeEvent = (event) => {
    switch (event.target.value) {
        case "alle":
            console.log(movies.Movies);
            removeMoviesFromDom();
            addMoviesToDom(movies.Movies);
            break;
        case "nieuwste":
            console.log(filterLatestMovies());
            removeMoviesFromDom();
            addMoviesToDom(filterLatestMovies());
            break;
        case "avengers":
            console.log(filterMovies("Avengers"));
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Avengers"));
            break;
        case "xmen":
            console.log(filterMovies("Batman"));
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("X-Men"));
            break;
        case "princess":
            console.log(filterMovies("Princess"));
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Princess"));
            break;
        case "batman":
            console.log(filterMovies("Batman"));
            removeMoviesFromDom();
            addMoviesToDom(filterMovies("Batman"));
            break;
        default:
            console.log("Unkown Error");
            break;
    };
};

// Add eventlistener to radioButtons
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', () => handleOnChangeEvent(event));
});

// Function for input Searchfield
const searchField = document.getElementById('searchfield');
console.log(searchField);

searchField.addEventListener('change', searchField => {
    const searchWords = searchField.target.value;
    const filteredMovies = filterMovies(searchWords);

    removeMoviesFromDom();
    addMoviesToDom(filteredMovies);
})

addMoviesToDom(movies.Movies);

