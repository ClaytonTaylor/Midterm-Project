angular.module('callTimeApp',[])
	.controller('searchController', searchController);

	function searchController(Storage) {
		var self = this;
		
		self.showConfig;
		
		self.search = Storage.get('personInfo') || [
			{
				first_name : 'matt',
				last_name  : 'stevens',
				disabled   : 'yes',
				gender	   : 'male',
				skill	   : 'professional',
			}
			];
			
	self.addInfo = function() {
        Storage.set('personInfo', self.search);
        console.log(self.search)
    };
}
