jQuery(function($) {
    function get_y1() {
        return $(".box").offset().top;
    }

    function get_y2() {
        return ($(".box").outerHeight() + $(".box").offset().top); 
    }

    function get_x1() {
        return $(".box").offset().left;
    }

    function get_x2() {
        return ($(".box").outerWidth() + $(".box").offset().left); 
    }

    if ((location.hash.substring(1)).split('.').length == 8) {
        let array = (location.hash.substring(1)).split('.').map(e => parseInt(e) || 0);
        
        location.hash = array.join('.');

        set_value(array);
    }

    drag();
    update_radius(false);

    function drag() {
        $('.right-top').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.left-top').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.right-bottom').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.left-bottom').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.top-right').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.top-left').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.bottom-right').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.bottom-left').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            grid: [$('.box').width() / 100, $('.box').height() / 100],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    }

    $(window).resize(() => {
        drag();
    });

    function set_value(arr) {
        let width = $('.box').width();
        let height = $('.box').height();

        $('.top-left').css("left", (width * (arr[0] / 100)) + "px");
        $('.top-right').css("left", (width * (((arr[1] - 100) * -1) / 100)) + "px");
        $('.bottom-right').css("left", (width * (((arr[2] - 100) * -1) / 100)) + "px");
        $('.bottom-left').css("left", (width * (arr[3] / 100)) + "px");
        $('.left-top').css("top", (height * (arr[4] / 100)) + "px");
        $('.right-top').css("top", (height * (arr[5] / 100)) + "px");
        $('.right-bottom').css("top", (height * (((arr[6] - 100) * -1) / 100)) + "px");
        $('.left-bottom').css("top", (height * (((arr[7] - 100) * -1) / 100)) + "px");
    }

    function update_radius(set_url) {
        let width = $('.box').width();
        let height = $('.box').height();

        let tl = parseInt((parseInt($('.top-left').css("left")) / width) * 100);
        let tr = parseInt(((parseInt($('.top-right').css("left")) - width) / width) * -100);
        let br = parseInt(((parseInt($('.bottom-right').css("left")) - width) / width) * -100);
        let bl = parseInt((parseInt($('.bottom-left').css("left")) / width) * 100);
        let lt = parseInt((parseInt($('.left-top').css("top")) / height) * 100);
        let rt = parseInt((parseInt($('.right-top').css("top")) / height) * 100);
        let rb = parseInt(((parseInt($('.right-bottom').css("top")) - height) / height) * -100);
        let lb = parseInt(((parseInt($('.left-bottom').css("top")) - height) / height) * -100);

        document.documentElement.style.setProperty('--tl', tl + "%");
        document.documentElement.style.setProperty('--tr', tr + "%");
        document.documentElement.style.setProperty('--br', br + "%");
        document.documentElement.style.setProperty('--bl', bl + "%");
        document.documentElement.style.setProperty('--lt', lt + "%");
        document.documentElement.style.setProperty('--rt', rt + "%");
        document.documentElement.style.setProperty('--rb', rb + "%");
        document.documentElement.style.setProperty('--lb', lb + "%");

        $('#border-r').text(tl + "% " + tr + "% " + br + "% " + bl + "%" + " / " + lt + "% " + rt + "% " + rb + "% " + lb + "%");

        if (set_url)  location.hash = [tl, tr, br, bl, lt, rt, rb, lb].join('.');
    }
});