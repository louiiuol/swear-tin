import { UserView } from '../../user/view/user-view.model';

export class Confession {

    id: number;
    swear: string;
    author: UserView;
    date: Date;

    constructor(swear: string, author: UserView, date: Date) {
        this.swear = swear;
        this.author = author;
        this.date = date;
    }

}
