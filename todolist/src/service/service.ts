import { User } from '../entity/User';

const test = async(req,res) => {
    try {
        res.send('server start')
        console.log('server start')
    } catch (e) {
        return res.json(e)
    }
}
export {test}