$(document).ready(function(){
    // NAV MINIMIZE ON SCROLL
    const handleNavMinimization = () => {
        if ($(document).scrollTop() > 0) {
            $("nav").removeClass("nav-1");
            $("nav").addClass("nav-2");
        } else {
            $("nav").removeClass("nav-2");
            $("nav").addClass("nav-1");
        }
    }

    // SCROLL SETUP
    const scrollElements = document.querySelectorAll(".js-appear");
    const scrollPercentage = 0.8;

    // RETURNS TRUE IF ELEMENT'S POSITION IS ABOVE THE PERCENTAGE PARAMETER
    const elementInView = (el, percentage) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * percentage)
        );
    };

    // ELEMENT APPEAR ON SCROLL
    const handleAppearAnimation = () => {
        scrollElements.forEach(el => {
            if (elementInView(el, scrollPercentage)) {
                el.classList.add("js-appeared");
            } else {
             el.classList.remove("js-appeared");
            }
        })
    };

    // TEXT HIGHLIGHT ON SCROLL
    const highlightElements = document.querySelectorAll(".js-highlight");
    const handleScrollHighlightAnimation = () => {
        highlightElements.forEach(el => {
            if (elementInView(el, scrollPercentage)) {
                el.classList.add("js-highlighted");
            } else {
                el.classList.remove("js-highlighted");
            }
            })
    }

    // SCROLL EVENT LISTENER
    window.addEventListener('scroll', () => {
        handleNavMinimization();
        handleAppearAnimation();
        handleScrollHighlightAnimation();
    });

    // LOOP SETUP
    const loopCount = $(".loop ul").length;  
    const loopImgWidth = $(".loop ul li").width(); 
    const loopWidth = loopCount*loopImgWidth;   
    $(".loop ul").css("width", loopWidth); 
    
    // LOOP ANIMATE
    setInterval(function(){
        $(".loop ul").animate({"margin-left":-loopWidth}, 2000, "linear", function(){
            $(".loop ul").find("li:first-child").insertAfter($(".loop ul").find("li:last-child"));
            $(".loop ul").css({"margin-left":"0px"});
        });
    });

    // SLIDER SETUP
    var imgCount = $(".slides ul").length;  
    var imgWidth = $(".slides ul li").width(); 
    var sliderWidth = imgCount*imgWidth;   
    $(".slides ul").css("width", sliderWidth);    
    
    // SLIDER ANIMATE
    setInterval(function(){
        $(".slides ul").animate({"margin-left":-imgWidth}, 3000, "easeInOutExpo", function(){
            $(".slides ul").delay(50).find("li:first-child").insertAfter($(".slides ul").find("li:last-child"));
            $(".slides ul").delay(100).css({"margin-left":"0px"});
        });
    }, 5000);

    // DRAWING SETUP
    const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");
    let isDrawing = false;
    let color = '#D9D9D9';

    // SET CANVAS ON LOAD
    window.addEventListener("load", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });

    // BEGIN NEW PATH
    const startDraw = () => {
        isDrawing = true;
        ctx.beginPath();
    }

    // BRUSH SETUP
    const drawing = (e) => {
        if(!isDrawing) return; 
        ctx.lineTo(e.offsetX, e.offsetY); // create line according to mouse pointer
        ctx.stroke(); // drawing/filling line with color
        ctx.strokeStyle = color;
        ctx.lineWidth = 20;
    }   

    // CHANGE COLOR ON CLICK
    $(".color").on("click", function() {
        const id = this.id
        let imageUrl = ''
        switch (id) {
            case "yellow":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23FEFFBC' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#FEFFBC";
                break;
            case "green":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23C5FAB3' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#C5FAB3"
                break;
            case "blue":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23B6EEFA' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#B6EEFA"
                break;
            case "purple":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23F6BCFF' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#F6BCFF"
                break;
            case "red":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23FFBCBC' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#FFBCBC"
                break;
            case "grey":
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23D9D9D9' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#D9D9D9"
                break;
            default: 
                imageUrl = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M33.896 19.5469L27.3662 26.0925L25.7075 24.4338L32.4365 17.7207L32.7909 17.3671L32.4369 17.0131L30.8369 15.4131L30.4846 15.0608L30.131 15.4119L28.1179 17.4108L22.5742 11.8671L28.6198 5.83736L28.6202 5.8369C29.0803 5.37686 29.8395 5.39061 30.2539 5.82748L30.2538 5.8276L30.2631 5.8369L34.1631 9.7369L34.163 9.73703L34.1725 9.74608C34.6094 10.1606 34.6231 10.9198 34.1631 11.3798L34.1493 11.3937C33.876 11.6669 33.5767 11.9662 33.3456 12.2705C33.1171 12.5714 32.9019 12.944 32.8841 13.3694C32.8479 13.8195 33.0688 14.2126 33.29 14.5068C33.5164 14.808 33.8161 15.0982 34.0729 15.347L34.079 15.3529C34.1326 15.4088 34.1855 15.4636 34.2374 15.5174C34.5833 15.876 34.8878 16.1916 35.1191 16.5039C35.3858 16.864 35.4935 17.1411 35.4837 17.3796C35.4735 17.6301 35.331 17.9441 35.027 18.3384C34.7288 18.725 34.3295 19.1219 33.9 19.543L33.8999 19.543L33.896 19.5469ZM11.0427 34.5H5.5V28.957L20.9335 13.5073L26.4764 19.0502L11.0427 34.5Z' fill='%23D9D9D9' stroke='%23412420'/%3E%3C/svg%3E%0A";
                color = "#D9D9D9"
        }
        $(".eicon-pen").css("background-image", 'url("'+imageUrl+'")');
    });

    // CLEAR CANVAS ON LOAD
    window.addEventListener("load", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", drawing);
    canvas.addEventListener("mouseup", () => isDrawing = false);
});