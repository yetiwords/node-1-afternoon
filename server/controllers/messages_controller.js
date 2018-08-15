let messages = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        const { text, time } = req.body;
        // messages.push({ id, time, text}) alternative
        let newMessage = {
            text:text,
            time:time,
            id:id
        }
        id++
        messages.push(newMessage)
        res.status(200).send(messages)
    },
    update: (req, res) => {
        let { id } = req.params;
        let { text, time } = req.body;
        // let updateID = req.params.id alternative solution
        let index = messages.findIndex(message => message.id == id)
        if(index !== -1) {
            let newMessage = {
                text:text,
                time: time,
                id: +id
            }
            messages.splice(index, 1, newMessage)
            res.status(200).send(messages)
        } else {
            res.status(400).send('No bueno.')
        }
    },
    delete: (req, res) => {
        let { id } = req.params;
        let index = messages.findIndex(message => message.id == id)
        if(index !== -1) {
            messages.splice(index,1)
            res.status(200).send(messages)
        } else {
            res.status(400).send('Mucho No Bueno.')
        }
    }
}