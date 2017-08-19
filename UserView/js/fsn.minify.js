"use strict";
(function ()
{
	var fsn = function(params)
	{
	    return new Library(params);
	};

	var Library = function(params)
	{
	    this.selector = document.querySelectorAll(params);
	    this.length = this.selector.length;
	    for(var i=0;i<this.length;i++)
	    {
	      this[i] = this.selector[i];
	    }
	    return this;
	};


	fsn.fn = Library.prototype =
	{
		css:function(method,value)
		{
			switch(method)
			{
				// background css properties
				case 'background' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.background = value;
			    }
			    break;
				case 'background-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundColor = value;
			    }
			    break;
			    case 'background-image' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundImage = value;
			    }
			    break;
			    case 'background-repeat' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundRepeat = value;
			    }
			    break;
			    case 'background-attachment' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundAttachment = value;
			    }
			    break;
			    case 'background-position' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundPosition = value;
			    }
			    break;
			    case 'background-size' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundSize = value;
			    }
			    break;
			    case 'background-clip' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundClip = value;
			    }
			    break;
			    case 'background-origin' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backgroundOrigin = value;
			    }
			    break;
			    // border css properties
			    case 'border-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderStyle = value;
			    }
			    break;
			    case 'border-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderWidth = value;
			    }
			    break;
			    case 'border-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderColor = value;
			    }
			    break;
			    case 'border-top-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTopStyle = value;
			    }
			    break;
			    case 'border-bottom-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottomStyle = value;
			    }
			    break;
			    case 'border-left-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderLeftStyle = value;
			    }
			    break;
			    case 'border-right-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderRightStyle = value;
			    }
			    break;
			    case 'border-left' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderLeft = value;
			    }
			    break;
			    case 'border-right' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderRight = value;
			    }
			    break;
			    case 'border-top' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTop = value;
			    }
			    break;
			    case 'border-bottom' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottom = value;
			    }
			    break;
			    case 'border-radius' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderRadius = value;
			    }
			    break;
			    case 'border-top-left-radius' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTopLeftRadius = value;
			    }
			    break;
			    case 'border-top-right-radius' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTopRightRadius = value;
			    }
			    break;
			    case 'border-bottom-right-radius' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottomRightRadius = value;
			    }
			    break;
			    case 'border-bottom-left-radius' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottomLeftRadius = value;
			    }
			    break;
			    case 'border-bottom-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottomColor = value;
			    }
			    break;
			    case 'border-top-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTopColor = value;
			    }
			    break;
			    case 'border-left-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderLeftColor = value;
			    }
			    break;
			    case 'border-right-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderRightColor = value;
			    }
			    break;
			    case 'border-bottom-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderBottomWidth = value;
			    }
			    break;
			    case 'border-top-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderTopWidth = value;
			    }
			    break;
			    case 'border-left-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderLeftWidth = value;
			    }
			    break;
			    case 'border-right-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderRightWidth = value;
			    }
			    break;
			    case 'border' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.border = value;
			    }
			    break;
			    case 'border-image' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImage = value;
			    }
			    break;
			    case 'border-image-source' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImageSource = value;
			    }
			    break;
			    case 'border-image-slice' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImageSlice = value;
			    }
			    break;
			    case 'border-image-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImageWidth = value;
			    }
			    break;
			    case 'border-image-outset' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImageOutset = value;
			    }
			    break;
			    case 'border-image-repeat' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderImageRepeat = value;
			    }
			    break;
			    // margin css properties
			    case 'margin' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.margin = value;
			    }
			    break;
			    case 'margin-bottom' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginBottom = value;
			    }
			    break;
			    case 'margin-left' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginLeft = value;
			    }
			    break;
			    case 'margin-right' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginRight = value;
			    }
			    break;
			    case 'margin-top' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginTop = value;
			    }
			    break;
			    // css code for padding
			    case 'padding' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.padding = value;
			    }
			    break;
			    case 'padding-top' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.paddingTop = value;
			    }
			    break;
			    case 'padding-left' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginLeft = value;
			    }
			    break;
			    case 'padding-right' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginRight = value;
			    }
			    break;
			    case 'padding-bottom' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.marginBottom = value;
			    }
			    break;
			    // outline for css
			    case 'outline' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.outline = value;
			    }
			    break;
			    case 'outline-color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.outlineColor = value;
			    }
			    break;
			    case 'outline-offset' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.outlineOffset = value;
			    }
			    break;
			    case 'outline-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.outlineStyle = value;
			    }
			    break;
			    case 'outline-width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.outlineWidth = value;
			    }
			    break;
			    // height and width for css
			    case 'width' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.width = value;
			    }
			    break;
			    case 'height' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.height = value;
			    }
			    break;
			    case 'max-height' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.maxheight = value;
			    }
			    break;
			    case 'max-width' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.maxWidth = value;
			    }
			    break;
			    case 'min-height' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.minheight = value;
			    }
			    break;
			    case 'min-width' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.minWidth = value;
			    }
			    // text css properties
			    case 'color' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.color = value;
			    }
			    break;
			    case 'direction' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.direction = value;
			    }
			    break;
			    case 'letter-spacing' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.letterSpacing = value;
			    }
			    break;
			    case 'line-height' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.lineHeight = value;
			    }
			    break;
			    case 'text-alfsn' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textAlfsn = value;
			    }
			    break;
			    case 'text-decoration' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textDecoration = value;
			    }
			    break;
			    case 'text-indent' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textIndent = value;
			    }
			    break;
			    case 'text-shadow' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textShadow = value;
			    }
			    break;
			    case 'text-transform' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textTransform = value;
			    }
			    break;
			    case 'text-overflow' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textOverflow = value;
			    }
			    break;
			    case 'box-shadow' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.boxShadow = value;
			    }
			    break;
			    case 'word-wrap' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.wordWrap = value;
			    }
			    break;
			    case 'word-break' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.wordBreak = value;
			    }
			    break;
			    case 'white-space' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.whiteSpace = value;
			    }
			    break;
			    case 'text-justify' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textJustify = value;
			    }
			    break;
			    case 'text-alfsn-last' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.textAlfsnLast = value;
			    }
			    break;
			    case 'unicode-bidi' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.unicodeBidi = value;
			    }
			    break;
			    case 'vertical-alfsn' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.verticalAlfsn = value;
			    }
			    break;
			    case 'white-space' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.whiteSpace = value;
			    }
			    break;
			    case 'word-spacing' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.wordSpacing = value;
			    }
			    break;
			    // font css styles
			    case 'font' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.font = value;
			    }
			    break;
			    case 'font-family' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontFamily = value;
			    }
			    break;
			    case 'font-stretch' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontStretch = value;
			    }
			    break;
			    case 'font-size' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontSize = value;
			    }
			    break;
			    case 'font-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontStyle = value;
			    }
			    break;
			    case 'font-variant' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontVariant = value;
			    }
			    break;
			    case 'font-weight' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.fontWeight = value;
			    }
			    break;
			    // list css styles
			    case 'list-style' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.listStyle = value;
			    }
			    break;
			    case 'list-style-image' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.listStyleImage = value;
			    }
			    break;
			    case 'list-style-position' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.listStylePosition = value;
			    }
			    break;
			    case 'list-style-type' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.listStyleType = value;
			    }
			    break;
			    // table layout
			    case 'border-collapse' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderCollapse = value;
			    }
			    break;
			    case 'border-spacing' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.borderSpacing = value;
			    }
			    break;
			    case 'caption-side' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.captionSide = value;
			    }
			    break;
			    case 'empty-cells' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.emptyCells = value;
			    }
			    break;
			    case 'table-layout' :
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.tableLayout = value;
			    }
			    break;
			    // visibility
			    case 'display' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.display = value;
			    }
			    break;
			    case 'visibility' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.visibility = value;
			    }
			    break;
			    case 'opacity' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.opacity = value;
			    }
			    break;
			    // positioning
			    case 'position' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.position = value;
			    }
			    break;
			    case 'top' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.top = value;
			    }
			    break;
			    case 'bottom' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.bottom = value;
			    }
			    break;
			    case 'left' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.left = value;
			    }
			    break;
			    case 'right' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.right = value;
			    }
			    break;
			    case 'float' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.float = value;
			    }
			    break;
			    case 'clear' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.clear = value;
			    }
			    break;
			    case 'z-index' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.zIndex = value;
			    }
			    break;
			    case 'overflow' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.overflow = value;
			    }
			    break;
			    case 'overflow-x' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.overflowX = value;
			    }
			    break;
			    case 'overflow-y' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.overflowY = value;
			    }
			    break;
			    case 'content' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.content = value;
			    }
			    break;
			    case 'property' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.property = value;
			    }
			    break;
			    case 'content' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.content = value;
			    }
			    break;
			    case 'filter' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.filter = value;
			    }
			    break;
			    case 'counter-increment' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.counterIncrement = value;
			    }
			    break;
			    case 'counter-reset' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.counterReset = value;
			    }
			    break;
			    // transformation
			    case 'transform' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transform = value;
			    }
			    break;
			    case 'transform-origin' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transformOrigin = value;
			    }
			    break;
			    case 'transform-style' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transformStyle = value;
			    }
			    break;
			    case 'perspective' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.perspective = value;
			    }
			    break;
			    case 'perspective-origin' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.perspectiveOrigin = value;
			    }
			    break;
			    case 'backface-visibility' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.backfaceVisibility = value;
			    }
			    break;
			    // transitions
			    case 'transition' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transition = value;
			    }
			    break;
			    case 'transition-delay' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transitionDelay = value;
			    }
			    break;
			    case 'transition-duration' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transitionDuration = value;
			    }
			    break;
			    case 'transition-property' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transitionProperty = value;
			    }
			    break;
			    case 'transition-timing-function' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.transitionTimingFunction = value;
			    }
			    break;

			    case 'letter-spacing' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.letterSpacing = value;
			    }
			    break;
			    case 'nav-down' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.navDown = value;
			    }
			    break;
			    case 'nav-right' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.navRight = value;
			    }
			    break;
			    case 'nav-left' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.navLeft = value;
			    }
			    break;
			    case 'nav-top' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.navTop = value;
			    }
			    break;
			    case 'nav-index' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.navIndex = value;
			    }
			    break;
			    case 'resize' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.resize = value;
			    }
			    break;
			    case 'page-break-after' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.pageBreakAfter = value;
			    }
			    break;
			    case 'page-break-before' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.pageBreakBefore = value;
			    }
			    break;
			    case 'page-break-inside' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.pageBreakInside = value;
			    }
			    break;
			    case 'cursor' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.cursor = value;
			    }
			    break;
			    case 'flex' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flex = value;
			    }
			    break;
			    case 'flex-basis' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexBasis = value;
			    }
			    break;
			    case 'flex-direction' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexDirection = value;
			    }
			    break;
			    case 'flex-flow' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexFlow = value;
			    }
			    break;
			    case 'flex-grow' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexGrow = value;
			    }
			    break;
			    case 'flex-shrink' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexShrink = value;
			    }
			    break;
			    case 'flex-wrap' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.flexWrap = value;
			    }
			    break;
			    case 'clip' :
			    for(var i=0;i<this.length;i++)
			    {
			    	this[i].style.clip = value;
			    }
			    break;
			}

			return this;
		},
		html:function(data)
		{
			if(typeof(data) != 'undefined')
			{
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].innerHTML = data;
			    }
			}
			else
			{
				for(var i=0;i<this.length;i++)
			    {
			    	return this[i].innerHTML;
			    }
			}

			return this;
		},
		text:function(data)
		{
			if(typeof(data) != 'undefined')
			{
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].innerText = data;
			    }
			}
			else
			{
				for(var i=0;i<this.length;i++)
			    {
			    	return this[i].innerText;
			    }
			}
			return this;
		},
		val:function(data)
		{
			if(typeof(data) != 'undefined')
			{
				for(var i=0;i<this.length;i++)
			    {
			    	this[i].value = data;
			    }
			}
			else
			{
				for(var i=0;i<this.length;i++)
			    {
			    	return this[i].value;
			    }
			}
			return this;
		},
		attr:function(attributeName,attributeProperty)
		{
			if(typeof(attributeName) == 'undefined')
			{
				throw 'attribute name is not defined';
			}

			if(typeof(attributeProperty) != 'undefined')
			{
				for(var i=0;i<this.length;i++)
				{
				    this[i].setAttribute(attributeName,attributeProperty);
				}
			}
			else
			{
				for(var i=0;i<this.length;i++)
				{
				    return this[i].getAttribute(attributeName);
				}
			}

		},
		hasAttr:function(attributeName)
		{
			if(typeof(attributeName) == 'undefined')
			{
				throw 'attribute name is not defined';
			}

			for(var i=0;i<this.length;i++)
			{
				if(this[i].hasAttribute(attributeName) == true)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		},
		rmAttr:function(attributeName)
		{
			if(typeof(attributeName) == 'undefined')
			{
				throw 'attribute name is not defined';
			}

			for(var i=0;i<this.length;i++)
			{
				this[i].removeAttribute(attributeName);
				return this[i];
			}
		},
		isChecked:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(this[i].checked == true)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		},
		isDisabled:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(this[i].disabled == true)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		},
		addClass:function(className)
		{
			for(var i=0;i<this.length;i++)
			{
				this[i].className += ' '+className;
			}

			return this;
		},
		removeClass:function(className)
		{
			for(var i=0;i<this.length;i++)
			{
				this[i].classList.remove(className);
			}

			return this;
		},
		classes:function()
		{
			for(var i=0;i<this.length;i++)
			{
				return this[i].classList;
			}
		},
		empty:function()
		{
			for(var i=0;i<this.length;i++)
			{
				this[i].innerHTML = '';
			}

			return this;
		},
		height:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(typeof(height) != 'undefined')
				{
					this[i].offsetHeight = height;
				}
				else
				{
					return this[i].offsetHeight;
				}
			}

			return this;
		},
		width:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(typeof(width) != 'undefined')
				{
					this[i].offsetWidth = width;
				}
				else
				{
					return this[i].offsetWidth;
				}
			}

			return this;
		},
		top:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(typeof(top) != 'undefined')
				{
					this[i].offsetTop = top;
				}
				else
				{
					return this[i].offsetTop;
				}
			}

			return this;
		},
		left:function()
		{
			for(var i=0;i<this.length;i++)
			{
				if(typeof(left) != 'undefined')
				{
					this[i].offsetLeft = left;
				}
				else
				{
					return this[i].offsetLeft;
				}
			}

			return this;
		},
		show:function()
		{
			for(var i=0;i<this.length;i++)
			{
			    this[i].style.display = 'block';
			}

			return this;
		},
		hide:function()
		{
			for(var i=0;i<this.length;i++)
			{
			    this[i].style.display = 'none';
			}

			return this;
		},
	   remove:function(func)
	   {
		    for(var i=0;i<this.length;i++)
		    {
		    	this[i].parentNode.removeChild(this[i]);
		    }

		    if(typeof(func) != 'undefined')
		    {
		    	func();
		    }
		    return this;
	   },
	   append:function(elem)
	   {
	   		var temp_elements = '';
	   		for(var i=0;i<this.length;i++)
		    {
		    	var div = document.createElement('div');
		    	div.innerHTML += elem;
		    	this[i].appendChild(div);
		    	div.outerHTML = elem;
		    }
		    return this;
	   },
	   // mouse events
	   click:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onclick = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   contextmenu:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oncontextmenu = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dblclick:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondblclick = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mousedown:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmousedown = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mouseup:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmouseup = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mouseover:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmouseover = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mouseout:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmouseout = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mousemove:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmousemove = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   drag:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondrag = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dragstart:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondragstart = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dragend:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondragend = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dragenter:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondragenter = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dragleave:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondragleave = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   dragover:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondragover = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   drop:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondrop = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   mousewheel:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmousewheel = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   DOMMouseScroll:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onDOMMouseScroll = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // keyboard events
	   keydown:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onkeydown = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   keypress:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onkeypress = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   keyup:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onkeyup = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // Object Events
	   abort:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onabort = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   beforeunload:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onbeforeunload = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   error:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onerror = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   hashchange:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onhashchange = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   load:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onload = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   pageshow:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onpageshow = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   pagehide:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onpagehide = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   resize:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onresize = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   scroll:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onscroll = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   unload:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onunload = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // document load method
	   __init__:function(callback)
	   {
	   		window.onload = function(event)
		    {
		    	callback(event);
		    };
	   },
	   // form events
	   blur:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onblur = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   change:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onchange = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   focus:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onfocus = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   focusin:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onfocusin = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   focusout:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onfocusout = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   input:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oninput = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   invalid:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oninvalid = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   reset:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onreset = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   search:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onsearch = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   select:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onselect = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   submit:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onsubmit = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },

	   // clipboard events

	   copy:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oncopy = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   cut:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oncut = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   paste:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onpaste = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },

	   // print events

	   afterprint:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onafterprint = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   beforeprint:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onbeforeprint = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },

	   // media events

	   canplay:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oncanplay = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   canplaythrough:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].oncanplaythrough = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   durationchange:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ondurationchange = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   emptied:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onemptied = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   ended:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onended = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   loadeddata:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onloadeddata = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   loadedmetadata:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onloadedmetadata = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   loadstart:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onloadstart = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   pause:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onpause = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   play:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onplay = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   playing:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onplaying = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   progress:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onprogress = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   ratechange:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onratechange = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   seeked:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onseeked = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   seeking:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onseeking = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   stalled:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onstalled = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   suspend:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onsuspend = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   timeupdate:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontimeupdate = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   volumechange:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onvolumechange = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   waiting:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onwaiting = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // Server sent events
	   message:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onmessage = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   open:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onopen = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // touch events
	   touchcancel:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontouchcancel = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   touchend:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontouchend = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   touchmove:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontouchmove = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   touchstart:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontouchstart = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   // misc events

	   online:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ononline = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   offline:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onoffline = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   popstate:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onpopstate = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   elemShow:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onshow = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   storage:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onstorage = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   toggle:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].ontoggle = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   },
	   wheel:function(callback)
	   {
	   		for(var i=0;i<this.length;i++)
		    {
		    	this[i].onwheel = function(event)
		    	{
		    		callback(event);
		    	};
		    }
	   }
	};

	/*
		method for the reporting of any error found in the library
	*/

	fsn.report = Library.prototype.report = function(email,msg)
	{
		fsn.http({
			url:'report.php',
			data:'&email='+email+'&msg='+msg,
			requestMethod:'POST',
			success:function(callback)
			{
				console.log(callback);
			}
		});
	};

	/*
		method for the feedback of the library
	*/

	fsn.feedback = Library.prototype.feedback = function(email,msg)
	{
		fsn.http({
			url:'feedback.php',
			data:'&email='+email+'&msg='+msg,
			requestMethod:'POST',
			success:function(callback)
			{
				console.log(callback);
			}
		});
	};

	fsn.storage = Library.prototype.storage =
	{
		set_data:function(key,value)
		{
			localStorage.setItem(key, value);
		},
		get_data:function(key)
		{
			return localStorage.getItem(key);
		},
		remove_data:function(key)
		{
			localStorage.removeItem(key);
		}
	};

	fsn.die = Library.prototype.die = function()
	{
		/*
			die method in javascript
		*/
		if(typeof(msg) != 'undefined')
		{
			throw msg;
		}
		else
		{
			throw false;
		}
	};

	fsn.require = Library.prototype.require =  function(url,callback)
	{
		var ext = url.split('.').pop();
		if(ext == 'js')
		{
			var script = document.createElement("script")
		    script.type = "text/javascript";

		    if (script.readyState){  //IE
		        script.onreadystatechange = function()
		        {
		            if (script.readyState == "loaded" || script.readyState == "complete")
		            {
		                script.onreadystatechange = null;
		                callback();
		            }
		        };
		    }
		    else
		    {  //Others
		        script.onload = function()
		        {
		            callback();
		        };
		    }

		    script.src = url;
		    document.getElementsByTagName("head")[0].appendChild(script);
		}
		if(ext == 'css')
		{
			var link = document.createElement('link');
			link.href = url;
			document.head.appendChild(link);
		}
		/*
			require javascript files
		*/
	};


	fsn.replace = Library.prototype.replace = function(elements,replace)
	{
		/*
			templating with new HTML elements
		*/
		var body = document.body.innerHTML;
		var replace_body = body.replace(elements,replace);
		document.body.innerHTML = replace_body;
	};

	fsn.get_content = Library.prototype.get_content = function(filename,callback)
	{
		/*
			get file contents via ajax
		*/
		if(window.XMLHttpRequest)
		{
			var AJAX = new XMLHttpRequest();
		}
		else
		{
			var AJAX = new ActiveXObject("Microsoft.XMLHTTP");
		}

		AJAX.onload  = function()
		{
			callback(AJAX.responseText);
		}

		AJAX.open('POST',filename,true);
		AJAX.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		AJAX.send();
	};

	fsn.queryString = Library.prototype.queryString = function(queryString)
	{
		/*
			get query string method in javascipt
		*/
		var i = 0;
		var parts = window.location.search.substr(1).split("&");
		var $_GET = {};
		for (i = 0; i < parts.length; i++)
		{
			var temp = parts[i].split("=");
			$_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
		}

		return $_GET[queryString];
	};

	fsn.preview = Library.prototype.preview = function(obj,callback)
	{
		var file = obj.fileID.files[0];

		var mime_typeLen = obj.mime.length;

		var count_matched = 0;

		for(var i=0;i<mime_typeLen;i++)
		{
			if(file.type == obj.mime[i])
			{
				count_matched += 1;
			}
		}

		if(count_matched == 0)
		{
			callback({status:false,'msg':'Not a valid file','status_code':1});
			return false;
		}

		if(typeof(obj.size) != 'undefined')
		{
			if(file.size > obj.size)
			{
				callback({status:false,'msg':'File size exceeds','status_code':2});
				return false;
			}
		}

		var reader = new FileReader();
		reader.onload = function()
		{
		   callback({status:true,buffer:reader.result});
		};

		reader.readAsDataURL(file);
	};

	fsn.ChangeUrl = Library.prototype.ChangeUrl = function(title,urlin)
	{
		if (typeof (history.pushState) != "undefined")
		{
	        var obj = { Page: title, Url: urlin };
	        history.pushState(obj, obj.Page, obj.Url);
	    }
	    else
	    {
			window.location.assfsn(urlin);
		}
	};


	fsn.ReplaceUrl  = Library.prototype.ReplaceUrl = function(title,urlin)
	{
		if (typeof (history.pushState) != "undefined")
		{
	        var obj = { Page: title, Url: urlin };
	        history.replaceState(obj, obj.Page, obj.Url);
	    }
	    else
	    {
			window.location.assfsn(urlin);
		}
	};

	/*
		bind object into document
	*/

	fsn.bindObj = Library.prototype.bindObj = function(bindObj,returnData)
	{
		var htmlContent = returnData();
		var catchData = htmlContent.match(/[\{][a-z\_\.]+[\}]/ig);
		var catchDataLen = catchData.length;
		var newCatchData = [];
		for(var i=0;i<catchDataLen;i++)
		{
			newCatchData[i] = catchData[i].replace(/\{[a-z]+/g,'').replace(/[\.]/,'').replace(/[\}]/,'');
			htmlContent = htmlContent.replace(catchData[i],findProp(bindObj, newCatchData[i]));
		}

		function findProp(obj, prop, defval)
		{
		    if (typeof defval == 'undefined')
		    {
		    	defval = null;
		    }
		    prop = prop.split('.');
		    for (var i = 0; i < prop.length; i++)
		    {
		        if(typeof obj[prop[i]] == 'undefined')
		        {
		            return defval;
		        }

		        obj = obj[prop[i]];
		    }
		    return obj;
		}

		return htmlContent;
	};

	/*
		bind array for repeat data
	*/

	fsn.bindArr = Library.prototype.bindArr = function(bindObj,returnData)
	{
		var htmlContent = returnData();
		var catchData = htmlContent.match(/[\{][a-z\_\.]+[\}]/ig);
		var resultHtmlContent = '';
		var catchDataLen = catchData.length;
		var newCatchData = [];
		var bindObjLen = bindObj.length;

		for(var i=0;i<catchDataLen;i++)
		{
			newCatchData[i] = catchData[i].replace(/\{[a-z]+/g,'').replace(/[\.]/,'').replace(/[\}]/,'');
			for(var j=0;j<bindObjLen;j++)
			{
				if(!resultHtmlContent.match(catchData[i],bindObj[j][newCatchData[i]]))
				{
					resultHtmlContent += htmlContent;
				}

				if(typeof(bindObj[j]) != "object" && bindObj[j].length > 0)
				{

					resultHtmlContent = resultHtmlContent.replace(catchData[i],bindObj[j]);
				}
				else
				{
					resultHtmlContent = resultHtmlContent.replace(catchData[i],bindObj[j][newCatchData[i]]);
				}

			}
		}

		return resultHtmlContent;
	};

	/*
		render html from json data
	*/

	fsn.render = Library.prototype.render = function(nodeElem,newNode)
	{
		// traverse the object and looking for children if present then it breaks further recursively

		for(var nodeObj in  nodeElem)
		{
			if(nodeObj == "children")
			{
				var objLen = nodeElem[nodeObj].length;

				for(var i=0;i<objLen;i++)
				{
					// after breaking into new object it traverses
					if(typeof(nodeElem[nodeObj][i]['node']) != 'undefined')
					{
						if(typeof(nodeElem[nodeObj][i]['node']['nodeType']) != 'undefined')
						{
							// creates elements
							var node = document.createElement(nodeElem[nodeObj][i]['node']['nodeType']);
							newNode.appendChild(node);
						}

						// if text attr is present then it sets
						if(typeof(nodeElem[nodeObj][i]['node']['setText']) != 'undefined')
						{
							node.textContent = nodeElem[nodeObj][i]['node']['setText'];
						}

						// if name atr is present
						if(typeof(nodeElem[nodeObj][i]['node']['name']) != 'undefined')
						{
							node.name = nodeElem[nodeObj][i]['node']['name'];
						}

						// if value atr is present
						if(typeof(nodeElem[nodeObj][i]['node']['value']) != 'undefined')
						{
							node.value = nodeElem[nodeObj][i]['node']['value'];
						}

						// if type atr is present
						if(typeof(nodeElem[nodeObj][i]['node']['type']) != 'undefined')
						{
							node.type = nodeElem[nodeObj][i]['node']['type'];
						}

						// if action atr is present
						if(typeof(nodeElem[nodeObj][i]['node']['action']) != 'undefined')
						{
							node.action = nodeElem[nodeObj][i]['node']['action'];
						}

						// if method is present
						if(typeof(nodeElem[nodeObj][i]['node']['method']) != 'undefined')
						{
							node.method = nodeElem[nodeObj][i]['node']['method'];
						}

						// if css attribute is present
						if(typeof(nodeElem[nodeObj][i]['node']['css']) != 'undefined')
						{
							node.style.cssText = nodeElem[nodeObj][i]['node']['css'];
						}

						// if id attr is present
						if(typeof(nodeElem[nodeObj][i]['node']['id']) != 'undefined')
						{
							node.id = nodeElem[nodeObj][i]['node']['id'];
						}

						// if className is present
						if(typeof(nodeElem[nodeObj][i]['node']['className']) != 'undefined')
						{
							node.className = nodeElem[nodeObj][i]['node']['className'];
						}

						// if href atr is present
						if(typeof(nodeElem[nodeObj][i]['node']['href']) != 'undefined')
						{
							node.href = nodeElem[nodeObj][i]['node']['href'];
						}

						// if setAttribute is present
						if(typeof(nodeElem[nodeObj][i]['node']['setAttribute']) != 'undefined')
						{
							node.setAttribute(nodeElem[nodeObj][i]['node']['setAttribute'][0],nodeElem[nodeObj][i]['node']['setAttribute'][1]);
						}

						// if children is present
						if(typeof(nodeElem[nodeObj][i]['node']['children']) != 'undefined')
						{
							fsn.render(nodeElem[nodeObj][i]['node'],node);
						}
					}
				}
			}
		}
	};

	fsn.createClass = Library.prototype.createClass = function(obj,container)
	{
		obj.$scopeObject();
		this.renderVar = obj.$render();
		container.innerHTML += this.renderVar;
	};

	fsn.createApp = Library.prototype.createApp = function($appName,callback)
	{
		var $scope = {};
		callback($scope);
		// get page DOM
		var pageElement = document.documentElement;
		// traverse by tagName
		var elements = pageElement.getElementsByTagName("*");
		// get the length of the html elements
		var elementsLen = elements.length;

		var i,j,dataLen,re,k;
		var data = '',callbackData = '',$callbackData = '';
		var repeatObject,repeatObjectLen;

		// now traversing through the elementLen
		for(i=0;i<elementsLen;i++)
		{
			// if fsn-render attribute is found

			if(elements[i].getAttribute('fsn-render') == $appName)
			{
				// renders the page accordingly with the object

				data = elements[i].innerHTML;
				data = data.replace(/[\{\{]/g,'').replace(/[\}\}]/g,'');
				data = data.match(/[a-z\_\.]+/ig);
				dataLen = data.length;
				for(j=0;j<dataLen;j++)
				{
					callbackData = findProp($scope,data[j]);
					re = new RegExp("{{"+data[j]+"}}");
					elements[i].innerHTML = elements[i].innerHTML.replace(re,callbackData).trim();
				}
			}

			// if the object is an array and want a repeated elements

			if(elements[i].getAttribute('fsn-object') == $appName)
			{
				data = elements[i].innerHTML;
				repeatObject = elements[i].getAttribute('fsn-repeat');

				$callbackData = findProp($scope, repeatObject);

				if($callbackData != null)
				{
					var catchData = data.match(/[\{\{][a-z\_\.]+[\}\}]/ig);
					var resultHtmlContent = '';
					var catchDataLen = catchData.length;
					var newCatchData = [];
					var bindObjLen = $callbackData.length;

					for(k=0;k<catchDataLen;k++)
					{
						newCatchData[k] = catchData[k].replace(/\{[a-z]+/g,'').replace(/[\.]/,'').replace(/[\}]/,'');
						for(var j=0;j<bindObjLen;j++)
						{
							if(!resultHtmlContent.match(catchData[k],$callbackData[j][newCatchData[k]]))
							{
								resultHtmlContent += data;
							}

							re = new RegExp("{"+catchData[k]+"}");

							if(typeof($callbackData[j]) != "object" && $callbackData[j].length > 0)
							{

								resultHtmlContent = resultHtmlContent.replace(re,$callbackData[j]);
							}
							else
							{
								resultHtmlContent = resultHtmlContent.replace(re,$callbackData[j][newCatchData[k]]);
							}

						}
					}

					// finally replace the elements where the changes happens
					elements[i].innerHTML = resultHtmlContent;

				}
			}
		}

		function findProp(obj, prop, defval)
		{
		    if (typeof defval == 'undefined')
		    {
		    	defval = null;
		    }
		    prop = prop.split('.');
		    for (var i = 0; i < prop.length; i++)
		    {
		        if(typeof obj[prop[i]] == 'undefined')
		        {
		            return defval;
		        }

		        obj = obj[prop[i]];
		    }
		    return obj;
		}
	};

	fsn.changePage = Library.prototype.changePage = function(self,event)
	{
		var link = self.getAttribute('href');
		if(window.XMLHttpRequest)
		{
			var ajx = new XMLHttpRequest();
		}
		else
		{
			var ajx = new ActiveXObject("Microsoft.XMLHTTP");
		}

		if(document.getElementById('PageLoadProgress') != null && document.getElementById('PageLoadContainer') != null)
		{
			document.getElementById('PageLoadContainer').style.display = 'block';
			document.getElementById('PageLoadProgress').style.width = 0;
			ajx.onprogress = function(e)
			{
				var percent = Math.round((e.loaded/e.total)*100);
				document.getElementById("PageLoadProgress").style.width = percent + '%';
			};
		}

		ajx.onreadystatechange  = function()
		{
			if(this.readyState == 4 && this.status == 200)
			{
				document.documentElement.innerHTML = ajx.responseText;

				var scriptElem = document.getElementsByTagName('script');
				var scriptLen = scriptElem.length;
				for(var i=0;i<scriptLen;i++)
				{
					loadExternalJSFile(scriptElem[i]);
				}

				function loadExternalJSFile(fileName)
				{	
					if(fileName.hasAttribute('src') && fileName.src != '')
					{
						var script = document.createElement('script');
						script.setAttribute('type','text/javascript');
						script.setAttribute('src',fileName.src);
						script.defer = true;
						document.body.appendChild(script);
						fileName.parentNode.replaceChild(script, fileName);
					}
					else
					{
						setTimeout(function()
						{
							var script = document.createElement('script');
							script.setAttribute('type','text/javascript');
							script.text = fileName.innerHTML;
							script.defer = true;
							document.body.appendChild(script);
							fileName.parentNode.replaceChild(script, fileName);
						},0);
					}
				}	

				fsn.ChangeUrl(link,link);
			}
			if(this.readyState == 4 && this.status != 200)
			{
			    console.log('Oops something went wrong');
			}
		};

		ajx.open("GET",link,true);
		ajx.send();
		event.preventDefault();
	};

	fsn.http = Library.prototype.http = function(obj)
	{
		var url = obj.url;
		var requestMethod = obj.requestMethod;

		if(typeof(obj.data) != 'undefined')
		{
			var data = obj.data;
		}

		if(window.XMLHttpRequest)
		{
			var AJAX = new XMLHttpRequest();
		}
		else
		{
			var AJAX = new ActiveXObject("Microsoft.XMLHTTP");
		}

		if(typeof(obj.progressType) != 'undefined')
		{
			if(obj.progressType == 'Loadingbar' && typeof(obj.Loadingbar) != 'undefined')
			{
				AJAX.upload.onprogress = function(e)
				{
					document.getElementById(obj.Loadingbar).style.display = 'block';
				};
			}

			if(obj.progressType == 'Progressbar' && typeof(obj.Progressbar) != 'undefined' && typeof(obj.ProgressContainer) != 'undefined')
			{
				document.getElementById(obj.ProgressContainer).style.display = 'block';
				AJAX.upload.onprogress = function(e)
				{
					var percent = Math.round((Math.round((e.loaded/e.total)*100) / 2));
					document.getElementById(obj.Progressbar).style.width = percent + '%';
				};
				AJAX.onprogress = function(e)
				{
					var percent = Math.round((Math.round((e.loaded/e.total)*100) / 2));
					document.getElementById(obj.Progressbar).style.width = (parseInt(document.getElementById(obj.Progressbar).style.width) + percent) + '%';
				};
			}
		}



		AJAX.onreadystatechange  = function()
		{
			if(this.readyState == 4 && this.status == 200)
			{

				if(obj.progressType == 'Loadingbar' && typeof(obj.Loadingbar) != 'undefined')
				{
					document.getElementById(obj.Loadingbar).style.display = 'none';
				}

				setTimeout(function()
				{
					if(obj.progressType == 'Progressbar' && typeof(obj.Progressbar) != 'undefined' && typeof(obj.ProgressContainer) != 'undefined')
					{
						document.getElementById(obj.ProgressContainer).style.display = 'none';
						document.getElementById(obj.Progressbar).style.width = '0px';
					}
				},1000);

			    if(typeof(obj.success) != 'undefined')
				{
				    obj.success(AJAX.responseText);
				}
			}
			if(this.readyState == 4 && this.status != 200)
			{
			    if(typeof(obj.error) != 'undefined')
				{
				    obj.error('Oops something went wrong');
				}
			}
		};

		if(typeof(obj.async) == 'undefined')
		{
			AJAX.open(requestMethod,url,true);
		}
		else
		{
			if(obj.async == true)
			{
				AJAX.open(requestMethod,url,true);
			}
			else
			{
				AJAX.open(requestMethod,url,false);
			}
		}

		if(typeof(obj.contentType) != 'undefined' && requestMethod == 'GET')
		{
			if(obj.contentType == 'JSON')
			{
				AJAX.setRequestHeader("Content-Type", "application/json");
			}
			if(obj.contentType == 'multipart')
			{
				AJAX.setRequestHeader("Content-Type", "multipart/form-data");
			}
			if(obj.contentType == 'plain')
			{
				AJAX.setRequestHeader("Content-Type", "text/plain");
			}
			if(obj.contentType == 'html')
			{
				AJAX.setRequestHeader("Content-Type", "text/html");
			}
		}
		else if(typeof(obj.contentType) != 'undefined' && requestMethod == 'POST')
		{
			if(obj.contentType == 'JSON')
			{
				AJAX.setRequestHeader("Content-Type", "application/json");
			}
			if(obj.contentType == 'multipart')
			{
				AJAX.setRequestHeader("Content-Type", "multipart/form-data");
			}
			if(obj.contentType == 'plain')
			{
				AJAX.setRequestHeader("Content-Type", "text/plain");
			}
			if(obj.contentType == 'html')
			{
				AJAX.setRequestHeader("Content-Type", "text/html");
			}
			if(obj.contentType == 'url-encode')
			{
				AJAX.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			}
		}

		if(typeof(obj.headers) != 'undefined')
		{
			var HeadersLen = obj.headers.length;
			var headerSplit = '';

			for(var i=0;i<HeadersLen;i++)
			{
				headerSplit = obj.headers[i].split(':');
				AJAX.setRequestHeader(headerSplit[0], headerSplit[1]);
			}
		}

		if(typeof(data) != 'undefined')
		{
			AJAX.send(data);
		}
		else
		{
			AJAX.send();
		}

		return AJAX;
	};

	if(!window.fsn)
	{
	   window.fsn = fsn;
	}

})();

