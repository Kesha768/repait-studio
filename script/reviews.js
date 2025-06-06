$(document).ready(function() {
    $('.review-button').click(function() {
        var reviewBlock = $(this).closest('.review');
        reviewBlock.find('.review-blur').hide();
        reviewBlock.find('.review').css('height', 'auto');
        reviewBlock.find('.review-text').css('height', 'auto');
        $(this).css('display', 'none');
    });
});