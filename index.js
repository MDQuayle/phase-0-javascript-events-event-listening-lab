function clickAlert() {
  alert('What a click!');
}

function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', clickAlert);
}

input.addEventListener('click', clickAlert);
