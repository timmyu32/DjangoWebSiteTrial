from django.shortcuts import render
from App3 import forms, models

# Create your views here.

def index(request):
    return render(request, 'App3/index.html', context=None)

def datadisplay(request):
    form_instance = forms.UserInputForm()
    model_instance = models.UserData.objects.all()

    form_dict = {'inputForm': form_instance}
    data_dict = {'dataDict': model_instance}
    if request.method == 'POST':
        form_instance = forms.UserInputForm(request.POST)

        if form_instance.is_valid():
            form_instance.save()
            return render(request, 'App3/DataDisplay.html', context=data_dict)


    return render(request, 'App3/DataDisplay.html', context=form_dict)


