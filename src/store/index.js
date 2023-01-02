import { createStore } from 'vuex'

export default createStore({
    state: {
        recipes: [{
                slug: 'Curry',
                title: 'Curry',
                description: 'A delicious curry made of vegetables.',
                ingredients: [
                    '1) vegetable oil',
                    '2)onion chopped',
                    '3)cloves garlic chooped',
                    '4)1 tablespoon curry powder',
                    '5) other vegetables if required'
                ],
                method: [
                    'Heat oil in a large skillet over medium heat',
                    'Add onion and garlic and cool , stir often, until softened about 5 minutes',
                    'Add other vegetables',
                    'Add curry powder and cool stirring until fragrant about 1 minute',
                    'Continue this process until curry seems ready.'
                ]
            },
            {
                slug: 'Noodles',
                title: 'Noodles',
                description: 'A delicious bowl of noodles with vegetables.',
                ingredients: [
                    'Noodles',
                ],
                method: [
                    'Noodles heated and fried with vegetables and vegatable soup.'
                ]
            }
        ]
    },
    // getters: {},
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipes.push(recipe)
        }
    },
    // actions: {},
    // modules: {}
})