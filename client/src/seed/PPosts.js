const db = require('../db')
const { simUser, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const preMadeUser = await simUser.find({})

    const preMadePost = [{
       text: "Another device to evolve humanity.",
       simUser_id: preMadeUser[0]._id,
       user: preMadeUser[0].user
    }
]
    await Post.insertMany(preMadePost)
    console.log('Created Posts')
}
const run = async () => {
    await main()
    db.close()
}

run()