export default (suggestion) => {
    switch (suggestion.object) {
        case 'address':
            return suggestion.formatted_address;

        case 'street':
            return suggestion.formatted_street;

        case 'municipality':
        case 'postal_code':
            return suggestion[suggestion.object];

        case 'business':
            return suggestion.name;

        default:
            return undefined;
    }
};