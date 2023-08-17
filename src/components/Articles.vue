<template>
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h3 class="w3-margin w3-jumbo">Links Page</h3>
        <p class="w3-xlarge">Here are some links grouped by categories.</p>
    </header>

    <div class="w3-row-padding w3-padding-32 w3-container">
        <!-- First link group -->
        <div class="w3-col s12 m6 l4 link-group w3-responsive"> <!-- Added w3-responsive class -->
            <h3>Social Media</h3>
            <ul>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://www.twitter.com/">Twitter</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
            </ul>
        </div>

        <!-- Second link group -->
        <div class="w3-col s12 m6 l4 link-group w3-responsive"> <!-- Added w3-responsive class -->
            <h3>News</h3>
            <ul>
                <li><a href="https://www.bbc.com/">BBC</a></li>
                <li><a href="https://www.cnn.com/">CNN</a></li>
                <li><a href="https://www.nytimes.com/">New York Times</a></li>
                <li><a href="https://www.thehindu.com/">The Hindu</a></li>
            </ul>
        </div>

        <!-- Third link group -->
        <div class="w3-col s12 m6 l4 link-group w3-responsive"> <!-- Added w3-responsive class -->
            <h3>Entertainment</h3>
            <ul>
                <li><a href="https://www.netflix.com/">Netflix</a></li>
                <li><a href="https://www.youtube.com/">YouTube</a></li>
                <li><a href="https://www.spotify.com/">Spotify</a></li>
                <li><a href="https://www.imdb.com/">IMDb</a></li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
/* Style the links */
a {
    color: white;
    text-decoration: none;
}

/* Style the link groups */
.link-group {
    margin: 10px;
    padding: 10px;
    background-color: teal;
    /* Changed the background color */
    border-radius: 10px;
}

/* Style the link group headings */
.link-group h3 {
    margin: 0;
    padding: 0;
    color: white;
}

/* Style the link group lists */
.link-group ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

/* Style the link group list items */
.link-group li {
    margin: 5px;
    padding: 5px;
    border-bottom: 1px solid white;
}

/* Remove the border from the last list item */
.link-group li:last-child {
    border-bottom: none;
}
</style>