import str from '../app'

describe('longestChar', () => {
    it('Should return empty string when passing empty char', () => {
        const result = str('');
        expect(result).toEqual('');
    })

    it('Should return the correct character', () => {
        expect(str('aaabbcc')).toEqual('a')
        expect(str('aaabbccc')).toEqual('a')
        expect(str('aaabbccc')).toEqual('a')
        expect(str('aabbccc')).toEqual('c')
    })
})