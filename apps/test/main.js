// ==========================================================================
// Project:   TableView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TableView */

TableView.main = function main() {

SC.BENCHMARK_RELOAD = YES
SC.Benchmark.verbose = YES

  TableView.getPath('mainPage.mainPane').append() ;

	var names = SC.Object.create(SC.TreeItemContent, {
		treeItemIsGrouped: YES,
		treeItemChildren: [
			SC.Object.create(SC.TreeItemContent, {
				name: 'A',
    		// treeItemIsExpanded: YES,				
				treeItemChildren: [
					SC.Object.create({name: 'Alberforth'}),
					SC.Object.create({name: 'Albus'}),
					SC.Object.create({name: 'Arcturus'}),
					SC.Object.create({name: 'Barnabas'}),
					SC.Object.create({name: 'Bathilda'}),
					SC.Object.create({name: 'Beedle'}),
					SC.Object.create({name: 'Bilius'}),
					SC.Object.create({name: 'Buckbeak'})
				]
			}),
			SC.Object.create(SC.TreeItemContent, {
				name: 'B',
    		// treeItemIsExpanded: YES,
				treeItemChildren: [
					SC.Object.create({name: 'Barnabas'}),
					SC.Object.create({name: 'Bathilda'}),
					SC.Object.create({name: 'Beedle'}),
					SC.Object.create({name: 'Bilius'}),
					SC.Object.create({name: 'Buckbeak'}),
					SC.Object.create({name: 'Barnabas'}),
					SC.Object.create({name: 'Bathilda'}),
					SC.Object.create({name: 'Beedle'}),
					SC.Object.create({name: 'Bilius'}),
					SC.Object.create({name: 'Buckbeak'})
				]
			})
		]
	})
	


	TableView.namesController.set('content', names)
} ;

function main() { TableView.main(); }
