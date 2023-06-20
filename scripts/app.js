let currentLang = 'en';
const langList = document.querySelectorAll('.change-lang-item .lang-button');
const allLang = ['de', 'en', 'ua'];

langList.forEach(function (item) {
    item.addEventListener('click', function() {
        currentLang = item.value;
        changeURLLanguage();       
    });
});

function changeURLLanguage() {
    let lang = currentLang;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    currentLang = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
    langList.forEach(function (item) {
        if (item.value === hash) {
            item.style.borderBottom = "3px solid #FB6D3A";
            item.style.color = "#FB6D3A";
        }
    })
}
changeLanguage();