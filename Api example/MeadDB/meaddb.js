// www.themealdb.com/api/json/v1/1/search.php?s= Arrabiata
// https://www.themealdb.com/api/json/v1/1/search.php?s=rice

document.getElementById('error-message').style.display = 'none'

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searhText = searchField.value;
    searchField.value = '';

    document.getElementById('error-message').style.display = 'none';
    if (searhText == '') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searhText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data?.meals))

    }
}

const displaySearchResult = (meals) => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';

    document.getElementById('error-message').style.display = 'none';

    if (meals.length == 0) {
        console.log(meals.length);
        document.getElementById('error-message').style.display = 'block';
    }
    else {
        meals.forEach(meal => {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `
                    <div onclick="loadMealDetails(${meal?.idMeal})" class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal?.strMeal}</h5>
                            <p class="card-text">${meal?.strInstructions.slice(0, 150)}</p>
                        </div>
                    </div>
            `
            searchResult.appendChild(div)
        })
    }
}

const loadMealDetails = (mealID) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data?.meals[0]))
}

const displayMealDetails = (meal) => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-Details');
    mealDetails.textContent = ''
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
                <a href="${meal.strYoutube}" class="btn btn-success">Go Youtube</a>
            </div>`

    mealDetails.appendChild(div)

}

