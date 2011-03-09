// ==========================================================================
// Project:   TableView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals TableView */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
TableView.main = function main() {

  TableView.getPath('mainPage.mainPane').append() ;

  var movies = TableView.store.findAll(TableView.Movie);
  
  var columns = [
    SC.TableColumn.create({ 
        key:   '', 
        // title: '&nbsp;', 
        isResizable: NO,
        isReorderable: NO,
        width: 50,
        height: 30,
        exampleView: SC.View.design({
          isPoolable: YES,
          layout: {width:30, height:30, centerX:0, centerY:0},
          childViews:[SC.CheckboxView.design({
            valueBinding: '.parentView*content.isChecked',
            layout: {width:17, height:16, centerX:0, centerY:0}
          })]
        })
    }),
    SC.TableColumn.create({
      title: 'Title',
      key: 'title',
      width: 200,
      isReorderable: NO
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
