from .base import *

DEBUG = False

ALLOWED_HOSTS = [
    'emcent.pythonanywhere.com',
]

DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.mysql',
        'NAME':     'Emcent$eexcel_db',
        'USER':     'Emcent',
        'PASSWORD': env('DB_PASSWORD', default=''),
        'HOST':     'Emcent.mysql.pythonanywhere-services.com',
        'PORT':     '3306',
    }
}

CORS_ALLOWED_ORIGINS = [
    'https://eexcel-standard-concepts.vercel.app',
]
CORS_ALLOW_ALL_ORIGINS = True

STATIC_ROOT = '/home/Emcent/eexcel-standard-concepts/backend/staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

SECURE_SSL_REDIRECT = False
SESSION_COOKIE_SECURE = False
CSRF_COOKIE_SECURE = False