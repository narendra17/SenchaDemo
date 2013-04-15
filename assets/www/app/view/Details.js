Ext.define('Allotment.view.Details',{
	extend: 'Ext.Panel',
	xtype: 'details',
	
	config: {
		title:'Detail',
		scrollable: false, 
		layout: 'fit', 
		styleHtmlContent: true,
		styleHtmlCls: 'detail', 
		tpl: '<h1>Welcome: {name}</h1><hr> {intake} ' 
	}
});