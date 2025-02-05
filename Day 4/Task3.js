document.addEventListener("DOMContentLoaded",function () {

    const marbles = document.querySelectorAll(".marble");

    var currentMarbleIndex = 0;
    var intervalId ;
    const animationSpeed = 50;

    function moveOrangeMarble()
    {
        for(var i=0;i<marbles.length;i++)
        {
            marbles[i].src = "marble1.jpg";
        }

        marbles[currentMarbleIndex].src = "marble2.jpg";
        currentMarbleIndex = (currentMarbleIndex + 1)% marbles.length;
    }

    function startAnimation()
    {
        intervalId = setInterval(moveOrangeMarble , animationSpeed);
    }
    function stopAnimation()
    {
        clearInterval(intervalId);
    }

    for(var j = 0; j < marbles.length ; j++)
    {
        marbles[j].addEventListener("mouseenter",stopAnimation);
        marbles[j].addEventListener("mouseleave",startAnimation)
    }

    startAnimation();
});