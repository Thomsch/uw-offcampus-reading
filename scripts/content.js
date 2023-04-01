const link = document.querySelector('.get-access');

if (link) {
    const url = window.location.toString()
    const offCampusUrl = url.replace('https://dl.acm.org/doi/abs/', 'https://dl-acm-org.offcampus.lib.washington.edu/doi/pdf/')

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