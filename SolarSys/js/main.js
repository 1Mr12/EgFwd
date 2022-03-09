
// _____________________________ Project Part _____________________________

// get all sections in the landing Page
var allSections = document.getElementsByTagName("section");

// function to add a navigational headline if it found
function addId(itemId){
  var section = itemId.id
  if (typeof section != 'undefined' ) {
    // append it to the List
    var li = document.createElement("li");
    li.setAttribute('data-s', '#'+section);
    li.appendChild(document.createTextNode(section));
    document.getElementById("list").appendChild(li);;

  }
  
}



// loop through it to find each id of each section
for (item in allSections) {
  addId(allSections[item]);
}

// _____________________________ Project Part _____________________________


/*
// dynamically updating navigational menu
// fethc the sections id
$('section').each(function() {
  var section = $(this).attr('id')
  if (typeof section != 'undefined' ) {
    // append it to the List
    $("#list ul").append( `<li data-s="#${section}" > ${section} </li>` );

  }
  

})

*/




// animation part
$(window).on(' scroll load resize ' , function() {
  $(".hero").css({
    height: $(window).height()
    });
  
  if( $(window).scrollTop() > 152 ){
    $(".right").addClass('right-come');
    $(".left").addClass('scale-2');
  };

$(".items div").on('mouseenter', function() {
  $(this).addClass('shadow-drop-2-tb ')
});
$(".items div").on('mouseleave', function() {

  $(this).removeClass('shadow-drop-2-tb ')
});




    
});

// moving the scroll to spacifc part bassed on id
$("header li ").on('click', function(e) {
	$("body ,html  ").animate({
	  scrollTop: $($(this).data('s')).offset().top
	  },
	  600);
  });



$(".hero h1").on('click', function(event) {
  location.href = 'register.html';

});

