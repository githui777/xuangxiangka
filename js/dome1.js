//window.onload = function() {
//	class Tob1 {
//		constructor() {
//			this.div = document.getElementById('a')
//			this.Cont1()
//
//		}
//		Cont1() {
//			var _this = this
//			this.div.onmousedown = function(ox) {
//				var t = ox.clientX - _this.div.offsetLeft
//				var p = ox.clientY - _this.div.offsetTop
//				document.onmousemove = function(ox) {
//					var x = ox.clientX - t
//					var y = ox.clientY - p
//					_this.div.style.left = x + 'px'
//					_this.div.style.top = y + 'px'
//				}
//			}
//			document.onmouseup = function() {
//				document.onmousedown = document.onmousemove = null
//			}
//		}
//	}
	
//}