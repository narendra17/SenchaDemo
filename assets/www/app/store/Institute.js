Ext.define('Allotment.store.Institute', {
	extend: 'Ext.data.Store',
	
	config: {		 
		 model: 'Allotment.model.Institute',
		 storeId: 'instituteStore',
		 autoLoad : false, 
	}
});