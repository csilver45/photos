var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.subalbums = [
		{
		"link": "https://photos.app.goo.gl/stHFovEQrmerthY59",
		"img": "https://lh3.googleusercontent.com/hW5DIkG7wEqI9uEHR-dpF5llnwr2hwXozIi7iZ98WrEZbirtW1Fu1AvCbP3yE3b-JUH2FGWKCWtwIYzqaBh_z0OjsWiMfOXPKajTThKFwMMgCkHVLyZ1klKlG6IZouq5D7pEh0N9YfWc52PFBLManHdUaBAyOw1Y4zb15Oes6wvIKhu1pnPFHVpXfOsufPgwFB6FSYf4GRGFujHjVuHViszlX16KOdMoCYTxBEcycVEIqXomeaBryi1qrPAICn0_08fI1f2K9lCXXoz0puNhvN-8di3UVg296irIkxMPYsiBBgz5B-P_EV8iPr0KsOp8R0qW6bviBd6wCTwWxz5wb2Glhk1EYl52WrkfQSIQqypKgQNsTP1IY0ADTr6HQRuXGkLo9aUdA9WXfZQejWO-ySLJzt8kOoc6IwwfArvX7XzeG71FCn2qmIFGnwvHRgBxdhqYI6Nylchtb-Oj3RaeIX4jU2QJpVTGB71Zy8ykkLNbTMR5sRzB7-Ob2HzHr-P0n9VxU0pn4x8I08Qpd44TkUSboIQSF5RqBDNTgSdMvoqpY8jKaO7k0OVqhcvQ983oTd_EkEDw5Wq4X7nSk3ayPD8RreDfoQtGFvjYS_xdOxVUujbg7iRE5KIsWGYCzu8Rn8KlHASU9YpUHeUSCdNHFVxxw8ZXGMNzkt4MgL1OoZFx6jKWqN4XbjXC=w242-h323-no",
		"title": "Lisa",
 		"date": new Date("10/5/2019")
	},{
		"link": "https://photos.google.com/share/AF1QipP7Ee4o64VW3Er9cWm98Rq6iM4BSKu9IQc6TxxEEyMRJ0snXg9lyw2juwWOD-qsgg?key=UmVIaTBFdlNoZ2UxSGh3Uk5zYkh3eTkzLTVZZEFn",
		"img": "https://lh3.googleusercontent.com/oOdwUkBUq1rdP_fyQgUR2GAWX1VNXlPRpsZsyhnq52P9qrJ5gMghR0p6OrJkYPQjIAKdifwp9A_wrrdUAZ01nQVulPl6vFmhuaUhsy0fn0ES88gh0ljyShcV-pBDBnAEEfBEC5QQfMRXEIMx7MdThFqYVJaSXJgulXyM1yatZgE6WHyUkRMKsjXt37nlXuw3Zc0sN2v4fzdNxRQ7fzm6xS29Vl7UEm9bdLzH87w7M5cLPdnDlWjQKRy8Flno3owLS-qwTLN4Kn3t7ns31rwvkeyTrLEvhfwo4BViDTKsQVStu0w8kNn6eSj32YBYfiqhiqirKZxVUnsSe7L_Pn4rpUg-yW1gyH4UeIH7krUETJE4LMnOo674xLMfiEkClb8vgU9Os3PaEQFSUtpThkUay_cZXgwWkjYvLF6gddANJYDsaBuAXZQzrv9xIvePdoY-2UKY_Wz6OVIy19IG2FpYiPjO0S2pl-PYZ7R8SudkqxBTn02rgEpZPQuVjmYlBPuMg2j6n-n3al_8TKwM6NaOOmZRul7pnLeno-imRpS4tF_S6uujquV_wCJnOeZRZfUNvc6PlWDOGY7FH8XjI5TzNk2IU7l9UhVdhCVzBWEpVDKs-IcgY4FKW2jJ7EuUGcGChvBrC8LHLceTJZHwaIPpDfGMVY29WNkFTP-ZMO0x0VtKbie09h40420g1Zb35CAccCYlxN2sZo3jROJrbXaTiWr_M8bpimIjXjwo2zTT3FacfJL07w=w477-h358-no",
		"title": "Brenda and Barry",
 		"date": new Date("10/5/2019")
	},
		{
		"link": "https://photos.google.com/share/AF1QipPVWN5nuZk7cIIuL7_bgJ-bDCvz8vAPGo76EUxge2fvS7qauY8jDYoCWCr7QsLVuw?key=UnQwS0FtdUo4dFlCQkpKVVFmenJZS2JuREJZbmdR",
		"img": "https://lh3.googleusercontent.com/nVxF5bBhCIOPZm8N2nis1MPCioYn9KRkXVSsn9PZd4wMqvQuOGPYgxuMfeVH3yLNZn-_pekB0h8wOIOgd6XVQsCB4fFRiKGhXvjY6AX1QMcNtIkAg9CJvvxajVTsD-NgIR-mokyxRzPJgcqVBLB0FIQu2NILce941zZzko227D4UjlIzLWnnGkZ_T8uXbEUfVSjDieUgLOxlb8BFQI_JunAjpIDElVu7rwoYI7UmuHxkMZgyPNJjUu4bp0xZUDKyae4b8H-zqr8SK2M4DttaswE-QgUbIOU94xN1Yhrvmza7KQLhA_zOf6LamdH4n-sALi2C1Ri3S5GSBVuxZOqFKxcBbYaX0WPdUwlz_LJL-e4b1IHIv3i3dJTs_tXMD6rUuGY7lUG4FgHnquAmvWvpphWxuWjDbriANG6GPclyekWSaKx5pSlRV15cqUtKee58Y1pngTrBfiTcP6Y2HLS7PVwkPG_6VI0LpUhKl1XnjPL_gXEfuJzY2vvc16750qYYhplE_QMkyxtw2Vm_X-2iUpXcl6m3B2p1Sn43jJz3f0gkvE1yvrGK8elvEWG0Qp8SXGG0MtPHmHrJIoQoAYlZ6h9zf6QIW4-b_pP0sFzPd_hDry0K_Llqr6wHD8T3bFo9OPbd2_SUa8wgM82wJb5D9tvk1KJ_jSOslQ0ljTzVbkgEvFg9TqZnLp7GdJYIwMIjTIV0s5SBb1A9EluYt9iBd8z8LKmKuHal4JVlmPlRJ2gcdcdo2A=w461-h346-no",
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
