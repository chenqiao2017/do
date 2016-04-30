import db from 'server/db';
import sql from 'server/utils/sql';

export function recreateTables() {
    return db.query('DROP TABLE IF EXISTS users, users_boards, boards, boards_lists, lists, lists_cards, cards CASCADE')
        .then(() => db.tx(function() {
            return this.sequence(index => {
                switch(index) {
                    case 0:
                        return this.query(sql('cards.sql'));
                    case 1:
                        return this.query(sql('lists.sql'));
                    case 2:
                        return this.query(sql('boards.sql'));
                    case 3:
                        return this.query(sql('users.sql'));
                }
            });
        }));
};
