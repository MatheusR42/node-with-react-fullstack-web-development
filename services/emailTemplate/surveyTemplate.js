const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Hi!</h3>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.domain}/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.domain}/thanks">No</a>
                    </div>
                </div>
            </body>
        </html> 
    `;
}