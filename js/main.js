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

    function get_width() {
        return $('.box').width();
    }

    function get_height() {
        return $('.box').height();
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
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.left-top').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.right-bottom').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.left-bottom').draggable({
            axis: 'y',
            containment: [0, get_y1(), 0, get_y2()],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.top-right').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.top-left').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.bottom-right').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
            cursorAt: { top: 0, left: 0 },
            drag: function() {
                update_radius(true);
            }
        });
    
        $('.bottom-left').draggable({
            axis: 'x',
            containment: [get_x1(), 0, get_x2(), 0],
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
        $('.top-left').css("left", (get_width() * (arr[0] / 100)) + "px");
        $('.top-right').css("left", (get_width() * (((arr[1] - 100)) / -100)) + "px");
        $('.bottom-right').css("left", (get_width() * (((arr[2] - 100)) / -100)) + "px");
        $('.bottom-left').css("left", (get_width() * (arr[3] / 100)) + "px");
        $('.left-top').css("top", (get_height() * (arr[4] / 100)) + "px");
        $('.right-top').css("top", (get_height() * (arr[5] / 100)) + "px");
        $('.right-bottom').css("top", (get_height() * (((arr[6] - 100)) / -100)) + "px");
        $('.left-bottom').css("top", (get_height() * (((arr[7] - 100)) / -100)) + "px");
    }

    function update_radius(set_url) {
        let tl = { vl: parseInt((parseInt($('.top-left').css("left")) / get_width()) * 100), name: '--tl'};
        let tr = { vl: parseInt(((parseInt($('.top-right').css("left")) - get_width()) / get_width()) * -100), name: '--tr'};
        let br = { vl: parseInt(((parseInt($('.bottom-right').css("left")) - get_width()) / get_width()) * -100), name: '--br'};
        let bl = { vl: parseInt((parseInt($('.bottom-left').css("left")) / get_width()) * 100), name: '--bl'};
        let lt = { vl: parseInt((parseInt($('.left-top').css("top")) / get_height()) * 100), name: '--lt'};
        let rt = { vl: parseInt((parseInt($('.right-top').css("top")) / get_height()) * 100), name: '--rt'};
        let rb = { vl: parseInt(((parseInt($('.right-bottom').css("top")) - get_height()) / get_height()) * -100), name: '--rb'};
        let lb = { vl: parseInt(((parseInt($('.left-bottom').css("top")) - get_height()) / get_height()) * -100), name: '--lb'};

        let arr = [tl, tr, br, bl, lt, rt, rb, lb];

        arr.forEach(e => document.documentElement.style.setProperty(e.name, e.vl + "%"));

        $('#border-r').text(tl.vl + "% " + tr.vl + "% " + br.vl + "% " + bl.vl + "%" + " / " + lt.vl + "% " + rt.vl + "% " + rb.vl + "% " + lb.vl + "%");

        if (set_url)  location.hash = arr.map(e => e.vl).join('.');
    }
});