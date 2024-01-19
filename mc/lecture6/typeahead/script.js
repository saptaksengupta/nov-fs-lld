import { debounce } from "./debounce.js";

(function (){

    const inputBox = document.getElementById("search-input");
    const suggestionBox = document.getElementById("suggestion-box");
    
    function handleSeach(e) {
        const keyWord = e.target.value;

        if (!keyWord.trim()) {
            clearSuggestions();
            return false;
        }

        // send the request to server with keyword
        fetchCountries(keyWord).then(function(data){
            // tranformation
            console.log(data);
            if (data && data.length > 0){
                const countryTransformed = data.map(country => {
                    return country.name.official;
                });

                // render
                renderSuggestions(countryTransformed);
            }
        }).catch(err => {
            console.log(err.message);
        });
    }

    function renderSuggestions(countryNameArr) {
        if (countryNameArr.length > 0) {
            suggestionBox.classList.add('visible');
            suggestionBox.classList.remove('hide');
        } else {
            clearSuggestions();
        }

        suggestionBox.innerHTML = "";
        const fragment = document.createDocumentFragment();
        countryNameArr.forEach((countryName) => {
            const li = document.createElement("li");
            li.innerText = countryName;
            fragment.appendChild(li);
        });

        suggestionBox.appendChild(fragment);

    }

    function attachEventListener(){
        inputBox.addEventListener("input", function(e) {
            const debouncedFunc = debounce(handleSeach, 1000);
            debouncedFunc(e);
        });
    }

    let endpoint = `https://restcountries.com/v3.1/name`;

    function fetchCountries(countrykeyword) {
        return fetch(`${endpoint}/${countrykeyword}`).then(resp => {
            return resp.json();
        }).catch(err => {
            console.log(err.message);
        });
    }

    function clearSuggestions() {
        suggestionBox.classList.remove('visible');
        suggestionBox.classList.add('hide');
    }


    function init(){
        attachEventListener();
    }

    init();
})();
