from django import forms
from App3 import models

class UserInputForm(forms.ModelForm):
    class Meta():
        model = models.UserData
        fields = "__all__"