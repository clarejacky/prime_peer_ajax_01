var input;
function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'text',
        crossDomain: true,
        url: 'https://api.github.com/users/'+ query,
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data) {
            console.log(data);

        }
    });

}


$(document).ready(function(){

    search("tracyfuller");
//calling the api, CORS function, find the username, the link to their github page, profile image, public info
    //display an error message

//on.click to bring in query terms for search function and call search function
//$("#search-btn").on("click", function(event){
//    event.preventDefault();
//    input = $("#searchBox").val();
//    console.log(input);
//    search(input);
//
//
//
//
//
//});

//html_url
//login - username
    //avatar_url
    //followers_url
    //following_url

});


