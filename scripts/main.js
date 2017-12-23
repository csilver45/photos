var app = angular.module('photos', []);
app.controller('PhotosController', function TrumpController($scope, $timeout) {
	$scope.albums = [
		{
		"link": "https://photos.app.goo.gl/6RTXrTsAdTy51iN32",
		"img": "https://lh3.googleusercontent.com/AmU1g3HtA6J6-JEGCN2uXqyjJytHyagHZiZ3mrB0ENmy8TcLzrDY7F-Bp1dP7q0UZod-y2mbQH5Xt5IDokZGs0NYUpbWKq2PvaBbcLlajdpjMqrlmCyvj_sCc74t5_O40C5Qg_IYeSSIyn6svxKgj908rg5VAf-fOElm-ndaUpkEWK5tqWpmhs3mYBoxqit2xnIonZvtM4ucu57Ck6ImR6vXJ0fb0rrXPIdYBgm-fK4tNU8DHGAV2M8l9ppkX-55huPugzlZzy4y0QhTOJgaWQWXIzQWbL9E6oubp56Zx7jqE_SXjlEQNJjVxm0qsz25jLWZX3D7JayiaeAWSxXsDhb12bROon2VsFFu_qIXISAG5vh5s89bEN1-V7i0Khet0wsGBAhgu1MJqK_kVnp7s-Mt8Xq6qLvGYMgzb9bq0h21xd7LXQ8kDCO1JHnSzFnkxC1KFy2HbrGxstpql7rNxyUqaCe3T7_MUg-jQekTRQSLxAzU0Kb3cNl1Q6oXk34YNtVim4r69WKZwIEB8qzMdGgEgahQkEdGq-WS6bzwBKUSKCGy4qGhqvZRKdkmeN5pO5XY4v7MAl99WrnBr2ckPKlSMPELz0wxww-EoVrZ0MeRR7DaquGAFP509lItwSqSF6-Mmjb8hKfIa3lrR1tQj1qTUPSutDy3ZQ=w690-h919-no",
		"title": "Schwent baby shower",
    "date": new Date("12/2/2017")
	},
		 {
		"link": "https://photos.app.goo.gl/Ql1uaKDAIy2peJ3S2",
		"img": "https://lh3.googleusercontent.com/xUJWEHnakJH_wB0wOJ4-u8y7nU44SxpH9fgpzFjmfUD3UUWNdi18Qjgx-epmMUnRI0qujqE-uadLCBFFHS4NxfmollRqdpUxfZuntPlTKez4AxpUlmtkzUR52_zgqvK981wDPk9ie1jjOXa-aCj4bjY99Ct2927v_kSsF75DZToo46glOzVFzXEiQ8RgogCtMXC5xRi7DKneaOGB4fLZR6G4_6zSzCQpy75pmeJmwAkiOpv6yqCd1g93EdWD0XrpjDFpM3had3SMYlQf4SedMko9JvtNyJubhqrCAHktMvapeT-zFW8ufR2bqQN71loIArkmQwgcNShuphsMhfA7GDRUQb1RBmVPQ3pB8OUg1NaiXHaviPXHH7lCTHmuFvecbFTBsqcIVqAB2Noz0Udr7GINzYDUxGmBZtDcJCosgjXNGkzHceuBrH62UAn-xmuNgN3UDuCggcILQuLLtTMaIL7PQx32w6UXXLIGdHPCnWAqOgVi_hR2yjycjAB77SVIxe-r_-mmsmptowplJdwswsrsnwck7dvcG1DmWQxE0M--6-VUXMu93Ujfd7_Y2pmIpcDLimDtLbVgI0A3PYDEAjfxPGeckfG3b3BqwzuO2nzBbLYKHXoF0vr3R2h-NqhuAL9jzTUzi2PQZWiGtItepdkQVXBwrNs2jw=w1634-h919-no",
		"title": "Susan and Craig Thanksgiving Cruise",
    "date": new Date("11/20/2017")
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
		"link": "./wedding.html",
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
	}];

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
