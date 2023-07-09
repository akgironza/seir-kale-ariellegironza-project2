# PROJECT 2

- **Project Name: myZebraSymptoms Tracker**
- **Project By: Arielle Gironza**
- [**Link to GitHub**](https://github.com/akgironza/seir-kale-ariellegironza-project2)
- [**Link to Deployed Website**](https://seir-project2.onrender.com)
- **List of Technologies Used:** HTML, JS, CSS, Node, Express, EJS, MongoDB
- [**Link to Trello**](https://trello.com/invite/b/SxyL0cAL/ATTI4ee4b8b00b33b7ffa8b8292fd735788cBA827076/ga-seir-project2)

## Description
myZebraSymptom Tracker gives users living with chronic illness a place to log and track symptoms of their condition(s).

## Mockup of UI

![Desktop View](IMG_2151.jpg)
![Mobile View](IMG_2152.jpg)

## List of Backend Endpoints

|ENDPOINT|METHOD|PURPOSE|
|--------|------|-------|
|/symptoms|GET|INDEX - show all symptoms|
|/symptoms/new|GET|NEW - render a page with a form to log a new symptom, submits form to CREATE route|
|/symptoms/:id|DELETE|DESTROY - delete a logged symptom from database|
|/symptoms/:id|PUT|UPDATE - receives info from EDIT route, update specified symptom|
|/symptoms|POST|CREATE - receives info from NEW route, create new symptom in database|
|/symptoms/:id/edit|GET|EDIT - render a page with a form to edit a logged symptom, submits form to UPDATE route|
|/symptoms/:id|GET|SHOW - render a page with the specified symptom|


## ERD (ENTITY-RELATIONSHIP DIAGRAM)

![Picture of ERD](IMG_2150.jpg)

