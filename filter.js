

$(".quicksearch").keyup(debounce (function(){

  // init Isotope

  var searchText = new RegExp($(".quicksearch").val(), 'gi')

  console.log(searchText);

  var $grid = $(".grid").isotope({

    itemSelector: ".thisBook",

    layoutMode: "fitRows",

    filter: function() {

      return $(this).text().match(searchText);

    }

  });

}, 200));

function debounce( fn, threshold ) {

    var timeout;

    return function debounced() {

      if ( timeout ) {

        clearTimeout( timeout );

      }

      function delayed() {

        fn();

        timeout = null;

      }

      timeout = setTimeout( delayed, threshold || 100 );

    }

}