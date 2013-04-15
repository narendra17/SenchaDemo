Ext.define('Allotment.view.Main',{
		extend: 'Ext.tab.Panel',
		requires: ['Ext.TitleBar'],
		  
	    defaults: {
	        styleHtmlContent: true
	    }, 
		config:{
			layout: 'card',
			fullscreen: true,
			tabBarPosition: 'bottom',			
			scrollable: false, 
			 
			items: [  
	            {
		            title: 'Home',
		            iconCls: 'home', 
		            layout: 'fit', 
		            items: [  
	            		{
	            			 xclass: 'Allotment.view.PlacesContainer' 
	            		}
        			]
		        },
		        {
		            title: 'Contact',
		            iconCls: 'user' 
		        } 
        	]
		}
});