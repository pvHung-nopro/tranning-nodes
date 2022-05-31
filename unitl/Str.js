class Str {
    async createBase64() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return Buffer.from(result).toString('base64');
    }
}

export default new Str()