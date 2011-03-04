// ==========================================================================
// Project:   TableView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */

TableView.main = function main() {

  TableView.getPath('mainPage.mainPane').append() ;

  var movies = TableView.store.findAll(TableView.Movie);
  
  var columns = [
    SC.TableColumn.create({
      title: 'Title',
      key: 'title',
      width: 200
    }), 
    SC.TableColumn.create({
      title: 'Votes',
      key: 'votes',
      width: 100
    }),
    SC.TableColumn.create({
      title: 'Rating',
      key: 'rating',
      width: 100
    })
  ];
  
  TableView.moviesController.set('content', movies);  
  TableView.moviesController.set('columns', columns);

} ;

function main() { TableView.main(); }
