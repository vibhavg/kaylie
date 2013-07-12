$(document).ready(function() {
    $('#globalnav > li > a').click(function() {
        $this = $(this);
        if ($this.hasClass('selected')) {
            $this.removeClass('selected');
            $submenu = $this.parent('li').children('ul');
            if ($submenu)
                $submenu.slideUp();
        } else {
            $submenu = $this.parent('li').children('ul');
            $this.addClass('selected');
            if ($submenu)
                $submenu.slideDown();
	    }
    });

    $('.tile-span img').mouseover(function() {
        $this = $(this);
        var src = $this.attr('src');
        var new_src = src.replace('bw', 'small');
        $this.attr('src', new_src);
    });

    $('.tile-span img').mouseout(function() {
        $this = $(this);
        var src = $this.attr('src');
        var new_src = src.replace('small', 'bw');
        $this.attr('src', new_src);
    });
});
