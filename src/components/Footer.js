import swiftyperLogo from '../icons/swiftyper.svg';

export default (service) => {
    const result = document.createElement('li');

    result.setAttribute("class", 'swiftyper_footer');
    result.innerHTML = `<a href="https://www.swiftyper.sk/${service}" title="Search by Swiftyper">${swiftyperLogo}</a>`;

    return result
};
