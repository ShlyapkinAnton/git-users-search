# Тестовое задание на позицию Junior Web-разработчика

## Задача

Необходимо реализовать интерфейс поиска пользователей.
Данные по пользователям берем с `https://api.github.com/search/users?q={имя пользователя}` (документация https://developer.github.com/v3/search/#search-users)

Требования:
- Поиск: по логину.
- Сортировка: по кол-ву репозиториев (возрастанию/убыванию)
- Использовать React.
- Пагинация.
- При клике на элемент - открываются подробности.

## Результат

Проект доступен по ссылке: https://project-git-users-search.netlify.app

Скриншоты представлены ниже:

![empty list](/showcase/img/empty_list.png)
<p align="center">Сообщение о том, что по запросу ничего не найдено</p>

![list of users](/showcase/img/list_of_users.png)
<p align="center">Список пользователей</p>

В качестве UI фреймворка использован Ant Design.

## Запуск

Загрузите этот репозиторий:

```
$ git clone https://github.com/ShlyapkinAnton/git-users-search.git
```

Установите все зависимости из файла `package.json`:

`npm install`

В директории проекта введите следующую команду:

`npm start`

Приложение запустится в режиме разработки.
Откройте [http://localhost:3000](http://localhost:3000) для его просмотра в браузере.
