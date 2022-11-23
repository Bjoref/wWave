async function getSection(link, elementName) {
    await fetch(link)
        .then(function(response) {
            return response.text()
        })
        .then(function(html) {
            let element = document.querySelector(`.${elementName}`);
            element.innerHTML = html
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    };

getSection('../../pages/header.html', 'header');
getSection('../../pages/section-hero.html', 'section-hero');
getSection('../../pages/section-podcast.html', 'section-podcast');
getSection('../../pages/section-broadcast.html', 'section-broadcast');