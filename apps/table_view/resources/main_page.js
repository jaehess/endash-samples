// ==========================================================================
// Project:   TableView - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */


var tableColumns = [
  SC.TableColumn.create({
    key:   'displayName',
    label: 'Title',
    width: 500
  }),
  
  SC.TableColumn.create({
    key:   'rating',
    label: 'Rating',
    width: 200,
    minWidth: 150
  }),
  SC.TableColumn.create({
    key:   'votes',
    label: 'Votes',
    width: 200,
    minWidth: 150
  })  
];

// This page describes the main user interface for your application.  
TableView.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['tableView'],
    
    tableView: SC.TableView.design({
      layout: { top: 0, bottom: 0, left: 0, right: 0 },
      columnsBinding: 'TableView.moviesController.columns',
      contentBinding: 'TableView.moviesController.arrangedObjects'
    }),
    
    // listView: SC.ScrollView.extend({
    //   backgroundColor: "white",
    //   layout: { top: 0, bottom: 0, left: 400, right: 0 },
    //   contentView: SC.ListView.design(Endash.CollectionFastPath, {
    //     rowHeight: 35,
    //     contentValueKey: 'title',
    //     backgroundColor: "white",
    //     contentBinding: 'TableView.moviesController.arrangedObjects'
    //   })
    // })
  })

});
