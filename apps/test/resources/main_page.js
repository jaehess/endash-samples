// ==========================================================================
// Project:   Test - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Test */

// This page describes the main user interface for your application.  
TableView.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView'.w(),
    
    labelView: SC.ScrollView.extend({
			contentView: SC.ListView.extend(SC.CollectionFastPath, {
	      contentBinding: 'TableView.namesController.arrangedObjects',
				contentValueKey: 'name'
	    }, Endash.FixedListHeaders),
      layout: { top: 0, left: 0, width: 200, height: 120 },
		})
  })

});
