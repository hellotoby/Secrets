
export default class Secrets
{

    constructor(length = 32, numeric = true, special = true) {

        this.length = length;
        this.numeric = numeric;
        this.special = special;

        this.alphabetArr = [
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        ];

        this.numbersArr = [
            '0','1','2','3','4','5','6','7','8','9','0',
        ];

        this.specialCharsArr = [
            '!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}','|',':','<','>','?',
        ];

        this.arr = this.alphabetArr;

        if (this.numeric) {
            this.arr = this.arr.concat(this.numbersArr);
        }

        if (this.special) {
            this.arr = this.arr.concat(this.specialCharsArr);
        }

    }

    selectRandom() {
        return this.arr[Math.floor(Math.random()*this.arr.length)];
    }

    generate() {
        let secrets = [];
        for (let i = 0; i < this.length; i++) {
            secrets.push(this.selectRandom());
        }
        return secrets.join('');
    }

}
