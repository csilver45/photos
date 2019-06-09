var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.subalbums = [
		{
		"link": "https://photos.app.goo.gl/XkTHgm3FEF6c2ng4A",
		"img": "https://lh3.googleusercontent.com/KO05619kQX3gw32L59kWMrlSXSx2Lz8ZcJvEwX0yT0oW4ouflLdDR6ZBPG3YsLJpkokXAhCDPx3YVA5tKk3RnE7TsTjN1yY8MD4ebY5zlHBqpPEz2M1Gw_ChRFpkzVVswVkoIGLRdHBFR1oxq4QCniEIZgBy96VumhS8_ArqPvqsuQyFPSJpZaYyyiBEOHAT8t6IA4CVHFJJ0lj23E3KmMijlZTjKhUKH7WiJYgoTDd_ecWE5hS2CjuZq9_mOv8Q5jzWvxUM2Vaq-YwIDLvwO1zadDEUmfBWYWrovnSBv8oTsfQkqQoUNMluYK_R38CipnbfR_DO48SU6DyZ9um0TaVmp7v16JelFMMts5_uxUnj95hUheuejKcmSLy2GTSwlU2znVj2fYLyq2nwOF5yWoPC89sFfV8rUS73BZS9BA9Ck8PQf7svW8YznbiXe4UaVNcrHus65jAybQXM6LgtLjWCu2q7FDNsZePBRPX177frnlLbnbQhtzwzrFx3HyCMBh_CRd7PqxGcPiiPwLTlHPwd40soVh3Z_bwv8jLe30UJcqTskCfvC6tPltPNrntBtXQPPElL5XeF3gWlHOgn6gIQGWmXYpR0By9hNMWiPKAGT0jVKyNlqfO8VwwulAR7JP3VfvSi3DkbvnPwA3vC5Xa1r197u7TCm7TgsUNROcASfhQxGaot0TvSCsQ7qz4spbmWYBcuzS8GqtGTjfWVy7wd3w=w2040-h1148-no",
		"title": "From Eileen",
 		"date": new Date("6/5/2019")
	},
	{
		"link": "https://photos.app.goo.gl/7od865H9dxsXJJzq8",
		"img": "https://lh3.googleusercontent.com/GLmZQVme_FInkbBFvFmvdwQwMxJs-7vPCBD4pJX2ZSXE1vy26IxF-wTqlvyT6lbmMpHDApjrOWi2qeymvR0nu95KqVgyfHOC0kW50886Iz5UozImzrGBOy_XLx3Xvg5L5b7GOX8TpgPL7uwjOLrx-eW_7PfERWZabYOSvjyH_ktekap-L5h0pvWP0N9A3EbIU8X9jgHgB44uadYyX_9UiAhfG-e36q6h2_WCUm7769NKOmiC_tVqo6LR-G4-2pJPAEhlMda-2vR2JlDzI4X6B4cZ5jeCHkKYJbP5DeE5rp46CHc_Ab2GIROIPJnIo7qH6YF_NbG38tW1-Knh8Q-PnhXMQll3M5pxJalHVRHNZs6EyutdpwKbQZxlysQezrhgeYTqh_R2Ch0HXA8TThkJq0Tb_jWOwCk4eGJRao9zlO39guZcEb0kGaL0d1K_pghEh9sa-3PTyyX4YVpz2HFaEhsnpV2UYBQw6KMU6Ow7JaWesoDt8pMphKy7G1crC9eur8Cu4PbCmjFeRES5tQ9dirhFZmLkoY1N1ggut0k2zjdxnzgLzQTVrsG9pT6pd0uwANaWOwlO_z_p8Nh3BzydRsszOiQ1HQ3ol8J0gNBUyI_j97A5IiF5jrqE4G8IAZtcKnNYGmnaqeg8ycOUsZ38TXywpyNLA0arY-SXY7KbRZRIStUcyKL0j7fE0Hqr0Eubrwz2GwkgAMgm0I8SnB13klcxFQ=w2040-h1146-no",
		"title": "From Brenda & Barry",
 		"date": new Date("6/5/2019")
	},
	{
		"link": "https://photos.app.goo.gl/R6Lp55pFK59Wp93eA",
		"img": "https://lh3.googleusercontent.com/uBAoKsmEoU73oE03WJazficWyRtmZ5DEL1PVhsiFTYtxOTIbOw8kjerH7A8Rpe_tgZpe177qlCxRFflP28yAmQy0y4ipQK-5_0KEZp0sYZbqB5LBYDmGqMmb6EZzb8cArCXDkfXEby2yM3DS5Rbj4nU1sW7XfyhKIY5Jh2uru4kPZdlCkLqRun2j1_AWJzfgH0f2mn33FLR3zkfUK_cpqeaL9xAstwn0maF6tknFZTHm78fj9gxZcbWmM1ui7yhrnUVsXzgdodUh45hNjAqFSH3iPWBM0LK_I7k7ZrwRK6bMBidYb2bXqtjy_HeuZHUo_nRIbMWXLnlaxRPJUZ2uyshdPUenxzomDSK-S9vXjFqqh2XdSTHNprp-pfu_B70ap8JOBjiyGeyTZJXp9HnvOqK7CECqXR7YVXr59i5YsMe4ZjRMlCehc8BfOiaW5zb_VxoN4RSlzw4bhvd4-wCNNHNfw8pzEJhx33sc9Sg8ZkOzCssegv_nNtUdIK_ryYuC4c7XFRj1qfSkOJx7wkXILUQc8tB74TLyzgdyU-2O_Fg-9aSFx1fAEjTBqkDA1mSO88YStBtig-fcr62vV3iukqwTwEz6xWu_woy5mayd2YNGCSkfHTbo3mGR0_rEqipLdh_2QQOUlWfjBGbgJ--v9lZj8tzJAyfs=w1562-h1171-no",
		"title": "From Susan and Craig",
 		"date": new Date("6/6/2019")
	},
	{
		"link": "https://photos.app.goo.gl/GWH8X2Ksax1i2j5PA",
		"img": "https://lh3.googleusercontent.com/s1Bb4y-Dv4qUZl0G4JnFZgtjZ7zjswZyfwj0pLxegr6SkewCs9bmgP7VmnZlQtm_j9s7rK-5g5lGuc5T0Qvt3fcO2q4AD_BjznnebCmy4nFOh5wwOVZFKrhhEvW04Fl0mWFidfsZ8Vu6Pk4LUfEMSqxfTlAt2i-jyIbuUIyBhLecdVzvABDjd1DUnYYRDIq4L2L0fKUuRCeb6w5F_2QfXr6nR95y19udY3l_iMqZ0ihAdqSEMdibEjbTQPY9RBTkja7TdQOO2Wozlcz_K70vGvIz6xLlPQXCOTBXnd5OUjYtyifIxwScKzJYoDtZ8McjdLce2003JSO8boipVQHMuojfG2hwo3wro5b9P5P2lqVXxkZLetRwVmHwMOnUPldYJIFcq601Wn6VKl-mF0iqbIesuwyg4p7SO9W2-mA7ixS24n0qZNtrOvdm5I3yqvod5JvyFOyv9ScN-NBJ2k4iHth31jsThMewH-uk0_rplk-N5OPy4fzWaNV6TIUnyoFbkH66e-DaLF_2bqMOXiNKuURmjuq9GaX6VKZSrAqOnMalC1wRV9ifYZ0amX7Nhi-U6MW8YsB-uZBbyJ3Py9pJEsBis2M-wrTGAJzmZ9_QzP7TZtSbPHq_mxETtlKY7Z2y2HhHjScFJDNrIYWL6rxqAgS4ccHxKWIq=w512-h288-no",
		"title": "Misc. pictures",
 		"date": new Date("6/4/2019")
	},
	{
		"link": "https://drive.google.com/file/d/1WgdrC0Zi3hDABPM-WwsdJI1FL8oUr63B/view",
		"img": "https://lh3.googleusercontent.com/rr2sKdEVKguj98IeBQQ7bLmul02vNqYWkui4ZFgx0nNsEzqPwz9RSCBz_aYWsThjQGUtLN1E3KHb3vfAOo3VTIhwBHPxLMQtPQagWvj5NHNu5uEfOMlTrnA8wb2Wq9---0kpI-rgq9SyNpqjyKCwcvzMYMwgIjolYGAr2LBXpl2MflJKYy2XZluKaY2gjXORew9-DOAPiElPjCxpflzP0MeUVRUaM-l-vPjb5XMeD65icw91GC2tTEjg4XiTJ4p-7Gg04GND026F7IwKGDEsnU4OuYSZYgH4YjRUX-xmXkRpC4sVeFUubsnTROzSYr8W7embLGdzg40RqhpjhFAyFiucBJ2M1Aht-2TBWct0CL93QmtcXATuCFr_SPe4kAGAgHY1AcJ1iD0NHErpUvKdO2etYMj7_5IEYgcJ__WrJ9JfGAW6qw0WbUrB8WnrKksEbozcVEtWNlDiryt0xd38vHgzKV7hOsYz2Z7NbA3F__taqm2fF-PkwTG9rNJneiXBfUXOYtFo4R-FLFlynlXcqA0c_mk6_qN6gdzPhFNyiR3o7xOFO35rPVdPY61RE1bMhPHex3yEVYoD_W73EtNyN6iJYWVH7h06ADPWbZs0MvtpT2oV8iSpsqO6f9VprUH_F5dTIxSeo8TFooLaVfdjkC30vqhWG-TUwQzVsExnvvacd6yfJWJuePJUbxROfF_mfIbCjXgo3JFCpIn5OncKKPrrqA=w512-h384-no",
		"title": "Sneak Peak Video",
 		"date": new Date("6/3/2019")
	},
	{
		"link": "https://photos.app.goo.gl/v5QGzVpq8uRWGfq88",
		"img": "https://lh3.googleusercontent.com/ypbkQ_BMTm34XirXQ4N2eY0GR_ajX28fMOJgUdgdot_Y-6F2KJDqz1noxxWSQWrR6ReHMpySARkO6lcoC1csLPBZFk1W_3S_7BgYlwBMoqV4VtR8tSeyYRhZAlsFRuxTxgen9tgHYbI86wZfhfiWpzJTxJo5kDoU0-LcivQg6tXGr8p9qRefBRsR5aarne-AHGV0a93WbLEqDv7bnsQ1gUe5KHQvxxJroiXvbet1bQcw_2yF08Mpbgr8e8hscTLcBtvvFL5z4osl4Zy8zo56IWKC589dxKQX_mh5p9mlN5PSn2wGBeB7P_UxIPyya0EmtgolbGsWJXOBsVJQzD4dTAuhafVVlrnAPvJnsCBCK2Tdjl-nfXq-jkrRIEw1btwjIxj90Y2LUPZX8S9KSVq7IqtMvEZnQ3v1OpASrbNSAfbsD9an-rOW-D163m0liRdlH1bM60lYK8mRg972mWWJ8atjuajUExx1qcDlaoKTbORjRkYCHn-CBr00mKGZank6lwxtsdicfeThi8UvC8SIDb6iC2VFFa2iCiZhFKISaH4r58S3ME-1SJUSRCenWaF7owqKf_Y7OsKbo_C7INeC6Etxx-hKiWpPTKdzeidxtfMQB4F8tSy_7qcPreIYYvRT67o3pnjwE0ilMzZBZ2emkpdmrBVcXG-t_ssUrbwapwmY2f2F-NsHZwafMh0oCaEKejA4BoyN4BZV_AL9SUZlPchy=w750-h1103-no",
		"title": "From Laura",
 		"date": new Date("6/3/2019")
	},
	{
		"link": "https://photos.app.goo.gl/CT15iYJYAkn3SPYL6",
		"img": "https://lh3.googleusercontent.com/sUpPgbt-qK1G3PbdrtqqXUzNtqlKTXPDmB0wVnQTuZ53pKYbgzXGrhfZyTF9CMKH28DUb5V7Mrjqs_FG7Sw67XLgKE-mkb22C1OUaFki9BmqczXfWzPdDya5HzlII_lucOmFrauCAdPWqeJK4uvnI9Q1G7T8kp-q3Vqq11ztoIHjr94hMjx7elzrxl03Z561MJoeUXfsloJctqPZc4gRHZbI8Yn2rvAf1yYHlHw38j4D0_MhuSt80j1pflcSWRrbA3mETWHwD3ffhhySLvfGWwfKCYt-lBGbQDuAbyME8YIrqMDdG0EXzi97Vuv9NP-6Mqud-S1x2EPU5vYczhiSAhYpaAlKe3FOczl1iNKpshc9_LPUPLiXStXrSv8wdC2kU-SYyPf--pizX3BNx8NWRWaCtTmhEkG02_PPXnlXneqP-AGkIIPULvHW4ym_o-59A6fJTV9DTprXxrbcrYMUU6pRfFw2L8YQJ2YyfJGQ_QtjZIUMPecAwZ61T3XY6ehUc0qOJxIsJm2LwzyOIkMSc9rcxkDiS3hslnAntwiTmMxZdpPJJ2uGaYZ756OmNayXIIRT27P_kPyuXNL5cCJ3-E72_QWpL2C3JBLPPTHhN9zfqsqwaHF6i9p7fWw0n7mLnEUeqUWKUISyrZtfynsUDiAe434vDoGnuX3Ia7GkZQBBW-F88-0-COFpRLp8xVuD2KCSzFmKmfp175H-6WFVe23s5A=w793-h1171-no",
		"title": "From Mary and Ricky",
 		"date": new Date("6/1/2019")
	},
	{
		"link": "https://photos.app.goo.gl/9WkkaDADsgnKCD1Q9",
		"img": "https://lh3.googleusercontent.com/ZuBABXKDUEE5ON01pOtF4za3ZC2ebinHRvJXtp8OLTOJB8ibn7cPf7kR6Z8-wY8RLP9-cN9mddGFhI8PSku5DcyfxK_sava2VQtM5vaFACXdzntjauapxde_INbbGWPe4vU9_hF19h85NYMNHnvPgUZ54gUMEpbnxmtp-1SkmEzAsF8y0HIY2sYlTa2yfMpUvUEmx3jWyJLBxG--VPedWgbouPeLx6vdIKJQinv9qDGZB-oh9biP1HdTR7PVjW7OgpZqTKuGiMnGR6Mz51-FyUbXeuNYRG0BdoTq78Ry41b1Z5JXX2Zkvtj6_ifoubHEsusmVwzYDDXC-p69foXKRt2b_NLFH4Cr5WBCRt6EHhr7QwIvJytU2fpK5w9CVYd6tul_31Z7WxKnTc-DziBOjTCE1W1QutmXJ1cPVbYioseHRM-lD8sak5272dRPmD3AHyvr76Kvz9l9j3lMjcxJySdRgiWvUbV9cN0l1OHTBDBHYpmn6WeH5_fewMMtZNrBzIOgKriT1M0U8MwQd1ssdw2aH43U8iKGNNHsespDlTUrDZQFhA72WMsExqAs7xody6U0TJY9f0utVp4qTK34fJvyaUQC-j0ONwJC1xXWkhNKUcfcvDQkiIvexu8vkkKJoLW6CST3bopTpyT1HTgAhL7iQPGWJ3RI0WhUzD8o11JKoTF1Unxhy9-stIuIk7oAW2F_kNmfuGZXE-CZJMr8973c-w=w879-h1171-no",
		"title": "From Emily & Michael",
 		"date": new Date("6/1/2019")
	},
	{
		"link": "https://youtu.be/rAJ98fHWnCQ",
		"img": "https://lh3.googleusercontent.com/nH2ihe3e4h0zU-hjQONRYqv45Xk5tDyGlo_c9aywb2Xm4iTFOtk9y-L-BKvzvMd29nAjRhMQaQ_7hXVo_1TLqzfFN2uI0oO2zTOigRMevglw12F4oeXwpkqELGY6ZvXdy60ETeOWf5Lm-IfgaEoSmNZWiEGqoHj6ZhvxCjvhE8cw70OZAKziwI34Y4kRGQDid1seuvBGNm1_Pns0pcoTkSwghh2KXr7PzfKE4XfKOUKcwPu3hDiBbyKZfcGOD2nlIpvntjlQSmAXtXKN27PzNjF88P6ENIe6O-ZFsQC-BPedkMCZt9kgmu7GvqgtnR4a0LZ05q5J7TJ33tR380ULkdK0ua4zWtfGn7TEE5pmYYtUw5Wzh35p5AhW-y2uos3FFaA8q99Jxuw4uVLijkZ2H9lb_qJTh2z2ouYT1oD_CWG6KstFCMzTqQUmjTQK-5LCZC7VX6IF8j62UgU4aD127TgEWU7lIEItE1n7dwXoITZaERk4DMAtSlJrXKoi1Z-zqpwo9QRMLiMxSo_rzRM2mA4cSTlqEObiVZ3SLHhbMj8IdYykKr6gUMQRGgqe6yzO4EnqACvutR11z6PP9UYgVeUZyN8lZ5bVLBQ_qqHwDpfOCkTE8mOiUcxg_T4BEv-UZIu10tj0r9SgB_szbsZpRkkdObhN11p2ER-v9GRDfqhMR5SEa7PoZYxm1hBHU4hP9tuy-gyvBAPogeutI-HZeUniKA=w384-h512-no",
		"title": "First dance with fireworks",
    		"date": new Date("1/1/2008")
	},
	{
	"link": "https://shanatozerphotography.pixieset.com/jessicaandryanneumann/",
	"img": "https://shanatozerphotography.pixieset.com/jessicaandryanneumann/?pid=2923356175&id=157&h=NTE0MzAwODMw",
	"title": "Semi-professional pictures by Shana on Thursday and Saturday",
  	"date": new Date("1/1/2008")
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
