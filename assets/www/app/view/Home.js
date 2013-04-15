Ext.define('Allotment.view.Home',{
		extend: 'Ext.Panel',   
		xtype: 'home', 
		
		config:{ 
			title:'Home', 
			
			fullscreen: true,
			layout: 'vbox',
			align:'center',
 			 
			items:  [				
            	{
            		xtype:'spacer'
            	},
		        {
		            xtype: 'container', 
		            flex: 1, 
		            height:57,
		            layout: 'hbox',
		            align: 'middle',
		            items: [
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image', 
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 1,
				            width:57,
				            height:57 
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 2,
				            width:57,
				            height:57
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 3,
				            width:57,
				            height:57
				        },
				        {
		            		xtype:'spacer' 
		            	}
				    ]
		        },				
            	{
            		xtype:'spacer'
            	},
		        {
		            xtype: 'container', 
		            flex: 2,
		            height:57,
		            layout: 'hbox',
		            items: [		            	
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 1, 
				            width:57,
				            height:57
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Search-icon.png);',
				            flex: 2,
				            width:57,
				            height:57,
				            listeners: {
								tap: {
						               	fn: function( event, el ){ 	
											 event.up('placesContainer').push({ xtype : 'form'});
											  var thelist = Ext.getCmp('listInstitute');
			               						  thelist.setStore(myStore); 
										} 
								 }
							}
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 3,				            
				            width:57,
				            height:57
				        },
				        {
		            		xtype:'spacer' 
		            	}
				    ]
		        },				
            	{
            		xtype:'spacer'
            	},
		        {
		            xtype: 'container', 
		            flex: 3,
		            height:57,
		            layout: 'hbox',
		            items: [
		            	{
		            		xtype:'spacer' 
		            	},
				        {  
		                    xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
	                        flex: 1,
				            width:57,
				            height:57
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
				            xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 2,
				            width:57,
				            height:57
				        },
		            	{
		            		xtype:'spacer' 
		            	},
				        {
			                xtype: 'image',
	                        style:  'background-image:url(resources/icons/Icon.png);',
				            flex: 3,
				            width:57,
				            height:57
				        },
				        {
		            		xtype:'spacer' 
		            	}
				    ]
		        },				
            	{
            		xtype:'spacer'
            	}
		    ]  
		}  
});
