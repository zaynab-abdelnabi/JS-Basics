function new_image(numb) {
    switch (numb) {
        case 1:
            document.getElementById('image1').src = 'images/image1_2.jpg';
            break;
        case 2:
            document.getElementById('image2').src = 'images/image2_2.jpg';
            break;
        case 3:
            document.getElementById('image3').src = 'images/image3_2.jpg';
            break;
        case 4:
            document.getElementById('image4').src = 'images/image4_2.jpg';
            break;
        case 5:
            document.getElementById('image5').src = 'images/image5_2.jpg';
            break;
        default:
    }
};
function old_image(numb) {
    switch (numb) {
        case 1:
            document.getElementById('image1').src = 'images/image1.jpg';
            break;
        case 2:
            document.getElementById('image2').src = 'images/image2.jpg';
            break;
        case 3:
            document.getElementById('image3').src = 'images/image3.jpg';
            break;
        case 4:
            document.getElementById('image4').src = 'images/image4.jpg';
            break;
        case 5:
            document.getElementById('image5').src = 'images/image5.jpg';
            break;
        default:
    }
};