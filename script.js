document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json';
    const paginationContainer = document.getElementById('pagination');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const totalPages = data.total_pages;

            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.classList.add('page-button');
                pageButton.addEventListener('click', () => {
                    // Placeholder function for pagination logic
                    handlePageClick(i);
                });
                paginationContainer.appendChild(pageButton);
            }
        })
        .catch(error => console.error('Error fetching pagination data:', error));

    function handlePageClick(pageNumber) {
        // Placeholder function for handling page click
        console.log(`Clicked page ${pageNumber}`);
    }
});
