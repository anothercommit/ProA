import firebase_admin as fb
from dotenv import load_dotenv
from firebase_admin import credentials, db

load_dotenv()


cred = credentials.Certificate("../../../serviceAccountKey.json")
app = fb.initialize_app(
    cred,
    {"databaseURL": os},
)

ref = db.reference("/")

print(ref.get())
