export default (suggestion) => {
    if (suggestion.object === 'address') {
        return suggestion.formatted_address;
    }

    if (suggestion.object === 'street') {
        return suggestion.formatted_street;
    }

    if (suggestion.object === 'municipality'
     || suggestion.object === 'postal_code') {
        return suggestion[suggestion.object];
    }

    if (suggestion.object === 'business') {
        return suggestion.name;
    }
};
