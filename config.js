module.exports = {
    rest: {
        port : {{{PORT}}},
        docs : {
            '{{{SERVICE_NAME}}}' : '{{{PREFIX}}}/spec'
        },
        schemas : {
            '{{{SERVICE_NAME}}}' : '{{{PREFIX}}}/schema'
        }
    },
    JWT_TOKEN_SECRET : `${process.env.JWT_TOKEN_SECRET}`
}