# Watch Tv

Stay in and watch TV
This weekend, you will create a "TV guide" website. This will use an API, and few pages to display what is currently showing.

Objectives
Work with an API to display data
Work with React and React Router

Requirements
Use this API
You will have to create an account to get a key, Feel free to use the address and phone number of campus to sign up with
Use React Router to create the pages.

Explorer Mode
Create a home page that has:
the list of all "Top Rated" TV shows, returned from this API https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1

this page should also highlight a random "Top Rated" TV show at the top of the page

Create a /tv/:showId page that shows all the details for a given show and the cast of the show. The cast and crew end point is https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US

deploy your site

API Key (v3 auth)
d4391d907b2c900adc30385309aa156c

Example API Request
https://api.themoviedb.org/3/movie/550?api_key=d4391d907b2c900adc30385309aa156c

API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDM5MWQ5MDdiMmM5MDBhZGMzMDM4NTMwOWFhMTU2YyIsInN1YiI6IjVlNzk0ZWNmMzU3YzAwMDAxNjUyZmY4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU0vHiBPkv3AVMi6fEUDCD2l3_U1LYpM22dwtoUhhXI
