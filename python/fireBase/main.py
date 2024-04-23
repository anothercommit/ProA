import firebase_admin as fb
from firebase_admin import credentials

cred = credentials.Certificate("../../../serviceAccountKey.json")
app = fb.initialize_app(cred)

fb.auth.create_user(email="joaquinx75@gmail.com", email_verified=False, password="1234")
