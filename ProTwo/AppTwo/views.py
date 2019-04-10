from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from AppTwo.models import User

# Create your views here.
def index(request):
    return render_to_response('AppTwo/ConnectFourPage.html')

def landing(request):
    string_html = ''' 
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>ProTwo Landing Page</title>
                    </head>
                    <body>

                        <h1>Hello twelcome to django level 2</h1>
                        <h2>Enter user/ to see user info! </h2>
                        

                    <form action="/users/">
                        <input type="submit" value="GO to users page">
                    </form>

                    <form action="/admin/">
                        <input type="submit" value="GO to admin page">
                    </form>
                        
                    </body>
                    </html>

                '''
    return HttpResponse(string_html)

def users(request):
    users_list = User.objects.all()
    user_dict = {'user_records': users_list}

    return render(request, 'AppTwo/userDisplay.html', context= user_dict)