import { AuthStore } from '../../store/auth'
import axios from 'axios'

jest.mock('axios')

describe('auth store tests', () => {

    const store = new AuthStore()
    const user = {username: 'foo', password: 'bar'};

    it('should login', () => {
        const resp = {
            token: 'foo',
            user
        }
        axios.post.mockResolvedValue(resp)
        store.login(user)
        expect(store.sessionUser).toBe(resp)
    })

    it('should logout', () => {
        store.logout();
        expect(store.sessionUser).toBeFalsy();
    })

})