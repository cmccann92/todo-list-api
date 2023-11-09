[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/GECHMxxT)
# Create a backend project for the Frontend

- code has been provided by our friendly Frontend Developers
- They would like the following feature or URL in order to get things working:
- Use PostgreSQL


1. Support the following POST request

```json
{
    "task_item": "Some value"
}
```

Which should return an ID (PK) and task_item property as follows:

```json
{
    "id": 1,
    "task_item": "Feed the cats"
}
```

A task is a model with the following values:

- task_item

We shall use a simple model well knowing it can get more advanced.


2. Support the GET request that returns an array of properties like follows:

```json
[
    {"id": 1, "task_item": "Task A"},
    {"id": 2, "task_item": "Task B"},
    {"id": 3, "task_item": "Task C"},
]
```


After the live-coding is done, you are tasked with refactoring the code to use a 
`ModelViewSet` so we can write less code instead of 2 classes as it is right now.

An API router can be added as it has been done in the lessons before.

Further study & References: https://testdriven.io/blog/drf-views-part-3/ 

Summary of tech used (Technology requirements):
- PostgreSQL database
- Django
- Django restframework
- django-cors-headers
