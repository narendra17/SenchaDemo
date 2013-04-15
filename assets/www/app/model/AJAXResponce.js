Ext.define('Allotment.model.AJAXResponce', {
	extend: 'Ext.data.Model',
    xtype: 'AJAXResponce',
	
	config: {
		fields: [
			{name: 'result'},
			{name: 'IsError'},
			{name: 'Message'} 
		],
        hasMany: {model: 'institute', name: 'result'}
	}
});