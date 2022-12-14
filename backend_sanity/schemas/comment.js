export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Comments wont show on this site without approval'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'comment',
            type: 'text'
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: [{type: 'post'}]
        },
    ],
}
