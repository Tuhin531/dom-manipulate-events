document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log('apply background');
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = ' lightblue';
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    // console.log('apply background');
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
});
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
        <h3 class="friend-name"> New Friend </h3>
        <p>Lorem ipsum dolor sit amet.</p>
    `
    friendContainer.appendChild(friend);

})