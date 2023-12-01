
$(document).ready(function() {
// the code will execute when the doc is ready 
    $('#searchButton').click(function() {
// create a click action and attach it to the element with its id which is (searchButton)
        var searchTerm = $('#searchInput').val().toLowerCase();
// now we get the value of the input ( the text that we typed in the search bar ) and convert it to lowercase
        if (searchTerm === 'english') {
            window.location.href = 'english/english.html';
        } else if (searchTerm === 'french') {
            window.location.href = 'french/french.html';
        } else if (searchTerm === 'deutsch') {
            window.location.href = 'deutsch/deutsch.html';
        } else if (searchTerm === 'full stack js') {
            window.location.href = 'fsjs/full.html';
        } else if (searchTerm === 'marketing') {
            window.location.href = 'marketing/marketing.html';
        } else if (searchTerm === 'graphic design') {
            window.location.href = 'graph design/design.html';
        } else {
            // now we will check the search term that we typed and we're going to navigate to the corresponding page 
            alert('No results found for: ' + searchTerm)
            // if there is no results for the search term , an error will pop up 
        }
    })




    $('.submenu a').click(function() {
// we create a click button and attach it to anchor elements inside elements of the class "submenu"
        var searchTerm = $(this).text().toLowerCase()
// now we get the lowercase text of the anchor element that we clicked on in the submenu
        handleSearch(searchTerm)
        // now we call the function handlesearch with an argument "searchterm"
    });
});



function handleSearch(searchTerm) {

    if (searchTerm === 'english') {
        window.location.href = 'english.html'
    } else if (searchTerm === 'french') {
        window.location.href = 'french.html'
    } else if (searchTerm === 'deutsch') {
        window.location.href = 'deutsch.html'
    } else if (searchTerm === 'full stack js') {
        window.location.href = 'full.html'
    } else if (searchTerm === 'marketing') {
        window.location.href = 'marketing.html'
    } else if (searchTerm === 'graphic design') {
        window.location.href = 'design.html'
    } else {
        // we search the formation that we want and it will take us to its page
        alert('No results found for: ' + searchTerm)
        // an alert will pop up if there is no result for the formation
    }
}






// we assign the button with the id (myBtn) to the var my button 
mybutton = document.getElementById("myBtn")
window.onscroll = function() {
    // we assign a function to the action when we scroll down in the page
    scrollFunction()
    // we call the function scrollfunction when we scroll down in the page
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // now we make like a range (20px) if we scroll more than 20px in the page the button will show up
        mybutton.style.display = "block";
        // if we scrolled enough in the page the button will show up 
    } else {
        mybutton.style.display = "none";
        // If we didnt scroll enough (less than 20px) the button will not show up and stay hidden
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
    /// and finally we define the function topfunction and we set the position of where to scroll up to
}






  

$(document).ready(function () {
    var currentImage = 0;
    var totalImages = $('.image-container img').length;
// we assign vars for the index of the image (current image ) and the total number of images(totalimages)
    function showImage(index) {
        // now we create a function to show us the specific image that we want with its index
        $('.image-container img').hide();
        // we hide all the images in the container that we createdd 
        $('.image-container img:eq(' + index + ')').show();
        // after we hided the images we start displaying each image in order (sorted) with their indexes
    }

    
    $('#nextBtn').click(function () {
        // and in the last function we need to attack a click button that we created in html with the id nextbtn wich allow us to move from image to another
        currentImage = (currentImage + 1) % totalImages;
        // now we move from image to another with their indexes and when we reach the last image we loop back to the first image with the index 0
        showImage(currentImage);
        // and we call the function showimage to display the image that we moved to
    });

    showImage(currentImage);
    // last of all we display the first image with the index 0 when the page is loaded what means when we open the page we display the first image
});
