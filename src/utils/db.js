const storage = {
    movies: [
        {id: 1, name: 'avengers', up: 13, down: 11},
        {id: 2, name: 'crazy rich asians', up: 22, down: 1},
        {id: 3, name: 'alpha', up: 31, down: 41},
        {id: 4, name: 'mile 22', up: 14, down: 22},
        {id: 5, name: 'the wife', up: 9, down: 2},
    ]
}

const listMovies = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(storage.movies)
        }, 500);
    });
    
}

const upvote = (id) => {

}

const downvote = (id) => {

}

export {listMovies};