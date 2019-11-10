var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.subalbums = [
		{
		"link": "",
		"img": "",
		"title": "Lisa",
 		"date": new Date("10/5/2019")
	},{
		"link": "https://photos.google.com/share/AF1QipP7Ee4o64VW3Er9cWm98Rq6iM4BSKu9IQc6TxxEEyMRJ0snXg9lyw2juwWOD-qsgg?key=UmVIaTBFdlNoZ2UxSGh3Uk5zYkh3eTkzLTVZZEFn",
		"img": "https://lh3.googleusercontent.com/oOdwUkBUq1rdP_fyQgUR2GAWX1VNXlPRpsZsyhnq52P9qrJ5gMghR0p6OrJkYPQjIAKdifwp9A_wrrdUAZ01nQVulPl6vFmhuaUhsy0fn0ES88gh0ljyShcV-pBDBnAEEfBEC5QQfMRXEIMx7MdThFqYVJaSXJgulXyM1yatZgE6WHyUkRMKsjXt37nlXuw3Zc0sN2v4fzdNxRQ7fzm6xS29Vl7UEm9bdLzH87w7M5cLPdnDlWjQKRy8Flno3owLS-qwTLN4Kn3t7ns31rwvkeyTrLEvhfwo4BViDTKsQVStu0w8kNn6eSj32YBYfiqhiqirKZxVUnsSe7L_Pn4rpUg-yW1gyH4UeIH7krUETJE4LMnOo674xLMfiEkClb8vgU9Os3PaEQFSUtpThkUay_cZXgwWkjYvLF6gddANJYDsaBuAXZQzrv9xIvePdoY-2UKY_Wz6OVIy19IG2FpYiPjO0S2pl-PYZ7R8SudkqxBTn02rgEpZPQuVjmYlBPuMg2j6n-n3al_8TKwM6NaOOmZRul7pnLeno-imRpS4tF_S6uujquV_wCJnOeZRZfUNvc6PlWDOGY7FH8XjI5TzNk2IU7l9UhVdhCVzBWEpVDKs-IcgY4FKW2jJ7EuUGcGChvBrC8LHLceTJZHwaIPpDfGMVY29WNkFTP-ZMO0x0VtKbie09h40420g1Zb35CAccCYlxN2sZo3jROJrbXaTiWr_M8bpimIjXjwo2zTT3FacfJL07w=w477-h358-no",
		"title": "Brenda and Barry",
 		"date": new Date("10/5/2019")
	},
		{
		"link": "",
		"img": "",
		"title": "Julie and Callan",
 		"date": new Date("6/28/2019")
	}
	/* {
		"link": "",
		"img": "",
		"title": "",
  		"date": new Date("1/1/2008")
	}
*/
	];

	$scope.loading = true;
	setTimeout(function() {
		$scope.loading = false;
		$scope.$apply();
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 20
		});
	}, 500);
});
