const Error404 = () => {
    const view = `
        <div class="pageError">
            <h2>Error 404</h2>
            <p>Sorry, but this page doesn't exist. Try with another page or directory.</p>
            <br><a href="/">Return to the Homepage</a>
        </div>
    `;
    return view;
};

export default Error404;