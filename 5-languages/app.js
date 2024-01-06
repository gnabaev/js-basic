function getLanguage(langAbr) {
    switch (langAbr) {
        case 'en':
            console.log('Hello!');
            break;
        case 'ru':
            console.log('Привет!');
            break;
        case 'de':
            console.log('Gutten tag!');
            break;
        default:
            console.log('Язык не распознан!')
    }
}

getLanguage('ru');