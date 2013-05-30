JAX.Listener = JAK.ClassMaker.makeClass({
	NAME: "JAX.Listener",
	VERSION: "1.0"
});

JAX.Listener.prototype.$constructor = function(jaxElm, id) {
	this._jaxElm = jaxElm;
	this._id = id;
};

JAX.Listener.prototype.unregister = function() {
	if (!this._id) { return; }
	this._jaxElm.stopListening(this);
	this._id = null;
};

JAX.Listener.prototype.node = function() {
	return this._node;
};

JAX.Listener.prototype.id = function() {
	return this._id;
};
