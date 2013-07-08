$(document).ready(function () {
    setup();
    $('.slider-buttons .slider-button').each(function () {
        var slider = $(this).parents('.slider-container');
        $(this).click(function () {
            var buttonNum = getIndexOf(slider, this);
            changeTo(slider, buttonNum);
            return false;
        });
    });
    $('.slider-next').each(function () {
        var slider = $(this).parents('.slider-container');
        $(this).click(function () {
            changeToNext(slider);
            return false;
        });
    });
    $('.slider-prev').each(function () {
        var slider = $(this).parents('.slider-container');
        $(this).click(function () {
            changeToPrev(slider);
            return false;
        });
    });
});
function changeToNext(jslider) {
    changeTo(jslider, getActiveIndex(jslider) + 1);
}

function changeToPrev(jslider) {
    changeTo(jslider, getActiveIndex(jslider) - 1);
}

function activate(jslider, idx) {
    jslider.find('.slider-active').removeClass('slider-active');
    $(jslider.find('.slider-button').get(idx)).addClass('slider-active');
}

function changeTo(jslider, idx) {
	if (idx < 0)
	    idx = count(jslider) - 1;
	else if (idx >= count(jslider))
		idx = 0;

	var width = jslider.outerWidth();
	var pos = -width*idx;
	jslider.find('.slider-cover').stop(true, true).animate({ left: pos });
	activate(jslider, idx);
}

function getIndexOf(jslider, ele) {
    return jslider.find('.slider-button').index(ele);
}

function getActiveIndex(jslider) {
    return jslider.find('.slider-button').index(jslider.find('.slider-active'));
}

function count(jslider) {
    return jslider.find('.slider-button').size();
}

function setup() {
    $('.slider-container').each(function () {
        var width = getMainWidth(this) * $(this).find('.slider-button').size();
        $(this).find('.slider-cover').width(width);
        $(this).find('.slider-button:first').addClass('slider-active');
    });
}

function getMainWidth(slider) {
    return $(slider).find('.slider-reel').outerWidth();
}