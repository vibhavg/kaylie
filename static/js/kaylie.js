$(document).ready() {
    $('#globalnav a').click(function() {
        if (this.attr('class') == 'selected') {
            this.attr('class', '');
	} else {
	    this.attr('class', 'selected');
	}
    });
}
