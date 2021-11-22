import { User } from '../entity/User';
const users = []

const test = async(req,res) => {
    try {
        res.send('server start')
        console.log('server start')
    } catch (e) {
        return res.json(e)
    }
}
const create = async(req,res) => {
    const {todo} = req.body
    try {
        const users = await User.create({ todo })
        await users.save()
    } catch (e) {
        return res.json(e)
    }
}
export {test,create}