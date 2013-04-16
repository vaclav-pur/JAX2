JAX.NodeArray = JAK.ClassMaker.makeClass({
	NAME: "JAX.NodeArray",
	VERSION: "0.1"
});


JAX.NodeArray.prototype.length = 0;

JAX.NodeArray.prototype.$constructor = function(JAXNodes) {
	var JAXNodes = [].concat(JAXNodes);
	this._jaxNodes = [];

	for (var i=0, len=JAXNodes.length; i<len; i++) { 
		var JAXNode = JAXNodes[i];
		if (JAX.isJAXNode(JAXNode)) { this._jaxNodes.push(JAXNode); continue; }
		throw new Error("JAX.NodeArray: " + JAXNode + " is not instance of JAX.NodeHTML class"); 
	}
	this.length = this._jaxNodes.length;
};

JAX.NodeArray.prototype.item = function(index) {
	return this._jaxNodes[index];
};

JAX.NodeArray.prototype.items = function() {
	return this._jaxNodes.slice();
};

JAX.NodeArray.prototype.addClass = function() {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.addClass(Array.prototype.slice.call(arguments)); 
	}
	return this;
};

JAX.NodeArray.prototype.removeClass = function() {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.removeClass(Array.prototype.slice.call(arguments)); 
	}
	return this;
};

JAX.NodeArray.prototype.displayOn = function(displayValue) {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.displayOn(displayValue); 
	}
	return this;
};

JAX.NodeArray.prototype.displayOff = function() {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.displayOff(); 
	}
	return this;
};

JAX.NodeArray.prototype.style = function(properties) {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.style(properties); 
	}
	return this;	
};

JAX.NodeArray.prototype.attr = function(attributes) {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.attr(attributes); 
	}
	return this;	
};

JAX.NodeArray.prototype.appendTo = function(node) {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) {
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType == 9) { continue; }
		jaxNode.appendTo(node); 
	}
	return this;
}

JAX.NodeArray.prototype.removeFromDOM = function() {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) { 
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType == 9) { continue; }
		jaxNode.removeFromDOM(); 
	}
	return this;
}

JAX.NodeArray.prototype.destroyItems = function() {
	for (var i=0, len=this._jaxNodes.length; i<len; i++) {
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.destroy(); 
	}
	return this;
}

JAX.NodeArray.prototype.forEachItem = function(cbk) {
	this._jaxNodes.forEach(cbk, this);
	return this;
};

JAX.NodeArray.prototype.filterItems = function(func) {
	return new JAX.NodeArray(this._jaxNodes.filter(func));
};

JAX.NodeArray.prototype.pushItem = function(node) {
	var JAXNode = JAX.$$(node);
	this.length++;
	this._jaxNodes.push(JAXNode);
	return this;
};

JAX.NodeArray.prototype.popItem = function() {
	this.length = Math.max(--this.length, 0);
	return this._jaxNodes.pop();
};

JAX.NodeArray.prototype.shiftItem = function() {
	this.length = Math.max(--this.length, 0);
	return this._jaxNodes.shift();
};

JAX.NodeArray.prototype.unshiftItem = function(node) {
	var JAXNode = JAX.$$(node);
	this.length++;
	return this._jaxNodes.unshift(JAXNode);
};

JAX.NodeArray.prototype.fade = function(type, duration, completeCbk) {
	var count = this._jaxNodes.length;

	var f = function() {
		count--;
		if (!count) { completeCbk(); }
	};

	for (var i=0, len=this._jaxNodes.length; i<len; i++) {
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.fade(type, duration, f); 
	}
	return this;
};

JAX.NodeArray.prototype.slide = function(type, duration, completeCbk) {
	var count = this._jaxNodes.length;

	var f = function() {
		count--;
		if (!count) { completeCbk(); }
	};

	for (var i=0, len=this._jaxNodes.length; i<len; i++) {
		var jaxNode = this._jaxNodes[i];
		if (jaxNode.jaxNodeType != 1) { continue; }
		jaxNode.slide(type, duration, f); 
	}
	return this;
};

