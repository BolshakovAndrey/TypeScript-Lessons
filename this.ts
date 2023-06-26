class MyPayment {
    private date: Date = new Date();

    getDate(this: MyPayment): Date {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new MyPayment()

const my_user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow


}

console.log(p.getDate());
console.log(my_user.paymentDate());
console.log(my_user.paymentDateArrow());


class MyPaymentPersistent extends MyPayment {
    save() {
        return super.getDate()
    }
}

// стрелочная функция работать не будет, так как ее нет в прототипе
console.log(new MyPaymentPersistent().save())


// =================================================================
// Типизация this


class UserBuilder {
    name: string = '';

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[] = [];
}

const newMyUser = new UserBuilder().setName('David');
const admin = new AdminBuilder().setName('David');

let iUser: UserBuilder | AdminBuilder =  new UserBuilder();
if (iUser.isAdmin()) {
    console.log(iUser)
} else {
    console.log(iUser)
}
