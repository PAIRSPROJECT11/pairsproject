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