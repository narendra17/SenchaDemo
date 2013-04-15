Ext.define('Allotment.controller.Details',{
	extend: 'Ext.app.Controller', 
	requires: ['Ext.JSON.encode'],	
	
	config: {
		refs: {
			placesContainer: '#placesContainer', 
			form : '#form',
			container :'#container', 
			listInstitute: '#listInstitute'
		},
		control: {
			'form list':{
					itemtap: 'onListItemTap'
				},
			'form button':{
					tap: 'getInstitute'
				}
			}
	},
	
	onListItemTap: function(list, index, target, record, e, options) {
	    var detailtview = Ext.create('Allotment.view.Details');
	    detailtview.setData(record.data);
	    list.up('placesContainer').push(detailtview); 
	},
	
	getInstitute: function(button, pressed, options) {  
	      Ext.Ajax.setTimeout(60000);
		  var value = form.elements[0].value;
		  var myStore = Ext.create('Ext.data.Store', {
			    model: 'Allotment.model.AJAXResponce',
    			storeId: 'myStore',
        		
        		fields   : ['AICTECode','Intake','Location','Name'],
			    proxy: {
			       type: 'ajax',
			       actionMethods: {
		                create: 'POST',
		                read:   'POST',
		                update: 'POST',
		                delete: 'POST'
		           },		            
		           headers:{
		               'Accept':'*/*',
		               'Content-Type':'application/json; charset=UTF-8'
		           },
		           reader: {
		                type: 'json',
	                    rootProperty: 'GetInstituteResult'  
		           },
			       extraParams:{
					        SearchParm: value 
				   }, 
			       writer: {
                        encodeRequest: true 
                   },
                   //callbackPrefix: 'ReportCallback',
			       //url : 'http://localhost:49260/Service1.svc/GetInstitute'
			       url : 'http://192.168.1.158:8000/Service1.svc/GetInstitute' 
			    },
			    autoLoad: true,
			     listeners: {
			         load: function(){
			            console.log(myStore.getCount());
			            var user = myStore.first();

				      //  console.log("Orders for " + user.get('name') + ":")
				
				        //iterate over the Orders for each User
				        //user.raw.result.forEach(function(institute) {
				        //    console.log("Order ID: " + institute.AICTECode + ", which contains items:"); 
				       // });
			            var thelist = Ext.getCmp('listInstitute');
			            //   thelist.setModal('institute');
			               thelist.setStore(myStore); 
		         	}
			      }
			});  
	}		
});

