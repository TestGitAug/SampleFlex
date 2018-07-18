define({ 

 //Type your controller code here
  doLayoutForLabel : function()
  {
    var labelHeight = this.view.LabelOne.frame.height ;
    
    this.view.FlexScrollContainerOne.height = (labelHeight + 10) + "dp";
    
    if(labelHeight > 217)
      {
        this.view.FlexScrollContainerOne.height = "228dp";
      }
  }

 });