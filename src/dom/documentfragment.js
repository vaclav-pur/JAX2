/**
 * @fileOverview documentfragment.js - JAX - JAk eXtended
 * @author <a href="mailto:marek.fojtl@firma.seznam.cz">Marek Fojtl</a>
 * @version 1.0
 */

/**
 * @class JAX.DocumentFragment
 * je třída reprezentující instanci window.DocumentFragment
 *
 */
JAX.DocumentFragment = JAK.ClassMaker.makeClass({
	NAME: "JAX.DocumentFragment",
	VERSION: "1.0",
	EXTEND: JAX.Node,
	IMPLEMENT: [JAX.INodeWithChildren, JAX.IMoveableNode, JAX.ISearchableNode]
});

/** 
 * @see JAX.ISearchableNode
 * @see JAX.IMoveableNode
 * @see JAX.INodeWithChildren
 *
 * @param {object} doc objekt typu window.DocumentFragment
 */
JAX.DocumentFragment.prototype.$constructor = function(doc) {
	this.$super(doc);

	this.isDocumentFragment = true;

	this.canHaveChildren = true;
	this.isMoveable = true;
	this.isSearchable = true;
};

/** 
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#remove
 *
 * @returns {JAX.Node}
 */
JAX.DocumentFragment.prototype.remove = function() {
	console.error("You can not remove documentFragment node.")

	return this;
};

/**
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#swapPlaceWith
 * @returns {JAX.Node}
 */
JAX.DocumentFragment.prototype.swapPlaceWith = function() {
	console.error("You can not switch place with documentFragment node. Use replaceWith() method instead this.")

	return this;
};

/** 
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#isIn
 * @returns {boolean} false
 */
JAX.DocumentFragment.prototype.isIn = function() {
	console.error("DocumentFragment can not be in DOM. Do not used method isIn().")

	return false;
};

/** 
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#parent
 *
 * @returns {object} null
 */
JAX.DocumentFragment.prototype.parent = function() {
	console.error("DocumentFragment can not be in DOM. Do not used method parent(). It is always null.")

	return null;
};

/** 
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#next
 *
 * @returns {object} null
 */
JAX.DocumentFragment.prototype.next = function() {
	console.error("DocumentFragment can not be in DOM. Do not used method next(). It is always null.")

	return null;
};

/** 
 * nepodporováno u window.DocumentFragment
 * @see JAX.IMoveableNode#previous
 *
 * @returns {object} null
 */
JAX.DocumentFragment.prototype.previous = function() {
	console.error("DocumentFragment can not be in DOM. Do not used method previous(). It is always null.")

	return null;
};