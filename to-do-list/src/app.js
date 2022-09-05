export default function app() {
  const app = document.createElement('div');
  app.classList.add('app');
  console.log('App loaded.');
  return app;
}

/*

Add Project
1. Click Plus in project row
2. Display Popup Input for new project
3. Input name
4. Add project to project list

Remove Project
1. Click remove project button
2. Remove project from project list
4. Move all to-dos in project to "Default" project
5. Update display 

Add Todo
1. Enter to-do info into form
2. Click "Add"
3. Update list of current to-dos
4. Update display with new to-do

Remove Todo
1. Click trash icon
2. Update list of current to-dos
3. Update display with new to-do

Move Todo 
1. Click/drag todo to separate project
2. Move to-do to different project
3. Move to-do from one project to desired
4. Update display with correct projects / todos


Elements 
------------------------
Todo Popup Input
Project Popup Input

Add Project Button
Add Todo Button
Remove Project Button
Remove Todo Button

Project List
To Do List 
  Todos properties = Name, Details, Due Date, Priority, Project


Add Todo Function
Remove Todo Function
Update Display Function









*/