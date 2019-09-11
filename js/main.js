$(document).ready(function () {
    console.log('hello from js file');

    // INITIALIZE AOS
    AOS.init({
        duration: 1500
    });

   

    // you can create your API KEY from https://www.themoviedb.org/documentation/api
    // and then replaced the <YOUR-API-KEY> with your API KEY
    $.get('https://api.themoviedb.org/3/movie/top_rated?api_key=<YOUR-API-KEY>')
        .done(function (response) {
            console.log(response);
            var moviesArray = response.results;

            for (var i = 0; i < moviesArray.length; i++) {
                $('#topRatedRow').append(`
                    <div class="col s2">
                        <div class="card hoverable" data-aos="fade-down">
                            <div class="card-image">
                                <img src="https://image.tmdb.org/t/p/original/${moviesArray[i].poster_path}">
                            </div>
                            <div class="card-content">
                                <p>${moviesArray[i].title}</p>
                            </div>
                            <div class="card-action">
                                <a href="#">${moviesArray[i].vote_average}<i class="tiny material-icons">star</i></a>
                            </div>
                        </div>
                    </div>`
                );
            }
        });

});