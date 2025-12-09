Команды для git <====================>

1. git status
2. git add. - добавить файлы в stage
3. git commit -m 'создать комментарий к гиту'
4. git log - показывает подробную информацию
5. git log --oneline - краткая информяция
6. git push [rep_link] [branch_name] - добавить на гитхаб
7. git branch - ветка
8. git remote -v
9. git remote add origin [https://github.com/...] - привязать ссылку к репозиторию
10. git clone [Url] - склонировать с гитхаб
11. git config [config user.name / config user.email] - проверить user / email если нужно изменить то после команды в "новый email / user"


Доп. команды: <=====================>

1. git reset [file(название файла)] - удаляет файлы из временного хранилища stage
2. git diff - показывает какие строки изменились.
3. git reset --hard - возвращает (откатывается назад) все изменения в файлах и очищает git status.


Ветки [branch]: <=====================>

1. git branch [название ветки] - добавить ветку
2. git branch -d [название ветки] - локально удалить ветку
3. git checkout[название ветки] - переключится на [branchName] ветку
4. git checkout -b [название ветки] - добавить ветку и сразу переключится на [новую] ветку
5. git pull [origin] [branch] - забирает изменения из ветки github и добавляет их в локальную ветку на компе
6. git merge [название ветки] - слияние ветки master и secondary (пример: git merge secondary-branch)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
