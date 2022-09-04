import plumber from 'gulp-plumber'; // знайти і замінити
import replace from 'gulp-replace'; // пошук помилок
import notify from 'gulp-notify'; // повідомлення
import browsersync from 'browser-sync'; // локальний сервер
import newer from 'gulp-newer'; // перевірка оновлень
import gulpIf from 'gulp-if';

export const plugins = {
  replace,
  plumber,
  notify,
  browsersync,
  newer,
  if: gulpIf,
};
