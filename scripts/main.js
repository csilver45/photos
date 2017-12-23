var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.albums = [
		{
		"link": "https://photos.app.goo.gl/6RTXrTsAdTy51iN32",
		"img": "https://lh3.googleusercontent.com/AmU1g3HtA6J6-JEGCN2uXqyjJytHyagHZiZ3mrB0ENmy8TcLzrDY7F-Bp1dP7q0UZod-y2mbQH5Xt5IDokZGs0NYUpbWKq2PvaBbcLlajdpjMqrlmCyvj_sCc74t5_O40C5Qg_IYeSSIyn6svxKgj908rg5VAf-fOElm-ndaUpkEWK5tqWpmhs3mYBoxqit2xnIonZvtM4ucu57Ck6ImR6vXJ0fb0rrXPIdYBgm-fK4tNU8DHGAV2M8l9ppkX-55huPugzlZzy4y0QhTOJgaWQWXIzQWbL9E6oubp56Zx7jqE_SXjlEQNJjVxm0qsz25jLWZX3D7JayiaeAWSxXsDhb12bROon2VsFFu_qIXISAG5vh5s89bEN1-V7i0Khet0wsGBAhgu1MJqK_kVnp7s-Mt8Xq6qLvGYMgzb9bq0h21xd7LXQ8kDCO1JHnSzFnkxC1KFy2HbrGxstpql7rNxyUqaCe3T7_MUg-jQekTRQSLxAzU0Kb3cNl1Q6oXk34YNtVim4r69WKZwIEB8qzMdGgEgahQkEdGq-WS6bzwBKUSKCGy4qGhqvZRKdkmeN5pO5XY4v7MAl99WrnBr2ckPKlSMPELz0wxww-EoVrZ0MeRR7DaquGAFP509lItwSqSF6-Mmjb8hKfIa3lrR1tQj1qTUPSutDy3ZQ=w690-h919-no",
		"title": "Schwent baby shower - December 2017",
    "date": new Date("12/2/2017")
	},
		 {
		"link": "https://photos.app.goo.gl/Ql1uaKDAIy2peJ3S2",
		"img": "https://lh3.googleusercontent.com/xUJWEHnakJH_wB0wOJ4-u8y7nU44SxpH9fgpzFjmfUD3UUWNdi18Qjgx-epmMUnRI0qujqE-uadLCBFFHS4NxfmollRqdpUxfZuntPlTKez4AxpUlmtkzUR52_zgqvK981wDPk9ie1jjOXa-aCj4bjY99Ct2927v_kSsF75DZToo46glOzVFzXEiQ8RgogCtMXC5xRi7DKneaOGB4fLZR6G4_6zSzCQpy75pmeJmwAkiOpv6yqCd1g93EdWD0XrpjDFpM3had3SMYlQf4SedMko9JvtNyJubhqrCAHktMvapeT-zFW8ufR2bqQN71loIArkmQwgcNShuphsMhfA7GDRUQb1RBmVPQ3pB8OUg1NaiXHaviPXHH7lCTHmuFvecbFTBsqcIVqAB2Noz0Udr7GINzYDUxGmBZtDcJCosgjXNGkzHceuBrH62UAn-xmuNgN3UDuCggcILQuLLtTMaIL7PQx32w6UXXLIGdHPCnWAqOgVi_hR2yjycjAB77SVIxe-r_-mmsmptowplJdwswsrsnwck7dvcG1DmWQxE0M--6-VUXMu93Ujfd7_Y2pmIpcDLimDtLbVgI0A3PYDEAjfxPGeckfG3b3BqwzuO2nzBbLYKHXoF0vr3R2h-NqhuAL9jzTUzi2PQZWiGtItepdkQVXBwrNs2jw=w1634-h919-no",
		"title": "Susan and Craig Thanksgiving Cruise 2017",
    "date": new Date("11/20/2017")
	},{
		"link": "./Lauren_Babyshower.html",
		"img": "https://lh3.googleusercontent.com/3EeBwUqIzzUKcpvCbUTj2ru8W_Q-TURJkwCiXgf2UxJdX9iObArHoSItXJzMGMbW7uT3ibcCPceuE6SpPmWy8LzReVwxPkxuaoqervSYaUY-53ZiLW8LNcl00C8JdPAQsixNnjfV-lU_NlphE6cJl8-mDG0r4LK-D6CJ1Et0Y2_pGwIfRKu-r4U278ozAFXFnq3EZx9T64XpCvPqUhAneZQVpN0_d-akTc7tj9d-pfssbQNYD4nl1qG1hG8ZIgoRx8RXdXzc3skIrTTbmT7oT2W-NROUv2H2SRrL4dI7DRNQpP04UT7iFWNtalmN01VfOISJs32AMXc1EPTJV2wz1TBUZbnsw0JkoK2Vc7k2o_NHbGwdV_8bpmuRftHmZlA_PR7qX-qBPZjsxrE2-NZcAZRW3SR_E1IevmsIf_U3oSw0vj5gJFGOHeemmELc80Bbkb9RhC41wxYYDmKG5zWadAUlkF0yceM1RXWwgB8xSg5ZPaLOT6-zs6z0H0ZyKeDn9hDYrHJe7UJk4QcT8CqCnH0Bhj9BYUb5EcwKz80k1pU0ivqJZ1SD5k8uAZVFrCMuQkou06ksQQfV0SPGMGUItsHtY5EN92Qm54izw6cJYuvVVDPPctcoD-fZ0lYWBPj-sLtdHla3Ugw-ougGx6azOHS_4E5PlFvl4Q=w518-h919-no",
		title: "Lauren Baby Shower - September 9,2017",
    date: new Date("9/9/2017")
	},  {
		"link": "https://photos.app.goo.gl/JbS8ytv8Eb5OOeA62",
		"img": "https://lh3.googleusercontent.com/ltSHKwydaAFIe6Ft6r5KQoskLhKYwNEkFXo11Gs95pljnLNJ_5XBGnuROnrqrauyzJYHU_J7fDu9uQcY-qZ-6ejV_YBelLT_sGlwkF3EYO6mNH1IOSKHp0klK5iJCj_S4VX5A_2kRnmitdD4WlmiTXtc4YS0uiU1fEZzcWjSOYjKOfvKHZ0457YMeHjNSMVIsiz3myl6L39CHdJhAX2s7NhE09Z9TbKJ2pQq0FP0a8_i5HioUs-yfxd2ys_V3bvhAQjwepaFKNTUJgUdflpmkqhnCeGALGQMDCY_fKKwLMDWQ4bzDh8t6GWThpQdDyQFv4nOB7d6TMyOmJmm0hDEJzjNn-fEeTTvdOSYbM2l3c5x-BJsmVrKsijwTr0TTgpftPSBlxfeOEVapOY6eedsdTk8SJTU2xGb1VMQeGqGYSYskjunsiTlpsGPSJtx8AW9yw1IBOB3-EH9GzEPaEpOoiw43Ht4iBpBCf-iaIHKEubRjWYsdFDbmd-xFdd1HdpGkke72PGNB0bxFTTA2zPNVlNICNuaS0CBhuGJRtXNGN4IMvJ1xG54o9DWTPh03uPtahnyIAxv35HPZskOsmFL0KC54nFRxNQdMZZ4T1HcqzFswnJyhPAvaDZ1tgdKalibhtg5kkMcjoptXEGTookyljZfUeenUr7J7A=w690-h919-no",
		"title": "Silver Family Vacation in Santa Rosa, CA - July 2017",
    "date": new Date("7/16/2017")
	},{
		"link": "https://photos.app.goo.gl/vUvIN6iMXz4ZIoBn2",
		"img": "https://lh3.googleusercontent.com/7mL7BqUslo-odZY9JH3OchaouCFyoe1qHcFwTA5tlM9ux9Gdfc7UWpPnlqGwlcBMGMfzKN78TD4QO9o1_zSNsieavTY0A4f7MY0ZAW_U12dPkWyYNw_OHzRdRU-4KLYn-4lc_wBw2YDRR6PQDbgS0MB7GRuFhe0wnUoM9oV52YcX4WJGkwDIUV1UDQUl0KjYbO0OsIDpqmCCx1bhr9CeDNsbAsX_xB3M1qT0Tg6C47ZNT4RRlc9hI9IbUchtHwWrQXHpiJOuJjbHBLPXyA5k28nepA2qs65iLjwYCdb9ab1AoTbK2Tu5-lsK3ejrjKEta-WPIKbQ6wPWEikdvH99Afh01GXzN0tgHJ1zvFLMXMm0aHk5v8T71o_5jPACgvEh_Gcju3WZLS_gk8O0JzLx3VumRDYixtz3UkiZ3qRVSz2Ise1j5kO87tuw6f0xw9Ca6qk4OcVDSWCLZTb4p90HBOEG2EbKx28zSC_KTsSeeROn4iPZUnhdNzMgCPca3W7LJ6xsvv38Yj4ugsLxCorNNNr0PCP4XqPZ456pVlCsgSIJ4gdD43bPMhX3sI2yYtKFNVov8miKQGhaV1RYXXy9eSjlKXrZp9jA5f9yhJE29iKDaDVlZf8NthEqsAkJdSExJFRyc2ULFJCjpVYPphKvi6IhtNZlYuZFpg=w1720-h968-no",
		"title": "Extended Family get together in update NY - June 2017",
    "date": new Date("6/1/2017")
	},{
		"link": "https://photos.google.com/share/AF1QipMUxqYx46aTCgkQzZQabBs7cJNRugmUlRXBTBYffUvEAjsSVnzHh6KdRncvQ1Z3qA?key=RmdqMHpldHluWlNYSUJDN2RvSTZvVE91RW1mRDBn",
		"img": "https://lh3.googleusercontent.com/iCtoWU5HpyR6orybwuGTjCaONXeAaNjA_I8UsVnXf8OTzAoldg8eGxbvwP8mpm_u9E-dlSBntbgRqSfPWaBf_0wh2WjlyXNcFHbV7wpX-R2ofcp3cTRDMOdCPwBAhEqQ0-ezir3QWrYDr5ugu8OM6bIDhPm7vA-0Sm475YPsaLRQ5GridifSmqWqIo88RRZvTrtvV1T4XJO82fSof9IGrlGZLjXc5d-jUaha8w4DCOdtxkvaKh4Ye4AwdXHaLpcP1bk5r4w2_OkRBP0rpEgaE_vHN6P0wI4JRuyvuSq4Wq997eC1juOBhkD-nOjAGMGxVgkVdDzZcMJWktUhwekeHkhsJDtbyyVltPLHmFNVDKo1WA2RylMwBd-8KNLq9xK1chuGRZe25CXNUAMXJpZRJc1_AM0O_QO73cbzkJsjdlnqlxedBaR5Cs-o7xGrLdQZhQ9DTKw79XNz2FAZtxl3WkUdavsFwfptllUfRKbaxQXXDBLvLagW79Mm7AgNQrM4734RSMvWQ9SrOm9SmUEiAfqbOh4HGnPiynY58p_GARr_F_s9oqxzVDG-l4GZ7wOpfAKsBmLbt2xI_Bz6USAse5K-JkPT78v_VSC2MPHwEs3PRGE3uA=w1266-h949-no",
		"title": "Debbie Y and family visit to NH - August 14, 2016",
    "date": new Date("8/14/2016")
	}, {
		"link": "https://photos.google.com/share/AF1QipMzMWqWC5ncFOjNX2sYIDX-k4YsYLgPYFuZnZiVMyPiCVfX_PsyUUP7rhodEFDGvw?key=WmllWllCUW5SaTRnenBiVllsZDllb2dhaEFvWHN3",
		"img": "https://lh3.googleusercontent.com/QCqaiFqAtPcDLdtlDFtiUpWjUWr_L6cJ-5WbSUvetQO5ZBf64TRv_kqQKjrgQAmKtjRW2lZTQjPsLkK-pVqZIN2LK4CdCfCqveNBHfO8cAuSw4d87fO99cFT-8Z2bGu5NPRDxxZy92-_eultBQWs9mQHSkip6r3-jj13073FNr_xcW7Q0sNBzo1MlFMPbkNlGc3Bj2bdAXn9HUeWjkgAEAaZ3ILtnh2yvRkt2KNlJKBIgfKAGFp-WpztbzegosY7BuCekz0k15KXd7GZZ5EHlgiq2399bo5I4ROa5NxeeRrJZZnwxMQfkxJRmUwPeY03LdnwBoKouq2ecFmMgLQ45xn59O8RkDXjplrnoWZq9VJKouoVhVQf7JRVioXP-6ejZVfvRe6EpHA61ImTtxxw27lAzMEsWryPpbWGq87PYvgsUYSHaXc2dGlp-c7t4l3zhgEmXYPWtZLpj2IRt8sId9SUZ1OnSt5VeEupgt7IvOG92pB0WiYhWk1iOrHWKaJQmtnoWqrWOcwNoYtXkinCANSYGbfYHehU9_4f1mkao6qr6XjCMrv4HHtRrkCff5XSdHiWAD_SzFStv_9wuvhIl2N7oQ-srl-oD_JFIKNOT17mNa4hug=w534-h949-no",
		title: "Amanda and John's baby shower - April 3, 2016",
    date: new Date("4/3/2016")
	}, {
		"link": "https://photos.google.com/album/AF1QipODg661f7qRIbBQdCGia_FDCfab7kunIYbpfNYe",
		"img": "https://lh3.googleusercontent.com/Ks_GtdvO4yIK5HaSTYNwdr-7fqdTqiDzlbpUWQraGevjWP2TYD1LBIe5OuGEWRah_PySx1kN_VfBi82_R5q4bFwplwJqwA4tOA0VfN2u2JODCsiubklFiwYB2BWNWqVEdQXvabAfoc9UGZ4uHwrZOoZonnppFmc6fO9T-N77FoEZKkeIqizmo_-j0L1Pf1H5AFhxadQ34Uf5vPIEifdQWWq5SYwXFVWFkhEiZ9x_vFCzb82bsF7d7kxpp8HHQ9hyyh55fId7hgfXJEClcXdEJk7cqyUGnz5qSuLQKbULvP0N8l90iRtMFbjt4JB6rYqmx-BsfiqEGgAbh8Lmew6Ir_MtJeTGa0AKZmRZFJ6fGABd2NLDKuavFLS3J4GzYRWBXiEM8lUw9aFfouMA6pM1HoQNro2MJbOi5DjsRlwpz1XyvfdhxAVt2i25Z9yXAZxe-Xt23fA50S2yTc3JdV88Vf73fJhCu-Ga5Yj0ZsrnyR6N_Hd3UZcVuZ1e6loYRQuuwlusM2YS_IU_uZfSS0cHhVbtcIYufsNpfLLADtI5VO1tmJCMkzHX3cUzHQfC8f_YaryFKM0h5b-Mew72Fr8JV-cCGafZrIn6PZQw6w8r-kx__TrUyg=w1688-h949-no",
		title: "Dan visit to NH between graduation and Microsoft - December 24, 2015",
    date: new Date("12/24/2015")
	}, {
		"link": "https://photos.google.com/album/AF1QipMK9OdLI53Fwa6MA-c1i80lQbJk9yZ_MS_TVJ5-",
		"img": "https://lh3.googleusercontent.com/jC_izFPt5C3YxLbJ1mB5H-rL6pPOBEZRVQcSumOd1UY5sd6-bQt51yXdK1pD_6n5oQ2dS44S5lDNk6BWZWlhtuJ0XpYFTiYBHhitWNFkoOJ0vdAh2HQsYbnFP0uIsv1wMtvizu_dmyeGgHbEFKCZMtKOWPVQkxrzldb0h_0P1dU2QzIvTnxmUtzSl5ozOcKRNmk4eaicfTl10nbqs_WHun84DHF4E3dtVn45-r0xM_kyIJgv6_Y3N6HG71wz0m34GZdmbabUhPM7Df0HWHm4Qfw-yHU75bxASQEfykwCg5Rh91rjKYQ5nEvhmE1lXHMWMSppmdhO2m0arHl-JkeDeSY76OH_VIuliIDpElZf6HFBBzWXsXqENfGPpiUi-j6I1nJCpCo2KowOB4Z4NTLjpkcQyp9unsH6rBU4wC3FmxxBrSAQBzhMleKFy8g_iLkJjvkTpeFjwbnxHulCiXlhK3HTnaZxaJ95kEGIlWwKYW7cy0t8ep1Uw3CIb00I6rhBlQlo9Ymw5Gky-XRFEsxgrDBinyNkKr1V0frh21FNKS5c9c6PKH7rSuRm8NfvfMZx3QiGSilOcx5c3zk6TvhjLzwCW4-ljtWRhOPMlCS-dLV5qWZ39A=w534-h950-no",
		title: "Visit to St. Louis - Dec 16-21, 2015",
    date: new Date("12/16/2015")
	}, {
		"link": "https://photos.google.com/album/AF1QipNxSaFVRSukPRSzHQYOfbmIRTLqxLgHRgWhgKmY",
		"img": "https://lh3.googleusercontent.com/uphkwcS0SuEgtjN4184s_vijkoIBkrN7AP1q8QIF0beQ3QUFqd9e861-D7K2pDFCv122PKeTrmKoxWVxIDsLdKHf5xX7iaZTnlXEf4raMEu8NIZgJOb-OswQ18jC0jUinqxvx_dP4w27SdPjRlJilgzysCq5zAvTP8_xk3ZwbDP9P5ngjMtn7XhYNc4C0rs5rvmb-DsuHpSoBmLdFC6re_Hg--vBS4q4cjknaD76vOYoGcg-XE85Aozdj-089nNCu2ymYl0dIJpFfa_DnStqACFLn6OMdbcPOeDDU-zDia2o0T442QdThS0jB030_2IBpmwcB6jbQQf7UbeScIQW7NMv_XogAZJho4z3YLK1I7U5uSHMtIrouJRk2R3GE66nUt3JXx9oEkIZhni887aoKx_aZ8d57cSMmqmdej_EX-jaKcsVCH3IKikKCVTLnnR-tJJBVmg4gvMlAzCCh5gOggVGPU9YGgGp1QMuSg-ruS3ISAm_WO8Df766jXQoWhgFEU3a7QTW2bZoi-w3-ONWBVdJxZCFn0EeqGxGhnnuIXJyfhnJakhwdxGiE8eMRP6EXuLjW9RIkjMDFoS5NQIJ79WEXOmo5ZrQjMeBIw2gRPMgKk49SA=w534-h950-no",
		title: "Danny college Graduation - Dec 20, 2015",
    date: new Date("12/20/2015")
	}, {
		"link": "./schwent_wedding.html",
		"img": "https://lh3.googleusercontent.com/WxFYLal6BttECrnKN1s7doXi1vtDVBWiG94yJrO4rP6fEcQowl0fLMAJ1ACFVeodlNIiYQjR70xoPhvRhjhpKZxtpahrql1QGHp-QC_WbdUOTo5xLoaVvkNynTugLX4AFaskJJz_vbQ7BHJnBoolFApKOLGh_3ryZziF0lWndiHPNyQ-oOmO-5LcQWqHvSHBsCOKtfdqm_6yuqVkK2R6XtvFHY0m1WUnE2CCYYEmwqssuHFQbvSBjMDfh3AeU0TTunjw6y2YCbYeVo0edZhM3VcYV_t-fq4s26Pa4Kr4A9zmxNaF53Jf9emsPsf9jNHJJXYZw6NBn2hGv48SuX-YQEoUDPJR4_H0qpmfc9GeXPBOf3Z3V1xXHyXT2y-quZDpc2pVOCkiyJzBKXeTeU5x_D405Iu0b16tM960Z3BBGF1hegAYPtKnQTrHtopyfpQ4nbBC9VHlj6XF4ntAEGZb4C9AhQ5hcy4qxgXRo3C9_8Nhqz4_RDJy6O0zgFexARaqvUVoOXlVQiM5lcHQBLojIjViKELLA2krb_ItK042ZQQEmqX7KgzsKkZGOBj3ibzsv_H8NeZ8fRqqU45plzL2MNHITHibs_GDMBu2y-JIdv_-X8AkaA=w706-h941-no",
		title: "Julie & Bill Wedding November, 2015",
    date: new Date("11/1/2015")
	}, {
		"link": "https://photos.google.com/album/AF1QipOmgcqtMd3c9M4PIETvMEIIoyALTy6XzcyP9stp",
		"img": "https://lh3.googleusercontent.com/E8SFCCkXLH4jra8CSNqf522D_KaIZKzUkWYb04RhlvanrrER-6FQTe2H-RhAFr5MQDmAF4UmNS4RwfmJjIvS9VjPOqqbHzqCSuhclSoUP64AWigqy1VhmYxjfEQKCDgXyLMimPVbsuomrECnSNX6Hk-M2aIi_9pLbjtXsSxOIiX3sS6CEatYCPkZL-j8sTVfF5Bh50NcpvFFi1O1821bkn8OYdcije0lQd4-k7_n1XyuBk-1lvW2PvdkUTs6rz-PeAsgKO1WQi1OBaPjAjR5SmI9TDDaK-s9qkpkAeSw1cUrHfq3cyJzO9FxeHswqXPih2NGfVIZ5X_QesUJ7GOEx82JTswP5E1yPaUvlkJTCMGlXlX9rYhZ7FocD5GvHpzwwKbAojseTGh2byR3lXukuqEEPQOSyBxsFh7ygSI58BHeQoegJjjFj5C0J1yBEOZgeDmvw0keIHVt8d65t3azz8naYNDy98XGMe0rQReefqBMSYX-1ptqc9exZdUbDKOGQW2XbzNmrlvnPvOODo51pZURptflalyB5Fw6jjrOm2VKdaZZLU4mv62UME4Pq357dm2VLiLTRxbwMFb3hCFxbgRaOe4sirwf4zT_o_Zzx5Z2DWK4iQ=w920-h518-no",
		title: "Steven Harkins Graduation party - July 12, 2015",
    date: new Date("7/12/2015")
	}, {
		"link": "https://goo.gl/photos/RRyCM4UA6NkQ2J9V8",
		"img": "https://lh3.googleusercontent.com/5K9SzwBr2G2mBBiiYRdM4JKZjUGUXcxAcd7VxOv4S6Dq_1XavMvHCrv8CbBhjKLFUrpF6Qs8obxs8ju0vON9ofmN8JumBzoKrPl95sGgISqerpy7YqcYY0R3AZ64BiQRPA3hJ7sM-clU_KH4LReULWMUaH8zTKeoYGM5JFFtplBmukKD0lOAYvBpr8wyOY72ERRTAg_HsVizJtxOWzEUxqpF6r2eRuYayG4ajQpmPOOjltn20MeUNwOXFNgUkSl_BxHi46cdV4VlwtvoPODh276zy5YUsr12OBstxDK9tXUdJuabbso5miFwkIQ-pGRap8ux3hLHgvci0xn_h_X9qKez2Az6y-31g03n0RPS9PucbgIvgHWeLJKIVzyhGcFrfLjeCLqjOY5ayw3h0f0kuNZxDrStvauJ-ghaaINPBKAEgD34r4TmKAbaJTj9CKEkcdmkFOvmCcrYyXMwHdRFViRD_AsnYTD67XAmqk4x5HSSuU2Ra7BhXNFfIc1etm5_eAWBpGqfxad2czqpubNmgs3SBFUe2skJ5X_fukvQRiPiXkaWBF3ZwKKiS77KpCCYPUD-HlDhrDaFrMZCF3NYWcsyRJzpJHd49a9g1BZ6I5YSND-ugw=w691-h921-no",
		title: "Susan and Craig visiting Weiners, November 2016",
    date: new Date("11/1/2016")
	}, {
		"link": "https://goo.gl/photos/TqwZVd5s3XDro8bM8",
		"img": "https://lh3.googleusercontent.com/tkJZCkgLabFtw5oLlzR2KR3Lp2EtfqiVvn2m2JIFcmtfRpdYN5XhNnT8JQHLtXdXnGnwNWunNpqN0b495wQp-LppjZz-RxURRX9piPX6Y6RRVcaI9RdR6esT-cC0ngcaAHgLSlB3urRMKzkILD2gwy86XolH5j5kV8C9VZj9P9Zevyeq-mhSuqHObO2r2CX5zUkfOKr26rpmEwvpLU4G4LOLvWw70o--CMtyxS3y9iQ0vptQGS6wkWYGxLn6rUtREAD96o9IktjKFC4RYdgBy3LZpUEQqqUMrf2oCchGABMfoa69vYf4TWBN_lxEF3lLauQIykSI8u_ne3fHvTLgUEh_lO1ec-kd6LPwG56Ax0OoL4G_L2cPjYLvAsH4hB3LVUojY9vcn6yhjDFshWPvKEFAEXvajs6CFkz3mo9UTaoPT8Q5JZNt1eN0uSTfvYOvUGeQs-WuvoIDFPj5EMxU76pdJucfPl66UhV4dzSM0Qj8UlsAz3tqZN-PD4A_6V4wUYr_j6-y4Rex8rzKUvE41C8x7nuLNnj6MhOFJWeWrwZgHr5FgUTpV0a031vBveka_sgBn2OrnBl63ZKtderLvUscl2kOxUTGSdXb6ORop4a0Nkdd9Q=w519-h921-no",
		title: "Susan and Craig visiting Gaia and family in November 2016",
    date: new Date("11/1/2016")
	}, {
		"link": "https://goo.gl/photos/kGxWfaEyLyASa1rS6",
		"img": "https://lh3.googleusercontent.com/65YWolJE-a37lCLQ2dS-2Xdbt2T1_8l3OFwPUP2K932N4DMa_dIjXgt_1triKmKrf16XlZGGSe0sYQjUM1-8kt5GwhWJD2mBaRRK_QqgT5G2NL37IPk5NcdcfcpHcpt9viOst1aPlsq3vTFfZG4Tu0OqDGq5i_eE_BVjBidXxowXOpOQtYVTHPl4e_ZXMGPZ3L2wL2jXtl9VObryQl6smVRiW_aTphJ7Z4jwEobe3r2g12hfTCFxHg2TWxEkku7DD26vfsIEjUblW9UfkUQvgZYXXo1svsW8_Q5DL1Oe6KMkYTYZ0ssOUp3BHUmn60N-PQkM18q0tEcyVIMY44jSiOzwEu6jmynF-lDbP0EV8baTHA3RuekF49xcgN4Nh5Su-ka047psMcGILRATfXd3fBvdQmMzi_VM_OJmZcfD7nBTuZeJPRXaMGInJTVm4iMm8GQJqdAL0N9MxkgRmwF2qUC0QGxrKjRcqIr19DccoXvbaunSaJGt6QsbOUudAXosDYQLA5THDtMQErNBsfLLOCkfp7KJpsINCgFSPSweZ0x2aCucdTJMRcfmBuDiuH1WjkFR9FWSRNzV6js5XZUn3DdfaV8uI1_VW0G61AbS7EpqeUcB7g=w1419-h942-no",
		title: "Alaska Cruise, July 2016",
    date: new Date("7/1/2016")
	}, {
		"link": "https://goo.gl/photos/2S8Ete8Ehe9HHv4E7",
		"img": "https://lh3.googleusercontent.com/QchU3_sUhA-DhP-Ettnm0bIBFd6BJc8cw4DsrC6D-W-UQhkUA-wDq2OAcxlrZSPfNJzVeR2z0AWQ7poBwrcgFUV1F8YbDU-Sdj3hJB4ozbphW9WY7w8z3rNjyYrnHwHqxpbWNUOf1oPa9aROB6c3VJyKXabr-SRae2KUdoILqkYwS6MEboKphV6SoopqQd859gtiD6dtwPFfFrCJKd2dlroNFG-3Yrtd_WP651e3B3qZuAOUAT28tts1iAtVvxjYl2GWUbQg1e85jgPdyGByUjRdnY3LZsRW91Q8JCLC4DDjIU2jk_GcVhtR58Qz2jnfq6vlTQdopH3RKNOXfanuJEsGH5IwI-CtDygtC71Fv2MK0IACQT6rHhAwXHtWp9IznpALf8y1bLVi_pcHkyiYpUXup1FpIu-08ZPREv1z5CnBTu02QjHOSwPzvqQx1HCMjcacUf-trSfFyHiGUvoJFxI7mq-Fez1_4Tr5H8uQ0pQUddFIfIFk-Rm-taaUVYe-o1x2QmciftaoKfyOBtEYOGYWB1vC_pD5MlA8epLccAjKccZJlu6CAZh9Oke9R255yU5UJWL7vYqffTaVJ90uNx4ade9t6DmFm9MpdIEsAueKO2AwwA=w707-h942-no",
		title: "Susan and Craig visit Danny - August 2016",
    date: new Date("8/1/2016")
	}, {
		"link": "https://photos.app.goo.gl/vF9m7KLyhJyuLQDP2",
		"img": "https://lh3.googleusercontent.com/vtVVLjpbJ-0vAv7HHM9gMZb4xbhQG_4dYh3HwmfXkFYAV5mFd2ayKFPPDMFkNNhSA-KqV46VbGAMTZGsWYbO4iXJeRmuR5-BdEZ7rDtaTOq-5grFVjGyrbUczDZcEsb8mA7oJOfk0iQrz9tW1aCahH4R_eYDjo56XRwP-aXzmykXlljwqnRJ-FnMsF_VOZEgAQBTPGNcm_EXr-rrmvBq-dC4GvsSD8ySSkj1_8G0OEgmQ-uhndL2Yg2msKEWSA6TOCIPjBA7Ul8sK04fOu-PPFTBMWcX5v4l5FKmHoTaczqYQbhb4mQtiNnvZyFXNEtmn_tci09rVbgAClYf66B5Htyh5CTgM7iCFeOlTyMwtOaIULwsS5nYGTkPlNg08lopjL1Vd-cM2KKgiIVN9cUdlFN2GATY9sSsf3Y0dIQrcOOB0yi3n48k9OZoxodbPOnEAvAWzjzIYRF3b-rfk1FwtTGni7noJsSmtScIbXT9B5ma3hY0NNWKJOEOKynvP01JU4TfDOTW5piEXYt5r5Z-tpgJj0vgXnXMW-Erp79o27E6oKhS0LrTwbPSlu1ZDp44nL0Q-SCy3q747zJObWf2a1NJUDSv9vJnNbjuZJEktFU3cJfLn2HHBoxFRzafR81Azn0YTkdE0yrSozmlpYp4KQ8tQXoo9QAzcA=w1470-h828-no",
		title: "Julie and Bill Engagement Day - June 27, 2015",
    date: new Date("6/27/2015")
	}, {
		"link": "https://photos.app.goo.gl/fAGWtYTfrnZo9Ndh2",
		"img": "https://lh3.googleusercontent.com/cDBHOq3lSmwA9FoSuVf7pYp7pMiL2nJ2wCF_NcUVVn6BXJqFgykfKsydZlethS9mw6QSjpSHKY5SwonXeCUILgpgD0KsRItJnoe1r98NBMGsVt0mwmSg-J-YoEoKUK9y1GROZVy_4MavDzgcOyTNuFm4eCXCqIV5wp4dUnQZ9Gll3eJmu75_zPmZm0tADE7jg_zRRlWC-KSw1LqFmMC6m7rvqLv_AySJellO-cMIvjjnnIZWfyFx4XRsZoTXJcgPARNsEODlALeEy-n9dw7ZExy28NlXd1ftrgHn4MT0L37E5MIHFkITCsRFbvm2xoDHkCGNSco6KJNZxSpBTo6_AVB39HpYaiOCNMqVB2tsXdO8_c4E0Rag1NyNUaKugEqXEQHNezSZmwXpHiTcwAPXyHWr4s7PJ0aqmLO78R4lqchsTFUFp1ACxO81dgQyTHCOhgU0iqMqijjE5Ww2xNzwLCYQy8gV6E31fMfWa-7ukyQ71i0dw_bbQ73mrY7g4XKrQVN_E7q459UqKM3s06bysmwG3wl4ELey5iqmMJOLY60BB7-JKpr0NV80OMD0SZiuYMcaWJDeqr3pCUolEGxUf_0GlezcVAZfYR9PtcWcceTQXApXPeNWC0Dw3OFY3n2NRhNmga6BnUsxXNRVcW2z-f17-HSWPXUaeg=w545-h968-no",
		title: "Susan Simmons Reunion",
    date: new Date("1/1/2000")
	},{
		"link": "https://photos.app.goo.gl/1zEsqaZWXmtWdZF13",
		"img": "https://lh3.googleusercontent.com/nyh4lxxB_OsHgXqMI6D57daFe121Mzz7SVIiQESBTogVJDRsTmP9MxhXdecRI6JLvT_ajVF6yQrt47qI828Vv4rOdHOYI9wiHiUQ8-3hOb-MHN43lse94Z3an52vvFawQ71K67mq43EjRRw0UKCkkQoQV3DtcbGjHoJTqWD5dgt158EPY950rYZaA8skkA2J8hr_WDzFgTJtmrl3ahaxXcxPOrrbI8z54SD5ueWzfT6Tp3wFEEFInKO1dx7lFDVZxbF_icnQwUveNpZlcc0jeMUWbBgQNMBs4XAAir6cTDr-8gqfXKgSa7AlPwAFw02YVu7khYOpSinBwyFGfNLjMY0oplJ9JauXrWvl0bZWoLE4fosQASmyvHl16nK00tfFhc3ATAa6I65bmi-DXk32vNITIIFQwXlj2wAeEEnvQ2dK4xU_pty1_d4ODIZapOL4XuofhQRW2yp1HWkeDbcuZW1D1-Qy4AlDtR5WDenJalaUutooiYsQUnBXp7L364QftFzcDmnCpU4Q3M0-uzNvbI8OZpRhTLSDxkdYCbpYenTxO-eMviywQPiobSFCzNIrJrypdbCtwn8FyXoaIz55w0-iRE2UkqxwDhtJbo_y=w1470-h828-no",
		title: "New England Square Dance Convention - April 2015",
    date: new Date("4/1/2015")
	},{
		"link": "https://photos.app.goo.gl/unmyKSOPrTQergFL2",
		"img": "https://lh3.googleusercontent.com/mYMSfDxmyoPDs5CVYFmj5DfWSWEV08oHQt3ilQE7XegtjV_TiB-zL8saqyuOfsMCeOLshFbLGHN1pcunithXIiEkgLtp7AYjNw-KYKt92L2yPz-wCPCvaPePgbV7U4rk9BqbcBfJyoQM0gDDSHlr1qvLdIGzAekC2IgWsaFVvKwnx_sPNEOK1pEnF4qZj-EiZ11JWUJND-BQDI1oyZdbJsHNks346-OfQUJRHtgn6kZLdThJQhqMQPMULxL4BkP45I2qlEF0GRC42JZ97qdTch1XmhUU2FUMs1O3ioMNW-3e8ynWIyYQil1YhDe2PWNOmgkdPEi8G-byXKHc73bP7YLdpRQKhrTBSQW1xSjhUyoZknxHXnl7J5tslPw0wErJHcmz7MTO-L0lQPZ_MpGoSBBUDcHjzQuhUyM_Bepx3E5b9bkpWIv7wFQZo27ByWf_rYBfS6fS5RhpK-AKQNzxQbAkQjUa_LV6sQPZ6sB02jcsMfr-TjwCDn-o12CLJ7BP7-CQpH0DNsITP5J_urkZUGdNSjLGTueCC0g_gbVDcz6ehEFz9Jq7wnI_TKVplrz7XoFuu2UGm7lsAXk0d2On9JNAaHGcMbz5ZwHBMYdWT7xm_e5QqekZzLyNtWV8tFjXa1K_ibX1P6JzQtX2ewSp_PuFeKy533uqGQ=w542-h305-no",
		title: "Visiting Missouri - Spring 2015",
    date: new Date("4/2/2015")
	},{
		"link": "https://photos.app.goo.gl/ECNrps2SsoMIcAC33",
		"img": "https://lh3.googleusercontent.com/ndTi-uiBUNXHk3xVqcd-OtN9BxzQ7JFsZRbOSRnxbidoCnc3J10dFhloMS0ZGqZCb4IJYS0ce-R5UkAaQW0igvv5ro1ekicV29id8fH_5OKMRN-fDNLNAVGNyDSPd_zcLcJirRUNJNXkH4y-TAWWZGkDTBNu3QP_EYR3kfaMPIx4P0Aav8hRMVE9o4aM7r9WnpjGrtq_P5-4OLo1OF8CrXd_76xeIL5d8stRnsXe6bWhWN5CRwY5mhFrnAJogr68zpHSIMVjLSGujqMtpfw3YT2S5cGu84ppYJAK8vy7x_d5ktibVcen7-J3szhU9gC2sYTanaZ5OLc2s0f6xXGiXh7AzG0G4ugq5gSasmyGyL-QjmYOgcE0mBZqZ3tiAc0JgqBjOshQxRXaNLNV_vRWRsy9XxBeTmfcIB6fmlylzMeWUAQNFN2ngUrXcLrjuBmsk0KGinitj9qFg6pVWYwNVfkAyM_Qeba-GFExB8VwMXdSY6A2yRdpj9PwyrFgR9v77FxEoLWhS9xaNLm9mp9urccnYGk0pIx94O7yK1Ey-qcuU5iCwOg07I8EA-lMhE8xj4DIcs_A3OzM5NUgbdjAVufeNOwI_p2ZEpP4JfPxq7MVi5X10uKI0MvxRpvW10Z6_fgzUoToFrRbZVB4YLSMO7adA3VuqUj5ww=w542-h305-no",
		title: "Craig and Susan visit Dan in Houston - NASA and Beach -Spring 2015 ",
    date: new Date("3/30/2015")
	}
		
/* {
		"link": "",
		"img": "",
		title: "",
    date: new Date("1/1/2000")
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