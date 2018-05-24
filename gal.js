
function btn(){
    
        
        $("#p11").clone().appendTo("#rr");
        var p=prompt("Enter Image Link");
        $("#t").attr("src",p);
        var p1=prompt("Enter Name");
        $("#t1").text(p1);
        var p2=prompt("Enter Description");       
        $("#t2").text(p2);
        var p3=prompt("Enter The Person Image Link");
        $("#gl").css("background-image","url("+p3+")");
        var p4=prompt("Enter Caption");
        $("#cap").text(p4); 
    
}
