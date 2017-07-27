window.onload=function(){
class Tob {
	constructor(obj) {
		this.par = document.querySelector(obj)
		this.alist = this.par.querySelectorAll(".list input");
		this.alist1 = this.par.querySelectorAll(".list li");
		this.Car()
	}
	Car() {
		var _this = this
		for(let i = 0; i < this.alist.length; i++) {
			this.alist[i].onclick = function() {
				_this.index = i
				_this.Car1(i)
			}
		}
	}
	Car1(i) {
		for(let j = 0; j < this.alist.length; j++) {
			this.alist[j].className = "";
			this.alist1[j].className = "";
		}
		this.alist[i].className = "col";
		this.alist1[i].className = "show";
	}

}

class ClaTob extends Tob {
	constructor(obj) {
		super(obj)
		this.aFn()
		this.index = 0
	}

	aFn() {
		var _this = this
		setInterval(function() {
			_this.index++
				if(_this.index == _this.alist.length) {
					_this.index = 0
				}
			_this.Car1(_this.index)
		}, 1000)
	}
}

new Tob("#str");
new ClaTob("#str1");
}