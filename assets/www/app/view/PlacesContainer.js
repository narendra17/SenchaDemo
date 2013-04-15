Ext.define('Allotment.view.PlacesContainer',{
	extend: 'Ext.NavigationView',
	xtype: 'placesContainer',
	
	config: {	 
		
		items: [   					
            {           
                xclass: 'Allotment.view.Home'  
            } 
    	]
	}
});