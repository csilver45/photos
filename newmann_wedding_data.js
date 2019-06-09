var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.subalbums = [
		{
		"link": "https://photos.app.goo.gl/XkTHgm3FEF6c2ng4A",
		"img": "https://lh3.googleusercontent.com/KO05619kQX3gw32L59kWMrlSXSx2Lz8ZcJvEwX0yT0oW4ouflLdDR6ZBPG3YsLJpkokXAhCDPx3YVA5tKk3RnE7TsTjN1yY8MD4ebY5zlHBqpPEz2M1Gw_ChRFpkzVVswVkoIGLRdHBFR1oxq4QCniEIZgBy96VumhS8_ArqPvqsuQyFPSJpZaYyyiBEOHAT8t6IA4CVHFJJ0lj23E3KmMijlZTjKhUKH7WiJYgoTDd_ecWE5hS2CjuZq9_mOv8Q5jzWvxUM2Vaq-YwIDLvwO1zadDEUmfBWYWrovnSBv8oTsfQkqQoUNMluYK_R38CipnbfR_DO48SU6DyZ9um0TaVmp7v16JelFMMts5_uxUnj95hUheuejKcmSLy2GTSwlU2znVj2fYLyq2nwOF5yWoPC89sFfV8rUS73BZS9BA9Ck8PQf7svW8YznbiXe4UaVNcrHus65jAybQXM6LgtLjWCu2q7FDNsZePBRPX177frnlLbnbQhtzwzrFx3HyCMBh_CRd7PqxGcPiiPwLTlHPwd40soVh3Z_bwv8jLe30UJcqTskCfvC6tPltPNrntBtXQPPElL5XeF3gWlHOgn6gIQGWmXYpR0By9hNMWiPKAGT0jVKyNlqfO8VwwulAR7JP3VfvSi3DkbvnPwA3vC5Xa1r197u7TCm7TgsUNROcASfhQxGaot0TvSCsQ7qz4spbmWYBcuzS8GqtGTjfWVy7wd3w=w2040-h1148-no",
		"title": "From Eileen",
 		"date": new Date("6/1/2019")
	},
	{
		"link": "https://photos.app.goo.gl/7od865H9dxsXJJzq8",
		"img": "https://lh3.googleusercontent.com/GLmZQVme_FInkbBFvFmvdwQwMxJs-7vPCBD4pJX2ZSXE1vy26IxF-wTqlvyT6lbmMpHDApjrOWi2qeymvR0nu95KqVgyfHOC0kW50886Iz5UozImzrGBOy_XLx3Xvg5L5b7GOX8TpgPL7uwjOLrx-eW_7PfERWZabYOSvjyH_ktekap-L5h0pvWP0N9A3EbIU8X9jgHgB44uadYyX_9UiAhfG-e36q6h2_WCUm7769NKOmiC_tVqo6LR-G4-2pJPAEhlMda-2vR2JlDzI4X6B4cZ5jeCHkKYJbP5DeE5rp46CHc_Ab2GIROIPJnIo7qH6YF_NbG38tW1-Knh8Q-PnhXMQll3M5pxJalHVRHNZs6EyutdpwKbQZxlysQezrhgeYTqh_R2Ch0HXA8TThkJq0Tb_jWOwCk4eGJRao9zlO39guZcEb0kGaL0d1K_pghEh9sa-3PTyyX4YVpz2HFaEhsnpV2UYBQw6KMU6Ow7JaWesoDt8pMphKy7G1crC9eur8Cu4PbCmjFeRES5tQ9dirhFZmLkoY1N1ggut0k2zjdxnzgLzQTVrsG9pT6pd0uwANaWOwlO_z_p8Nh3BzydRsszOiQ1HQ3ol8J0gNBUyI_j97A5IiF5jrqE4G8IAZtcKnNYGmnaqeg8ycOUsZ38TXywpyNLA0arY-SXY7KbRZRIStUcyKL0j7fE0Hqr0Eubrwz2GwkgAMgm0I8SnB13klcxFQ=w2040-h1146-no",
		"title": "From Brenda & Barry",
 		"date": new Date("6/1/2019")
	}
	
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
