function updateIeeeLink(link) {
    const offCampusUrl = window.location.toString().replace('https://ieeexplore.ieee.org/document/', 'https://ieeexplore-ieee-org.offcampus.lib.washington.edu/stamp/stamp.jsp?tp=&arnumber=')
    link.href = offCampusUrl;
    link.setAttribute('target', '_blank'); // open in new tab
    link.setAttribute('title', 'Yay');

    link.classList.add('pdf-btn-link')

    const spanText = link.querySelector('span');
    spanText.textContent = 'Open PDF';
}

function updateAcmLink(link) {
    const offCampusUrl = window.location.toString().replace('https://dl.acm.org/doi/abs/', 'https://dl-acm-org.offcampus.lib.washington.edu/doi/pdf/')

    // Update access button to go to off campus link.
    link.href = offCampusUrl;
    link.setAttribute('target', '_blank'); // open in new tab
    link.setAttribute('title', 'Yay');

    // Remove connection to ACM slider
    link.removeAttribute('slide-target');
    link.removeAttribute('data-ctrl-res');
    link.removeAttribute('data-label');
    link.removeAttribute('data-slide-target');
    link.classList.remove('w-slide__btn');
    link.classList.remove('slide-active');

    // Update button style
    link.classList.add('btn');
    link.classList.add('red');

    const i = link.querySelector('i');
    i.classList.remove('icon-get-access');
    i.classList.add('icon-pdf-file');

    const spanText = link.querySelector('span');
    spanText.textContent = 'Open PDF';
}

function main() {
    const url = window.location.toString()

    if (url.includes('ieeexplore.ieee.org')) {
        // https://ieeexplore.ieee.org/document/8449656
        // https://ieeexplore-ieee-org.offcampus.lib.washington.edu/document/8449656
        // https://ieeexplore-ieee-org.offcampus.lib.washington.edu/stamp/stamp.jsp?tp=&arnumber=8449656

        const link = document.querySelector('.doc-actions-link');
        if (link) {
            updateIeeeLink(link);
        } else {
            console.error('No link found');
        }

    } else if (url.includes('dl.acm.org')) {
        const link = document.querySelector('.get-access');
        if (link) {
            updateAcmLink(link);
        } else {
            console.error('No link found');
        }
    } else {
        console.error('Unsupported website');
    }
}

main();