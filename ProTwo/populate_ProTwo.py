import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ProTwo.settings')

import django
django.setup()

#FAKER popscript

import random
from AppTwo.models import User
from faker import Faker

fakegen = Faker()

def populate(N=5):
    for entry in range(N):
        fake_first = str(fakegen.name()).split(' ')[0]
        fake_last = str(fakegen.name()).split(' ')[1]

        email_address = fakegen.email()

        user_profile = User.objects.get_or_create(first_name=fake_first, last_name= fake_last, email= email_address)[0]

if __name__ == '__main__':
    print('populating script')
    populate(20)
    print('populating complete')