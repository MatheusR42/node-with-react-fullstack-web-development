const emailValidRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    const invalidEmails = emails
        .trim()
        .replace(/^,+|,+$/g, '') //remove firt and last comma
        .split(',')
        .map(email => email.trim())
        .filter(email => !emailValidRegex.test(email));

    if (invalidEmails.length) {
        return `These emails are invalid ${invalidEmails}`;
    }
}