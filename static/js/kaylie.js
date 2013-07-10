$(document).ready(function() {
    $('#globalnav a').click(function() {
        $this = $(this);
        if ($this.hasClass('selected')) {
            $this.removeClass('selected');
            $submenu = $this.parent('li').children('ul');
            if ($submenu)
                $submenu.slideUp();
        } else {
            $this.addClass('selected');
            $submenu = $this.parent('li').children('ul');
            if ($submenu)
                $submenu.slideDown();
        }
    });
});
