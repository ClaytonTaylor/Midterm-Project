angular.module('callTimeApp',[])
	.controller('searchController', searchController);

	function searchController() {
		var self = this;
		
		self.test = function() {
			console.log("test");
		}
}
