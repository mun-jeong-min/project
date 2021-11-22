import { User } from '../entity/User';

const create = async(req,res) => {
    const {todo} = req.body
    try {
        const users = await User.create({ todo })
        await users.save()
    } catch (e) {
        return res.json(e)
    }
}
const deleteAll = async(req,res) => {
    try {
        const us = await User.find()
        for(let i=0; i<us.length; i++){
            us[i].remove()
        }
    } catch (e) {
        return res.json(e)
    }
}
export {create,deleteAll}