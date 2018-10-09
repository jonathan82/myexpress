const locations = [
    {
        id: 'sacramento',
        name: 'sacramento'
    },
    {
        id: 'sfbay',
        name: 'SF bay area',
        subAreas: [
            {
                id: 'sfc',
                name: 'san francisco'
            },
            {
                id: 'sby',
                name: 'south bay'
            },
            {
                id: 'eby',
                name: 'east bay'
            },
            {
                id: 'pen',
                name: 'peninsula'
            },
            {
                id: 'nby',
                name: 'north bay'
            },
            {
                id: 'scz',
                name: 'santa cruz'
            },
        ]
    }
]

module.exports.locations = locations;