module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Hi!</h3>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000">Yes</a>
                    </div>
                    <div>
                        <a href="http://localhost:3000">No</a>
                    </div>
                </div>
            </body>
        </html> 
    `;
}