import axios from 'axios';

// results
const errors = document.querySelector('.errors');
const results = document.querySelector('.result-container');
const activity = document.querySelector('.activity');
const accessibility = document.querySelector('.accessibility');
const type = document.querySelector('.activity-type');
const price = document.querySelector('.price');
const link = document.querySelector('.activity-link');
const clearBtn = document.querySelector('.clear-btn');
const searchBtn = document.querySelector('.search-btn');



const displayActivity = async () => {
	try {
		await axios
			.get('http://www.boredapi.com/api/activity/')
			.then((response) => {
				results.style.display = 'block';
				//console.log(response);
				activity.innerText=response.data.activity;
				accessibility.innerText=response.data.accessibility;
				type.innerText=response.data.type;
				price.innerText=response.data.price;
				link.innerText=response.data.link;

				if (response.data.price!=null) {
				document.querySelector("#price").value=response.data.price;
				}
				if (response.data.price!=null) {
				document.querySelector("#accessibility").value=response.data.accessibility;
			}});
	} catch (error) {
		console.log(error);
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have encountered an error. Please try again.';
	}
};

// handle form submission
const handleSearch = (e) => {
	e.preventDefault();}

const reset = (e) => {
	e.preventDefault();}

searchBtn.addEventListener('click', (e) => handleSearch(e));
clearBtn.addEventListener('click', (e) => reset(e));

const mySearch = () =>	{
		displayActivity();
		clearBtn.style.display = 'block';
}

//start app
mySearch();