const intialState = {
    newsList: [
        {
            id: "1",
            title: "Alpha",
            topic: "lorem ipsum dolor sit amet"
        },

        {
            id: "2",
            title: "Bravo",
            topic: "lorem ipsum dolor sit amet"
        },

        {
            id: "3",
            title: "Charlie",
            topic: "lorem ipsum dolor sit amet"
        },

        {
            id: "4",
            title: "Delta",
            topic: "lorem ipsum dolor sit amet"
        }
    ]
}

const newsListReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newsListReducer