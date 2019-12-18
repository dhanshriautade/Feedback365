import { Pipe } from '@angular/core';

@Pipe({
    name: "sort"
    })
    export class SortPipe {
    transform(array: Array<string>, args: string): Array<string> {
    return array.sort((a: any, b: any) => {
    if (a[args] < b[args]) {
    return -1;
    } else if (a[args]> b[args]) {
    return 1;
    } else {
    return 0;
    }
    });
    }
    }