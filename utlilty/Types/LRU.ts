class Node {
	key: any;
	value: any;
	next: Node;
	prev: Node;

	constructor(key, value) {
		if (typeof key !== "undefined" || typeof key !== null) {
			this.key = key;
		}
		if (typeof value !== "undefined" || typeof value !== null) {
			this.value = value;
		}
		this.next = null;
		this.prev = null;
	}
}

export default class LRU {

	private limit: number;
	private map: {};
	private size: number;
	private head: any;
	private tail: any;

	constructor(limit: number = 10) {
		this.limit = limit;
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	public get = (key) => {
		if (this.map[key]) {
			const value = this.map[key].value;
			const node = new Node(key, value);
			this.remove(key);
			this.setHead(node);
		}
	}

	private remove = (key) => {
		if (this.map[key]) {
			const node = this.map[key];
			if (node.prev !== null) {
				node.prev.next = node.next;
			} else {
				this.head = node.next;
			}

			if (node.next !== null) {
				node.next.prev = node.prev;
			} else {
				this.tail = node.prev;
			}
			delete this.map[key];
			this.size--;
		}
	}

	private setHead = (node) => {
		node.next = this.head;
		node.prev = null;

		// if head exists
		if (this.head !== null) {
			this.head.prev = node;
		}
		this.head = node;

		// if tail does not exist
		if (this.tail === null) {
			this.tail = node;
		}

		this.size++;
		this.map[node.key] = node;
	}

	public set = (key, value) => {
		const node = new Node(key, value);
		if (this.map[key]) {
			this.remove(key);
		} else if (this.size > this.limit) {
			delete this.map[this.tail];
			this.size--;
			this.tail = this.tail.prev;
			this.tail.next = null;
		}

		this.setHead(node);
	}

	public clear = (limit:number = 10) => {
		this.limit = limit;
		this.size = 0;
		this.map = {};
		this.head = null;
		this.tail = null;
	}

	public forEach = (callback) => {
		let node = this.head;
		let i = 0;
		while (node) {
			callback.apply(this, [node, i, this]);
			i++;
			node = node.next;
		}
	}
	
	public toJSON() {
		let json = [];
		let node = this.head;
		while (node) {
			let data = {
				key: node.key,
				value: node.value
			}
			json.push(data);
			node = node.next;
		}
		return json;
	}
}