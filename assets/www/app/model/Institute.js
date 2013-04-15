Ext.define('Allotment.model.Institute', {
	extend: 'Ext.data.Model',
    xtype: 'institute',
	
	config: {
		fields: [
			{name: 'Name',type:'string'},
			{name: 'Intake',type:'int'},
			{name: 'Location',type:'string'},
			{name: 'AICTECode',type:'string'}  
		] 
	}
});