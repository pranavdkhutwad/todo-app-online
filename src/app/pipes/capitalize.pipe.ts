import { Pipe } from "@angular/core";

@Pipe({
    name: 'appCapitalize'
})
export class CapitalizePipe {
    transform(str: string) {
        let list = str.split(' ');

        list = list.map((word) => {
            const temp = word.split('');
            temp[0] = temp[0].toUpperCase();
            return temp.join('');           
        });

        return list.join(' ');
    }
}

