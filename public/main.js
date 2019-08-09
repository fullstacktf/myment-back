// Code for the search results XHR

const showResults = debounce(function(arg){
    const value = arg.trim();
    if (value == "" || value.length <= 0) {
        $("#search-results").fadeOut();
        return;
    }
    else {
        $("#search-results").fadeIn();
    };
    // showResults get the data and display the html
    const jqxhr = $.get('/xhr/search?q' + value, function (data) {
        $("#search-results").html("");
    })
    .done(function(data) {
        if (data.length === 0) {
            $("#search-results").append('<p class="lead text-center mt-2">No Results</p>');
        } else {
            data.forEach(x => {
                $("#search-results").append('<a href="#"><p class="m-2 lead"><img src="smiley.gif" alt="Smiley face" height="42" width="42"> ' + x.storeName + '</p> </a>');
            });
        }
    })
    .fail(function(err) {
        console.log(err);
    })
}, 200);

// Limits the execution of showResults function
function debounce(func, wait, inmediate) {
    const timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function() {
            timeout = null;
            if (!inmediate) func.apply(context, args);
        };
        const callNow = inmediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
