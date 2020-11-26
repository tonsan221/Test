import home from './controllers/home.js';
import login, { loginPost } from './controllers/login.js';
import register, { registerPost } from './controllers/register.js';
import logout from './controllers/logout.js';
import create, { createPost } from './controllers/create.js';
import details from './controllers/details.js';
import edit, { editPost } from './controllers/edit.js';
import deleteEvent from './controllers/delete.js';
import profile from './controllers/profile.js';

$(() => {
    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', home);
        this.get('#/login', login)
        this.get('#/register', register);
        this.get('#/logout', logout);
        this.get('#/create', create);
        this.get('#/details/:id', details);
        this.get('#/edit/:id', edit)
        this.get('#/delete/:id', deleteEvent)
        this.get('#/profile', profile);

        this.post('#/register', registerPost);
        this.post('#/login', loginPost);
        this.post('#/create', createPost);
        this.post('#/edit/:id', editPost);
    });

    app.run('#/home');
});


