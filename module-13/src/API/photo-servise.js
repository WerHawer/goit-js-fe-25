import PNotify from './../../node_modules/pnotify/dist/es/PNotify.js';

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=1992005-0c423af9a07f13d941d831108`

// PNotify.defaults = {
//     width: '100px',
//     minHeight: '16px',
//     delay: 500,
// }

export default {
    prevPage: 0,
    page: 1,
    query: '',
    fetchPhoto() {
        const requestParams = `&q=${this.query}&page=${this.page}`

        return fetch(url + requestParams)
            .then(response => response.json())
            .then(parsedResponse => {

                this.incrementPage();

                PNotify.success({
                    title: 'Success!',
                    text: 'All photo was download',
                    delay: 500,
                });

                return parsedResponse.hits;
            })
            .catch(error => {
                PNotify.error({
                    title: 'Oh No!',
                    text: error,
                    delay: 500,
                });
                this.prevPage -= 1;
            })


    },
    get searchQuery() {
        return this.query
    },
    set searchQuery(str) {
        this.query = str
    },

    incrementPage() {
        this.page += 1;
    },
    resetPage() {
        this.page = 1;
    },
}