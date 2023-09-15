window.onload = (()=>{
	const doc = document;

	let profileItems = doc.querySelectorAll('.group-profile li');
	let arrRandomNum = [];
	profileItems.forEach((item,idx)=>{
		const num = Math.floor(Math.random() * profileItems.length);
		arrRandomNum.push(idx)
		if(profileItems.length-1  === idx){
		 	arrRandomNum = arrRandomNum.sort(() => Math.random() - 0.5);
		 	arrRandomNum.forEach(function(it , i) {
		 		profileItems[i].style.order = it;
			});

		 }
	});

	const apiUrl = "https://api.unsplash.com/photos/random";
	const clientId = "DR8lRpvtS_7CBKoxKZ0zxXBnp9oR5cA3Uo7r97Xh2qk";
	const groupNewsletter = document.querySelector('.group-newsletter');
	const imageUrl = localStorage.getItem('randomImage');
	const tempImg = 'img/@temp-bg.jpg'
	const setNewsletterBg = (_img) => {
	    groupNewsletter.style.backgroundImage = `url(${_img})`;
	};
	if (!imageUrl) {
	    fetch(`${apiUrl}?client_id=${clientId}`)
	        .then(response => response.json())
	        .then(data => {
	            const imageUrl = data.urls.full;
	            localStorage.setItem('randomImage', imageUrl);
	            setNewsletterBg(imageUrl);
	        })
	        .catch(error => {
	            console.error("Error fetching random image:", error);
	            setNewsletterBg(setNewsletterBg);
	        });
	} else {
	    setNewsletterBg(imageUrl);
	}
})