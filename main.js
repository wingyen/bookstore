
var app = new Vue({
    el: "#bookShelf",
    data: {
        url: "https://api.myjson.com/bins/a1ybq",
        books: [],
  
    },
    created: function () {
        this.getBooks();
    },

    methods: {
        getBooks: function () {
            fetch(this.url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    let books = data.books;
                    this.translateKeys(books);
                    this.inputSearch();
                }.bind(this)

                );
        },

        translateKeys: function (element) {
            element.forEach(element => {
                var book = {
                    coverImage: element.portada,
                    detail: element.detalle,
                    title: element.titulo,
                    description: element.descripcion,
                    author: element.author,
                    forSearch: "" + element.portada + element.detalle + element.titulo + element.descripcion
                }
                this.books.push(book);

            });
        },
        assignRandom: function (quality) {
            //Takes the object's array of a given quality, assigns them randomly to books 
            var max = quality.length;
            var randNum = Math.floor(Math.random() * max);

            return quality[randNum];
        },

        inputSearch: function(){
            $(document).ready(function(){
                $("#quicksearch").on("keyup", function() {
                  var value = $(this).val().toLowerCase();
                  $(".thisBook .element-item").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                  });
                });
              })
        }


    }
    // computed: {
    //     coverImage: function (params) {
    //         let vm = this;
    //         let img = new Image();

    //         let url = this.books.map(function () {
    //             return coverImage;
    //         });

    //         img.onload = function () {
    //             img.src = url

    //         }
    //         if (img.complete) {
    //             vm.loading = false
    //         }

    //         return {
    //             backgroundImage: `url(${this.image})`
    //         }
    //     }
    // }
}
);








// // quick search regex
// var qsRegex;
// // init Isotope
// var $grid = $('.grid').isotope({
//     itemSelector: '.element-item',
//     layoutMode: 'fitRows',
//     filter: function () {
//         return qsRegex ? $(this).text().match(qsRegex) : true;
//     }
// });

// // use value of search field to filter
// var $quicksearch = $('.quicksearch').keyup(function () {
//     qsRegex = new RegExp($quicksearch.val(), 'gi');
//     $grid.isotope();
// });

// // debounce so filtering doesn't happen every millisecond
// function debounce(fn, threshold) {
//     var timeout;
//     threshold = threshold || 100;
//     return function debounced() {
//         clearTimeout(timeout);
//         var args = arguments;
//         var _this = this;
//         function delayed() {
//             fn.apply(_this, args);
//         }
//         timeout = setTimeout(delayed, threshold);
//     };
// }
