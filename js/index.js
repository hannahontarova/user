// Создание объекта пользователя
// Описание задания
// Ваша задача - создать класс User, который сможет генерировать объекты со статическими свойствами: "country", "colorSkin". Динамическими свойствами: "name", "surname", "birthday", "salary".
// В объекте должны быть следующие методы
// Вывод в фамилии и имени человека
// Вывод информации о том, сколько лет человеку
// Добавить геттер возвращающий поле "salary" и сеттер меняющий это поле, но только в большую сторону

class User {
    country = 'Ukraine'
    colorSkin = 'white'
    year = 2022
    constructor (name = 'Hanna', surname = 'Hontarova', birthday = 1996, _salary = 1000){
        this.name = name
        this.surname = surname
        this.birthday = birthday
        this._salary = _salary
    }
    nameSurname(){
        console.log(this.name +' '+ this.surname)
    }
    userAge(){
        return this.year - this.birthday
    }
    get salary(){
        return this._salary
    }
    set salary(value){
        if (value > this._salary){
            this._salary = value
        } else {
            console.log('error')
        }
    }
}

const user = new User('Ivan', 'Ivanov')
user.nameSurname()
const age = user.userAge()
console.log(age)
user.salary = 2000
console.log(user)