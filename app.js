let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", function (e) {
	e.preventDefault();
	//Get input data
	let word = input.value;
	//Call API Get data
	if (word === "") {
		return alert("Word is required");
	}
	getData(word);
});
