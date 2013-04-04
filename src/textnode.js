JAX.TextNode = JAK.ClassMaker.makeClass({
	NAME: "JAX.TextNode",
	VERSION: "0.1",
	IMPLEMENTS:JAX.INode
});

JAX.TextNode.prototype.$constructor = function(node) {
	if (!("nodeType" in node) || node.nodeType != 3) { throw new Error("JAX.TextNode constructor accepts only HTML node as its parameter. See doc for more information.") }
	this._node = node;
	this.NODE = node;
};

JAX.TextNode.prototype.appendTo = function(node) {
	var node = node instanceof JAX.HTMLElm ? node.NODE : node;
	node.appendChild(this._node);
	return this;
};

JAX.TextNode.prototype.appendBefore = function(node) {
	var node = node instanceof JAX.HTMLElm ? node.NODE : node;
	node.parentNode.insertBefore(this._node, node);
	return this;
};

JAX.TextNode.prototype.removeFromDOM = function() {
	try {
		this._node.parentNode.removeChild(this._node);
	} catch(e) {};
	return this;
};

JAX.TextNode.prototype.getParent = function() {
	if (this._node.parentNode) { return new JAX.HTMLElm(this._node.parentNode); }
	return null;
};

