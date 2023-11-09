from django.db import models

class Todo(models.Model):

    task_items = models.CharField(max_length = 255)

    def __str__(self):
        return self.task_items
    