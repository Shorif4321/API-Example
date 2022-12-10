const loadFriends = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayFriends(data))
}

loadFriends();

const displayFriends = data => {
    // console.log(data.results);
    const friends = data.results;

    const firendDiv = document.getElementById('friends');
    for (const friend of friends) {
        console.log(friend);
        const p = document.createElement('p');
        p.innerText = `
        Name: ${friend.name.title} ${friend.name.first} ${friend.name.last} ....Email: ${friend.email}
        `
        firendDiv.appendChild(p);

    }


}