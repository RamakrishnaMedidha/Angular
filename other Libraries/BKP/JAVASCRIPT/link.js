function urlfunction() {

	//var proc_insta_id = F.HIDDEN_FIELD_EFFECT.read().split(",");

	var url = SERVLET_URL + "/Pushinfolet?id=" + proc_insta_id[0] + "&proc=" + proc_insta_id[1] + "&instid=" + proc_insta_id[2] + "&submit_back=no&flag=0&emd=1" + "&wrapper=no" + "&from_link=yes";
	var sOptions = 'target=_blank,width=800px,height=680px,resizable=yes,scroll=yes,toolbar=no,top=0,left=0';
	popupWindow = showPopup(url, '', sOptions);

}


javascript:callOverrideComments(metricID,$rowSeq)