window.onpopstate = function(event)
{
	document.close();
	var obj = {};
	if(event.state != null)
	{
		obj = event.state;
	}
	else
	{
		obj['Url'] = window.location.href;
	}

	if(window.XMLHttpRequest)
	{
		var ajx = new XMLHttpRequest();
	}
	else
	{
		var ajx = new ActiveXObject("Microsoft.XMLHTTP");
	}

	if(document.getElementById('PageLoadProgress') != null && document.getElementById('PageLoadContainer') != null)
	{
		document.getElementById('PageLoadContainer').style.display = 'block';
		document.getElementById('PageLoadProgress').style.width = 0;
		ajx.onprogress = function(e)
		{
			var percent = Math.round((e.loaded/e.total)*100);
			document.getElementById("PageLoadProgress").style.width = percent + '%';
		};
	}

	ajx.onreadystatechange  = function()
	{
		if(this.readyState == 4 && this.status == 200)
		{
			document.documentElement.innerHTML = '';
			document.documentElement.innerHTML = ajx.responseText;

			var scriptElem = document.getElementsByTagName('script');
			var scriptLen = scriptElem.length;
			for(var i=0;i<scriptLen;i++)
			{
				loadExternalJSFile(scriptElem[i]);
			}

			function loadExternalJSFile(fileName)
			{	
				if(fileName.hasAttribute('src') && fileName.src != '')
				{
					var script = document.createElement('script');
					script.setAttribute('type','text/javascript');
					script.setAttribute('src',fileName.src);
					script.defer = true;
					document.body.appendChild(script);
					fileName.parentNode.replaceChild(script, fileName);
				}
				else
				{
					setTimeout(function()
					{
						var script = document.createElement('script');
						script.setAttribute('type','text/javascript');
						script.text = fileName.innerHTML;
						script.defer = true;
						document.body.appendChild(script);
						fileName.parentNode.replaceChild(script, fileName);
					},0);
				}
			}

			fsn.ReplaceUrl(obj['Url'],obj['Url']);
		}
		if(this.readyState == 4 && this.status != 200)
		{
		    console.log('Oops something went wrong');
		}
	};

	ajx.open("GET",obj['Url'],true);
	ajx.send();
};
