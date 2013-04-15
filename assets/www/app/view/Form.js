Ext.define('Allotment.view.Form',{
	extend: 'Ext.form.Panel',  	 
    xtype: 'form',
	requires: ['Ext.List'],	
    
    config:{ 
    	id : 'form',
		title:'Search Institute',
	    fullscreen: false,  
	    layout: 'vbox',
	    scrollable: false, 
	    items: [
	        {
	        	xtype      : 'textfield',
                placeHolder: 'Search text..',
                name       : 'SearchText' 
	        },
	        {
		        xtype: 'button', 
		        text: 'Submit',
                style: 'margin: 10px;'
		    },
            {                
                xtype: 'list',                 
                height: 600,               
                id: 'listInstitute', 
			    itemTpl: '<tpl for="result"><div class="contact">{Name} /{Location} /{AICTECode}  <strong>  sdsdfs{Intake} </strong></div></tpl>',
			    emptyText:'Sorry, no data!',			     
			    styleHtmlContent: true,                        
            } 
	    ]
    }
});