function goTo(id){
    var obj = eval("colors."+id);

    $("body").css("background",obj.background);
    $("ul.slimmenu li a").css("color",obj.background);
    if(obj.index > currentIndex){
        $(".active").addClass("off");
        $(".active").transition({
            x : -100,
            opacity : 0,
            zIndex : 0
        },600);

        $("#"+currentId).removeClass("active");

        $("#"+id).addClass("active");
        $("#"+id).transition({
            perspective: '100px',
            rotate3d: '1,1,0,90deg'
        },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
                rotate3d: '0,0,0,0deg',
            x : 0,
                opacity : 1,
                zIndex : 2
            },600);
        });
    }else if(obj.index < currentIndex){
        $(".active").addClass("off");
        $(".active").transition({
            x : 100,
            opacity : 0,
            zIndex : 0
        },600);
        $("#"+currentId).removeClass("active");


        $("#"+id).addClass("active");
        $("#"+id).transition({
            perspective: '100px',
            rotate3d: '1,1,0,-90deg'
        },0,function(){
            $("#"+id).removeClass("off");
            $("#"+id).transition({
                rotate3d: '0,0,0,0deg',
            x : 0,
                opacity : 1,
                zIndex : 2
            },600);
        });
    }
    currentIndex = obj.index;
    currentId = id;

}