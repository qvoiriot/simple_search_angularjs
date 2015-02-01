//initialisation de l'app.
angular.module('app', []);


//controller & api.
angular.module('app').controller("MainController", function(){

  var search = this;
  search.title = '||| Thats a real nice Search |||';
  search.searchInput = '';

  search.shows = [
    {
      title: 'Game of Thrones',
      year: '2011',
      favorite: true
    },
    {
      title: 'Walking Dead',
      year: '2010',
      favorite: false
    },
    {
      title: 'Firefly',
      year: '2002',
      favorite: true
    },
    {
      title: 'Banshee',
      year: '2013',
      favorite: true
    },
    {
      title: 'Greys Anatomy',
      year: '2005',
      favorite: false
    }
    ];

    search.orders = [
        {
          id: 1,
          title: 'Year Ascending',
          key: 'year',
          reverse: false
        },
        {
          id: 2,
          title: 'Year Descending',
          key: 'year',
          reverse: true
        },
        {
          id: 3,
          title: 'Title Ascending',
          key: 'title',
          reverse: false
      },
        {
          id: 4,
          title: 'Title Descending',
          key: 'title',
          reverse: true
        }
    ];

    search.order = search.orders[0];
    search.new = {};

    search.addShow = function() {
      search.shows.push(search.new);
      search.new = {};
    };
});
