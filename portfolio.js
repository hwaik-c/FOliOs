$(function() {

    let $two_index2 = ('.two_index2');
    let $offset = 300;
    let $two_index2OST = $two_index2.offset().top - #offset;

    (window).scroll(function() {
        if($(this).scrolltop() > $two_index2OST) {
            $two_index2.find('img').addclass('animate')
        }
    });
});


function stack(name)
{
    let stack = ('@keyframes + ${name}');
    let offset = 300;
    let stacksize = stack.offset().top - offset

    (window).scroll(function()
    {
        if($(tihs).scrolltop() > stacksize) {
        }
    }
}
